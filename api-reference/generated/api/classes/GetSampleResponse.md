---
title: "GetSampleResponse"
parent: "api"
grand_parent: "API"
nav_order: 54
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetSampleResponse

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:468](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L468)

Response for SampleService.GetSample.

## Generated

from message audiotool.sample.v1.GetSampleResponse

## Extends

- `Message`\<`GetSampleResponse`\>

## Constructors

### Constructor

```ts
new GetSampleResponse(data?: PartialMessage<GetSampleResponse>): GetSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:476](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L476)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetSampleResponse`\> |

#### Returns

`GetSampleResponse`

#### Overrides

```ts
Message<GetSampleResponse>.constructor
```

## Properties

### sample?

```ts
optional sample?: Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:474](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L474)

The sample.

#### Generated

from field: audiotool.sample.v1.Sample sample = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:483](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L483)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:481](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L481)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.GetSampleResponse" = "audiotool.sample.v1.GetSampleResponse";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:482](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L482)

## Methods

### equals()

```ts
static equals(a: GetSampleResponse | PlainMessage<GetSampleResponse> | undefined, b: GetSampleResponse | PlainMessage<GetSampleResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:499](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L499)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetSampleResponse` \| `PlainMessage`\<`GetSampleResponse`\> \| `undefined` |
| `b` | `GetSampleResponse` \| `PlainMessage`\<`GetSampleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:487](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L487)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetSampleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:491](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L491)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSampleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:495](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L495)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSampleResponse`
