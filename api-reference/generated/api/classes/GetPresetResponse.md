---
title: "GetPresetResponse"
parent: "api"
grand_parent: "API"
nav_order: 50
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetPresetResponse

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:212](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L212)

Response for PresetService.GetPreset.

## Generated

from message audiotool.preset.v1.GetPresetResponse

## Extends

- `Message`\<`GetPresetResponse`\>

## Constructors

### Constructor

```ts
new GetPresetResponse(data?: PartialMessage<GetPresetResponse>): GetPresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:220](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L220)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetPresetResponse`\> |

#### Returns

`GetPresetResponse`

#### Overrides

```ts
Message<GetPresetResponse>.constructor
```

## Properties

### preset?

```ts
optional preset?: Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:218](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L218)

The preset.

#### Generated

from field: audiotool.preset.v1.Preset preset = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:227](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L227)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:225](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L225)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.GetPresetResponse" = "audiotool.preset.v1.GetPresetResponse";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:226](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L226)

## Methods

### equals()

```ts
static equals(a: GetPresetResponse | PlainMessage<GetPresetResponse> | undefined, b: GetPresetResponse | PlainMessage<GetPresetResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:243](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L243)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetPresetResponse` \| `PlainMessage`\<`GetPresetResponse`\> \| `undefined` |
| `b` | `GetPresetResponse` \| `PlainMessage`\<`GetPresetResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:231](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L231)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetPresetResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:235](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L235)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetPresetResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:239](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L239)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetPresetResponse`
