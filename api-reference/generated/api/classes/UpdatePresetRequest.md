---
title: "UpdatePresetRequest"
parent: "api"
grand_parent: "API"
nav_order: 128
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdatePresetRequest

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:343](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L343)

Request for PresetService.UpdatePreset.

## Generated

from message audiotool.preset.v1.UpdatePresetRequest

## Extends

- `Message`\<`UpdatePresetRequest`\>

## Constructors

### Constructor

```ts
new UpdatePresetRequest(data?: PartialMessage<UpdatePresetRequest>): UpdatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:367](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L367)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdatePresetRequest`\> |

#### Returns

`UpdatePresetRequest`

#### Overrides

```ts
Message<UpdatePresetRequest>.constructor
```

## Properties

### data?

```ts
optional data?: Any;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:365](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L365)

The serialized configuration blob of the Preset (document-service).

If empty, the configuration is not updated.

#### Generated

from field: google.protobuf.Any data = 3;

***

### preset?

```ts
optional preset?: Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:349](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L349)

The preset

#### Generated

from field: audiotool.preset.v1.Preset preset = 1;

***

### updateMask?

```ts
optional updateMask?: FieldMask;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:356](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L356)

The update mask

#### Generated

from field: google.protobuf.FieldMask update_mask = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:374](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L374)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:372](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L372)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.UpdatePresetRequest" = "audiotool.preset.v1.UpdatePresetRequest";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:373](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L373)

## Methods

### equals()

```ts
static equals(a: 
  | UpdatePresetRequest
  | PlainMessage<UpdatePresetRequest>
  | undefined, b: 
  | UpdatePresetRequest
  | PlainMessage<UpdatePresetRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:392](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L392)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdatePresetRequest` \| `PlainMessage`\<`UpdatePresetRequest`\> \| `undefined` |
| `b` | \| `UpdatePresetRequest` \| `PlainMessage`\<`UpdatePresetRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:380](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L380)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdatePresetRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:384](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L384)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdatePresetRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:388](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L388)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdatePresetRequest`
