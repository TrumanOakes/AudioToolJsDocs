---
title: Query and Event Confusion
parent: Errors and Fixes
nav_order: 5
---

# Query and Event Confusion

Issues that arise from misunderstanding how queries and events work.

## Events not firing

**Did you call `nexus.start()`?**

Events will not fire on a synced document until `start()` is called. This is the most common cause of "events not firing."

```typescript
// Wrong order
nexus.events.onCreate("note", handler);
// ... forgot await nexus.start()

// Correct
nexus.events.onCreate("note", handler);
await nexus.start(); // events begin firing after this
```

**Did you subscribe before calling `start()`?**

Subscribe to events *before* calling `start()`. Some events may fire immediately when syncing begins, and late subscriptions will miss them.

## onCreate fires for entities that already existed

When a synced document starts, it may emit `onCreate` events for all entities already present in the project — not just newly created ones. This is expected behavior: from the document's perspective, all entities are "created" when the document first loads them.

Handle this by treating `onCreate` as "entity became available" rather than "entity was just added."

## Queries return empty or stale results

**Did the document start?**

On a synced document, `queryEntities` reflects the current state after syncing has begun. If you query before `start()`, or too soon after, results may be empty or incomplete.

**Are you expecting auto-updating query results?**

`.get()` returns a snapshot at the time of the call. It does not update automatically. If you need live results, combine an initial query with event subscriptions:

```typescript
await nexus.start();

// Snapshot at start
let notes = nexus.queryEntities.ofTypes("note").get();

// Keep updated
nexus.events.onCreate("note", (e) => notes = [...notes, e]);
nexus.events.onRemove("note", (e) => notes = notes.filter(n => n.id !== e.id));
```

## Calling modify() inside an event handler causes it to hang

Nexus can't start a new transaction while an event is being handled. Calling `modify()` inside an event callback will never resolve.

```typescript
// WRONG — will never resolve
nexus.events.onCreate("note", async (entity) => {
  await nexus.modify((t) => { ... }); // hangs here
});

// Correct — schedule modification for after the event
nexus.events.onCreate("note", (entity) => {
  setTimeout(async () => {
    await nexus.modify((t) => { ... });
  }, 0);
});
```

## onUpdate doesn't fire for a field

`onUpdate` takes a **field reference** from a specific entity object — not a type string. You must have the entity object first:

```typescript
// Wrong — onUpdate does not take a type string
nexus.events.onUpdate("gain", handler); // incorrect

// Correct — get the entity, then reference its field
const gains = nexus.queryEntities.ofTypes("tinyGain").get();
for (const gain of gains) {
  nexus.events.onUpdate(gain.fields.gain, handler);
}
```

## Events fire for changes made by your own code

This is expected. All modifications — yours or anyone else's — go through the same event system. If you need to distinguish your own changes from others', track pending changes externally.

## Next step

→ [Offline vs Synced Behavior](offline-vs-synced-behavior.md)
