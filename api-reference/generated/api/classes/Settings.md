---
title: "Settings"
parent: "api"
grand_parent: "API"
nav_order: 112
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Settings

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L70)

The settings of the user.

## Generated

from message audiotool.user.v1.Settings

## Extends

- `Message`\<`Settings`\>

## Constructors

### Constructor

```ts
new Settings(data?: PartialMessage<Settings>): Settings;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:134](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L134)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Settings`\> |

#### Returns

`Settings`

#### Overrides

```ts
Message<Settings>.constructor
```

## Properties

### allowLinksOnPlaylistComments

```ts
allowLinksOnPlaylistComments: boolean = false;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:132](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L132)

Whether to allow links posted in comments on playlists.

#### Generated

from field: bool allow_links_on_playlist_comments = 9;

***

### allowLinksOnTrackComments

```ts
allowLinksOnTrackComments: boolean = false;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L125)

Whether to allow links posted in comments on tracks.

#### Generated

from field: bool allow_links_on_track_comments = 8;

***

### allowLinksOnUserPageComments

```ts
allowLinksOnUserPageComments: boolean = false;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L118)

Whether to allow links posted in comments on user page.

#### Generated

from field: bool allow_links_on_user_page_comments = 7;

***

### defaultPlaylistCommentMode

```ts
defaultPlaylistCommentMode: CommentMode = CommentMode.UNSPECIFIED;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L90)

The mode of the comments on the user's playlists.

#### Generated

from field: audiotool.user.v1.CommentMode default_playlist_comment_mode = 3;

***

### defaultTrackCommentMode

```ts
defaultTrackCommentMode: CommentMode = CommentMode.UNSPECIFIED;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L83)

The mode of the comments on the user's tracks.

#### Generated

from field: audiotool.user.v1.CommentMode default_track_comment_mode = 2;

***

### newsletterSubscriber

```ts
newsletterSubscriber: boolean = false;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L111)

User is subscribed to the Audiotool newsletter.

#### Generated

from field: bool newsletter_subscriber = 6;

***

### showAsListener

```ts
showAsListener: boolean = false;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:104](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L104)

Show as listener of tracks.

#### Generated

from field: bool show_as_listener = 5;

***

### showOnlineStatus

```ts
showOnlineStatus: boolean = false;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L97)

Show online status.

#### Generated

from field: bool show_online_status = 4;

***

### userPageCommentMode

```ts
userPageCommentMode: CommentMode = CommentMode.UNSPECIFIED;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L76)

The mode of the comments user's page.

#### Generated

from field: audiotool.user.v1.CommentMode user_page_comment_mode = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:141](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L141)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L139)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.Settings" = "audiotool.user.v1.Settings";
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:140](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L140)

## Methods

### equals()

```ts
static equals(a: Settings | PlainMessage<Settings> | undefined, b: Settings | PlainMessage<Settings> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:165](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L165)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Settings` \| `PlainMessage`\<`Settings`\> \| `undefined` |
| `b` | `Settings` \| `PlainMessage`\<`Settings`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Settings;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L153)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Settings`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Settings;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:157](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L157)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Settings`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Settings;
```

Defined in: [gen/audiotool/user/v1/settings\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/settings_pb.ts#L161)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Settings`
