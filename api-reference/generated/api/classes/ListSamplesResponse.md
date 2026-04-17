---
title: "ListSamplesResponse"
parent: "api"
grand_parent: "API"
nav_order: 77
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListSamplesResponse

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L139)

Response for SampleService.ListSamples.

## Generated

from message audiotool.sample.v1.ListSamplesResponse

## Extends

- `Message`\<`ListSamplesResponse`\>

## Constructors

### Constructor

```ts
new ListSamplesResponse(data?: PartialMessage<ListSamplesResponse>): ListSamplesResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:155](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L155)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListSamplesResponse`\> |

#### Returns

`ListSamplesResponse`

#### Overrides

```ts
Message<ListSamplesResponse>.constructor
```

## Properties

### nextPageToken

```ts
nextPageToken: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L153)

Token to retrieve the next page of results, or empty if there are no more results in the
list.

#### Generated

from field: string next_page_token = 2;

***

### samples

```ts
samples: Sample[] = [];
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:145](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L145)

The list of samples.

#### Generated

from field: repeated audiotool.sample.v1.Sample samples = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:162](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L162)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:160](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L160)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.ListSamplesResponse" = "audiotool.sample.v1.ListSamplesResponse";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L161)

## Methods

### equals()

```ts
static equals(a: 
  | ListSamplesResponse
  | PlainMessage<ListSamplesResponse>
  | undefined, b: 
  | ListSamplesResponse
  | PlainMessage<ListSamplesResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:179](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L179)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListSamplesResponse` \| `PlainMessage`\<`ListSamplesResponse`\> \| `undefined` |
| `b` | \| `ListSamplesResponse` \| `PlainMessage`\<`ListSamplesResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSamplesResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:167](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L167)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListSamplesResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSamplesResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L171)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSamplesResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSamplesResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L175)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSamplesResponse`
