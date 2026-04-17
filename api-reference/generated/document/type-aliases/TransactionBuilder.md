---
title: "TransactionBuilder"
parent: "document"
grand_parent: "API"
nav_order: 35
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: TransactionBuilder

```ts
type TransactionBuilder = {
  entities: EntityQuery;
  applyPresetTo: void;
  clone: NexusEntityUnion<T>;
  cloneLinked: NexusEntity<keyof EntityTypes>[];
  create: NexusEntityUnion<T>;
  createPresetFor: Preset;
  remove: void;
  removeWithDependencies: void;
  send: void;
  tryUpdate: string | undefined;
  update: void;
};
```

Defined in: [document/transaction-builder/builder.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L48)

A transaction builder can be used to make changes on a document.

All changes made using the same transaction builder will be part of the same transaction,
and as such applied atomically to the backend.

While a transaction builder exists, the document is locked, and no other builders can be created,
to avoid race conditions.

To finish a transaction, call [send](#send), which will unlock the document and let other builders be created.
After [send](#send) is called, all methods of the builder will throw.

Modifications to the document with a builder are applied to the local document immediately,
and only sent to the backend when [send](#send) is called.

Note that if receiving a builder through [SyncedDocument.modify](../../index/type-aliases/SyncedDocument.html#modify), then [send](#send) method is called
automatically once the function returns.
See [Overview](../../../../reference/document-model.html#modifying-the-document) for more information.

## Properties

### entities

```ts
entities: EntityQuery;
```

Defined in: [document/transaction-builder/builder.ts:181](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L181)

Allows querying all entities of the document.

## Methods

### applyPresetTo()

```ts
applyPresetTo(entity: NexusEntity<DevicePresetEntityType>, preset: NexusPreset): void;
```

Defined in: [document/transaction-builder/builder.ts:166](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L166)

Apply a preset to a given entity. The preset is a special transaction.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`NexusEntity`](../interfaces/NexusEntity.html)\<[`DevicePresetEntityType`](DevicePresetEntityType.html)\> |
| `preset` | [`NexusPreset`](../../api/type-aliases/NexusPreset.html) |

#### Returns

`void`

***

### clone()

```ts
clone<T>(entity: NexusEntity<T>, args?: DeepPartial<EntityConstructorType<T>>): NexusEntityUnion<T>;
```

Defined in: [document/transaction-builder/builder.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L102)

Clone an existing entity, optionally overwriting some fields.

Note that ts by default doesn't correctly type the output. To get correctly
typed output, do:
```
const tonematrix = t.create("tonematrix", {})
const tonematrix2 = t.clone<"tonematrix">(tonematrix)
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`EntityTypes`](EntityTypes.html) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`NexusEntity`](../interfaces/NexusEntity.html)\<`T`\> |
| `args?` | `DeepPartial`\<`EntityConstructorType`\<`T`\>\> |

#### Returns

[`NexusEntityUnion`](NexusEntityUnion.html)\<`T`\>

***

### cloneLinked()

```ts
cloneLinked(...entities: (
  | NexusEntity<keyof EntityTypes>
  | EntityWithOverwrites)[]): NexusEntity<keyof EntityTypes>[];
```

Defined in: [document/transaction-builder/builder.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L161)

Clone a list of entities, in such a way that pointers that
are both from to entities in this list are updated to point to
the cloned versions. The resulting `creates` command are ordered in such a way
that all pointers are always valid, and no transaction errors occur.

Each element in the past list can either be an entity itself, or an object
```
{
 entity: NexusEntity<T>,
 overwrites?: ConstructorTypes[T]
}
```
where `overwrites` work the same as the second parameter of `t.clone()` or `t.create()`.

Pointers from and to entities not in the list remain unchanged, unless overwritten.

Returns the cloned version of the entities in order. Robust towards duplicates
in the passed entities list.

# Example

Let's say we have entities `a`, `b`, `c`, `d`, `e`, with pointers between each
other like this:

```text

 a ──► b ──► c ──► d
             ▲
             │
             e
```

And we call `cloneLinked(b, c)`. Then:
* the relationship between `b` and `c` is updated to duplicates
* relationships from `b` or `c` to other entities remain untouched
* relationships from other entities to `b` or `c` remain untouched

Leading to a graph like this:

```text

       b'──► c' ───┐
                   ▼
 a ──► b ──► c ──► d
             ▲
             │
             e
```

If overwrite arguments are given for a specific entity, they overwrite any value
_after_ the links have been adjusted.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`entities` | ( \| [`NexusEntity`](../interfaces/NexusEntity.html)\<keyof EntityTypes\> \| [`EntityWithOverwrites`](EntityWithOverwrites.html))[] |

#### Returns

[`NexusEntity`](../interfaces/NexusEntity.html)\<keyof [`EntityTypes`](EntityTypes.html)\>[]

***

### create()

```ts
create<T>(name: T, args: EntityConstructorType<T>): NexusEntityUnion<T>;
```

Defined in: [document/transaction-builder/builder.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L50)

Create a new entity with default values

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`EntityTypes`](EntityTypes.html) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `T` |
| `args` | `EntityConstructorType`\<`T`\> |

#### Returns

[`NexusEntityUnion`](NexusEntityUnion.html)\<`T`\>

***

### createPresetFor()

```ts
createPresetFor(entity: NexusEntity<DevicePresetEntityType>): Preset;
```

Defined in: [document/transaction-builder/builder.ts:172](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L172)

Create a preset of a given entity. This doesn't modify the nexus document.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`NexusEntity`](../interfaces/NexusEntity.html)\<[`DevicePresetEntityType`](DevicePresetEntityType.html)\> |

#### Returns

`Preset`

***

### remove()

```ts
remove(idOrEntity: 
  | string
  | NexusEntity<keyof EntityTypes>): void;
```

Defined in: [document/transaction-builder/builder.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L71)

Delete an entity with id `id` from the document

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrEntity` | \| `string` \| [`NexusEntity`](../interfaces/NexusEntity.html)\<keyof [`EntityTypes`](EntityTypes.html)\> |

#### Returns

`void`

***

### removeWithDependencies()

```ts
removeWithDependencies(idOrEntity: 
  | string
  | NexusEntity<keyof EntityTypes>): void;
```

Defined in: [document/transaction-builder/builder.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L91)

Delete an entity with `id`, after all entities with pointers to it, transitively,
are deleted. In other words, remove entity `id`, after all entities are deleted
that would result in dangling pointers if `id` was removed.

# Example
Let's say we have entities `a`, `b`, `c`, `d`, `e`, with pointers between each
other like this:

```text
  a ─► b ─┐
  │       ├──► d ─► e
  │       │
  └──► c ─┘
```

Then calling `removeWithDependencies(d.id)` will remove all entities except `e`,
in an order that keeps all existing pointers valid after every modification.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrEntity` | \| `string` \| [`NexusEntity`](../interfaces/NexusEntity.html)\<keyof [`EntityTypes`](EntityTypes.html)\> |

#### Returns

`void`

***

### send()

```ts
send(): void;
```

Defined in: [document/transaction-builder/builder.ts:178](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L178)

Release the transaction lock and send the modifications to the backend. After this method
is called, this `TransactionBuilder` can't be used anymore.

#### Returns

`void`

***

### tryUpdate()

```ts
tryUpdate<P>(field: PrimitiveField<P, "mut">, value: P): string | undefined;
```

Defined in: [document/transaction-builder/builder.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L65)

Try to update a primitive field. Don't throw if it fails; return a string explaining the error
instead. If this returns `undefined`, the update was applied. Useful when e.g. a user enters a value
and it's not possible to know if the value is valid or not.

#### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* [`PrimitiveType`](PrimitiveType.html) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `field` | [`PrimitiveField`](../interfaces/PrimitiveField.html)\<`P`, `"mut"`\> |
| `value` | `P` |

#### Returns

`string` \| `undefined`

***

### update()

```ts
update<P>(field: PrimitiveField<P, "mut">, value: P): void;
```

Defined in: [document/transaction-builder/builder.ts:56](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L56)

Update a primitive field value

#### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* [`PrimitiveType`](PrimitiveType.html) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `field` | [`PrimitiveField`](../interfaces/PrimitiveField.html)\<`P`, `"mut"`\> |
| `value` | `P` |

#### Returns

`void`
