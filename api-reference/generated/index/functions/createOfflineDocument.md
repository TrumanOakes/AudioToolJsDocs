---
title: "createOfflineDocument"
parent: "index"
grand_parent: "API"
nav_order: 3
---

[**@audiotool/nexus API Reference**](../../)

***

# Function: createOfflineDocument()

```ts
function createOfflineDocument(opts?: {
  validated?: boolean;
}): Promise<OfflineDocument>;
```

Defined in: [synced-document.ts:210](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L210)

Create a nexus document that is not synced to the backend; all changes are discarded on reload/shutdown.

The returned document is ready to be modified immediately and can be thrown away without calling start/stop.

To create a document that is synced with a state from the backend/DAW, use [AudiotoolClient.createSyncedDocument](../type-aliases/AudiotoolClient.html#createsynceddocument).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts?` | \{ `validated?`: `boolean`; \} | - |
| `opts.validated?` | `boolean` | Whether validation is enabled. Turning that off results in fewer transaction errors, but can lead to invalid states. |

## Returns

`Promise`\<[`OfflineDocument`](../type-aliases/OfflineDocument.html)\>
