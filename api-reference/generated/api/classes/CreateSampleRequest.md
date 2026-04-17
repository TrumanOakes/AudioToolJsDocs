---
title: "CreateSampleRequest"
parent: "api"
grand_parent: "API"
nav_order: 20
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreateSampleRequest

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:189](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L189)

Request for SampleService.CreateSample.

## Generated

from message audiotool.sample.v1.CreateSampleRequest

## Extends

- `Message`\<`CreateSampleRequest`\>

## Constructors

### Constructor

```ts
new CreateSampleRequest(data?: PartialMessage<CreateSampleRequest>): CreateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:206](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L206)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreateSampleRequest`\> |

#### Returns

`CreateSampleRequest`

#### Overrides

```ts
Message<CreateSampleRequest>.constructor
```

## Properties

### sample?

```ts
optional sample?: Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:204](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L204)

The sample to create.

A client can provide a sample ID ahead of time. If provided, the server will use this ID
instead of generating a new one.

The sample ID must be unique and in the pattern of `samples/{uuid-v4}`.

If the sample ID is already in use there are two possible outcomes:
- the CreateSample RPC will error out
- Later on Processing of the data will fail (UploadSampleFinished and the async processing)

#### Generated

from field: audiotool.sample.v1.Sample sample = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:213](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L213)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:211](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L211)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.CreateSampleRequest" = "audiotool.sample.v1.CreateSampleRequest";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:212](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L212)

## Methods

### equals()

```ts
static equals(a: 
  | CreateSampleRequest
  | PlainMessage<CreateSampleRequest>
  | undefined, b: 
  | CreateSampleRequest
  | PlainMessage<CreateSampleRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:229](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L229)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreateSampleRequest` \| `PlainMessage`\<`CreateSampleRequest`\> \| `undefined` |
| `b` | \| `CreateSampleRequest` \| `PlainMessage`\<`CreateSampleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:217](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L217)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreateSampleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:221](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L221)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateSampleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:225](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L225)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateSampleRequest`
