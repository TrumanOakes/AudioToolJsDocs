---
title: "ListOperationsRequest"
parent: "api"
grand_parent: "API"
nav_order: 67
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListOperationsRequest

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:229](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L229)

The request message for OperationService.ListOperations

## Generated

from message audiotool.longrunning.v1.ListOperationsRequest

## Extends

- `Message`\<`ListOperationsRequest`\>

## Constructors

### Constructor

```ts
new ListOperationsRequest(data?: PartialMessage<ListOperationsRequest>): ListOperationsRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:258](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L258)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListOperationsRequest`\> |

#### Returns

`ListOperationsRequest`

#### Overrides

```ts
Message<ListOperationsRequest>.constructor
```

## Properties

### filter

```ts
filter: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:242](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L242)

The standard list filter.

#### Generated

from field: string filter = 1;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:235](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L235)

The name of the operation's parent resource.

#### Generated

from field: string name = 4;

***

### pageSize

```ts
pageSize: number = 0;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:249](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L249)

The standard list page size.

#### Generated

from field: int32 page_size = 2;

***

### pageToken

```ts
pageToken: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:256](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L256)

The standard list page token.

#### Generated

from field: string page_token = 3;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:265](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L265)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:263](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L263)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.ListOperationsRequest" = "audiotool.longrunning.v1.ListOperationsRequest";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:264](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L264)

## Methods

### equals()

```ts
static equals(a: 
  | ListOperationsRequest
  | PlainMessage<ListOperationsRequest>
  | undefined, b: 
  | ListOperationsRequest
  | PlainMessage<ListOperationsRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:284](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L284)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListOperationsRequest` \| `PlainMessage`\<`ListOperationsRequest`\> \| `undefined` |
| `b` | \| `ListOperationsRequest` \| `PlainMessage`\<`ListOperationsRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOperationsRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:272](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L272)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListOperationsRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOperationsRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:276](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L276)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListOperationsRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOperationsRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:280](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L280)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListOperationsRequest`
