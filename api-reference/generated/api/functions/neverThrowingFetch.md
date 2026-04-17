---
title: "neverThrowingFetch"
parent: "api"
grand_parent: "API"
nav_order: 82
---

[**@audiotool/nexus API Reference**](../../)

***

# Function: neverThrowingFetch()

```ts
function neverThrowingFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response | Error>;
```

Defined in: [utils/fetch/never-throwing-fetch.ts:10](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/fetch/never-throwing-fetch.ts#L10)

Wraps fetch such that if errors are throw, they're returned instead.

Allows fetching things without `try/catch` blocks.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

## Returns

`Promise`\<`Response` \| `Error`\>
