---
title: "GetOperationResponse"
parent: "api"
grand_parent: "API"
nav_order: 48
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetOperationResponse

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:188](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L188)

The response message for OperationService.GetOperation

## Generated

from message audiotool.longrunning.v1.GetOperationResponse

## Extends

- `Message`\<`GetOperationResponse`\>

## Constructors

### Constructor

```ts
new GetOperationResponse(data?: PartialMessage<GetOperationResponse>): GetOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:196](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L196)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetOperationResponse`\> |

#### Returns

`GetOperationResponse`

#### Overrides

```ts
Message<GetOperationResponse>.constructor
```

## Properties

### operation?

```ts
optional operation?: Operation;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:194](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L194)

The operation resource.

#### Generated

from field: audiotool.longrunning.v1.Operation operation = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:203](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L203)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:201](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L201)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.GetOperationResponse" = "audiotool.longrunning.v1.GetOperationResponse";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:202](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L202)

## Methods

### equals()

```ts
static equals(a: 
  | GetOperationResponse
  | PlainMessage<GetOperationResponse>
  | undefined, b: 
  | GetOperationResponse
  | PlainMessage<GetOperationResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:219](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L219)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `GetOperationResponse` \| `PlainMessage`\<`GetOperationResponse`\> \| `undefined` |
| `b` | \| `GetOperationResponse` \| `PlainMessage`\<`GetOperationResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:207](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L207)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetOperationResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:211](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L211)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetOperationResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:215](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L215)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetOperationResponse`
