---
title: Queries and Events
parent: How Nexus Works
nav_order: 5
---

# Queries and Events

Nexus gives you two ways to read document state: **queries** (snapshot inspection) and **events** (live change notifications). This page explains both and when to use each.

## Queries — snapshot inspection

Use `document.queryEntities` to inspect the current state of the document at any moment.

### Query by entity type

```typescript
// Get all notes currently in the document
const notes = document.queryEntities.ofTypes("note").get();

// Get all tinyGain devices
const gains = document.queryEntities.ofTypes("tinyGain").get();

// Get multiple types at once
const tracks = document.queryEntities.ofTypes("noteTrack", "audioTrack").get();
```

`.get()` returns an array of entity objects matching the query at the time of the call. It is a snapshot — it does not update automatically.

### Query by field value

You can filter query results by field values using `.where()` (see [Document Model](../reference/document-model.md) for the full `EntityQuery` interface):

```typescript
const highVelocityNotes = document.queryEntities
  .ofTypes("note")
  .where(note => note.fields.velocity > 90)
  .get();
```

### When to use queries

- When you need the current state once (not ongoing)
- In response to a user action or event
- To initialize your app state when the document first loads

## Events — live change notifications

Use `document.events` to subscribe to entity changes as they happen. Events fire for all changes — whether made by your code, other bots, or users in the DAW.

### onCreate — when a new entity appears

```typescript
document.events.onCreate("tonematrix", (entity) => {
  console.log("tonematrix added:", entity.id);
});

document.events.onCreate("note", (entity) => {
  console.log("New note at tick:", entity.fields.positionTicks);
});
```

### onUpdate — when a field changes

```typescript
// Subscribe to a specific field on a specific entity
document.events.onUpdate(gainEntity.fields.gain, (newValue) => {
  console.log("Gain changed to:", newValue);
});
```

### onRemove — when an entity is deleted

```typescript
document.events.onRemove("tinyGain", (entity) => {
  console.log("tinyGain removed:", entity.id);
});
```

### When to use events

- When you want to react continuously to changes
- When building integrations that track what collaborators are doing
- When your app state needs to stay in sync with the document

## Combining queries and events

A common pattern is to use a query to get initial state, then use events to stay up to date:

```typescript
await document.start();

// Load current notes
const existing = document.queryEntities.ofTypes("note").get();
handleNotes(existing);

// React to future notes
document.events.onCreate("note", (entity) => {
  handleNote(entity);
});
```

## Subscriptions and cleanup

Event subscriptions return a `Terminable` that you can dispose to unsubscribe:

```typescript
const subscription = document.events.onCreate("note", handler);

// Later, when cleanup is needed:
subscription.terminate();
```

This is important if your app mounts and unmounts UI components or if you stop caring about certain events.

## Next step

→ [Package Structure](package-structure.md) — understand how the package is organized
