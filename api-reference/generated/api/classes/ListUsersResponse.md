---
title: "ListUsersResponse"
parent: "api"
grand_parent: "API"
nav_order: 81
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListUsersResponse

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:119](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L119)

Response for UserService.ListUsers.

## Generated

from message audiotool.user.v1.ListUsersResponse

## Extends

- `Message`\<`ListUsersResponse`\>

## Constructors

### Constructor

```ts
new ListUsersResponse(data?: PartialMessage<ListUsersResponse>): ListUsersResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:135](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L135)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListUsersResponse`\> |

#### Returns

`ListUsersResponse`

#### Overrides

```ts
Message<ListUsersResponse>.constructor
```

## Properties

### nextPageToken

```ts
nextPageToken: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:133](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L133)

Token to retrieve the next page of results, or empty if there are no more results in the
list.

#### Generated

from field: string next_page_token = 2;

***

### users

```ts
users: User[] = [];
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L125)

The list of Albums

#### Generated

from field: repeated audiotool.user.v1.User users = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L142)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:140](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L140)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.ListUsersResponse" = "audiotool.user.v1.ListUsersResponse";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:141](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L141)

## Methods

### equals()

```ts
static equals(a: ListUsersResponse | PlainMessage<ListUsersResponse> | undefined, b: ListUsersResponse | PlainMessage<ListUsersResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:159](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L159)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ListUsersResponse` \| `PlainMessage`\<`ListUsersResponse`\> \| `undefined` |
| `b` | `ListUsersResponse` \| `PlainMessage`\<`ListUsersResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:147](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L147)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListUsersResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:151](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L151)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListUsersResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:155](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L155)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListUsersResponse`
