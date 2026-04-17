---
title: "CancelOperationRequest"
parent: "api"
grand_parent: "API"
nav_order: 8
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CancelOperationRequest

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:343](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L343)

The request message for OperationService.CancelOperation

## Generated

from message audiotool.longrunning.v1.CancelOperationRequest

## Extends

- `Message`\<`CancelOperationRequest`\>

## Constructors

### Constructor

```ts
new CancelOperationRequest(data?: PartialMessage<CancelOperationRequest>): CancelOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:351](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L351)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CancelOperationRequest`\> |

#### Returns

`CancelOperationRequest`

#### Overrides

```ts
Message<CancelOperationRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:349](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L349)

The name of the operation resource to be cancelled.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:358](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L358)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:356](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L356)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.CancelOperationRequest" = "audiotool.longrunning.v1.CancelOperationRequest";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:357](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L357)

## Methods

### equals()

```ts
static equals(a: 
  | CancelOperationRequest
  | PlainMessage<CancelOperationRequest>
  | undefined, b: 
  | CancelOperationRequest
  | PlainMessage<CancelOperationRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:374](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L374)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CancelOperationRequest` \| `PlainMessage`\<`CancelOperationRequest`\> \| `undefined` |
| `b` | \| `CancelOperationRequest` \| `PlainMessage`\<`CancelOperationRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:362](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L362)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CancelOperationRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:366](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L366)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CancelOperationRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:370](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L370)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CancelOperationRequest`
