---
title: "UploadCoverRequest"
parent: "api"
grand_parent: "API"
nav_order: 142
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UploadCoverRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:375](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L375)

Request for ProjectService.UploadCover.

## Generated

from message audiotool.project.v1.UploadCoverRequest

## Extends

- `Message`\<`UploadCoverRequest`\>

## Constructors

### Constructor

```ts
new UploadCoverRequest(data?: PartialMessage<UploadCoverRequest>): UploadCoverRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:394](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L394)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UploadCoverRequest`\> |

#### Returns

`UploadCoverRequest`

#### Overrides

```ts
Message<UploadCoverRequest>.constructor
```

## Properties

### data

```ts
data: Uint8Array<ArrayBuffer>;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:392](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L392)

The image to upload. The data format will be automatically detected.
the following formats are supported:
- JPEG
- PNG
- WEBP

#### Generated

from field: bytes data = 2;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:381](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L381)

Required. The name of the project to upload the cover, in the form of `projects/{project_id}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:401](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L401)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:399](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L399)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.UploadCoverRequest" = "audiotool.project.v1.UploadCoverRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:400](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L400)

## Methods

### equals()

```ts
static equals(a: UploadCoverRequest | PlainMessage<UploadCoverRequest> | undefined, b: UploadCoverRequest | PlainMessage<UploadCoverRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:418](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L418)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `UploadCoverRequest` \| `PlainMessage`\<`UploadCoverRequest`\> \| `undefined` |
| `b` | `UploadCoverRequest` \| `PlainMessage`\<`UploadCoverRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadCoverRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:406](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L406)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UploadCoverRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadCoverRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:410](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L410)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadCoverRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadCoverRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:414](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L414)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadCoverRequest`
