---
title: Common Mistakes
parent: How Nexus Works
nav_order: 8
---

# Common Mistakes

This page documents patterns that look reasonable but break in subtle ways. Each section shows what goes wrong and the correct alternative.

---

## 1. Calling `modify()` without awaiting it

`document.modify()` returns a `Promise`. If you fire it without `await`, the transaction is queued but you continue executing code before it completes. When multiple unawaited calls are chained this way, they can interleave or execute out of the order you expect.

**Wrong**

```typescript
// These three transactions may not run in the order written.
document.modify((t) => { t.create("tinyGain", { gain: 1.0 }); });
document.modify((t) => { t.update(gain.fields.gain, 0.5); });
document.modify((t) => { t.remove(gain); });
```

**Right**

```typescript
// Each transaction completes before the next one starts.
await document.modify((t) => { t.create("tinyGain", { gain: 1.0 }); });
await document.modify((t) => { t.update(gain.fields.gain, 0.5); });
await document.modify((t) => { t.remove(gain); });
```

**Why it matters:** Nexus queues transactions in the order their promises are created, but the real problem is code that runs *between* unawaited calls and reads entity state expecting the previous transaction to have already applied. The read happens before the write has completed, so you get stale data.

---

## 2. Nesting `modify()` calls

Calling `document.modify()` inside another `document.modify()` callback creates a new transaction *while* the outer one is still being built. The outer transaction has not been submitted yet, so the inner call is queued behind it — but you are inside the outer callback, meaning the inner promise is created before the outer transaction even sends. This produces undefined ordering and often deadlocks or hangs indefinitely.

**Wrong**

```typescript
await document.modify(async (t) => {
  const gain = t.create("tinyGain", { gain: 1.0 });

  // This queues a second transaction while the first is still open.
  await document.modify((t2) => {
    t2.update(gain.fields.displayName, "Nested Gain");
  });
});
```

**Right**

```typescript
// Do everything in one transaction, or sequence them separately.
let gain: NexusEntity;

await document.modify((t) => {
  gain = t.create("tinyGain", { gain: 1.0 });
});

await document.modify((t) => {
  t.update(gain.fields.displayName, "Nested Gain");
});
```

Or, if you need to reference a newly created entity's field locations in the same batch, use `createTransaction()` instead:

```typescript
const t = await document.createTransaction();
const gain = t.create("tinyGain", { gain: 1.0, displayName: "Gain" });
t.create("desktopAudioCable", {
  fromSocket: gain.fields.audioOutput.location,
  toSocket: channel.fields.audioInput.location,
});
t.send();
```

**Why it matters:** The `modify()` lock prevents concurrent mutations. A nested `modify()` call inside the callback body will attempt to acquire the same lock that the outer call already holds, causing a hang that never resolves.

---

## 3. Reading entity fields outside a query or after the document closes

Entity references obtained from a query are **snapshots** — they reflect the document state at the moment the query ran. Reading their `.value` properties at a later point gives you the value from that earlier snapshot, not the current value. If you hold onto an entity reference long-term and read it after a `modify()` call, you are reading stale data.

Similarly, accessing entity fields after `document.stop()` has been called returns stale snapshot values; the document is no longer receiving updates.

**Wrong**

```typescript
// Captures a snapshot at startup, then reads it 10 seconds later.
const gain = document.queryEntities.ofTypes("tinyGain").get()[0];

setTimeout(() => {
  // This is the gain value from when the query ran, not the current value.
  console.log("Current gain:", gain.fields.gain.value);
}, 10_000);
```

**Right**

```typescript
// Re-query at the moment you need the value.
setTimeout(() => {
  const gain = document.queryEntities.ofTypes("tinyGain").get()[0];
  if (gain) {
    console.log("Current gain:", gain.fields.gain.value);
  }
}, 10_000);
```

Or subscribe to field changes with an event listener so you always have the latest value:

```typescript
const gain = document.queryEntities.ofTypes("tinyGain").get()[0];

document.events.onUpdate(gain.fields.gain, (newValue) => {
  console.log("Gain is now:", newValue);
});
```

**Why it matters:** Nexus entities are immutable value objects. When a field changes, a new entity object is created; the old reference is not updated in-place. Holding a stale reference and reading `.value` will return the value at the time the object was created.

---

## 4. Using events where a query was needed (and vice versa)

**Events** fire when something *changes*. **Queries** reflect what *exists right now*. A common mistake is subscribing to `onCreate` to "get all entities of a type" — this only fires for entities created *after* the subscription starts. Entities that already existed before you subscribed are silently missed.

**Wrong — trying to see existing entities with an event**

```typescript
// Only fires for NEW notes created after this line runs.
// Notes that already exist are never reported.
document.events.onCreate("note", (note) => {
  console.log("Note:", note.fields.pitch.value);
});
```

**Right — query for existing state, then watch for changes**

```typescript
// Get all notes that exist right now.
const existing = document.queryEntities.ofTypes("note").get();
for (const note of existing) {
  console.log("Existing note:", note.fields.pitch.value);
}

// Then subscribe to catch future additions.
document.events.onCreate("note", (note) => {
  console.log("New note:", note.fields.pitch.value);
});
```

**Wrong — using a query where a live subscription was needed**

```typescript
// Polls state once at startup; never reacts to subsequent changes.
const tracks = document.queryEntities.ofTypes("noteTrack").get();
renderTrackList(tracks);
// If another collaborator adds a track, the UI never updates.
```

**Right — subscribe so the UI stays in sync**

```typescript
// Initial render
renderTrackList(document.queryEntities.ofTypes("noteTrack").get());

// Keep the UI up to date as tracks are added or removed
document.events.onCreate("noteTrack", () => {
  renderTrackList(document.queryEntities.ofTypes("noteTrack").get());
});
document.events.onRemove("noteTrack", () => {
  renderTrackList(document.queryEntities.ofTypes("noteTrack").get());
});
```

**Why it matters:** Queries are point-in-time reads. Events are edge-triggered notifications. Mixing them up causes either missed state (events miss pre-existing entities) or stale UI (queries miss future changes).

---

## 5. Mutating the result of a query directly instead of using a transaction

Query results are read-only snapshots. Attempting to assign directly to an entity's fields has no effect on the document — it only mutates the local JavaScript object, which is discarded when the next query runs.

**Wrong**

```typescript
const gain = document.queryEntities.ofTypes("tinyGain").get()[0];

// This modifies a local JavaScript object. The document is unchanged.
(gain.fields.gain as any).value = 0.5;
```

**Right**

```typescript
const gain = document.queryEntities.ofTypes("tinyGain").get()[0];

// Use modify() to apply the change through the transaction system.
await document.modify((t) => {
  t.update(gain.fields.gain, 0.5);
});
```

**Why it matters:** All document changes must go through `TransactionBuilder`. Direct mutation bypasses validation, does not propagate to other collaborators, and is overwritten the next time the document receives an update.

---

## See also

- [Making Changes](making-changes.md) — how `modify()` and `createTransaction()` work
- [Queries and Events](queries-and-events.md) — when to use each
- [Tips and Patterns](tips-and-patterns.md) — recommended approaches for common tasks
