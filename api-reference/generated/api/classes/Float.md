---
title: "Float"
parent: "api"
grand_parent: "API"
nav_order: 39
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Float

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:839](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L839)

Options for `float` fields.

## Generated

from message audiotool.document.v1.opt.Float

## Extends

- `Message`\<`Float`\>

## Constructors

### Constructor

```ts
new Float(data?: PartialMessage<Float>): Float;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:854](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L854)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Float`\> |

#### Returns

`Float`

#### Overrides

```ts
Message<Float>.constructor
```

## Properties

### init

```ts
init: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:845](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L845)

Default value of this field.

#### Generated

from field: float init = 1;

***

### range?

```ts
optional range?: FloatRange;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:852](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L852)

Optional validity range of this field.

#### Generated

from field: audiotool.document.v1.opt.FloatRange range = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:861](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L861)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:859](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L859)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.Float" = "audiotool.document.v1.opt.Float";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:860](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L860)

## Methods

### equals()

```ts
static equals(a: Float | PlainMessage<Float> | undefined, b: Float | PlainMessage<Float> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:878](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L878)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Float` \| `PlainMessage`\<`Float`\> \| `undefined` |
| `b` | `Float` \| `PlainMessage`\<`Float`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Float;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:866](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L866)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Float`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Float;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:870](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L870)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Float`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Float;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:874](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L874)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Float`
