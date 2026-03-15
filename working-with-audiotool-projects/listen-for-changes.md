---
title: Listen for Changes
parent: Working With Audiotool Projects
nav_order: 6
---

# Listen for Changes

Use <span class="tooltip" data-tooltip="A signal that something changed, such as an entity being created, updated, or removed.">events</span> to react to <span class="tooltip" data-tooltip="A single item inside a project document, such as a device, note region, or other project object.">entity</span> changes in real time — whether those changes come from your code, another bot, or a collaborator editing in the DAW.

## Subscribe before starting

Always set up event listeners **before** calling `document.start()`. Events can fire immediately after the document begins syncing, and you do not want to miss early events:

```typescript
// 1. Subscribe first
document.events.onCreate("note", handleNote);
document.events.onCreate("tinyGain", handleGain);

// 2. Then start
await document.start();
```

## onCreate — react to new entities

```typescript
document.events.onCreate("tonematrix", (entity) => {
  console.log("New tonematrix:", entity.id);
});

document.events.onCreate("note", (entity) => {
  console.log("Note added at tick:", entity.fields.positionTicks);
  console.log("Pitch:", entity.fields.pitch);
});
```

The callback receives the full entity object, including all current field values.

## onUpdate — react to field changes

To watch a specific field on a specific entity, use `onUpdate`:

```typescript
const gains = document.queryEntities.ofTypes("tinyGain").get();

for (const gain of gains) {
  document.events.onUpdate(gain.fields.gain, (newValue) => {
    console.log(`Gain ${gain.id} changed to ${newValue}`);
  });
}
```

`onUpdate` takes a **field reference** from a specific entity object — not a type string. You need the entity first, then access its field.

## onRemove — react to deleted entities

```typescript
document.events.onRemove("tinyGain", (entity) => {
  console.log("Gain device removed:", entity.id);
});
```

After the callback fires, the entity is no longer in the document. Do not attempt to update it.

## Unsubscribing

Each subscription returns a <span class="tooltip" data-tooltip="An object with a .terminate() method that cancels the subscription when you no longer need it.">terminable</span>. Call `.terminate()` to cancel it:

```typescript
const sub = document.events.onCreate("note", handler);

// Later, when you no longer need it
sub.terminate();
```

This matters for long-running apps where you may want to stop listening after a workflow step completes.

## Listening to multiple types

Each `events.onCreate()` call handles one entity type. To listen to multiple types, call it multiple times:

```typescript
for (const type of ["pulverisateur", "gakki", "bassline"]) {
  document.events.onCreate(type, (entity) => {
    handleSynth(type, entity);
  });
}
```

## Events vs queries — which to use?

| Situation | Use |
|-----------|-----|
| You need the current state right now | Query (`queryEntities`) |
| You need to react to future changes | Events (`document.events`) |
| You need both initial state and ongoing updates | Query to initialize, then events |

## Next step

→ [Make Safe Changes](make-safe-changes.md) — safely modify the document
