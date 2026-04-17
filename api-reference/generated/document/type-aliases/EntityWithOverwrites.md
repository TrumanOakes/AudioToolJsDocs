---
title: "EntityWithOverwrites"
parent: "document"
grand_parent: "API"
nav_order: 10
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: EntityWithOverwrites\<T\>

```ts
type EntityWithOverwrites<T> = { [K in T]: _EntityWithOverwrites<K> }[T];
```

Defined in: [document/transaction-builder/build-clone-linked-entities.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/build-clone-linked-entities.ts#L52)

Expands to

```ts
type _EntityWithArg<T> = {
 entity: NexusEntity<T>
 overwrites?: ConstructorTypes[T]
}
```

except for when except when `T`
is one of multiple options:

If `T` is `"output" | "tonematrix"`, this type expands to
```
_EntityWithArg<"output"> | _EntityWithArg<"tonematrix">
```

rather than
```
_EntityWithArg<"output" | "tonematrix">
```

which causes typescript to make sure that the `entity` field matches
the type of the `overwrites` field, and doesn't just take the type
union for either of these fields.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EntityTypeKey`](EntityTypeKey.html) | [`EntityTypeKey`](EntityTypeKey.html) |
