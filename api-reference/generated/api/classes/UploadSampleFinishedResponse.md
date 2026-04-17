---
title: "UploadSampleFinishedResponse"
parent: "api"
grand_parent: "API"
nav_order: 145
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UploadSampleFinishedResponse

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:394](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L394)

Response for SampleService.UploadSampleFinished.

## Generated

from message audiotool.sample.v1.UploadSampleFinishedResponse

## Extends

- `Message`\<`UploadSampleFinishedResponse`\>

## Constructors

### Constructor

```ts
new UploadSampleFinishedResponse(data?: PartialMessage<UploadSampleFinishedResponse>): UploadSampleFinishedResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:395](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L395)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UploadSampleFinishedResponse`\> |

#### Returns

`UploadSampleFinishedResponse`

#### Overrides

```ts
Message<UploadSampleFinishedResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:402](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L402)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:400](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L400)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.UploadSampleFinishedResponse" = "audiotool.sample.v1.UploadSampleFinishedResponse";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:401](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L401)

## Methods

### equals()

```ts
static equals(a: 
  | UploadSampleFinishedResponse
  | PlainMessage<UploadSampleFinishedResponse>
  | undefined, b: 
  | UploadSampleFinishedResponse
  | PlainMessage<UploadSampleFinishedResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:417](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L417)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UploadSampleFinishedResponse` \| `PlainMessage`\<`UploadSampleFinishedResponse`\> \| `undefined` |
| `b` | \| `UploadSampleFinishedResponse` \| `PlainMessage`\<`UploadSampleFinishedResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadSampleFinishedResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:405](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L405)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UploadSampleFinishedResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadSampleFinishedResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:409](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L409)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadSampleFinishedResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadSampleFinishedResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:413](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L413)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadSampleFinishedResponse`
