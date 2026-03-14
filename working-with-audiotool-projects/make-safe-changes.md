---
title: Make Safe Changes
parent: Working With Audiotool Projects
nav_order: 7
---

# Make Safe Changes

This page covers practical guidelines for making modifications safely — using transactions correctly, avoiding common mistakes, and understanding how validation and locking protect your data.

## The basics of modify()

Every modification goes through `document.modify()`:

```typescript
await document.modify((t) => {
  t.create("tinyGain", {});
  t.update(entity.fields.gain, 0.8);
  t.remove(entity);
});
```

The three operations — `create`, `update`, `remove` — are described in [Making Changes](../how-nexus-works/making-changes.md). This page focuses on making them correctly in practice.

## Batch related changes together

Group related operations into a single transaction. This keeps the document consistent — either all changes apply or none do:

```typescript
// Good: create device and set its name atomically
await document.modify((t) => {
  const gain = t.create("tinyGain", { positionX: 100 });
  t.update(gain.fields.displayName, "My Gain");
});

// Avoid: two separate transactions for tightly coupled changes
await document.modify((t) => { t.create("tinyGain", {}); });
await document.modify((t) => { t.update(gain.fields.displayName, "..."); });
```

## Never modify from inside an event handler

Do not call `document.modify()` from within an event callback. The document lock is already held during event dispatch, and re-entrant locking will deadlock:

```typescript
// WRONG — will deadlock
document.events.onCreate("note", async (entity) => {
  await document.modify((t) => { // ← never do this
    t.update(entity.fields.pitch, 60);
  });
});

// Correct — schedule the modification outside the event
document.events.onCreate("note", (entity) => {
  setTimeout(async () => {
    await document.modify((t) => {
      t.update(entity.fields.pitch, 60);
    });
  }, 0);
});
```

## Do not hold stale entity references

Entities are immutable snapshots. After a transaction runs, the entity objects returned by previous queries or events may be outdated. If you need the latest state, query again or respond to the `onUpdate` event.

## Validate with an offline document first

Before running your logic against a live project, test it with an offline document. This catches transaction errors without touching real data:

```typescript
import { createOfflineDocument } from "@audiotool/nexus";

const doc = await createOfflineDocument();

await doc.modify((t) => {
  // test your logic here
});
```

## Handle modify() errors

`modify()` throws if a transaction fails validation. Wrap it in try/catch for robust error handling:

```typescript
try {
  await document.modify((t) => {
    t.create("note", {
      positionTicks: -1, // invalid — will fail validation
      pitch: 60,
      velocity: 100,
    });
  });
} catch (error) {
  console.error("Transaction failed:", error.message);
}
```

See [Validation Errors](../errors-and-fixes/validation-errors.md) for common causes.

## Stop the document when done

When your work is complete, stop the document to finalize pending changes:

```typescript
await document.stop();
```

The document becomes read-only after stopping. You can still query, but `modify()` will throw.

## Next step

→ [Work Offline for Testing](work-offline-for-testing.md) — develop and test without a live backend
