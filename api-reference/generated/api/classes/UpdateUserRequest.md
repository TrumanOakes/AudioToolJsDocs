---
title: "UpdateUserRequest"
parent: "api"
grand_parent: "API"
nav_order: 138
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateUserRequest

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:333](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L333)

Request for UserService.UpdateUser.

## Generated

from message audiotool.user.v1.UpdateUserRequest

## Extends

- `Message`\<`UpdateUserRequest`\>

## Constructors

### Constructor

```ts
new UpdateUserRequest(data?: PartialMessage<UpdateUserRequest>): UpdateUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:348](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L348)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateUserRequest`\> |

#### Returns

`UpdateUserRequest`

#### Overrides

```ts
Message<UpdateUserRequest>.constructor
```

## Properties

### updateMask?

```ts
optional updateMask?: FieldMask;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:346](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L346)

The update mask

#### Generated

from field: google.protobuf.FieldMask update_mask = 2;

***

### user?

```ts
optional user?: User;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:339](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L339)

The user to update.

#### Generated

from field: audiotool.user.v1.User user = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:355](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L355)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:353](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L353)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.UpdateUserRequest" = "audiotool.user.v1.UpdateUserRequest";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:354](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L354)

## Methods

### equals()

```ts
static equals(a: UpdateUserRequest | PlainMessage<UpdateUserRequest> | undefined, b: UpdateUserRequest | PlainMessage<UpdateUserRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:372](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L372)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `UpdateUserRequest` \| `PlainMessage`\<`UpdateUserRequest`\> \| `undefined` |
| `b` | `UpdateUserRequest` \| `PlainMessage`\<`UpdateUserRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:360](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L360)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateUserRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:364](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L364)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateUserRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:368](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L368)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateUserRequest`
