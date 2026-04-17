---
title: "Sample"
parent: "api"
grand_parent: "API"
nav_order: 102
---

[**@audiotool/nexus API Reference**](../../../../)

***

# Class: Sample

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:141](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L141)

Sample is a resource representing a single Sample.

## Generated

from message audiotool.sample.v1.Sample

## Extends

- `Message`\<`Sample`\>

## Constructors

### Constructor

```ts
new Sample(data?: PartialMessage<Sample>): Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:280](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L280)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Sample`\> |

#### Returns

`Sample`

#### Overrides

```ts
Message<Sample>.constructor
```

## Properties

### bpm

```ts
bpm: number = 0;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:199](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L199)

The beats per minute of the Sample.

#### Generated

from field: double bpm = 8;

***

### clearance

```ts
clearance: SampleClearance = SampleClearance.UNSPECIFIED;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:236](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L236)

The clearance of the Sample.

#### Generated

from field: audiotool.sample.v1.SampleClearance clearance = 13;

***

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:220](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L220)

Output only. Timestamp when this Sample was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 11;

***

### description

```ts
description: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L161)

The description of the Sample.

#### Generated

from field: string description = 3;

***

### displayName

```ts
displayName: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:154](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L154)

The display name of the Sample.

#### Generated

from field: string display_name = 2;

***

### favoritedByUser

```ts
favoritedByUser: boolean = false;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:178](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L178)

Whether the authed user liked the sample.

This is only exposed if the user is authenticated.  The user can like a Preset via
Favor API.

#### Generated

from field: bool favorited_by_user = 5;

***

### flacUrl

```ts
flacUrl: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:278](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L278)

The underlying URL of the track to play (flac format).

#### Generated

from field: string flac_url = 19;

***

### mp3Url

```ts
mp3Url: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:257](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L257)

The underlying URL of the track to play (mp3 format).

#### Generated

from field: string mp3_url = 16;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:147](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L147)

The Sample name.

#### Generated

from field: string name = 1;

***

### numFavorites

```ts
numFavorites: number = 0;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:185](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L185)

The number of favorites of the Sample.

#### Generated

from field: int32 num_favorites = 6;

***

### numUsages

```ts
numUsages: number = 0;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:192](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L192)

The number of usages of the Sample.

#### Generated

from field: int32 num_usages = 7;

***

### ownerName

```ts
ownerName: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:168](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L168)

The Owner of the Sample in the form of `users/{user}`.

#### Generated

from field: string owner_name = 4;

***

### playDuration?

```ts
optional playDuration?: Duration;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:213](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L213)

The duration of the Sample.

#### Generated

from field: google.protobuf.Duration play_duration = 10;

***

### previewMp3Url

```ts
previewMp3Url: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:271](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L271)

The underlying URL of the track to play (mp3 format).

#### Generated

from field: string preview_mp3_url = 18;

***

### sampleType

```ts
sampleType: SampleType = SampleType.UNSPECIFIED;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:206](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L206)

The type of the Sample.

#### Generated

from field: audiotool.sample.v1.SampleType sample_type = 9;

***

### tags

```ts
tags: string[] = [];
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:250](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L250)

The tags of the Sample.

#### Generated

from field: repeated string tags = 15;

***

### updateTime?

```ts
optional updateTime?: Timestamp;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:229](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L229)

Output only. Timestamp when this Sample was last updated.

The underlying audio can't be changed. Only some metadata (of this message) can be changed.

#### Generated

from field: google.protobuf.Timestamp update_time = 12;

***

### usage

```ts
usage: SampleUsage = SampleUsage.UNSPECIFIED;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:243](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L243)

The usage of the Sample.

#### Generated

from field: audiotool.sample.v1.SampleUsage usage = 14;

***

### wavUrl

```ts
wavUrl: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:264](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L264)

The underlying URL of the track to play (wav format).

#### Generated

from field: string wav_url = 17;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:287](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L287)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:285](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L285)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.Sample" = "audiotool.sample.v1.Sample";
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:286](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L286)

## Methods

### equals()

```ts
static equals(a: Sample | PlainMessage<Sample> | undefined, b: Sample | PlainMessage<Sample> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:321](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L321)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Sample` \| `PlainMessage`\<`Sample`\> \| `undefined` |
| `b` | `Sample` \| `PlainMessage`\<`Sample`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:309](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L309)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Sample`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:313](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L313)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Sample`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:317](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L317)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Sample`
