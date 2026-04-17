---
title: "createAudiotoolClient"
parent: "index"
grand_parent: "API"
nav_order: 2
---

[**@audiotool/nexus API Reference**](../../)

***

# Function: createAudiotoolClient()

```ts
function createAudiotoolClient(__namedParameters: {
  authorization:   | string
     | {
     getToken: () => Promise<string | Error>;
   };
}): Promise<AudiotoolClient>;
```

Defined in: [audiotool-client.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/audiotool-client.ts#L89)

Create the main Audiotool client instance.

This is the primary entry point to interact with the audiotool backend.

See [getLoginStatus](getLoginStatus.html) for how to authorize the client.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | \{ `authorization`: \| `string` \| \{ `getToken`: () => `Promise`\<`string` \| `Error`\>; \}; \} | - |
| `__namedParameters.authorization` | \| `string` \| \{ `getToken`: () => `Promise`\<`string` \| `Error`\>; \} | The token provider used to generate authorization tokens to authenticate against the API. This could be: * the return value of [getLoginStatus](getLoginStatus.html), if it returns the user is logged in * a constant authorization token as a string (e.g. the PAT from https://developer.audiotool.com/personal-access-tokens) |

## Returns

`Promise`\<[`AudiotoolClient`](../type-aliases/AudiotoolClient.html)\>

## Examples

```typescript
// Basic setup
import { createAudiotoolClient } from "@audiotool/nexus";

// create client
const client = await createAudiotoolClient({authorization: status});

// Connect to an online project
const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});

await document.start();
```

```typescript
// Access API services
const client = await createAudiotoolClient({authorization: status});

// List projects
const projects = await client.api.projectService.listProjects({});
```

## See

 - [AudiotoolClient](../type-aliases/AudiotoolClient.html) for the client interface
 - [SyncedDocument](../type-aliases/SyncedDocument.html) for document manipulation
 - [AudiotoolAPI](../../api/type-aliases/AudiotoolAPI.html) for available API services
