---
title: "FieldOptions"
parent: "api"
grand_parent: "API"
nav_order: 37
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: FieldOptions

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:405](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L405)

Options for fields

## Generated

from message audiotool.document.v1.opt.FieldOptions

## Extends

- `Message`\<`FieldOptions`\>

## Constructors

### Constructor

```ts
new FieldOptions(data?: PartialMessage<FieldOptions>): FieldOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:421](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L421)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`FieldOptions`\> |

#### Returns

`FieldOptions`

#### Overrides

```ts
Message<FieldOptions>.constructor
```

## Properties

### immutable

```ts
immutable: boolean = false;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:419](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L419)

Marks a field as immutable. Transactions updating the field are rejected. Has no effect
on fields that are messages other than Pointer.

#### Generated

from field: bool immutable = 2;

***

### is

```ts
is: TargetType[] = [];
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:411](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L411)

Marks a field location with a specific name.

#### Generated

from field: repeated audiotool.document.v1.opt.TargetType is = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:428](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L428)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:426](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L426)

***

### typeName

```ts
readonly static typeName: "audiotool.document.v1.opt.FieldOptions" = "audiotool.document.v1.opt.FieldOptions";
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:427](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L427)

## Methods

### equals()

```ts
static equals(a: FieldOptions | PlainMessage<FieldOptions> | undefined, b: FieldOptions | PlainMessage<FieldOptions> | undefined): boolean;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:445](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L445)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `FieldOptions` \| `PlainMessage`\<`FieldOptions`\> \| `undefined` |
| `b` | `FieldOptions` \| `PlainMessage`\<`FieldOptions`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:433](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L433)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`FieldOptions`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:437](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L437)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`FieldOptions`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldOptions;
```

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:441](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L441)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`FieldOptions`
