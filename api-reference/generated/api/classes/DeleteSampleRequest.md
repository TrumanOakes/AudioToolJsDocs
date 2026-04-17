---
title: "DeleteSampleRequest"
parent: "api"
grand_parent: "API"
nav_order: 30
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteSampleRequest

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:599](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L599)

Request for SampleService.DeleteSample.

## Generated

from message audiotool.sample.v1.DeleteSampleRequest

## Extends

- `Message`\<`DeleteSampleRequest`\>

## Constructors

### Constructor

```ts
new DeleteSampleRequest(data?: PartialMessage<DeleteSampleRequest>): DeleteSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:607](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L607)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteSampleRequest`\> |

#### Returns

`DeleteSampleRequest`

#### Overrides

```ts
Message<DeleteSampleRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:605](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L605)

Required. The name of the sample to be deleted, in the form `samples/{name}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:614](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L614)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:612](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L612)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.DeleteSampleRequest" = "audiotool.sample.v1.DeleteSampleRequest";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:613](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L613)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteSampleRequest
  | PlainMessage<DeleteSampleRequest>
  | undefined, b: 
  | DeleteSampleRequest
  | PlainMessage<DeleteSampleRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:630](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L630)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteSampleRequest` \| `PlainMessage`\<`DeleteSampleRequest`\> \| `undefined` |
| `b` | \| `DeleteSampleRequest` \| `PlainMessage`\<`DeleteSampleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:618](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L618)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteSampleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:622](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L622)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteSampleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:626](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L626)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteSampleRequest`
