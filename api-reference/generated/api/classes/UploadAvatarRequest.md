---
title: "UploadAvatarRequest"
parent: "api"
grand_parent: "API"
nav_order: 140
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UploadAvatarRequest

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:603](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L603)

Request for UserService.UploadAvatar

## Generated

from message audiotool.user.v1.UploadAvatarRequest

## Extends

- `Message`\<`UploadAvatarRequest`\>

## Constructors

### Constructor

```ts
new UploadAvatarRequest(data?: PartialMessage<UploadAvatarRequest>): UploadAvatarRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:615](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L615)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UploadAvatarRequest`\> |

#### Returns

`UploadAvatarRequest`

#### Overrides

```ts
Message<UploadAvatarRequest>.constructor
```

## Properties

### data

```ts
data: Uint8Array<ArrayBuffer>;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:613](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L613)

The sample to upload. The data format will be automatically detected.
the following formats are supported:
- JPEG
- PNG
- WEBP

#### Generated

from field: bytes data = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:622](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L622)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:620](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L620)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.UploadAvatarRequest" = "audiotool.user.v1.UploadAvatarRequest";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:621](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L621)

## Methods

### equals()

```ts
static equals(a: 
  | UploadAvatarRequest
  | PlainMessage<UploadAvatarRequest>
  | undefined, b: 
  | UploadAvatarRequest
  | PlainMessage<UploadAvatarRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:638](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L638)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UploadAvatarRequest` \| `PlainMessage`\<`UploadAvatarRequest`\> \| `undefined` |
| `b` | \| `UploadAvatarRequest` \| `PlainMessage`\<`UploadAvatarRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadAvatarRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:626](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L626)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UploadAvatarRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadAvatarRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:630](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L630)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadAvatarRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadAvatarRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:634](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L634)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadAvatarRequest`
