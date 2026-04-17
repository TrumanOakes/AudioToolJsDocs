---
title: "NexusEntityUnion"
parent: "document"
grand_parent: "API"
nav_order: 14
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NexusEntityUnion\<T\>

```ts
type NexusEntityUnion<T> = { [K in keyof EntityTypes]: NexusEntity<K> }[T];
```

Defined in: [document/entity.ts:10](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/entity.ts#L10)

Same as `NexusEntity<T>`, except if `T` is "a" | "b", this will be `NexusEntity<"a"> | NexusEntity<"b">`
instead of `NexusEntity<"a" | "b">`.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* keyof [`EntityTypes`](EntityTypes.html) | keyof [`EntityTypes`](EntityTypes.html) |
