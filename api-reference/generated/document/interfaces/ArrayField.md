---
title: "ArrayField"
parent: "document"
grand_parent: "API"
nav_order: 2
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: ArrayField\<F, L\>

Defined in: [document/fields.ts:14](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L14)

A field that contains an array of other fields.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `F` *extends* [`NexusField`](NexusField.html) | [`NexusField`](NexusField.html) |
| `L` *extends* `number` | `number` |

## Implements

- [`NexusField`](NexusField.html)

## Properties

### array

```ts
array: readonly F[] & {
  length: L;
};
```

Defined in: [document/fields.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L21)

The array of fields contained in this array field.

#### Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `length` | `L` | [document/fields.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L21) |

***

### location

```ts
location: NexusLocation;
```

Defined in: [document/fields.ts:19](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/fields.ts#L19)

#### Implementation of

```ts
NexusField.location
```
