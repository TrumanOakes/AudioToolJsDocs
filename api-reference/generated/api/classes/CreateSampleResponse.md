---
title: "CreateSampleResponse"
parent: "api"
grand_parent: "API"
nav_order: 21
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreateSampleResponse

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:291](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L291)

Response for SampleService.CreateSample.

## Generated

from message audiotool.sample.v1.CreateSampleResponse

## Extends

- `Message`\<`CreateSampleResponse`\>

## Constructors

### Constructor

```ts
new CreateSampleResponse(data?: PartialMessage<CreateSampleResponse>): CreateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:319](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L319)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreateSampleResponse`\> |

#### Returns

`CreateSampleResponse`

#### Overrides

```ts
Message<CreateSampleResponse>.constructor
```

## Properties

### sample?

```ts
optional sample?: Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:297](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L297)

The created sample.

#### Generated

from field: audiotool.sample.v1.Sample sample = 1;

***

### uploadEndpoint?

```ts
optional uploadEndpoint?: SampleUploadEndpoint;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:317](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L317)

The upload endpoint.

The sample will not be visible in List requests until the upload is finished and processed.
The client must call the `UploadSampleFinished` RPC to signal the server that the upload is
finished.

If the upload doesn't happen within a certain time frame the server will delete the sample and
the endpoint will be invalid.

The accepted data formats are:
- mp3
- wav
- flac
- ogg

#### Generated

from field: audiotool.sample.v1.SampleUploadEndpoint upload_endpoint = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:326](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L326)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:324](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L324)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.CreateSampleResponse" = "audiotool.sample.v1.CreateSampleResponse";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:325](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L325)

## Methods

### equals()

```ts
static equals(a: 
  | CreateSampleResponse
  | PlainMessage<CreateSampleResponse>
  | undefined, b: 
  | CreateSampleResponse
  | PlainMessage<CreateSampleResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:343](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L343)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreateSampleResponse` \| `PlainMessage`\<`CreateSampleResponse`\> \| `undefined` |
| `b` | \| `CreateSampleResponse` \| `PlainMessage`\<`CreateSampleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:331](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L331)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreateSampleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:335](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L335)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateSampleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:339](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L339)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateSampleResponse`
