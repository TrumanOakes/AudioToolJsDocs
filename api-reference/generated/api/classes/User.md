---
title: "User"
parent: "api"
grand_parent: "API"
nav_order: 146
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: User

Defined in: [gen/audiotool/user/v1/user\_pb.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L28)

A user of audiotool.

## Generated

from message audiotool.user.v1.User

## Extends

- `Message`\<`User`\>

## Constructors

### Constructor

```ts
new User(data?: PartialMessage<User>): User;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L109)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`User`\> |

#### Returns

`User`

#### Overrides

```ts
Message<User>.constructor
```

## Properties

### avatarUrl

```ts
avatarUrl: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:100](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L100)

The avatar URL of the user.

you can append `?width=256&height=256&fit=cover&format=webp` to the URL for resizing
(current restriction - this is only able for for CDNs > 2)

#### Generated

from field: string avatar_url = 10;

***

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L48)

Output only. Timestamp when this User was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 3;

***

### description

```ts
description: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L55)

The description of the user.

#### Generated

from field: string description = 4;

***

### displayName

```ts
displayName: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L41)

The name of the user.

#### Generated

from field: string display_name = 2;

***

### links

```ts
links: string[] = [];
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L107)

The links of the user

#### Generated

from field: repeated string links = 11;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L34)

The unique name of the user.

#### Generated

from field: string name = 1;

***

### numAlbums

```ts
numAlbums: number = 0;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L69)

The number of public albums the user has.

#### Generated

from field: int32 num_albums = 6;

***

### numFollowers

```ts
numFollowers: number = 0;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L76)

The number of followers the user has.

#### Generated

from field: int32 num_followers = 7;

***

### numFollowing

```ts
numFollowing: number = 0;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L83)

The number of users the user is following.

#### Generated

from field: int32 num_following = 8;

***

### numTracks

```ts
numTracks: number = 0;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L62)

The number of public tracks the user has.

#### Generated

from field: int32 num_tracks = 5;

***

### tags

```ts
tags: string[] = [];
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L90)

The tags of the user

#### Generated

from field: repeated string tags = 9;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:116](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L116)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:114](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L114)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.User" = "audiotool.user.v1.User";
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L115)

## Methods

### equals()

```ts
static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L142)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `User` \| `PlainMessage`\<`User`\> \| `undefined` |
| `b` | `User` \| `PlainMessage`\<`User`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L130)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`User`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:134](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L134)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`User`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
```

Defined in: [gen/audiotool/user/v1/user\_pb.ts:138](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_pb.ts#L138)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`User`
