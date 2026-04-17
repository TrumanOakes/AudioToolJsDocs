---
title: "DeletePresetRequest"
parent: "api"
grand_parent: "API"
nav_order: 24
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeletePresetRequest

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:443](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L443)

Request for PresetService.DeletePreset.

## Generated

from message audiotool.preset.v1.DeletePresetRequest

## Extends

- `Message`\<`DeletePresetRequest`\>

## Constructors

### Constructor

```ts
new DeletePresetRequest(data?: PartialMessage<DeletePresetRequest>): DeletePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:451](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L451)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeletePresetRequest`\> |

#### Returns

`DeletePresetRequest`

#### Overrides

```ts
Message<DeletePresetRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:449](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L449)

Required. The name of the preset to be deleted, in the form of `presets/{preset}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:458](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L458)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:456](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L456)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.DeletePresetRequest" = "audiotool.preset.v1.DeletePresetRequest";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:457](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L457)

## Methods

### equals()

```ts
static equals(a: 
  | DeletePresetRequest
  | PlainMessage<DeletePresetRequest>
  | undefined, b: 
  | DeletePresetRequest
  | PlainMessage<DeletePresetRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:474](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L474)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeletePresetRequest` \| `PlainMessage`\<`DeletePresetRequest`\> \| `undefined` |
| `b` | \| `DeletePresetRequest` \| `PlainMessage`\<`DeletePresetRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:462](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L462)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeletePresetRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:466](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L466)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeletePresetRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:470](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L470)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeletePresetRequest`
