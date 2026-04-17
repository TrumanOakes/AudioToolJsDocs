---
title: "OfflineDocument"
parent: "index"
grand_parent: "API"
nav_order: 8
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: OfflineDocument

```ts
type OfflineDocument = Omit<SyncedDocument, "start" | "stop">;
```

Defined in: [synced-document.ts:201](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L201)

An offline version of a [SyncedDocument](SyncedDocument.html) - starts out completely empty,
and all changes are discarded on reload/shutdown.

Doesn't have start/stop methods since no syncing is happening.

Can be safely thrown away after usage.
