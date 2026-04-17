---
title: "AudiotoolClient"
parent: "index"
grand_parent: "API"
nav_order: 1
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudiotoolClient

```ts
type AudiotoolClient = {
  api: AudiotoolAPI;
  createSyncedDocument: (opts: {
     project: string;
  }) => Promise<SyncedDocument>;
};
```

Defined in: [audiotool-client.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/audiotool-client.ts#L25)

An instance of the client that's authorized to make calls on a use's behalf.

Lets you create synced documents and make API calls to the audiotool backend.

Use [getLoginStatus](../functions/getLoginStatus.html) to get authorized to make calls on a user's behalf.

## Example

```typescript
const status = await getLoginStatus({...})
if (status.loggedIn){
  const client = await createAudiotoolClient({authorization: status});
} else {
  console.error("User is not logged in");
}
```

## Properties

### api

```ts
api: AudiotoolAPI;
```

Defined in: [audiotool-client.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/audiotool-client.ts#L48)

Collection of Audiotool API service clients.

Provides access to all Audiotool services including projects, users, samples, presets, and more.
All services use retrying clients that handle network issues gracefully.

***

### createSyncedDocument

```ts
createSyncedDocument: (opts: {
  project: string;
}) => Promise<SyncedDocument>;
```

Defined in: [audiotool-client.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/audiotool-client.ts#L35)

Create a synced document instance for real-time collaboration.

Make sure to call [SyncedDocument.start](SyncedDocument.html#start) to start the synchronization process,
and [SyncedDocument.stop](SyncedDocument.html#stop) before throwing the document away.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | \{ `project`: `string`; \} | Configuration for the document connection |
| `opts.project` | `string` | The project to sync to; this can be anything containing a project's UUID, e.g. the URL of the studio when the project is open in the browser. |

#### Returns

`Promise`\<[`SyncedDocument`](SyncedDocument.html)\>

Promise resolving to a SyncedDocument instance
