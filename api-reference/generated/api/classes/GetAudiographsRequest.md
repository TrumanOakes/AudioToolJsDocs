---
title: "GetAudiographsRequest"
parent: "api"
grand_parent: "API"
nav_order: 43
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetAudiographsRequest

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:129](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L129)

Request for AudiographService.GetAudiograph

## Generated

from message audiotool.audiograph.v1.GetAudiographsRequest

## Extends

- `Message`\<`GetAudiographsRequest`\>

## Constructors

### Constructor

```ts
new GetAudiographsRequest(data?: PartialMessage<GetAudiographsRequest>): GetAudiographsRequest;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:156](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L156)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetAudiographsRequest`\> |

#### Returns

`GetAudiographsRequest`

#### Overrides

```ts
Message<GetAudiographsRequest>.constructor
```

## Properties

### channels

```ts
channels: GetAudiographChannels = GetAudiographChannels.UNSPECIFIED;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:154](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L154)

The number of channels the client is interested in.

#### Generated

from field: audiotool.audiograph.v1.GetAudiographChannels channels = 3;

***

### resolution

```ts
resolution: GetAudiographResolution = GetAudiographResolution.GET_AUDIOGRAPH_RESOLUTION_UNSPECIFIED;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:147](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L147)

The maximum resolution of the audiograph the client is interested in.

The client is  not guaranteed to get the exact resolution requested, but you will get the
closest.

#### Generated

from field: audiotool.audiograph.v1.GetAudiographResolution resolution = 2;

***

### resourceNames

```ts
resourceNames: string[] = [];
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:137](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L137)

Required. The name of the audiograph to retrieve.

This can be a track or a sample entities resource name.

#### Generated

from field: repeated string resource_names = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:163](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L163)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L161)

***

### typeName

```ts
readonly static typeName: "audiotool.audiograph.v1.GetAudiographsRequest" = "audiotool.audiograph.v1.GetAudiographsRequest";
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:162](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L162)

## Methods

### equals()

```ts
static equals(a: 
  | GetAudiographsRequest
  | PlainMessage<GetAudiographsRequest>
  | undefined, b: 
  | GetAudiographsRequest
  | PlainMessage<GetAudiographsRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:181](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L181)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `GetAudiographsRequest` \| `PlainMessage`\<`GetAudiographsRequest`\> \| `undefined` |
| `b` | \| `GetAudiographsRequest` \| `PlainMessage`\<`GetAudiographsRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAudiographsRequest;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:169](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L169)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetAudiographsRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAudiographsRequest;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:173](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L173)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetAudiographsRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAudiographsRequest;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:177](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L177)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetAudiographsRequest`
