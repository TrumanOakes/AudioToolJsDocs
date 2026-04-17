---
title: "createTypedArray"
parent: "utils"
grand_parent: "API"
nav_order: 2
---

[**@audiotool/nexus API Reference**](../../)

***

# Function: createTypedArray()

```ts
function createTypedArray<T, L>(length: L, init: (index: number) => T): T[] & {
  length: L;
};
```

Defined in: [utils/typed-array.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/typed-array.ts#L20)

Creates an array with `length` elements, in such a way that the output's type
includes the length of the array. This function is equivalent to:
```
Array.from({length}, (_, i) => init(i)) as T[] & { length: L }
```
but less verbose.

This can be used to create arrays matching constructor types, for example:
```
const t = await nexus.createTransaction()
const rasselbock = t.create("rasselbock", {
  // requires an array of 32 elements
  patterns: createArray(32, () => ({
    // requires an array of 7 elements
    effectOrder: createArray(7, (i) => i),
   })),
})
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `L` *extends* `number` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `length` | `L` |
| `init` | (`index`: `number`) => `T` |

## Returns

`T`[] & \{
  `length`: `L`;
\}
