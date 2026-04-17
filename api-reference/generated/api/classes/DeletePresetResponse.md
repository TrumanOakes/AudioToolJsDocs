---
title: "DeletePresetResponse"
parent: "api"
grand_parent: "API"
nav_order: 25
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeletePresetResponse

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:484](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L484)

Response for PresetService.DeletePreset.

## Generated

from message audiotool.preset.v1.DeletePresetResponse

## Extends

- `Message`\<`DeletePresetResponse`\>

## Constructors

### Constructor

```ts
new DeletePresetResponse(data?: PartialMessage<DeletePresetResponse>): DeletePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:485](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L485)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeletePresetResponse`\> |

#### Returns

`DeletePresetResponse`

#### Overrides

```ts
Message<DeletePresetResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:492](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L492)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:490](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L490)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.DeletePresetResponse" = "audiotool.preset.v1.DeletePresetResponse";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:491](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L491)

## Methods

### equals()

```ts
static equals(a: 
  | DeletePresetResponse
  | PlainMessage<DeletePresetResponse>
  | undefined, b: 
  | DeletePresetResponse
  | PlainMessage<DeletePresetResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:507](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L507)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeletePresetResponse` \| `PlainMessage`\<`DeletePresetResponse`\> \| `undefined` |
| `b` | \| `DeletePresetResponse` \| `PlainMessage`\<`DeletePresetResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:495](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L495)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeletePresetResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:499](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L499)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeletePresetResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePresetResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:503](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L503)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeletePresetResponse`
