---
title: "GetUserRequest"
parent: "api"
grand_parent: "API"
nav_order: 57
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetUserRequest

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:169](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L169)

Request for UserService.GetUser.

## Generated

from message audiotool.user.v1.GetUserRequest

## Extends

- `Message`\<`GetUserRequest`\>

## Constructors

### Constructor

```ts
new GetUserRequest(data?: PartialMessage<GetUserRequest>): GetUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:177](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L177)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetUserRequest`\> |

#### Returns

`GetUserRequest`

#### Overrides

```ts
Message<GetUserRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L175)

Required. The name of the user to be retrieved, in the form  of `users/{user}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L184)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:182](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L182)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.GetUserRequest" = "audiotool.user.v1.GetUserRequest";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:183](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L183)

## Methods

### equals()

```ts
static equals(a: GetUserRequest | PlainMessage<GetUserRequest> | undefined, b: GetUserRequest | PlainMessage<GetUserRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:200](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L200)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetUserRequest` \| `PlainMessage`\<`GetUserRequest`\> \| `undefined` |
| `b` | `GetUserRequest` \| `PlainMessage`\<`GetUserRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:188](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L188)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetUserRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:192](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L192)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetUserRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:196](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L196)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetUserRequest`
