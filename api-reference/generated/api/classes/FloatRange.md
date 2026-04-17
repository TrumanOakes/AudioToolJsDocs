---
title: "FloatRange"
parent: "api"
grand_parent: "API"
nav_order: 40
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: FloatRange

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:891](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L891)

Marks the field as only being valid if its value is within `[min, max]`, inclusive.

Note that proto doesn't allow unset primitive fields; if one of `min` or
`max` is left out, that value will be set to 0.

## Generated

from message audiotool.document.v1.opt.FloatRange

## Extends

- `Message`\<`FloatRange`\>

## Constructors

### Constructor

```ts
new FloatRange(data?: PartialMessage<FloatRange>): FloatRange;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:906](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L906)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`FloatRange`\> |

#### Returns

`FloatRange`

#### Overrides

```ts
Message<FloatRange>.constructor
```

## Properties

### max

```ts
max: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:904](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L904)

Upper bound of validity range.

#### Generated

from field: float max = 2;

***

### min

```ts
min: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:897](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L897)

Lower bound of validity range.

#### Generated

from field: float min = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:913](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L913)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:911](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L911)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.FloatRange" = "audiotool.document.v1.opt.FloatRange";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:912](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L912)

## Methods

### equals()

```ts
static equals(a: FloatRange | PlainMessage<FloatRange> | undefined, b: FloatRange | PlainMessage<FloatRange> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:930](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L930)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `FloatRange` \| `PlainMessage`\<`FloatRange`\> \| `undefined` |
| `b` | `FloatRange` \| `PlainMessage`\<`FloatRange`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FloatRange;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:918](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L918)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`FloatRange`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FloatRange;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:922](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L922)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`FloatRange`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FloatRange;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:926](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L926)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`FloatRange`
