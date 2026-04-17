---
title: "DeleteOperationRequest"
parent: "api"
grand_parent: "API"
nav_order: 22
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteOperationRequest

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:417](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L417)

The request message for OperationService.DeleteOperation

## Generated

from message audiotool.longrunning.v1.DeleteOperationRequest

## Extends

- `Message`\<`DeleteOperationRequest`\>

## Constructors

### Constructor

```ts
new DeleteOperationRequest(data?: PartialMessage<DeleteOperationRequest>): DeleteOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:425](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L425)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteOperationRequest`\> |

#### Returns

`DeleteOperationRequest`

#### Overrides

```ts
Message<DeleteOperationRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:423](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L423)

The name of the operation resource to be deleted.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:432](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L432)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:430](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L430)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.DeleteOperationRequest" = "audiotool.longrunning.v1.DeleteOperationRequest";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:431](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L431)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteOperationRequest
  | PlainMessage<DeleteOperationRequest>
  | undefined, b: 
  | DeleteOperationRequest
  | PlainMessage<DeleteOperationRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:448](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L448)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteOperationRequest` \| `PlainMessage`\<`DeleteOperationRequest`\> \| `undefined` |
| `b` | \| `DeleteOperationRequest` \| `PlainMessage`\<`DeleteOperationRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:436](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L436)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteOperationRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:440](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L440)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteOperationRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:444](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L444)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteOperationRequest`
