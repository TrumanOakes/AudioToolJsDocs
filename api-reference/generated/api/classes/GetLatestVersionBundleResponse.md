---
title: "GetLatestVersionBundleResponse"
parent: "api"
grand_parent: "API"
nav_order: 46
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetLatestVersionBundleResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:998](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L998)

Response for ProjectService.GetLatestVersionBundle

## Generated

from message audiotool.project.v1.GetLatestVersionBundleResponse

## Extends

- `Message`\<`GetLatestVersionBundleResponse`\>

## Constructors

### Constructor

```ts
new GetLatestVersionBundleResponse(data?: PartialMessage<GetLatestVersionBundleResponse>): GetLatestVersionBundleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1022](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1022)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetLatestVersionBundleResponse`\> |

#### Returns

`GetLatestVersionBundleResponse`

#### Overrides

```ts
Message<GetLatestVersionBundleResponse>.constructor
```

## Properties

### audioEnginePrefixUrl

```ts
audioEnginePrefixUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1020](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1020)

The prefix URL for the audio engine (location of assets in the CDN).

#### Generated

from field: string audio_engine_prefix_url = 3;

***

### documentServicePrefixUrl

```ts
documentServicePrefixUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1013](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1013)

The prefix URL for document_service (location of assets in the CDN).

Within this location is the document_validator.wasm

#### Generated

from field: string document_service_prefix_url = 2;

***

### studioPrefixUrl

```ts
studioPrefixUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1004](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1004)

The prefix URL for studio (location of assets in the CDN).

#### Generated

from field: string studio_prefix_url = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1029](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1029)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1027](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1027)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.GetLatestVersionBundleResponse" = "audiotool.project.v1.GetLatestVersionBundleResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1028](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1028)

## Methods

### equals()

```ts
static equals(a: 
  | GetLatestVersionBundleResponse
  | PlainMessage<GetLatestVersionBundleResponse>
  | undefined, b: 
  | GetLatestVersionBundleResponse
  | PlainMessage<GetLatestVersionBundleResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1047](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1047)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `GetLatestVersionBundleResponse` \| `PlainMessage`\<`GetLatestVersionBundleResponse`\> \| `undefined` |
| `b` | \| `GetLatestVersionBundleResponse` \| `PlainMessage`\<`GetLatestVersionBundleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestVersionBundleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1035](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1035)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetLatestVersionBundleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestVersionBundleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1039](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1039)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetLatestVersionBundleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestVersionBundleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:1043](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L1043)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetLatestVersionBundleResponse`
