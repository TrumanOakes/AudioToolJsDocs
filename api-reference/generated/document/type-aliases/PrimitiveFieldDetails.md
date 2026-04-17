---
title: "PrimitiveFieldDetails"
parent: "document"
grand_parent: "API"
nav_order: 23
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PrimitiveFieldDetails

```ts
type PrimitiveFieldDetails = {
  fieldName: string;
  immutable: boolean;
  primitive:   | NexusLocationPrimitive
     | NumberPrimitive
     | StringPrimitive
     | BooleanPrimitive
     | BytesPrimitive;
  targetTypes: TargetTypeValue[];
  type: "primitive";
};
```

Defined in: [document/schema/schema-details.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L38)

If the path points to a primitive field, this is returned.

## Properties

### fieldName

```ts
fieldName: string;
```

Defined in: [document/schema/schema-details.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L45)

the field name

***

### immutable

```ts
immutable: boolean;
```

Defined in: [document/schema/schema-details.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L43)

whether the primitive is immutable.

***

### primitive

```ts
primitive: 
  | NexusLocationPrimitive
  | NumberPrimitive
  | StringPrimitive
  | BooleanPrimitive
  | BytesPrimitive;
```

Defined in: [document/schema/schema-details.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L47)

more infos on the exact primitive located there.

***

### targetTypes

```ts
targetTypes: TargetTypeValue[];
```

Defined in: [document/schema/schema-details.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L41)

target types of this primitive.

***

### type

```ts
type: "primitive";
```

Defined in: [document/schema/schema-details.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L39)
