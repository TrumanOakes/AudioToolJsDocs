---
title: "Project"
parent: "api"
grand_parent: "API"
nav_order: 95
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Project

Defined in: [gen/audiotool/project/v1/project\_pb.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L88)

Project is a resource representing a single Project.

## Generated

from message audiotool.project.v1.Project

## Extends

- `Message`\<`Project`\>

## Constructors

### Constructor

```ts
new Project(data?: PartialMessage<Project>): Project;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:292](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L292)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Project`\> |

#### Returns

`Project`

#### Overrides

```ts
Message<Project>.constructor
```

## Properties

### bpm

```ts
bpm: number = 0;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:251](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L251)

Beats per minute of the project which will be the track bpm.

Refers to track.bpm on sync.

#### Generated

from field: double bpm = 16;

***

### copyAllowed

```ts
copyAllowed: boolean = false;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:281](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L281)

Whether copying is allowed for users not having a role in the project.

If this is set to true and the project is published as a track, the tracks `remix_allowed` is
set to true. The tracks bool flag `remix_allowed` is used to determine if a track can be copied
by users not having a role in the project and takes precedence over this value. To override
this value, the metadata of the track must be updated / synced again.

#### Generated

from field: bool copy_allowed = 19;

***

### copyOfProjectCommitIndex

```ts
copyOfProjectCommitIndex: number = 0;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:164](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L164)

If the project was copied/remixed from a track, this will be the commit_index of the track.
For legacy projects the commit can be empty, even if the `copy_of_project_name` is set.

At create time the caller will enforce a copy of a project at an exact point in time by setting
this value. If the value is not set, and `copy_of_project_name` is specified the latest commit
of the project will be used and set.

#### Generated

from field: uint32 copy_of_project_commit_index = 7;

***

### copyOfProjectName

```ts
copyOfProjectName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:152](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L152)

If the project was copied from another project, this will be the name of the project.

At create time the caller will enforce a copy of a project by setting this value. The project
must have `copy_allowed` set to true or the calling user must have a role in the project.

Historical data of the project will not be copied, only the current state of the project.

If `remix_of_track_name` is set, this value is ignored.

#### Generated

from field: string copy_of_project_name = 6;

***

### coverUrl

```ts
coverUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L230)

The cover art URL of the project.

`?width=256&height=256&fit=cover&format=webp` can be appended to the URL for resizing
(current restriction - this is only able for for CDNs > 2)

The cover_url must be uploaded due ProjectService.UploadCover.

Refers to track.cover_url on sync.

#### Generated

from field: string cover_url = 14;

***

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:191](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L191)

Output only. Timestamp when this Project was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 10;

***

### creatorName

```ts
creatorName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L115)

The creator of the project.

The owner of the project can be handed over to another user. The creator_name will stay the
same.

#### Generated

from field: string creator_name = 3;

***

### description

```ts
description: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L184)

The Description of the Project.

Refers to track.description on sync.

#### Generated

from field: string description = 9;

***

### displayName

```ts
displayName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L175)

The Project name.

A random name will be generated if not provided.

Refers to track.display_name on sync.

#### Generated

from field: string display_name = 8;

***

### downloadAllowed

```ts
downloadAllowed: boolean = false;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:269](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L269)

Whether a simple download is allowed for the user. API implementers must respect this value.

Refers to track.download_allowerd on sync.

#### Generated

from field: bool download_allowed = 18;

***

### genreName

```ts
genreName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:260](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L260)

The genre name of the project, which becomes the track genre on publish.

Refers to track.genre_name on sync.

#### Generated

from field: string genre_name = 17;

***

### license

```ts
license: TrackLicense = TrackLicense.UNSPECIFIED;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:290](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L290)

The license of the Project.

Refers to track.license on sync.

#### Generated

from field: audiotool.project.v1.TrackLicense license = 20;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L94)

The name of the Project.

#### Generated

from field: string name = 1;

***

### playDuration?

```ts
optional playDuration?: Duration;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:207](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L207)

The duration of the Project.

Refers to track.play_duration on sync.

#### Generated

from field: google.protobuf.Duration play_duration = 12;

***

### remixOfTrackName

```ts
remixOfTrackName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:138](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L138)

If the project was remixed from a track, this will be the name of the track.

If this value is specified, the value of `copy_of_project_name` and
`copy_of_project_commit_index` is ignored and the project of the `Track` message is used.
`remix_allowed` must be set to `true`.

The resulting project will have the `copy_of_project_name` set to the name of the
remixed track and the `copy_of_project_commit_index` set to the commit index.

Historical data of the project will not be copied, only the current state of the project.

#### Generated

from field: string remix_of_track_name = 5;

***

### snapshotUrl

```ts
snapshotUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:242](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L242)

The snapshot of the DAW configuration of the project.

`?width=256&height=256&fit=cover&format=webp` can be appended to the URL for resizing
(current restriction - this is only able for for CDNs > 2)

Refers to track.cover_url on sync.

#### Generated

from field: string snapshot_url = 15;

***

### tags

```ts
tags: string[] = [];
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:216](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L216)

The tags of the Project.

Refers to track.tags on sync.

#### Generated

from field: repeated string tags = 13;

***

### trackName

```ts
trackName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:122](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L122)

The track_name of the project (this is set when a the project has been published as a track).

#### Generated

from field: string track_name = 4;

***

### updateTime?

```ts
optional updateTime?: Timestamp;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:198](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L198)

Output only. Timestamp when this Project was last updated.

#### Generated

from field: google.protobuf.Timestamp update_time = 11;

***

### userNames

```ts
userNames: string[] = [];
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L105)

The list of users having a role in the project.

The user_names are the user names of the users having a role in the project.

The ProjectRoles can be managed by the ProjectRoleService.

#### Generated

from field: repeated string user_names = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:299](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L299)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:297](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L297)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.Project" = "audiotool.project.v1.Project";
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:298](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L298)

## Methods

### equals()

```ts
static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:334](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L334)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Project` \| `PlainMessage`\<`Project`\> \| `undefined` |
| `b` | `Project` \| `PlainMessage`\<`Project`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:322](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L322)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Project`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:326](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L326)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Project`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project;
```

Defined in: [gen/audiotool/project/v1/project\_pb.ts:330](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_pb.ts#L330)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Project`
