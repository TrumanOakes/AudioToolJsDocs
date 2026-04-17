---
title: "SyncTrackRequest"
parent: "api"
grand_parent: "API"
nav_order: 119
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: SyncTrackRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:638](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L638)

Request for ProjectService.SyncTrack.

## Generated

from message audiotool.project.v1.SyncTrackRequest

## Extends

- `Message`\<`SyncTrackRequest`\>

## Constructors

### Constructor

```ts
new SyncTrackRequest(data?: PartialMessage<SyncTrackRequest>): SyncTrackRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:660](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L660)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`SyncTrackRequest`\> |

#### Returns

`SyncTrackRequest`

#### Overrides

```ts
Message<SyncTrackRequest>.constructor
```

## Properties

### commitIndex

```ts
commitIndex: number = 0;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:658](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L658)

Commit index used to render the audio & images if mode is audio.

#### Generated

from field: uint32 commit_index = 3;

***

### mode

```ts
mode: SyncTrackMode = SyncTrackMode.UNSPECIFIED;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:651](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L651)

Required. The mode to sync the track.

#### Generated

from field: audiotool.project.v1.SyncTrackMode mode = 2;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:644](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L644)

Required. The name of the project to publish, in the form of `projects/{project_id}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:667](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L667)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:665](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L665)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.SyncTrackRequest" = "audiotool.project.v1.SyncTrackRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:666](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L666)

## Methods

### equals()

```ts
static equals(a: SyncTrackRequest | PlainMessage<SyncTrackRequest> | undefined, b: SyncTrackRequest | PlainMessage<SyncTrackRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:685](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L685)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `SyncTrackRequest` \| `PlainMessage`\<`SyncTrackRequest`\> \| `undefined` |
| `b` | `SyncTrackRequest` \| `PlainMessage`\<`SyncTrackRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SyncTrackRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:673](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L673)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`SyncTrackRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SyncTrackRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:677](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L677)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SyncTrackRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SyncTrackRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:681](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L681)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SyncTrackRequest`
