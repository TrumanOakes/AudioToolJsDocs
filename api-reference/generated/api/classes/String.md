---
title: "String"
parent: "api"
grand_parent: "API"
nav_order: 114
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: String

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:546](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L546)

Options for `string` fields.

## Generated

from message audiotool.document.v1.opt.String

## Extends

- `Message`\<`String`\>

## Constructors

### Constructor

```ts
new String(data?: PartialMessage<String>): String;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:562](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L562)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`String`\> |

#### Returns

`String`

#### Overrides

```ts
Message<String>.constructor
```

## Properties

### format

```ts
format: StringFormat = StringFormat.UNSPECIFIED;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:552](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L552)

Required format of this string field.

#### Generated

from field: audiotool.document.v1.opt.StringFormat format = 1;

***

### maxByteLength

```ts
maxByteLength: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:560](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L560)

Maximum byte length of this string field. Note that unicode character != 1 byte in general.
Must be set on any string field that has format "unspecified".

#### Generated

from field: uint32 max_byte_length = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:569](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L569)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:567](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L567)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.String" = "audiotool.document.v1.opt.String";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:568](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L568)

## Methods

### equals()

```ts
static equals(a: String | PlainMessage<String> | undefined, b: String | PlainMessage<String> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:586](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L586)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `String` \| `PlainMessage`\<`String`\> \| `undefined` |
| `b` | `String` \| `PlainMessage`\<`String`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): String;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:574](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L574)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`String`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): String;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:578](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L578)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`String`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): String;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:582](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L582)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`String`
