---
title: "CancelOperationResponse"
parent: "api"
grand_parent: "API"
nav_order: 9
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CancelOperationResponse

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:384](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L384)

The response message for OperationService.CancelOperation

## Generated

from message audiotool.longrunning.v1.CancelOperationResponse

## Extends

- `Message`\<`CancelOperationResponse`\>

## Constructors

### Constructor

```ts
new CancelOperationResponse(data?: PartialMessage<CancelOperationResponse>): CancelOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:385](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L385)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CancelOperationResponse`\> |

#### Returns

`CancelOperationResponse`

#### Overrides

```ts
Message<CancelOperationResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:392](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L392)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:390](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L390)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.CancelOperationResponse" = "audiotool.longrunning.v1.CancelOperationResponse";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:391](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L391)

## Methods

### equals()

```ts
static equals(a: 
  | CancelOperationResponse
  | PlainMessage<CancelOperationResponse>
  | undefined, b: 
  | CancelOperationResponse
  | PlainMessage<CancelOperationResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:407](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L407)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CancelOperationResponse` \| `PlainMessage`\<`CancelOperationResponse`\> \| `undefined` |
| `b` | \| `CancelOperationResponse` \| `PlainMessage`\<`CancelOperationResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:395](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L395)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CancelOperationResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:399](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L399)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CancelOperationResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelOperationResponse;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:403](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L403)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CancelOperationResponse`
