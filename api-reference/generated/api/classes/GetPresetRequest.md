---
title: "GetPresetRequest"
parent: "api"
grand_parent: "API"
nav_order: 49
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetPresetRequest

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L171)

Request for PresetService.GetPreset.

## Generated

from message audiotool.preset.v1.GetPresetRequest

## Extends

- `Message`\<`GetPresetRequest`\>

## Constructors

### Constructor

```ts
new GetPresetRequest(data?: PartialMessage<GetPresetRequest>): GetPresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:179](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L179)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetPresetRequest`\> |

#### Returns

`GetPresetRequest`

#### Overrides

```ts
Message<GetPresetRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:177](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L177)

Required. The name of the preset to be retrieved, in the form of `presets/{preset}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:186](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L186)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L184)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.GetPresetRequest" = "audiotool.preset.v1.GetPresetRequest";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:185](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L185)

## Methods

### equals()

```ts
static equals(a: GetPresetRequest | PlainMessage<GetPresetRequest> | undefined, b: GetPresetRequest | PlainMessage<GetPresetRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:202](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L202)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetPresetRequest` \| `PlainMessage`\<`GetPresetRequest`\> \| `undefined` |
| `b` | `GetPresetRequest` \| `PlainMessage`\<`GetPresetRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:190](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L190)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetPresetRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:194](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L194)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetPresetRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:198](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L198)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetPresetRequest`
