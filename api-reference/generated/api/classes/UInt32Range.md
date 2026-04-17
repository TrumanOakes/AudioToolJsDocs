---
title: "UInt32Range"
parent: "api"
grand_parent: "API"
nav_order: 127
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UInt32Range

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:790](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L790)

Marks the field as only being valid if its value is within `[min, max]`, inclusive.

Note that proto doesn't allow unset primitive fields; if one of `min` or
`max` is left out, that value will be set to 0.

## Generated

from message audiotool.document.v1.opt.UInt32Range

## Extends

- `Message`\<`UInt32Range`\>

## Constructors

### Constructor

```ts
new UInt32Range(data?: PartialMessage<UInt32Range>): UInt32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:805](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L805)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UInt32Range`\> |

#### Returns

`UInt32Range`

#### Overrides

```ts
Message<UInt32Range>.constructor
```

## Properties

### max

```ts
max: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:803](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L803)

Upper bound of validity range.

#### Generated

from field: uint32 max = 2;

***

### min

```ts
min: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:796](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L796)

Lower bound of validity range.

#### Generated

from field: uint32 min = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:812](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L812)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:810](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L810)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.UInt32Range" = "audiotool.document.v1.opt.UInt32Range";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:811](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L811)

## Methods

### equals()

```ts
static equals(a: UInt32Range | PlainMessage<UInt32Range> | undefined, b: UInt32Range | PlainMessage<UInt32Range> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:829](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L829)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `UInt32Range` \| `PlainMessage`\<`UInt32Range`\> \| `undefined` |
| `b` | `UInt32Range` \| `PlainMessage`\<`UInt32Range`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UInt32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:817](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L817)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UInt32Range`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UInt32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:821](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L821)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UInt32Range`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UInt32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:825](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L825)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UInt32Range`
