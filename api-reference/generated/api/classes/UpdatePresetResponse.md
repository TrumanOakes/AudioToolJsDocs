---
title: "UpdatePresetResponse"
parent: "api"
grand_parent: "API"
nav_order: 129
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdatePresetResponse

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:402](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L402)

Response for PresetService.UpdatePreset.

## Generated

from message audiotool.preset.v1.UpdatePresetResponse

## Extends

- `Message`\<`UpdatePresetResponse`\>

## Constructors

### Constructor

```ts
new UpdatePresetResponse(data?: PartialMessage<UpdatePresetResponse>): UpdatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:410](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L410)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdatePresetResponse`\> |

#### Returns

`UpdatePresetResponse`

#### Overrides

```ts
Message<UpdatePresetResponse>.constructor
```

## Properties

### preset?

```ts
optional preset?: Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:408](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L408)

The updated preset.

#### Generated

from field: audiotool.preset.v1.Preset preset = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:417](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L417)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:415](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L415)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.UpdatePresetResponse" = "audiotool.preset.v1.UpdatePresetResponse";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:416](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L416)

## Methods

### equals()

```ts
static equals(a: 
  | UpdatePresetResponse
  | PlainMessage<UpdatePresetResponse>
  | undefined, b: 
  | UpdatePresetResponse
  | PlainMessage<UpdatePresetResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:433](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L433)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdatePresetResponse` \| `PlainMessage`\<`UpdatePresetResponse`\> \| `undefined` |
| `b` | \| `UpdatePresetResponse` \| `PlainMessage`\<`UpdatePresetResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:421](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L421)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdatePresetResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:425](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L425)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdatePresetResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:429](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L429)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdatePresetResponse`
