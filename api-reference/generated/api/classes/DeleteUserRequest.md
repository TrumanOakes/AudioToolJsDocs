---
title: "DeleteUserRequest"
parent: "api"
grand_parent: "API"
nav_order: 32
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteUserRequest

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:251](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L251)

Request for UserService.DeleteUser.

## Generated

from message audiotool.user.v1.DeleteUserRequest

## Extends

- `Message`\<`DeleteUserRequest`\>

## Constructors

### Constructor

```ts
new DeleteUserRequest(data?: PartialMessage<DeleteUserRequest>): DeleteUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:259](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L259)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteUserRequest`\> |

#### Returns

`DeleteUserRequest`

#### Overrides

```ts
Message<DeleteUserRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:257](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L257)

Required. The name of the user to be deleted, in the form  of `users/{user}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:266](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L266)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:264](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L264)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.DeleteUserRequest" = "audiotool.user.v1.DeleteUserRequest";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:265](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L265)

## Methods

### equals()

```ts
static equals(a: DeleteUserRequest | PlainMessage<DeleteUserRequest> | undefined, b: DeleteUserRequest | PlainMessage<DeleteUserRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:282](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L282)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `DeleteUserRequest` \| `PlainMessage`\<`DeleteUserRequest`\> \| `undefined` |
| `b` | `DeleteUserRequest` \| `PlainMessage`\<`DeleteUserRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:270](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L270)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteUserRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:274](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L274)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteUserRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:278](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L278)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteUserRequest`
