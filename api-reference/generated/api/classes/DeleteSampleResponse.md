---
title: "DeleteSampleResponse"
parent: "api"
grand_parent: "API"
nav_order: 31
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteSampleResponse

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:640](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L640)

Response for SampleService.DeleteSample.

## Generated

from message audiotool.sample.v1.DeleteSampleResponse

## Extends

- `Message`\<`DeleteSampleResponse`\>

## Constructors

### Constructor

```ts
new DeleteSampleResponse(data?: PartialMessage<DeleteSampleResponse>): DeleteSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:641](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L641)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteSampleResponse`\> |

#### Returns

`DeleteSampleResponse`

#### Overrides

```ts
Message<DeleteSampleResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:648](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L648)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:646](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L646)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.DeleteSampleResponse" = "audiotool.sample.v1.DeleteSampleResponse";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:647](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L647)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteSampleResponse
  | PlainMessage<DeleteSampleResponse>
  | undefined, b: 
  | DeleteSampleResponse
  | PlainMessage<DeleteSampleResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:663](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L663)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteSampleResponse` \| `PlainMessage`\<`DeleteSampleResponse`\> \| `undefined` |
| `b` | \| `DeleteSampleResponse` \| `PlainMessage`\<`DeleteSampleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:651](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L651)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteSampleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:655](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L655)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteSampleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:659](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L659)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteSampleResponse`
