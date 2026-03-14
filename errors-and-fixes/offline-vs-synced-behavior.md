---
title: Offline vs Synced Behavior
parent: Errors and Fixes
nav_order: 6
---

# Offline vs Synced Behavior

Offline documents and synced documents expose the same API, but they behave differently in important ways. This page clarifies the differences to prevent surprises.

## Key differences at a glance

| Behavior | Offline document | Synced document |
|----------|-----------------|-----------------|
| Requires auth | No | Yes |
| Requires network | No | Yes |
| `start()` required | No | Yes |
| `stop()` needed | No | Yes (recommended) |
| Changes persist | No | Yes |
| Events from others | No | Yes |
| `onCreate` on load | No | Yes (existing entities emitted) |
| Validation | Optional (`validated` flag) | Always on |

## "My code works offline but fails on synced"

### Validation was disabled

If you used `createOfflineDocument({ validated: false })`, you may have written transactions that pass invalid data. Switch to `createOfflineDocument()` (default, validation enabled) first — if that fails too, you have found the real bug.

### onCreate fires immediately for existing entities on synced

When a synced document starts, it replays existing entities as `onCreate` events. If your code assumes `onCreate` means "brand new entity," it may double-process things that already existed.

Design your `onCreate` handler to be idempotent — calling it twice for the same entity should not cause errors.

### Timing is different on synced

On synced documents, there is network latency. Events and query results may arrive slightly later than on an offline document. Do not assume synchronous ordering.

## "My code works on synced but not offline"

### Offline documents do not emit events for pre-existing state

Unlike synced documents, offline documents start empty. There are no pre-existing entities to replay. If your code expects an initial set of entities (like a `mixerMaster`), you need to create them yourself when testing offline:

```typescript
const document = await createOfflineDocument();

// Set up the initial state you need for testing
await document.modify((t) => {
  t.create("mixerMaster", {});
  // add other initial entities
});
```

### Offline documents reset on every run

All entity state is lost when the script ends or the page reloads. This is expected. If you need persistent state for testing, use a real synced document with a throwaway project.

## "I stopped the document but now query/modify is broken"

After calling `document.stop()`, the document is read-only. `modify()` will throw. You can still use `queryEntities` to read data, but no further changes can be made.

If you need to make more changes, you must create a new document connection.

## Next step

If you have worked through all the error pages and still have an issue:

- Check [Quick Answers](../reference/quick-answers.md) for FAQ-style solutions
- Ask in the [Discord community](https://discord.gg/5Cde4Zvret)
