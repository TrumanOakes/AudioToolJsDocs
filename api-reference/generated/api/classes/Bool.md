---
title: "Bool"
parent: "api"
grand_parent: "API"
nav_order: 5
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Bool

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:596](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L596)

Options for `bool` fields.

## Generated

from message audiotool.document.v1.opt.Bool

## Extends

- `Message`\<`Bool`\>

## Constructors

### Constructor

```ts
new Bool(data?: PartialMessage<Bool>): Bool;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:604](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L604)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Bool`\> |

#### Returns

`Bool`

#### Overrides

```ts
Message<Bool>.constructor
```

## Properties

### init

```ts
init: boolean = false;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:602](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L602)

Suggested default value of this field.

#### Generated

from field: bool init = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:611](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L611)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:609](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L609)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.Bool" = "audiotool.document.v1.opt.Bool";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:610](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L610)

## Methods

### equals()

```ts
static equals(a: Bool | PlainMessage<Bool> | undefined, b: Bool | PlainMessage<Bool> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:627](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L627)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Bool` \| `PlainMessage`\<`Bool`\> \| `undefined` |
| `b` | `Bool` \| `PlainMessage`\<`Bool`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bool;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:615](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L615)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Bool`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bool;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:619](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L619)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Bool`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bool;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:623](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L623)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Bool`
