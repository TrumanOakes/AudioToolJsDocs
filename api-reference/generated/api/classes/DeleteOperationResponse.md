---
title: "DeleteOperationResponse"
parent: "api"
grand_parent: "API"
nav_order: 23
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteOperationResponse

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:458](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L458)

The response message for OperationService.DeleteOperation

## Generated

from message audiotool.longrunning.v1.DeleteOperationResponse

## Extends

- `Message`\<`DeleteOperationResponse`\>

## Constructors

### Constructor

```ts
new DeleteOperationResponse(data?: PartialMessage<DeleteOperationResponse>): DeleteOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:459](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L459)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteOperationResponse`\> |

#### Returns

`DeleteOperationResponse`

#### Overrides

```ts
Message<DeleteOperationResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:466](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L466)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:464](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L464)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.DeleteOperationResponse" = "audiotool.longrunning.v1.DeleteOperationResponse";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:465](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L465)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteOperationResponse
  | PlainMessage<DeleteOperationResponse>
  | undefined, b: 
  | DeleteOperationResponse
  | PlainMessage<DeleteOperationResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:481](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L481)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteOperationResponse` \| `PlainMessage`\<`DeleteOperationResponse`\> \| `undefined` |
| `b` | \| `DeleteOperationResponse` \| `PlainMessage`\<`DeleteOperationResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:469](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L469)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteOperationResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:473](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L473)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteOperationResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:477](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L477)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteOperationResponse`
