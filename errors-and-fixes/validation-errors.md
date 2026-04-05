---
title: Validation Errors
parent: Errors and Fixes
nav_order: 4
---

# Validation Errors

Transaction validation errors occur when `nexus.modify()` rejects an operation because it violates the document schema.

## What causes validation errors?

The Nexus schema strictly defines:

- Which entity types exist (e.g., `"tinyGain"`, `"note"`)
- What fields each entity has
- What type each field expects (number, string, boolean, pointer, etc.)
- Which fields are required vs optional
- Which fields are immutable after creation
- Which entity types may only have a single instance (singletons)
- Which fields must be unique across entities

If your transaction violates any of these rules, `modify()` throws a transaction error.

## How to see the error

Log the full error to read the message:

```typescript
try {
  await nexus.modify((t) => {
    // your changes here
  });
} catch (error) {
  console.error("Transaction failed:", error);
}
```

The error message will describe which field or entity caused the rejection.

{: .warning }
> **Do not try/catch transaction errors to recover from them.** Transaction errors indicate a bug in your code — if you catch the error and continue, the document's internal state will be inconsistent and you will get more errors later. Let the app crash so you can find and fix the root cause. The one exception is `tryUpdate()`, described below.

## Error types

### Wrong entity type key

```typescript
// WRONG — entity type does not exist
t.create("TinyGain", {}); // keys are camelCase, lowercase start
t.create("tiny_gain", {});

// Correct
t.create("tinyGain", {});
```

Entity type keys are case-sensitive and always `camelCase` starting with a lowercase letter.

### Wrong field value type

```typescript
// WRONG — pitch expects a number, not a string
t.create("note", { pitch: "60", positionTicks: 0, velocity: 100 });

// Correct
t.create("note", { pitch: 60, positionTicks: 0, velocity: 100 });
```

### Missing required fields

Some entity types require certain fields to be set at creation. Check the [Entity Reference](../reference/entity-reference.md) for required fields.

### Updating a field with the wrong type

```typescript
// WRONG — gain expects a number
t.update(entity.fields.gain, "loud");

// Correct
t.update(entity.fields.gain, 0.8);
```

### Value out of range

Numeric fields have defined minimum and maximum values. Passing a value outside that range throws.

```typescript
// WRONG — positionTicks must be >= 0
t.create("note", { positionTicks: -1, pitch: 60, velocity: 100 });
```

**Tip:** When updating a field with a value that comes from user input (sliders, text fields), use `tryUpdate()` instead of `update()`. It returns a string describing the error instead of throwing, so you can show it to the user:

```typescript
await nexus.modify((t) => {
  const error = t.tryUpdate(device.fields.gain, userValue);
  if (error !== undefined) {
    showValidationMessage(error); // show to user, don't crash
  }
});
```

### Update immutable field

Fields marked `"immut"` cannot be changed after the entity is created. Attempting `t.update()` on one throws.

```typescript
// note.fields.collection is immutable — you cannot move a note between collections
// WRONG:
t.update(note.fields.collection, newCollectionRef);

// Workaround: clone the note with different initial values instead
const cloned = t.clone(note, { collection: newCollectionRef });
t.remove(note);
```

### Required pointer field not set

Some entities have pointer fields that must reference another entity. Creating the entity without setting those fields throws.

```typescript
// WRONG — audioRegion requires its sample field to be set
t.create("audioRegion", { positionTicks: 0, durationTicks: 480 });
//                                            ^ missing sample pointer

// Correct
t.create("audioRegion", {
  positionTicks: 0,
  durationTicks: 480,
  sample: sampleEntity.fields.id.location,
});
```

### Location points to wrong target type

Pointer fields have a defined set of entity types they can point to. Pointing to an incompatible type throws.

```typescript
// WRONG — a desktopAudioCable's fromSocket must point to an audio output socket
// pointing it at a note entity would fail
t.create("desktopAudioCable", {
  fromSocket: noteEntity.fields.positionTicks.location, // wrong target type
  toSocket: channel.fields.audioInput.location,
});
```

### Multiple instances of singleton entities

Some entity types may only have one instance in the document. Creating a second one throws. Singleton types are:

- `configuration`
- `mixerMaster`
- `mixerAuxDelay`
- `mixerAuxReverb`
- `tempoAutomationTrack`

**Pattern:** Use the check-before-create pattern to safely ensure one exists:

```typescript
await nexus.modify((t) => {
  // Only create if one doesn't already exist
  const existing = t.entities.ofTypes("configuration").getOne();
  const config = existing ?? t.create("configuration", {});
  // use config...
});
```

### Duplicate `orderAmongTracks` value

Several fields must be unique across all entities in the document. `orderAmongTracks` is one of them — two tracks cannot share the same ordering value. Other fields with the same uniqueness constraint include `orderAmongStrips` on mixer channels.

Before creating a new track, query the current maximum order value and increment:

```typescript
await nexus.modify((t) => {
  const existingTracks = t.entities.ofTypes("noteTrack").get();
  const maxOrder = existingTracks.reduce(
    (max, track) => Math.max(max, track.fields.orderAmongTracks.value),
    -1
  );
  t.create("noteTrack", { orderAmongTracks: maxOrder + 1 });
});
```

### Unique automation event positions

Two automation events on the same automation track cannot share the same tick position. If you need to update a value at a position that already has an event, remove the existing event first:

```typescript
await nexus.modify((t) => {
  // Remove existing events at this position first
  const existing = t.entities
    .ofTypes("automationRegion")
    .pointingTo.entities(automationTrack.id)
    .get()
    .filter(e => e.fields.positionTicks.value === targetTick);
  for (const e of existing) t.remove(e);

  // Now create the new event
  t.create("automationRegion", { positionTicks: targetTick, ... });
});
```

### Multiple audio connections to the same socket

Each audio input socket can only have one cable connected to it. Connecting a second cable to the same socket throws.

Clear existing connections before adding a new one:

```typescript
await nexus.modify((t) => {
  // Disconnect anything already connected to the target socket
  const existing = t.entities
    .ofTypes("desktopAudioCable")
    .pointingTo.locations(device.fields.audioInput.location)
    .get();
  for (const cable of existing) t.remove(cable);

  // Now safely connect
  t.create("desktopAudioCable", {
    fromSocket: source.fields.audioOutput.location,
    toSocket: device.fields.audioInput.location,
  });
});
```

### Update or pointer to a removed entity

Updating a field on an entity that was already removed in this transaction — or pointing to such an entity — throws.

**Check before updating:** Because `nexus.modify()` awaits a transaction lock, the document can change between when you read an entity reference and when the lock is acquired. Always check that entities still exist inside the callback:

```typescript
await nexus.modify((t) => {
  // Check that the entity is still present before operating on it
  if (!t.entities.has(someEntity)) return;

  t.update(someEntity.fields.gain, 0.5);
});
```

### Removal of a pointed-to entity

Removing an entity while other entities still hold pointer fields pointing to it throws.

Use `t.removeWithDependencies()` to cascade-remove all entities that reference the target entity (transitively), so no dangling pointers remain:

```typescript
await nexus.modify((t) => {
  // Removes the device AND all cables/regions pointing to it
  t.removeWithDependencies(device);
});
```

---

## Disable validation temporarily (offline only)

For rapid prototyping with an offline document, you can disable validation:

```typescript
const nexus = await createOfflineDocument({ validated: false });
```

This allows transactions that would otherwise fail. Use it to explore the API quickly, but re-enable validation before treating results as correct.

> Validation cannot be disabled on synced documents.

## TypeScript helps catch errors before runtime

The transaction builder types will flag incorrect field types at compile time if you use TypeScript. Pay attention to TypeScript errors — they often reflect the same constraints as runtime validation.

## Next step

→ [Query and Event Confusion](query-and-event-confusion.md) — issues with reading and reacting to document state
