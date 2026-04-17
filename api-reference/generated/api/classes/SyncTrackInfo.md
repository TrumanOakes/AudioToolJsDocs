---
title: "SyncTrackInfo"
parent: "api"
grand_parent: "API"
nav_order: 117
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: SyncTrackInfo

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L98)

SyncTrackStatus is used as google.longrunning.Operation.metadata message.

This is used to track the status of the sync track process.

## Generated

from message audiotool.project.v1.SyncTrackInfo

## Extends

- `Message`\<`SyncTrackInfo`\>

## Constructors

### Constructor

```ts
new SyncTrackInfo(data?: PartialMessage<SyncTrackInfo>): SyncTrackInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:148](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L148)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`SyncTrackInfo`\> |

#### Returns

`SyncTrackInfo`

#### Overrides

```ts
Message<SyncTrackInfo>.constructor
```

## Properties

### commitIndex

```ts
commitIndex: number = 0;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L118)

The commit index of the project.

#### Generated

from field: uint32 commit_index = 3;

***

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L139)

The time when the operation was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 6;

***

### mode

```ts
mode: SyncTrackMode = SyncTrackMode.UNSPECIFIED;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L111)

Required. The mode to sync the track.

#### Generated

from field: audiotool.project.v1.SyncTrackMode mode = 2;

***

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:104](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L104)

The project that is synced.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### status

```ts
status: SyncTrackStatus = SyncTrackStatus.UNSPECIFIED;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:146](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L146)

The current status of the sync track process.

#### Generated

from field: audiotool.project.v1.SyncTrackStatus status = 7;

***

### trackName

```ts
trackName: string = "";
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L125)

The desired track name.

#### Generated

from field: string track_name = 4;

***

### userName

```ts
userName: string = "";
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:132](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L132)

The user who triggered the sync.

#### Generated

from field: string user_name = 5;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:155](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L155)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L153)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.SyncTrackInfo" = "audiotool.project.v1.SyncTrackInfo";
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:154](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L154)

## Methods

### equals()

```ts
static equals(a: SyncTrackInfo | PlainMessage<SyncTrackInfo> | undefined, b: SyncTrackInfo | PlainMessage<SyncTrackInfo> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:177](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L177)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `SyncTrackInfo` \| `PlainMessage`\<`SyncTrackInfo`\> \| `undefined` |
| `b` | `SyncTrackInfo` \| `PlainMessage`\<`SyncTrackInfo`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncTrackInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:165](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L165)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`SyncTrackInfo`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncTrackInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:169](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L169)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SyncTrackInfo`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncTrackInfo;
```

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:173](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L173)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SyncTrackInfo`
