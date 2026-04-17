---
title: "ListOperationsResponse"
parent: "api"
grand_parent: "API"
nav_order: 68
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListOperationsResponse

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:294](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L294)

The response message for OperationService.ListOperations

## Generated

from message audiotool.longrunning.v1.ListOperationsResponse

## Extends

- `Message`\<`ListOperationsResponse`\>

## Constructors

### Constructor

```ts
new ListOperationsResponse(data?: PartialMessage<ListOperationsResponse>): ListOperationsResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:309](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L309)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListOperationsResponse`\> |

#### Returns

`ListOperationsResponse`

#### Overrides

```ts
Message<ListOperationsResponse>.constructor
```

## Properties

### nextPageToken

```ts
nextPageToken: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:307](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L307)

The standard List next-page token.

#### Generated

from field: string next_page_token = 2;

***

### operations

```ts
operations: Operation[] = [];
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:300](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L300)

A list of operations that matches the specified filter in the request.

#### Generated

from field: repeated audiotool.longrunning.v1.Operation operations = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:316](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L316)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:314](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L314)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.ListOperationsResponse" = "audiotool.longrunning.v1.ListOperationsResponse";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:315](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L315)

## Methods

### equals()

```ts
static equals(a: 
  | ListOperationsResponse
  | PlainMessage<ListOperationsResponse>
  | undefined, b: 
  | ListOperationsResponse
  | PlainMessage<ListOperationsResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:333](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L333)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListOperationsResponse` \| `PlainMessage`\<`ListOperationsResponse`\> \| `undefined` |
| `b` | \| `ListOperationsResponse` \| `PlainMessage`\<`ListOperationsResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOperationsResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:321](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L321)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListOperationsResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOperationsResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:325](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L325)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListOperationsResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOperationsResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:329](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L329)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListOperationsResponse`
