---
title: "NexusEntity"
parent: "document"
grand_parent: "API"
nav_order: 13
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: NexusEntity\<E\>

Defined in: [document/entity.ts:15](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/entity.ts#L15)

A "struct"/"object" like field in the document:
* fields of entities that are objects are a [NexusObject](NexusObject.html)
* NexusEntity inherits [NexusObject](NexusObject.html)

## Extends

- [`NexusObject`](NexusObject.html)\<[`EntityTypes`](../type-aliases/EntityTypes.html)\[`E`\]\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `E` *extends* keyof [`EntityTypes`](../type-aliases/EntityTypes.html) | keyof [`EntityTypes`](../type-aliases/EntityTypes.html) |

## Properties

### entityType

```ts
readonly entityType: E;
```

Defined in: [document/entity.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/entity.ts#L21)

The entity type key of this entity.

***

### fields

```ts
fields: EntityTypes[E];
```

Defined in: [document/object.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/object.ts#L20)

the fields in this object

#### Inherited from

[`NexusObject`](NexusObject.html).[`fields`](NexusObject.html#fields)

***

### id

```ts
readonly id: string;
```

Defined in: [document/entity.ts:19](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/entity.ts#L19)

The id of this entity.

***

### location

```ts
location: NexusLocation;
```

Defined in: [document/object.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/object.ts#L21)

#### Inherited from

[`NexusObject`](NexusObject.html).[`location`](NexusObject.html#location)
