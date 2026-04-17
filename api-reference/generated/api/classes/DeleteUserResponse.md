---
title: "DeleteUserResponse"
parent: "api"
grand_parent: "API"
nav_order: 33
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteUserResponse

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:292](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L292)

Response for UserService.DeleteUser.

## Generated

from message audiotool.user.v1.DeleteUserResponse

## Extends

- `Message`\<`DeleteUserResponse`\>

## Constructors

### Constructor

```ts
new DeleteUserResponse(data?: PartialMessage<DeleteUserResponse>): DeleteUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:300](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L300)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteUserResponse`\> |

#### Returns

`DeleteUserResponse`

#### Overrides

```ts
Message<DeleteUserResponse>.constructor
```

## Properties

### user?

```ts
optional user?: User;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:298](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L298)

The user.

#### Generated

from field: audiotool.user.v1.User user = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:307](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L307)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:305](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L305)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.DeleteUserResponse" = "audiotool.user.v1.DeleteUserResponse";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:306](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L306)

## Methods

### equals()

```ts
static equals(a: DeleteUserResponse | PlainMessage<DeleteUserResponse> | undefined, b: DeleteUserResponse | PlainMessage<DeleteUserResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:323](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L323)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `DeleteUserResponse` \| `PlainMessage`\<`DeleteUserResponse`\> \| `undefined` |
| `b` | `DeleteUserResponse` \| `PlainMessage`\<`DeleteUserResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:311](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L311)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteUserResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:315](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L315)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteUserResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:319](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L319)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteUserResponse`
