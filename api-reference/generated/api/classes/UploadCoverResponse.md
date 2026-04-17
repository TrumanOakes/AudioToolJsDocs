---
title: "UploadCoverResponse"
parent: "api"
grand_parent: "API"
nav_order: 143
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UploadCoverResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:428](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L428)

Response for ProjectService.UploadCover.

## Generated

from message audiotool.project.v1.UploadCoverResponse

## Extends

- `Message`\<`UploadCoverResponse`\>

## Constructors

### Constructor

```ts
new UploadCoverResponse(data?: PartialMessage<UploadCoverResponse>): UploadCoverResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:436](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L436)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UploadCoverResponse`\> |

#### Returns

`UploadCoverResponse`

#### Overrides

```ts
Message<UploadCoverResponse>.constructor
```

## Properties

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:434](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L434)

The updated project.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:443](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L443)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:441](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L441)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.UploadCoverResponse" = "audiotool.project.v1.UploadCoverResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:442](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L442)

## Methods

### equals()

```ts
static equals(a: 
  | UploadCoverResponse
  | PlainMessage<UploadCoverResponse>
  | undefined, b: 
  | UploadCoverResponse
  | PlainMessage<UploadCoverResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:459](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L459)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UploadCoverResponse` \| `PlainMessage`\<`UploadCoverResponse`\> \| `undefined` |
| `b` | \| `UploadCoverResponse` \| `PlainMessage`\<`UploadCoverResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadCoverResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:447](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L447)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UploadCoverResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadCoverResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:451](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L451)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadCoverResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadCoverResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:455](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L455)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadCoverResponse`
