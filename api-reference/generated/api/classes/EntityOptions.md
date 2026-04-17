---
title: "EntityOptions"
parent: "api"
grand_parent: "API"
nav_order: 35
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: EntityOptions

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:455](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L455)

Options for fields

## Generated

from message audiotool.document.v1.opt.EntityOptions

## Extends

- `Message`\<`EntityOptions`\>

## Constructors

### Constructor

```ts
new EntityOptions(data?: PartialMessage<EntityOptions>): EntityOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:463](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L463)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`EntityOptions`\> |

#### Returns

`EntityOptions`

#### Overrides

```ts
Message<EntityOptions>.constructor
```

## Properties

### is

```ts
is: TargetType[] = [];
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:461](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L461)

Marks a field location with a specific name.

#### Generated

from field: repeated audiotool.document.v1.opt.TargetType is = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:470](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L470)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:468](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L468)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.EntityOptions" = "audiotool.document.v1.opt.EntityOptions";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:469](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L469)

## Methods

### equals()

```ts
static equals(a: EntityOptions | PlainMessage<EntityOptions> | undefined, b: EntityOptions | PlainMessage<EntityOptions> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:486](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L486)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `EntityOptions` \| `PlainMessage`\<`EntityOptions`\> \| `undefined` |
| `b` | `EntityOptions` \| `PlainMessage`\<`EntityOptions`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:474](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L474)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`EntityOptions`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:478](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L478)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`EntityOptions`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:482](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L482)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`EntityOptions`
