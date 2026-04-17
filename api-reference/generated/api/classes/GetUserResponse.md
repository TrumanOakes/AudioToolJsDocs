---
title: "GetUserResponse"
parent: "api"
grand_parent: "API"
nav_order: 58
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetUserResponse

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:210](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L210)

Response for UserService.GetUser.

## Generated

from message audiotool.user.v1.GetUserResponse

## Extends

- `Message`\<`GetUserResponse`\>

## Constructors

### Constructor

```ts
new GetUserResponse(data?: PartialMessage<GetUserResponse>): GetUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:218](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L218)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetUserResponse`\> |

#### Returns

`GetUserResponse`

#### Overrides

```ts
Message<GetUserResponse>.constructor
```

## Properties

### user?

```ts
optional user?: User;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:216](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L216)

The user.

#### Generated

from field: audiotool.user.v1.User user = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:225](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L225)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:223](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L223)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.GetUserResponse" = "audiotool.user.v1.GetUserResponse";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:224](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L224)

## Methods

### equals()

```ts
static equals(a: GetUserResponse | PlainMessage<GetUserResponse> | undefined, b: GetUserResponse | PlainMessage<GetUserResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:241](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L241)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetUserResponse` \| `PlainMessage`\<`GetUserResponse`\> \| `undefined` |
| `b` | `GetUserResponse` \| `PlainMessage`\<`GetUserResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:229](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L229)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetUserResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:233](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L233)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetUserResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:237](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L237)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetUserResponse`
