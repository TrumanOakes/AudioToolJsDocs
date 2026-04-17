---
title: "UploadAvatarResponse"
parent: "api"
grand_parent: "API"
nav_order: 141
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UploadAvatarResponse

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:648](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L648)

Response for UserService.UploadAvatar

## Generated

from message audiotool.user.v1.UploadAvatarResponse

## Extends

- `Message`\<`UploadAvatarResponse`\>

## Constructors

### Constructor

```ts
new UploadAvatarResponse(data?: PartialMessage<UploadAvatarResponse>): UploadAvatarResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:656](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L656)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UploadAvatarResponse`\> |

#### Returns

`UploadAvatarResponse`

#### Overrides

```ts
Message<UploadAvatarResponse>.constructor
```

## Properties

### avatarUrl

```ts
avatarUrl: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:654](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L654)

Location of avatar that was uploaded

#### Generated

from field: string avatar_url = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:663](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L663)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:661](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L661)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.UploadAvatarResponse" = "audiotool.user.v1.UploadAvatarResponse";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:662](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L662)

## Methods

### equals()

```ts
static equals(a: 
  | UploadAvatarResponse
  | PlainMessage<UploadAvatarResponse>
  | undefined, b: 
  | UploadAvatarResponse
  | PlainMessage<UploadAvatarResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:679](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L679)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UploadAvatarResponse` \| `PlainMessage`\<`UploadAvatarResponse`\> \| `undefined` |
| `b` | \| `UploadAvatarResponse` \| `PlainMessage`\<`UploadAvatarResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadAvatarResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:667](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L667)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UploadAvatarResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadAvatarResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:671](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L671)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadAvatarResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadAvatarResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:675](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L675)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UploadAvatarResponse`
