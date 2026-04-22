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

> `value 2 out of range [0, 1] (path: <uuid>.feedback_factor)`

Numeric fields have defined minimum and maximum values. Passing a value outside that range throws.

```typescript
// WRONG — feedbackFactor must be within [0, 1]
await nexus.modify((t) => {
  const delay = t.create("stompboxDelay", {});
  t.update(delay.fields.feedbackFactor, 2.0); // Error: out of range
});

// Correct
await nexus.modify((t) => {
  const delay = t.create("stompboxDelay", {});
  t.update(delay.fields.feedbackFactor, 0.75); // within [0, 1]
});
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

> `Argument of type 'PrimitiveField<NexusLocation, "immut">' is not assignable to parameter of type 'PrimitiveField<NexusLocation, "mut">'`

Fields marked `"immut"` cannot be changed after the entity is created. Attempting `t.update()` on one is caught by TypeScript at compile time.

```typescript
// WRONG — note.fields.collection is immutable
t.update(note.fields.collection, newCollectionRef);
// TS error: "immut" is not assignable to "mut"
```

**Workaround:** Clone the entity with different initial values using `t.clone()` or `t.cloneLinked()` (which also clones entities that point to the original):

```typescript
const cloned = t.clone(note, { collection: newCollectionRef });
t.remove(note);
```

### Required pointer field not set

> `required pointer on <uuid>.from_socket 'type: <...>.AudioConnection'`

Some entities have pointer fields that must reference another entity. Creating the entity without setting those fields — or resetting a required pointer to empty — throws.

```typescript
// WRONG — desktopAudioCable requires both fromSocket and toSocket
t.create("desktopAudioCable", {
  fromSocket: chorus.fields.audioOutput.location,
  // missing toSocket — throws
});

// WRONG — resetting a required pointer to empty
t.update(cable.fields.fromSocket, new NexusLocation()); // throws
```

**Fix:** Remove and recreate the cable if you need to change its connections.

### Location points to wrong target type

> `pointer type mismatch from: <uuid>.to_socket 'type: <...>DesktopAudioCable' (TargetType: AudioInput) to: <uuid> (is: [AutomatableParameter])`

Pointer fields have a defined set of target types they can point to. Pointing to an incompatible type throws.

```typescript
// WRONG — connecting audio output to a notes input
t.create("desktopAudioCable", {
  fromSocket: delay.fields.audioOutput.location,
  toSocket: tonematrix.fields.notesInput.location, // wrong target type
});

// Correct — connect audio output to audio input
t.create("desktopAudioCable", {
  fromSocket: delay.fields.audioOutput.location,
  toSocket: reverb.fields.audioInput.location, // AudioOutput → AudioInput
});
```

### Multiple instances of singleton entities

> `duplicate of unique entity type <...>.Config`

Some entity types may only have one instance in the document. Creating a second one throws. Singleton types are:

- `config`
- `mixerMaster`
- `mixerAuxDelay`
- `mixerAuxReverb`
- `tempoAutomationTrack`

**Pattern:** Use the check-before-create pattern to safely ensure one exists:

```typescript
await nexus.modify((t) => {
  const existing = t.entities.ofTypes("config").getOne();
  const config = existing ?? t.create("config", {});
  // use config...
});
```

This works well with nested singletons too — use `??` to check each dependency:

```typescript
await nexus.modify((t) => {
  const config =
    t.entities.ofTypes("config").getOne() ??
    t.create("config", {
      defaultGroove: (
        t.entities.ofTypes("groove").getOne() ?? t.create("groove", {})
      ).location,
    });
});
```

### Duplicate `orderAmongTracks` value

> `duplicate order_among_tracks value`

Several fields must be unique across all entities in the document. If two entities share the same ordering value, the transaction throws.

Fields with this uniqueness constraint:

- `AudioTrack.orderAmongTracks`
- `NoteTrack.orderAmongTracks`
- `AutomationTrack.orderAmongTracks`
- `PatternTrack.orderAmongTracks`
- `MixerStripDisplayParameters.orderAmongStrips` (used by `MixerChannel`, `MixerGroup`, `MixerAux`, `MixerDelayAux`, `MixerReverbAux`)
- `CentroidChannel.orderAmongChannels` (among channels belonging to the same centroid)
- `RasselbockPattern.effectOrder`

Before creating a new track, query the current maximum order value and increment:

```typescript
await nexus.modify((t) => {
  const existingTracks = t.entities
    .ofTypes("noteTrack", "audioTrack", "automationTrack", "patternTrack")
    .get()
    .map((track) => track.fields.orderAmongTracks.value);

  const nextOrder = Math.max(0, ...existingTracks) + 1;
  t.create("noteTrack", { orderAmongTracks: nextOrder });
});
```

### Unique automation event positions

> `duplicate tick value of event in automation collection (collection: <uuid>)`

Two automation events in the same automation collection cannot share the same tick position. If you need to update a value at a position that already has an event, remove the existing event first:

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

> `multiple pointers to field accepting at most one (field: <uuid>.decay)`

Each audio input socket can only have one cable connected to it. Connecting a second cable to the same socket throws.

Note that removing a cable and creating a new one to the same socket **within the same transaction** still fails — the socket appears occupied for the duration of the transaction. You must query and remove all existing connections first, then create the new one:

```typescript
await nexus.modify((t) => {
  // Remove ALL existing cables pointing to the target sockets
  t.entities
    .ofTypes("desktopAudioCable")
    .pointingTo.locations(
      device.fields.audioInput.location,
      source.fields.audioOutput.location,
    )
    .get()
    .forEach((cable) => t.remove(cable));

  // Now safely connect
  t.create("desktopAudioCable", {
    fromSocket: source.fields.audioOutput.location,
    toSocket: device.fields.audioInput.location,
  });
});
```

### Update or pointer to a removed entity

> `could not find entity: <uuid>`
>
> `pointer to non existing entity <uuid> (declared at: <uuid>.entity 'type: <...>.NoteTrack)`

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

> `entity is referenced: <uuid>`

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
