---
title: "NeverThrowingFetch"
parent: "api"
grand_parent: "API"
nav_order: 83
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NeverThrowingFetch

```ts
type NeverThrowingFetch = (...params: Parameters<typeof fetch>) => Promise<Response | Error>;
```

Defined in: [utils/fetch/never-throwing-fetch.ts:1](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/fetch/never-throwing-fetch.ts#L1)

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`params` | `Parameters`\<*typeof* `fetch`\> |

## Returns

`Promise`\<`Response` \| `Error`\>
