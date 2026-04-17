---
title: "UpdateSampleResponse"
parent: "api"
grand_parent: "API"
nav_order: 135
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateSampleResponse

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:558](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L558)

Response for SampleService.UpdateSample.

## Generated

from message audiotool.sample.v1.UpdateSampleResponse

## Extends

- `Message`\<`UpdateSampleResponse`\>

## Constructors

### Constructor

```ts
new UpdateSampleResponse(data?: PartialMessage<UpdateSampleResponse>): UpdateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:566](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L566)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateSampleResponse`\> |

#### Returns

`UpdateSampleResponse`

#### Overrides

```ts
Message<UpdateSampleResponse>.constructor
```

## Properties

### sample?

```ts
optional sample?: Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:564](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L564)

The updated sample.

#### Generated

from field: audiotool.sample.v1.Sample sample = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:573](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L573)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:571](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L571)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.UpdateSampleResponse" = "audiotool.sample.v1.UpdateSampleResponse";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:572](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L572)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateSampleResponse
  | PlainMessage<UpdateSampleResponse>
  | undefined, b: 
  | UpdateSampleResponse
  | PlainMessage<UpdateSampleResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:589](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L589)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateSampleResponse` \| `PlainMessage`\<`UpdateSampleResponse`\> \| `undefined` |
| `b` | \| `UpdateSampleResponse` \| `PlainMessage`\<`UpdateSampleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:577](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L577)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateSampleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:581](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L581)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSampleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSampleResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:585](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L585)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSampleResponse`
