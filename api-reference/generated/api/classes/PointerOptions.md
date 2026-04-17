---
title: "PointerOptions"
parent: "api"
grand_parent: "API"
nav_order: 89
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: PointerOptions

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:496](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L496)

Options that must be set on any `Pointer` field.

## Generated

from message audiotool.document.v1.opt.PointerOptions

## Extends

- `Message`\<`PointerOptions`\>

## Constructors

### Constructor

```ts
new PointerOptions(data?: PartialMessage<PointerOptions>): PointerOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:512](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L512)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`PointerOptions`\> |

#### Returns

`PointerOptions`

#### Overrides

```ts
Message<PointerOptions>.constructor
```

## Properties

### required

```ts
required: boolean = false;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:510](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L510)

If this is true, the document is invalid if the value is not set to a valid
destination.

#### Generated

from field: bool required = 2;

***

### target

```ts
target: TargetType = TargetType.Groove;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:502](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L502)

Restricts the field to only point to locations with a specific TargetType.

#### Generated

from field: audiotool.document.v1.opt.TargetType target = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:519](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L519)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:517](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L517)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.PointerOptions" = "audiotool.document.v1.opt.PointerOptions";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:518](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L518)

## Methods

### equals()

```ts
static equals(a: PointerOptions | PlainMessage<PointerOptions> | undefined, b: PointerOptions | PlainMessage<PointerOptions> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:536](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L536)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `PointerOptions` \| `PlainMessage`\<`PointerOptions`\> \| `undefined` |
| `b` | `PointerOptions` \| `PlainMessage`\<`PointerOptions`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PointerOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:524](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L524)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`PointerOptions`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PointerOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:528](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L528)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`PointerOptions`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PointerOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:532](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L532)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`PointerOptions`
