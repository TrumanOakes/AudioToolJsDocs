---
title: Make Safe Changes
parent: Working With Audiotool Projects
nav_order: 7
---

# Make Safe Changes

This page covers practical guidelines for making modifications safely — using <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transactions</span> correctly and avoiding common mistakes.

## The basics of modify()

Every modification goes through `nexus.modify()`:

```typescript
await nexus.modify((t) => {
  t.create("tinyGain", {});
  t.update(entity.fields.gain, 0.8);
  t.remove(entity);
});
```

The three operations — `create`, `update`, `remove` — are described in [Making Changes](../how-nexus-works/making-changes.md). This page focuses on making them correctly in practice.

## Batch related changes together

Group related operations into a single transaction. This keeps the document consistent — either all changes apply or none do:

```typescript
// Good: create device and set its name in one step
await nexus.modify((t) => {
  const gain = t.create("tinyGain", { positionX: 100 });
  t.update(gain.fields.displayName, "My Gain");
});

// Avoid: two separate transactions for tightly coupled changes
await nexus.modify((t) => { t.create("tinyGain", {}); });
await nexus.modify((t) => { t.update(gain.fields.displayName, "..."); });
```

## Never modify from inside an event handler

Do not call `nexus.modify()` from within an event callback. Nexus cannot start a new transaction while an event is already being handled — the call will never resolve:

```typescript
// WRONG — will never resolve
nexus.events.onCreate("note", async (entity) => {
  await nexus.modify((t) => { // ← never do this
    t.update(entity.fields.pitch, 60);
  });
});

// Correct — schedule the modification outside the event
nexus.events.onCreate("note", (entity) => {
  setTimeout(async () => {
    await nexus.modify((t) => {
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

{: .warning }
> **Do not try/catch transaction errors to recover from them.** Transaction errors indicate a bug in your code. Catching them silently and continuing leads to inconsistent document state and further errors. Let the app crash and fix the root cause instead.

`modify()` throwing is a signal to read the error, understand the cause, and fix the code. You can use `console.error` in development to log and diagnose:

```typescript
// In development: log and rethrow so the stack trace is visible
nexus.modify((t) => {
  t.create("note", {
    positionTicks: 0,
    pitch: 60,
    velocity: 100,
  });
}).catch(error => {
  console.error("Transaction failed:", error);
  throw error; // don't swallow it
});
```

**Exception — user input:** If the value comes from a user-controlled input (slider, text field), use `tryUpdate()` which returns a validation error string without throwing, so you can display it:

```typescript
await nexus.modify((t) => {
  const error = t.tryUpdate(device.fields.gain, userEnteredValue);
  if (error !== undefined) {
    showToUser("Invalid value: " + error);
  }
});
```

See [Validation Errors](../errors-and-fixes/validation-errors.md) for a full list of error types and patterns.

## Stop the document when done

When your work is complete, stop the document to finalize pending changes:

```typescript
await nexus.stop();
```

The document becomes read-only after stopping. You can still query, but `modify()` will throw.

## Next step

→ [Work Offline for Testing](work-offline-for-testing.md) — develop and test without a live backend
