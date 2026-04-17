---
title: "NexusLocation"
parent: "document"
grand_parent: "API"
nav_order: 17
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: NexusLocation

Defined in: [document/location.ts:19](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L19)

A NexusLocation describes a location in the document, either an entity itself,
 or a specific field of an entity.

NexusLocations implement the SchemaLocation type, which describes a location
in the document schema, and can be used to fetch metadata about fields, such
as target types.

## Implements

- [`SchemaLocation`](../type-aliases/SchemaLocation.html)
- [`Hashable`](../../utils/type-aliases/Hashable.html)

## Properties

### entityId

```ts
readonly entityId: string;
```

Defined in: [document/location.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L20)

***

### entityType

```ts
readonly entityType: keyof EntityTypes | undefined;
```

Defined in: [document/location.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L22)

#### Implementation of

```ts
SchemaLocation.entityType
```

***

### fieldIndex

```ts
readonly fieldIndex: readonly number[];
```

Defined in: [document/location.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L21)

#### Implementation of

`NexusLocation`.[`fieldIndex`](#fieldindex)

## Accessors

### \[hashSymbol\]

#### Get Signature

```ts
get hashSymbol: string;
```

Defined in: [document/location.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L84)

##### Returns

`string`

#### Implementation of

```ts
Hashable.[hashSymbol]
```

## Methods

### equals()

```ts
equals(other: NexusLocation): boolean;
```

Defined in: [document/location.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `NexusLocation` |

#### Returns

`boolean`

***

### isEmpty()

```ts
isEmpty(): boolean;
```

Defined in: [document/location.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L39)

#### Returns

`boolean`

***

### toString()

```ts
toString(): string;
```

Defined in: [document/location.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/location.ts#L92)

Returns a human readable string representation

#### Returns

`string`
