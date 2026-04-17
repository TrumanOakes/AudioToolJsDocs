---
title: "UploadSampleFinishedRequest"
parent: "api"
grand_parent: "API"
nav_order: 144
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UploadSampleFinishedRequest

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:353](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L353)

Request for SampleService.UploadSampleFinished.

## Generated

from message audiotool.sample.v1.UploadSampleFinishedRequest

## Extends

- `Message`\<`UploadSampleFinishedRequest`\>

## Constructors

### Constructor

```ts
new UploadSampleFinishedRequest(data?: PartialMessage<UploadSampleFinishedRequest>): UploadSampleFinishedRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:361](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L361)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UploadSampleFinishedRequest`\> |

#### Returns

`UploadSampleFinishedRequest`

#### Overrides

```ts
Message<UploadSampleFinishedRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:359](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L359)

The name of the sample to be updated, in the form `samples/{name}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:368](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L368)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:366](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L366)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.UploadSampleFinishedRequest" = "audiotool.sample.v1.UploadSampleFinishedRequest";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:367](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L367)

## Methods

### equals()

```ts
static equals(a: 
  | UploadSampleFinishedRequest
  | PlainMessage<UploadSampleFinishedRequest>
  | undefined, b: 
  | UploadSampleFinishedRequest
  | PlainMessage<UploadSampleFinishedRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:384](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L384)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UploadSampleFinishedRequest` \| `PlainMessage`\<`UploadSampleFinishedRequest`\> \| `undefined` |
| `b` | \| `UploadSampleFinishedRequest` \| `PlainMessage`\<`UploadSampleFinishedRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadSampleFinishedRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:372](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L372)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UploadSampleFinishedRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadSampleFinishedRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:376](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L376)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadSampleFinishedRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadSampleFinishedRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:380](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L380)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadSampleFinishedRequest`
