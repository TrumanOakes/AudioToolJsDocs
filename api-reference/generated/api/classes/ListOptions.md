---
title: "ListOptions"
parent: "api"
grand_parent: "API"
nav_order: 69
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListOptions

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:356](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L356)

A list provides 'length' elements in an array.
All items must immediately be created after creating the protobuf model.

To add options to elements, such as floats, use the field options above.

## Generated

from message audiotool.document.v1.opt.ListOptions

## Extends

- `Message`\<`ListOptions`\>

## Constructors

### Constructor

```ts
new ListOptions(data?: PartialMessage<ListOptions>): ListOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:371](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L371)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListOptions`\> |

#### Returns

`ListOptions`

#### Overrides

```ts
Message<ListOptions>.constructor
```

## Properties

### elementIs

```ts
elementIs: TargetType[] = [];
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:369](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L369)

Mark each element in a list of a list of TargetTypes.

#### Generated

from field: repeated audiotool.document.v1.opt.TargetType element_is = 2;

***

### length

```ts
length: number = 0;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:362](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L362)

The fixed length of the list.

#### Generated

from field: uint32 length = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:378](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L378)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:376](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L376)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.ListOptions" = "audiotool.document.v1.opt.ListOptions";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:377](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L377)

## Methods

### equals()

```ts
static equals(a: ListOptions | PlainMessage<ListOptions> | undefined, b: ListOptions | PlainMessage<ListOptions> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:395](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L395)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ListOptions` \| `PlainMessage`\<`ListOptions`\> \| `undefined` |
| `b` | `ListOptions` \| `PlainMessage`\<`ListOptions`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:383](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L383)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListOptions`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:387](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L387)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListOptions`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:391](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L391)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListOptions`
