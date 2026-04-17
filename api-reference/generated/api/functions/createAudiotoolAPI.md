---
title: "createAudiotoolAPI"
parent: "api"
grand_parent: "API"
nav_order: 13
---

[**@audiotool/nexus API Reference**](../../)

***

# Function: createAudiotoolAPI()

```ts
function createAudiotoolAPI(getToken: () => Promise<string>, prismaUrl?: string): Promise<AudiotoolAPI>;
```

Defined in: [api/audiotool-api.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L59)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `getToken` | () => `Promise`\<`string`\> |
| `prismaUrl?` | `string` |

## Returns

`Promise`\<[`AudiotoolAPI`](../type-aliases/AudiotoolAPI.html)\>
