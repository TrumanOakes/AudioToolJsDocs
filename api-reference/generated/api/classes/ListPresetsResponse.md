---
title: "ListPresetsResponse"
parent: "api"
grand_parent: "API"
nav_order: 71
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListPresetsResponse

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L121)

Response for PresetService.ListPresets.

## Generated

from message audiotool.preset.v1.ListPresetsResponse

## Extends

- `Message`\<`ListPresetsResponse`\>

## Constructors

### Constructor

```ts
new ListPresetsResponse(data?: PartialMessage<ListPresetsResponse>): ListPresetsResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:137](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L137)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListPresetsResponse`\> |

#### Returns

`ListPresetsResponse`

#### Overrides

```ts
Message<ListPresetsResponse>.constructor
```

## Properties

### nextPageToken

```ts
nextPageToken: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:135](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L135)

Token to retrieve the next page of results, or empty if there are no more results in the
list.

#### Generated

from field: string next_page_token = 2;

***

### presets

```ts
presets: Preset[] = [];
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:127](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L127)

The list of presets.

#### Generated

from field: repeated audiotool.preset.v1.Preset presets = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:144](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L144)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L142)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.ListPresetsResponse" = "audiotool.preset.v1.ListPresetsResponse";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:143](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L143)

## Methods

### equals()

```ts
static equals(a: 
  | ListPresetsResponse
  | PlainMessage<ListPresetsResponse>
  | undefined, b: 
  | ListPresetsResponse
  | PlainMessage<ListPresetsResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L161)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListPresetsResponse` \| `PlainMessage`\<`ListPresetsResponse`\> \| `undefined` |
| `b` | \| `ListPresetsResponse` \| `PlainMessage`\<`ListPresetsResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPresetsResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:149](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L149)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListPresetsResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPresetsResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L153)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListPresetsResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPresetsResponse;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:157](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L157)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListPresetsResponse`
