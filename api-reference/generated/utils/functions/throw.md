---
title: "throw"
parent: "utils"
grand_parent: "API"
nav_order: 13
---

[**@audiotool/nexus API Reference**](../../)

***

# Function: throw\_()

```ts
function throw_(message?: string | Error): never;
```

Defined in: [utils/lang.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/lang.ts#L34)

Instantly throws the message or error. `string`s are wrapped in an `Error`.

Useful to throw early if something is expected to be defined using
the `??` operator. Example:
```
const getX: () => number | undefined
const x: number = getX() ?? throw_("expected x to be defined")
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` \| `Error` |

## Returns

`never`
