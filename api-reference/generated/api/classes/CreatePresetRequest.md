---
title: "CreatePresetRequest"
parent: "api"
grand_parent: "API"
nav_order: 14
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreatePresetRequest

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:253](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L253)

Request for PresetService.CreatePreset.

## Generated

from message audiotool.preset.v1.CreatePresetRequest

## Extends

- `Message`\<`CreatePresetRequest`\>

## Constructors

### Constructor

```ts
new CreatePresetRequest(data?: PartialMessage<CreatePresetRequest>): CreatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:268](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L268)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreatePresetRequest`\> |

#### Returns

`CreatePresetRequest`

#### Overrides

```ts
Message<CreatePresetRequest>.constructor
```

## Properties

### data?

```ts
optional data?: Any;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:266](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L266)

The serialized configuration blob of the Preset (document-service).

#### Generated

from field: google.protobuf.Any data = 2;

***

### preset?

```ts
optional preset?: Preset;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:259](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L259)

The preset to create.

#### Generated

from field: audiotool.preset.v1.Preset preset = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:275](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L275)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:273](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L273)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.CreatePresetRequest" = "audiotool.preset.v1.CreatePresetRequest";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:274](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L274)

## Methods

### equals()

```ts
static equals(a: 
  | CreatePresetRequest
  | PlainMessage<CreatePresetRequest>
  | undefined, b: 
  | CreatePresetRequest
  | PlainMessage<CreatePresetRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:292](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L292)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreatePresetRequest` \| `PlainMessage`\<`CreatePresetRequest`\> \| `undefined` |
| `b` | \| `CreatePresetRequest` \| `PlainMessage`\<`CreatePresetRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:280](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L280)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreatePresetRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:284](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L284)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreatePresetRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePresetRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:288](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L288)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreatePresetRequest`
