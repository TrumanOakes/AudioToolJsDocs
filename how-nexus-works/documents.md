---
title: Documents
parent: How Nexus Works
nav_order: 2
---

# Documents

A **document** is the central object you work with in Nexus. It represents a single Audiotool project and exposes everything you need to read and modify it.

## Two document types

### SyncedDocument

A <span class="tooltip" data-tooltip="A document connected to Audiotool in real time, so changes can update as the project changes.">synced document</span> connects to a live Audiotool project. Changes are immediately sent to Audiotool and visible to all other connected collaborators (other bots, other users in the DAW). Created via `client.createSyncedDocument(...)`.

```typescript
const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});

await document.start();
// document is now live
```

A synced document must be explicitly **started** before it syncs, and **stopped** when you are done:

```typescript
await document.stop();
// pending changes are finalized; document becomes read-only
```

### OfflineDocument

An <span class="tooltip" data-tooltip="A document used locally without a live connection, often for testing or controlled edits.">offline document</span> runs locally with no network connection. Changes are not saved — everything resets on reload or shutdown. Created via `createOfflineDocument()`.

```typescript
import { createOfflineDocument } from "@audiotool/nexus";

const document = await createOfflineDocument();
// immediately ready — no start() required
```

An offline document is always immediately available and never needs `start()` or `stop()`. All changes stay local.

Offline documents support an optional `validated` flag:

```typescript
const document = await createOfflineDocument({ validated: false });
```

Disabling validation lets you experiment freely without transactions throwing errors. Re-enable it before testing production-like behavior.

## Document interface

Both document types expose the same interface:

| Property / Method | Description |
|-------------------|-------------|
| `document.modify(fn)` | Open a transaction and apply changes |
| `document.events` | Subscribe to entity create/update/remove events |
| `document.queryEntities` | Query the current set of entities |
| `document.start()` | Begin syncing (SyncedDocument only) |
| `document.stop()` | Finalize and stop syncing (SyncedDocument only) |

## Next step

→ [Entities and Fields](entities-and-fields.md) — what lives inside a document
