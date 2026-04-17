---
title: "ListSamplesRequest"
parent: "api"
grand_parent: "API"
nav_order: 76
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListSamplesRequest

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L30)

Request for SampleService.ListSamples.

## Generated

from message audiotool.sample.v1.ListSamplesRequest

## Extends

- `Message`\<`ListSamplesRequest`\>

## Constructors

### Constructor

```ts
new ListSamplesRequest(data?: PartialMessage<ListSamplesRequest>): ListSamplesRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L102)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListSamplesRequest`\> |

#### Returns

`ListSamplesRequest`

#### Overrides

```ts
Message<ListSamplesRequest>.constructor
```

## Properties

### filter

```ts
filter: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:66](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L66)

The standard CEL filter.

Supported fields:
- sample.name
- sample.display_name
- sample.description
- sample.owner_name
- sample.num_favorites
- sample.num_usages
- sample.bpm
- sample.sample_type
- sample.play_duration
- sample.create_time
- sample.update_time
- sample.clearance
- sample.tags
- sample.favorited_by_user

#### Generated

from field: string filter = 4;

***

### orderBy

```ts
orderBy: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L88)

The order to sort the results by.

Supported fields:
- sample.name
- sample.display_name
- sample.description
- sample.owner_name
- sample.num_favorites
- sample.num_usages
- sample.bpm
- sample.sample_type
- sample.play_duration
- sample.create_time
- sample.update_time
- sample.clearance
- sample.tags

#### Generated

from field: string order_by = 5;

***

### pageSize

```ts
pageSize: number = 0;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L36)

The maximum number of items to return.

#### Generated

from field: int32 page_size = 2;

***

### pageToken

```ts
pageToken: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L43)

The next_page_token value returned from a previous List request, if any.

#### Generated

from field: string page_token = 3;

***

### textSearch

```ts
textSearch: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:100](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L100)

An additional filter for matching text metadata

Examples:
'kepz & dub' : returns results matching both keywords
'guitar & (jazz | funk)' : returns guitar samples tagged with either jazz or funk
'!bass & guitar & (jazz | funk)' : same as above but excludes samples matching "bass"

#### Generated

from field: string text_search = 6;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L109)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L107)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.ListSamplesRequest" = "audiotool.sample.v1.ListSamplesRequest";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L108)

## Methods

### equals()

```ts
static equals(a: ListSamplesRequest | PlainMessage<ListSamplesRequest> | undefined, b: ListSamplesRequest | PlainMessage<ListSamplesRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:129](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L129)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ListSamplesRequest` \| `PlainMessage`\<`ListSamplesRequest`\> \| `undefined` |
| `b` | `ListSamplesRequest` \| `PlainMessage`\<`ListSamplesRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSamplesRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:117](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L117)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListSamplesRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSamplesRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L121)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSamplesRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSamplesRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L125)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSamplesRequest`
