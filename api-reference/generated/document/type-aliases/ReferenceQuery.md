---
title: "ReferenceQuery"
parent: "document"
grand_parent: "API"
nav_order: 25
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: ReferenceQuery\<T\>

```ts
type ReferenceQuery<T> = {
  entities: EntityQuery<T>;
  entityOfType: EntityQuery<T>;
  locations: EntityQuery<T>;
};
```

Defined in: [document/query/entity.ts:370](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L370)

Internal type used for `pointingTo` and `pointedToBy`.

Because we don't know which entities point to or are pointed to by which entities,
the return type doesn't change.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`EntityTypeKey`](EntityTypeKey.html) |

## Methods

### entities()

```ts
entities(...ids: string[]): EntityQuery<T>;
```

Defined in: [document/query/entity.ts:373](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L373)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`ids` | `string`[] |

#### Returns

[`EntityQuery`](../interfaces/EntityQuery.html)\<`T`\>

***

### entityOfType()

```ts
entityOfType<Q>(...types: Q): EntityQuery<T>;
```

Defined in: [document/query/entity.ts:371](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L371)

#### Type Parameters

| Type Parameter |
| ------ |
| `Q` *extends* keyof [`EntityTypes`](EntityTypes.html)[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`types` | `Q` |

#### Returns

[`EntityQuery`](../interfaces/EntityQuery.html)\<`T`\>

***

### locations()

```ts
locations(...loc: NexusLocation[]): EntityQuery<T>;
```

Defined in: [document/query/entity.ts:372](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L372)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`loc` | [`NexusLocation`](../interfaces/NexusLocation.html)[] |

#### Returns

[`EntityQuery`](../interfaces/EntityQuery.html)\<`T`\>
