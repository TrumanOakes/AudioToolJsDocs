---
title: "GetOperationRequest"
parent: "api"
grand_parent: "API"
nav_order: 47
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetOperationRequest

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:147](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L147)

The request message for OperationService.GetOperation

## Generated

from message audiotool.longrunning.v1.GetOperationRequest

## Extends

- `Message`\<`GetOperationRequest`\>

## Constructors

### Constructor

```ts
new GetOperationRequest(data?: PartialMessage<GetOperationRequest>): GetOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:155](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L155)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetOperationRequest`\> |

#### Returns

`GetOperationRequest`

#### Overrides

```ts
Message<GetOperationRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L153)

The name of the operation resource.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:162](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L162)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:160](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L160)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.GetOperationRequest" = "audiotool.longrunning.v1.GetOperationRequest";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L161)

## Methods

### equals()

```ts
static equals(a: 
  | GetOperationRequest
  | PlainMessage<GetOperationRequest>
  | undefined, b: 
  | GetOperationRequest
  | PlainMessage<GetOperationRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:178](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L178)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `GetOperationRequest` \| `PlainMessage`\<`GetOperationRequest`\> \| `undefined` |
| `b` | \| `GetOperationRequest` \| `PlainMessage`\<`GetOperationRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:166](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L166)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetOperationRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:170](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L170)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetOperationRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOperationRequest;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:174](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L174)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetOperationRequest`
