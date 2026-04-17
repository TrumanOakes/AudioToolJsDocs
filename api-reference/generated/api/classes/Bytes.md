---
title: "Bytes"
parent: "api"
grand_parent: "API"
nav_order: 7
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Bytes

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:940](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L940)

Options for `bytes` fields.

## Generated

from message audiotool.document.v1.opt.Bytes

## Extends

- `Message`\<`Bytes`\>

## Constructors

### Constructor

```ts
new Bytes(data?: PartialMessage<Bytes>): Bytes;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:948](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L948)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Bytes`\> |

#### Returns

`Bytes`

#### Overrides

```ts
Message<Bytes>.constructor
```

## Properties

### maxByteLength

```ts
maxByteLength: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:946](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L946)

Maximum byte length of this bytes field.

#### Generated

from field: uint32 max_byte_length = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:955](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L955)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:953](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L953)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.Bytes" = "audiotool.document.v1.opt.Bytes";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:954](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L954)

## Methods

### equals()

```ts
static equals(a: Bytes | PlainMessage<Bytes> | undefined, b: Bytes | PlainMessage<Bytes> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:971](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L971)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Bytes` \| `PlainMessage`\<`Bytes`\> \| `undefined` |
| `b` | `Bytes` \| `PlainMessage`\<`Bytes`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bytes;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:959](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L959)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Bytes`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bytes;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:963](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L963)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Bytes`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bytes;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:967](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L967)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Bytes`
