---
title: "PrimitiveField"
parent: "document"
grand_parent: "API"
nav_order: 22
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: PrimitiveField\<P, M\>

Defined in: [document/fields.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L39)

A field that contains a primitive value of type `P`.

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `P` *extends* [`PrimitiveType`](../type-aliases/PrimitiveType.html) | [`PrimitiveType`](../type-aliases/PrimitiveType.html) | The type of the field, oneof [PrimitiveType](../type-aliases/PrimitiveType.html). |
| `M` *extends* `"mut"` \| `"immut"` | `"mut"` \| `"immut"` | Whether the field can be mutated, either `"mut"` or `"immut"`. |

## Implements

- [`NexusField`](NexusField.html)

## Properties

### location

```ts
location: NexusLocation;
```

Defined in: [document/fields.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L45)

The location of this field within the Nexus document.

#### Implementation of

```ts
NexusField.location
```

***

### mutable

```ts
readonly mutable: M extends "mut" ? true : false;
```

Defined in: [document/fields.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L55)

Whether the field is mutable. Updating immutable fields results in a transaction error.

If the type fo the field is known at compile time, updating the field using the [TransactionBuilder](../type-aliases/TransactionBuilder.html)
or listing to updates of the field using the [NexusEventManager](NexusEventManager.html) will result in type errors.

## Accessors

### value

#### Get Signature

```ts
get value(): P;
```

Defined in: [document/fields.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L74)

Get the value of the field. To set, use transactions in the document.

##### Returns

`P`
