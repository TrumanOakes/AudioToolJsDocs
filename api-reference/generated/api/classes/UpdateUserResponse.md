---
title: "UpdateUserResponse"
parent: "api"
grand_parent: "API"
nav_order: 139
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateUserResponse

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:382](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L382)

Response for UserService.UpdateUser.

## Generated

from message audiotool.user.v1.UpdateUserResponse

## Extends

- `Message`\<`UpdateUserResponse`\>

## Constructors

### Constructor

```ts
new UpdateUserResponse(data?: PartialMessage<UpdateUserResponse>): UpdateUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:390](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L390)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateUserResponse`\> |

#### Returns

`UpdateUserResponse`

#### Overrides

```ts
Message<UpdateUserResponse>.constructor
```

## Properties

### user?

```ts
optional user?: User;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:388](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L388)

The user.

#### Generated

from field: audiotool.user.v1.User user = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:397](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L397)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:395](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L395)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.UpdateUserResponse" = "audiotool.user.v1.UpdateUserResponse";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:396](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L396)

## Methods

### equals()

```ts
static equals(a: UpdateUserResponse | PlainMessage<UpdateUserResponse> | undefined, b: UpdateUserResponse | PlainMessage<UpdateUserResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:413](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L413)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `UpdateUserResponse` \| `PlainMessage`\<`UpdateUserResponse`\> \| `undefined` |
| `b` | `UpdateUserResponse` \| `PlainMessage`\<`UpdateUserResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:401](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L401)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateUserResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:405](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L405)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateUserResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:409](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L409)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateUserResponse`
