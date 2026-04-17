---
title: "Int32"
parent: "api"
grand_parent: "API"
nav_order: 61
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Int32

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:637](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L637)

Options for `int32` fields.

## Generated

from message audiotool.document.v1.opt.Int32

## Extends

- `Message`\<`Int32`\>

## Constructors

### Constructor

```ts
new Int32(data?: PartialMessage<Int32>): Int32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:652](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L652)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Int32`\> |

#### Returns

`Int32`

#### Overrides

```ts
Message<Int32>.constructor
```

## Properties

### init

```ts
init: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:643](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L643)

Suggested default value of this field.

#### Generated

from field: int32 init = 1;

***

### range?

```ts
optional range?: Int32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:650](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L650)

Optional validity range of this field.

#### Generated

from field: audiotool.document.v1.opt.Int32Range range = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:659](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L659)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:657](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L657)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.Int32" = "audiotool.document.v1.opt.Int32";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:658](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L658)

## Methods

### equals()

```ts
static equals(a: Int32 | PlainMessage<Int32> | undefined, b: Int32 | PlainMessage<Int32> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:676](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L676)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Int32` \| `PlainMessage`\<`Int32`\> \| `undefined` |
| `b` | `Int32` \| `PlainMessage`\<`Int32`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:664](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L664)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Int32`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:668](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L668)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Int32`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:672](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L672)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Int32`
