---
title: Open or Create a Project Context
parent: Working With Audiotool Projects
nav_order: 2
---

# Open or Create a Project Context

Once you have an `AudiotoolClient`, the next step is to open a **document** — the object that represents a specific Audiotool project and gives you access to its entities, events, and modification interface.

## Open a synced document

To connect to a real Audiotool project:

```typescript
const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});
```

The `project` value is the URL of an Audiotool project. You can get this from the DAW's share button or from the `ProjectService` API.

After creating the document, start syncing:

```typescript
await document.start();
```

Until `start()` is called, the document exists but is not connected. Always call `start()` before reading events or making changes.

## Open an offline document for testing

For development and testing — no project URL, no auth, no network required:

```typescript
import { createOfflineDocument } from "@audiotool/nexus";

const document = await createOfflineDocument();
// No start() needed — immediately ready
```

Offline documents use the same API as synced documents. Switch to synced when your logic is working.

To suppress validation errors during rapid prototyping:

```typescript
const document = await createOfflineDocument({ validated: false });
```

## Stop the document

When you are done, stop syncing:

```typescript
await document.stop();
```

This finalizes any pending changes and transitions the document to read-only. After stopping, you can still query entities but cannot call `modify()`.

Offline documents do not require `stop()`.

## What you can do with a document

| Task | See |
|------|-----|
| Create audio devices | [Create Devices](create-devices.md) |
| Build timeline content | [Work With Timeline Data](work-with-timeline-data.md) |
| Query existing entities | [Find and Read Entities](find-and-read-entities.md) |
| React to changes | [Listen for Changes](listen-for-changes.md) |
| Make safe changes | [Make Safe Changes](make-safe-changes.md) |
| Test offline | [Work Offline for Testing](work-offline-for-testing.md) |
