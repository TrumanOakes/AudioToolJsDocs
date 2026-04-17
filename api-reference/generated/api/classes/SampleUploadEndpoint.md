---
title: "SampleUploadEndpoint"
parent: "api"
grand_parent: "API"
nav_order: 109
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: SampleUploadEndpoint

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:239](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L239)

Message containing the upload URL and values to be sent as FormData.

## Generated

from message audiotool.sample.v1.SampleUploadEndpoint

## Extends

- `Message`\<`SampleUploadEndpoint`\>

## Constructors

### Constructor

```ts
new SampleUploadEndpoint(data?: PartialMessage<SampleUploadEndpoint>): SampleUploadEndpoint;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:257](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L257)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`SampleUploadEndpoint`\> |

#### Returns

`SampleUploadEndpoint`

#### Overrides

```ts
Message<SampleUploadEndpoint>.constructor
```

## Properties

### headers

```ts
headers: {
[key: string]: string;
} = {};
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:255](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L255)

Values is a key-value map of values to be sent with the request.

#### Index Signature

```ts
[key: string]: string
```

#### Generated

from field: map<string, string> headers = 2;

***

### uploadUrl

```ts
uploadUrl: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:248](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L248)

The URL to upload the sample to. This represents the Base URL to make a request to.
The request must be sent using a PUT request

If the client is finished with the upload it must call the `UploadSampleFinished` RPC.

#### Generated

from field: string upload_url = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:264](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L264)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:262](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L262)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.SampleUploadEndpoint" = "audiotool.sample.v1.SampleUploadEndpoint";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:263](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L263)

## Methods

### equals()

```ts
static equals(a: 
  | SampleUploadEndpoint
  | PlainMessage<SampleUploadEndpoint>
  | undefined, b: 
  | SampleUploadEndpoint
  | PlainMessage<SampleUploadEndpoint>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:281](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L281)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `SampleUploadEndpoint` \| `PlainMessage`\<`SampleUploadEndpoint`\> \| `undefined` |
| `b` | \| `SampleUploadEndpoint` \| `PlainMessage`\<`SampleUploadEndpoint`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SampleUploadEndpoint;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:269](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L269)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`SampleUploadEndpoint`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SampleUploadEndpoint;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:273](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L273)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SampleUploadEndpoint`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SampleUploadEndpoint;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:277](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L277)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SampleUploadEndpoint`
