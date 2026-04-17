---
title: "UInt32"
parent: "api"
grand_parent: "API"
nav_order: 126
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UInt32

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:738](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L738)

Options for `uint32` fields.

## Generated

from message audiotool.document.v1.opt.UInt32

## Extends

- `Message`\<`UInt32`\>

## Constructors

### Constructor

```ts
new UInt32(data?: PartialMessage<UInt32>): UInt32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:753](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L753)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UInt32`\> |

#### Returns

`UInt32`

#### Overrides

```ts
Message<UInt32>.constructor
```

## Properties

### init

```ts
init: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:744](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L744)

Suggested default value of this field.

#### Generated

from field: uint32 init = 1;

***

### range?

```ts
optional range?: UInt32Range;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:751](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L751)

Optional validity range of this field.

#### Generated

from field: audiotool.document.v1.opt.UInt32Range range = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:760](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L760)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:758](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L758)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.UInt32" = "audiotool.document.v1.opt.UInt32";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:759](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L759)

## Methods

### equals()

```ts
static equals(a: UInt32 | PlainMessage<UInt32> | undefined, b: UInt32 | PlainMessage<UInt32> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:777](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L777)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `UInt32` \| `PlainMessage`\<`UInt32`\> \| `undefined` |
| `b` | `UInt32` \| `PlainMessage`\<`UInt32`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UInt32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:765](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L765)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UInt32`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UInt32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:769](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L769)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UInt32`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UInt32;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:773](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L773)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UInt32`
