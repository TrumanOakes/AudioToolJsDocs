---
title: "Int32Range"
parent: "api"
grand_parent: "API"
nav_order: 62
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Int32Range

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:689](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L689)

Marks the field as only being valid if its value is within `[min, max]`, inclusive.

Note that proto doesn't allow unset primitive fields; if one of `min` or
`max` is left out, that value will be set to 0.

## Generated

from message audiotool.document.v1.opt.Int32Range

## Extends

- `Message`\<`Int32Range`\>

## Constructors

### Constructor

```ts
new Int32Range(data?: PartialMessage<Int32Range>): Int32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:704](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L704)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Int32Range`\> |

#### Returns

`Int32Range`

#### Overrides

```ts
Message<Int32Range>.constructor
```

## Properties

### max

```ts
max: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:702](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L702)

Upper bound of validity range.

#### Generated

from field: int32 max = 2;

***

### min

```ts
min: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:695](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L695)

lower bound of validity range

#### Generated

from field: int32 min = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:711](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L711)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:709](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L709)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.Int32Range" = "audiotool.document.v1.opt.Int32Range";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:710](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L710)

## Methods

### equals()

```ts
static equals(a: Int32Range | PlainMessage<Int32Range> | undefined, b: Int32Range | PlainMessage<Int32Range> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:728](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L728)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Int32Range` \| `PlainMessage`\<`Int32Range`\> \| `undefined` |
| `b` | `Int32Range` \| `PlainMessage`\<`Int32Range`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:716](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L716)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Int32Range`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:720](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L720)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Int32Range`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:724](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L724)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Int32Range`
