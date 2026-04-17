---
title: "Preset"
parent: "api"
grand_parent: "API"
nav_order: 90
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Preset

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:402](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L402)

Preset is a resource representing a single Preset.

## Generated

from message audiotool.preset.v1.Preset

## Extends

- `Message`\<`Preset`\>

## Constructors

### Constructor

```ts
new Preset(data?: PartialMessage<Preset>): Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:504](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L504)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Preset`\> |

#### Returns

`Preset`

#### Overrides

```ts
Message<Preset>.constructor
```

## Properties

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:462](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L462)

Output only. Timestamp when this Preset was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 8;

***

### dataUrl

```ts
dataUrl: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:502](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L502)

URL pointing to the serialized preset data. This is a serialized proto.Any blob
produced by the document-service.

#### Generated

from field: string data_url = 13;

***

### description

```ts
description: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:422](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L422)

The description of the Preset.

#### Generated

from field: string description = 3;

***

### deviceType

```ts
deviceType: PresetDeviceType = PresetDeviceType.UNSPECIFIED;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:494](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L494)

The type of devices used.

This contains the list of devices used in the data blob.

#### Generated

from field: audiotool.preset.v1.PresetDeviceType device_type = 12;

***

### displayName

```ts
displayName: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:415](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L415)

The display name of the Preset.

#### Generated

from field: string display_name = 2;

***

### favoritedByUser

```ts
favoritedByUser: boolean = false;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:439](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L439)

Whether the authed user liked the Preset.

This is only exposed if the user is authenticated. The user can like a Preset via
Favorite API.

#### Generated

from field: bool favorited_by_user = 5;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:408](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L408)

The Preset name.

#### Generated

from field: string name = 1;

***

### numFavorites

```ts
numFavorites: number = 0;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:446](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L446)

The number of favorites of the Preset.

#### Generated

from field: int32 num_favorites = 6;

***

### numUsages

```ts
numUsages: number = 0;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:455](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L455)

The number of usages of the Preset in a track. If a Preset is used in a track, the usage will
be increased. On the other hand the number will not be decreased if the a preset is removed or
changed in a track.

#### Generated

from field: int32 num_usages = 7;

***

### ownerName

```ts
ownerName: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:429](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L429)

The owner of the Preset in the format of `users/{user}`.

#### Generated

from field: string owner_name = 4;

***

### tags

```ts
tags: string[] = [];
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:485](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L485)

The tags of the Preset.

#### Generated

from field: repeated string tags = 11;

***

### updateTime?

```ts
optional updateTime?: Timestamp;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:471](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L471)

Output only. Timestamp when this Preset was last updated.

The underlying audio can't be changed. Only some metadata (of this message) can be changed.

#### Generated

from field: google.protobuf.Timestamp update_time = 9;

***

### usage

```ts
usage: PresetUsage = PresetUsage.UNSPECIFIED;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:478](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L478)

The usage of the Preset.

#### Generated

from field: audiotool.preset.v1.PresetUsage usage = 10;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:511](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L511)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:509](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L509)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.Preset" = "audiotool.preset.v1.Preset";
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:510](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L510)

## Methods

### equals()

```ts
static equals(a: Preset | PlainMessage<Preset> | undefined, b: Preset | PlainMessage<Preset> | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:539](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L539)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Preset` \| `PlainMessage`\<`Preset`\> \| `undefined` |
| `b` | `Preset` \| `PlainMessage`\<`Preset`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:527](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L527)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Preset`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:531](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L531)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Preset`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:535](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L535)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Preset`
