---
title: "NumberPrimitive"
parent: "document"
grand_parent: "API"
nav_order: 20
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NumberPrimitive

```ts
type NumberPrimitive = {
  default: number;
  range: {
     max: number;
     min: number;
  };
  scalarType:   | ScalarType.FIXED32
     | ScalarType.FIXED64
     | ScalarType.FLOAT
     | ScalarType.DOUBLE
     | ScalarType.INT32
     | ScalarType.INT64
     | ScalarType.SFIXED32
     | ScalarType.SFIXED64
     | ScalarType.UINT32
     | ScalarType.UINT64
     | ScalarType.SINT32
     | ScalarType.SINT64;
  type: "number";
};
```

Defined in: [document/schema/schema-details.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L63)

If the primitive field contains a number, this is returned.

## Properties

### default

```ts
default: number;
```

Defined in: [document/schema/schema-details.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L80)

Default value for the field as indicated by the protos. Might be removed.

***

### range

```ts
range: {
  max: number;
  min: number;
};
```

Defined in: [document/schema/schema-details.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L86)

The range of values for this field. If protos are unset, is the range of the
number type.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `max` | `number` | [document/schema/schema-details.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L88) |
| `min` | `number` | [document/schema/schema-details.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L87) |

***

### scalarType

```ts
scalarType: 
  | ScalarType.FIXED32
  | ScalarType.FIXED64
  | ScalarType.FLOAT
  | ScalarType.DOUBLE
  | ScalarType.INT32
  | ScalarType.INT64
  | ScalarType.SFIXED32
  | ScalarType.SFIXED64
  | ScalarType.UINT32
  | ScalarType.UINT64
  | ScalarType.SINT32
  | ScalarType.SINT64;
```

Defined in: [document/schema/schema-details.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L65)

***

### type

```ts
type: "number";
```

Defined in: [document/schema/schema-details.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L64)
