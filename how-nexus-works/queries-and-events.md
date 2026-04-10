---
title: Queries and Events
parent: How Nexus Works
nav_order: 5
---

# Queries and Events

Nexus gives you two ways to read document state: <span class="tooltip" data-tooltip="A way to search for and retrieve specific entities or data from a document.">**queries**</span> (a snapshot of what's there right now) and <span class="tooltip" data-tooltip="A signal that something changed, such as an entity being created, updated, or removed.">**events**</span> (notifications when things change). This page explains both and when to use each.

## Queries — reading current state

Use `nexus.queryEntities` to inspect the current state of the document at any moment.

### Query by entity type

```typescript
// Get all notes currently in the document
const notes = nexus.queryEntities.ofTypes("note").get();

// Get all tinyGain devices
const gains = nexus.queryEntities.ofTypes("tinyGain").get();

// Get multiple types at once
const tracks = nexus.queryEntities.ofTypes("noteTrack", "audioTrack").get();
```

`.get()` returns the matching entities at the moment of the call. The result is not live — it won't change as the document updates.

### Query by field value

`EntityQuery` doesn't have a `.where()` predicate filter — filter the array returned by `.get()` using standard JavaScript `.filter()`:

```typescript
const highVelocityNotes = nexus.queryEntities
  .ofTypes("note")
  .get()
  .filter(note => note.fields.velocity.value > 90);
```

### Get a specific entity by ID

If you know an entity's ID, use `mustGetEntity()` to retrieve it directly. It throws if the entity is not found, which makes bugs easier to catch:

```typescript
const entity = nexus.queryEntities.mustGetEntity("some-entity-id");
console.log(entity.entityType);   // "tinyGain"
console.log(entity.fields); // typed fields for that entity
```

> Compare with `.find()` on a query result, which returns `undefined` if not found. Use `mustGetEntity()` when the entity must exist.

### When to use queries

- When you need the current state once (not ongoing)
- In response to a user action or event
- To initialize your app state when the document first loads

## Events — reacting to changes

Use `nexus.events` to subscribe to entity changes as they happen. Events fire for all changes — whether made by your code, other bots, or users in the DAW.

### onCreate — when a new entity appears

```typescript
nexus.events.onCreate("tonematrix", (entity) => {
  console.log("tonematrix added:", entity.id);
});

nexus.events.onCreate("note", (entity) => {
  console.log("New note at tick:", entity.fields.positionTicks.value);
});
```

### onUpdate — when a field changes

```typescript
// Subscribe to a specific field on a specific entity
nexus.events.onUpdate(gainEntity.fields.gain, (newValue) => {
  console.log("Gain changed to:", newValue);
});
```

### onRemove — when an entity is deleted

```typescript
nexus.events.onRemove("*", (entity) => {
  console.log("tinyGain removed:", entity.id);
});
```

### onPointingTo — when a pointer to an entity changes

`onPointingTo()` fires whenever any entity gains or loses a pointer to the given entity. This is useful for tracking relationships — for example, watching when a cable is connected or disconnected from a specific device socket:

```typescript
// Fire whenever any pointer starts targeting this output location
nexus.events.onPointingTo(synth.fields.audioOutput.location, (from) => {
  console.log("A pointer now targets synth output from:", from.toString());
});
```

> This event fires for any type of pointer change — a cable being connected, a track's `player` field being reassigned, etc.

### When to use events

- When you want to react continuously to changes
- When building integrations that track what collaborators are doing
- When your app state needs to stay in sync with the document

## Combining queries and events

A common pattern is to use a query to get initial state, then use events to stay up to date:

```typescript
await nexus.start();

// Load current notes
const existing = nexus.queryEntities.ofTypes("note").get();
handleNotes(existing);

// React to future notes
nexus.events.onCreate("note", (entity) => {
  handleNote(entity);
});
```

## Subscriptions and cleanup

Each event subscription returns a <span class="tooltip" data-tooltip="An object with a .terminate() method that cancels the subscription when you no longer need it.">terminable</span> — an object with a `.terminate()` method you can call to unsubscribe:

```typescript
const subscription = nexus.events.onCreate("note", handler);
// Later, when cleanup is needed:
subscription.terminate();
```

This matters if your app mounts and unmounts components, or if you want to stop listening after a workflow step completes.

## Next step

→ [Package Structure](package-structure.md) — understand how the package is organized
