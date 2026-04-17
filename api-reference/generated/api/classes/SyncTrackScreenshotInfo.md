---
title: "SyncTrackScreenshotInfo"
parent: "api"
grand_parent: "API"
nav_order: 120
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: SyncTrackScreenshotInfo

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:67](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L67)

SyncTrackScreenshotInfo is used as google.longrunning.Operation.metadata message.

This is used when a track is synced to a project. The screenshot is not in the main process
and will be pushed to the track when it is ready. The SyncTrackMode must contain audio to trigger
the screenshot generation.

## Generated

from message audiotool.project.v1.SyncTrackScreenshotInfo

## Extends

- `Message`\<`SyncTrackScreenshotInfo`\>

## Constructors

### Constructor

```ts
new SyncTrackScreenshotInfo(data?: PartialMessage<SyncTrackScreenshotInfo>): SyncTrackScreenshotInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L110)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`SyncTrackScreenshotInfo`\> |

#### Returns

`SyncTrackScreenshotInfo`

#### Overrides

```ts
Message<SyncTrackScreenshotInfo>.constructor
```

## Properties

### commitIndex

```ts
commitIndex: number = 0;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L80)

The commit index of the project.

#### Generated

from field: uint32 commit_index = 2;

***

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L101)

The time when the operation was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 5;

***

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L73)

The project that is synced.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### status

```ts
status: SyncTrackScreenshotStatus = SyncTrackScreenshotStatus.SYNC_TRACK_SCREENSHOT_ENUM_UNSPECIFIED;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L108)

The current status of the sync track process.

#### Generated

from field: audiotool.project.v1.SyncTrackScreenshotStatus status = 6;

***

### trackName

```ts
trackName: string = "";
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L87)

The desired track name.

#### Generated

from field: string track_name = 3;

***

### userName

```ts
userName: string = "";
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L94)

The user who triggered the sync.

#### Generated

from field: string user_name = 4;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:117](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L117)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L115)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.SyncTrackScreenshotInfo" = "audiotool.project.v1.SyncTrackScreenshotInfo";
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:116](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L116)

## Methods

### equals()

```ts
static equals(a: 
  | SyncTrackScreenshotInfo
  | PlainMessage<SyncTrackScreenshotInfo>
  | undefined, b: 
  | SyncTrackScreenshotInfo
  | PlainMessage<SyncTrackScreenshotInfo>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:138](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L138)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `SyncTrackScreenshotInfo` \| `PlainMessage`\<`SyncTrackScreenshotInfo`\> \| `undefined` |
| `b` | \| `SyncTrackScreenshotInfo` \| `PlainMessage`\<`SyncTrackScreenshotInfo`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncTrackScreenshotInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:126](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L126)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`SyncTrackScreenshotInfo`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncTrackScreenshotInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L130)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SyncTrackScreenshotInfo`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncTrackScreenshotInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_screenshot\_info\_pb.ts:134](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_screenshot_info_pb.ts#L134)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SyncTrackScreenshotInfo`
