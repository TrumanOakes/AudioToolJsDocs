---
title: "NexusObject"
parent: "document"
grand_parent: "API"
nav_order: 19
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: NexusObject\<F\>

Defined in: [document/object.ts:16](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/object.ts#L16)

A "struct"/"object" like field in the document:
* fields of entities that are objects are a NexusObject
* [NexusEntity](NexusEntity.html) inherits NexusObject

## Extended by

- [`NexusEntity`](NexusEntity.html)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `F` *extends* `NexusFieldTypes` | `NexusFieldTypes` |

## Implements

- [`NexusField`](NexusField.html)

## Properties

### fields

```ts
fields: F;
```

Defined in: [document/object.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/object.ts#L20)

the fields in this object

***

### location

```ts
location: NexusLocation;
```

Defined in: [document/object.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/object.ts#L21)

#### Implementation of

```ts
NexusField.location
```
