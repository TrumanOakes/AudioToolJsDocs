---
title: Documents
parent: How Nexus Works
nav_order: 2
---

# Documents

A **document** is the central object you work with in Nexus. It represents a single Audiotool project and exposes everything you need to read and modify it.

## Two document types

### SyncedDocument

Created via `client.createSyncedDocument(...)`. Connects to a live Audiotool project on the backend. Changes you make are immediately transmitted to the server and broadcast to all other connected clients (other bots, other users in the DAW).

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

Created via `createOfflineDocument()`. Runs entirely in-process with no network connection. Changes are not persisted — everything resets on reload or shutdown.

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

Disabling validation reduces strict schema enforcement, which is useful when exploring the API rapidly. Keep validation enabled for production-like testing.

## Document interface

Both document types expose the same interface:

| Property / Method | Description |
|-------------------|-------------|
| `document.modify(fn)` | Open a transaction and apply changes |
| `document.events` | Subscribe to entity create/update/remove events |
| `document.queryEntities` | Query the current set of entities |
| `document.start()` | Begin syncing (SyncedDocument only) |
| `document.stop()` | Finalize and stop syncing (SyncedDocument only) |

## Type aliases

The `@audiotool/nexus` package exports these document-related types:

| Type | Description |
|------|-------------|
| `SyncedDocument` | The type of a document connected to the backend |
| `OfflineDocument` | The type of a local-only document |

Both are returned as `Promise<...>` from their factory functions.

## Next step

→ [Entities and Fields](entities-and-fields.md) — what lives inside a document
