---
title: "ListUsersRequest"
parent: "api"
grand_parent: "API"
nav_order: 80
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListUsersRequest

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L30)

Request for UserService.ListUsers.

## Generated

from message audiotool.user.v1.ListUsersRequest

## Extends

- `Message`\<`ListUsersRequest`\>

## Constructors

### Constructor

```ts
new ListUsersRequest(data?: PartialMessage<ListUsersRequest>): ListUsersRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L83)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListUsersRequest`\> |

#### Returns

`ListUsersRequest`

#### Overrides

```ts
Message<ListUsersRequest>.constructor
```

## Properties

### filter

```ts
filter: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L48)

The standard CEL filter.

Supported fields:
- user.name
- user.display_name
- user.create_time
- user.description
- user.tags
- user.links
- user.num_tracks
- user.num_albums
- user.num_followers
- user.num_following

#### Generated

from field: string filter = 1;

***

### orderBy

```ts
orderBy: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L81)

The order to list results by.

Supported fields:
- user.name
- user.display_name
- user.create_time
- user.description
- user.tags
- user.links
- user.num_tracks
- user.num_albums
- user.num_followers
- user.num_following

#### Generated

from field: string order_by = 4;

***

### pageSize

```ts
pageSize: number = 0;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L55)

The maximum number of items to return.

#### Generated

from field: int32 page_size = 2;

***

### pageToken

```ts
pageToken: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L62)

The next_page_token value returned from a previous List request, if any.

#### Generated

from field: string page_token = 3;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L90)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L88)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.ListUsersRequest" = "audiotool.user.v1.ListUsersRequest";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L89)

## Methods

### equals()

```ts
static equals(a: ListUsersRequest | PlainMessage<ListUsersRequest> | undefined, b: ListUsersRequest | PlainMessage<ListUsersRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L109)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ListUsersRequest` \| `PlainMessage`\<`ListUsersRequest`\> \| `undefined` |
| `b` | `ListUsersRequest` \| `PlainMessage`\<`ListUsersRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L97)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListUsersRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L101)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListUsersRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L105)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListUsersRequest`
