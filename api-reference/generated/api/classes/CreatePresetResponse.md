---
title: "CreatePresetResponse"
parent: "api"
grand_parent: "API"
nav_order: 15
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreatePresetResponse

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:302](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L302)

Response for PresetService.CreatePreset.

## Generated

from message audiotool.preset.v1.CreatePresetResponse

## Extends

- `Message`\<`CreatePresetResponse`\>

## Constructors

### Constructor

```ts
new CreatePresetResponse(data?: PartialMessage<CreatePresetResponse>): CreatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:310](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L310)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreatePresetResponse`\> |

#### Returns

`CreatePresetResponse`

#### Overrides

```ts
Message<CreatePresetResponse>.constructor
```

## Properties

### preset?

```ts
optional preset?: Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:308](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L308)

The created preset.

#### Generated

from field: audiotool.preset.v1.Preset preset = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:317](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L317)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:315](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L315)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.CreatePresetResponse" = "audiotool.preset.v1.CreatePresetResponse";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:316](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L316)

## Methods

### equals()

```ts
static equals(a: 
  | CreatePresetResponse
  | PlainMessage<CreatePresetResponse>
  | undefined, b: 
  | CreatePresetResponse
  | PlainMessage<CreatePresetResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:333](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L333)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreatePresetResponse` \| `PlainMessage`\<`CreatePresetResponse`\> \| `undefined` |
| `b` | \| `CreatePresetResponse` \| `PlainMessage`\<`CreatePresetResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:321](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L321)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreatePresetResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:325](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L325)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreatePresetResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:329](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L329)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreatePresetResponse`
