---
title: "ListPresetsRequest"
parent: "api"
grand_parent: "API"
nav_order: 70
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListPresetsRequest

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L29)

Request for PresetService.ListPresets.

## Generated

from message audiotool.preset.v1.ListPresetsRequest

## Extends

- `Message`\<`ListPresetsRequest`\>

## Constructors

### Constructor

```ts
new ListPresetsRequest(data?: PartialMessage<ListPresetsRequest>): ListPresetsRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L84)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListPresetsRequest`\> |

#### Returns

`ListPresetsRequest`

#### Overrides

```ts
Message<ListPresetsRequest>.constructor
```

## Properties

### filter

```ts
filter: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L49)

The standard CEL filter.

Supported fields:
- preset.name
- preset.display_name
- preset.description
- preset.owner_name
- preset.num_favorites
- preset.num_usages
- preset.create_time
- preset.update_time
- preset.clearance
- preset.tags
- preset.device_type
- preset.favorited_by_user

#### Generated

from field: string filter = 1;

***

### orderBy

```ts
orderBy: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L70)

The order to list results by.

#### Generated

from field: string order_by = 4;

***

### pageSize

```ts
pageSize: number = 0;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:56](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L56)

The maximum number of items to return.

#### Generated

from field: int32 page_size = 2;

***

### pageToken

```ts
pageToken: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L63)

The next_page_token value returned from a previous List request, if any.

#### Generated

from field: string page_token = 3;

***

### textSearch

```ts
textSearch: string = "";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L82)

An additional full-text search over metadata. Operates on a tokenized index.

Examples:
- 'kepz & techno' returns results matching both tokens
- 'guitar & (jazz | funk)' returns guitar presets tagged with either jazz or funk
- '!bass & guitar & (jazz | funk)' excludes presets matching "bass"

#### Generated

from field: string text_search = 5;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L91)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L89)

***

### typeName

```ts
readonly static typeName: "audiotool.preset.v1.ListPresetsRequest" = "audiotool.preset.v1.ListPresetsRequest";
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L90)

## Methods

### equals()

```ts
static equals(a: ListPresetsRequest | PlainMessage<ListPresetsRequest> | undefined, b: ListPresetsRequest | PlainMessage<ListPresetsRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L111)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ListPresetsRequest` \| `PlainMessage`\<`ListPresetsRequest`\> \| `undefined` |
| `b` | `ListPresetsRequest` \| `PlainMessage`\<`ListPresetsRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPresetsRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L99)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListPresetsRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPresetsRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L103)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListPresetsRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPresetsRequest;
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_pb.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_pb.ts#L107)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListPresetsRequest`
