---
title: "UpdateSampleRequest"
parent: "api"
grand_parent: "API"
nav_order: 134
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateSampleRequest

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:509](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L509)

Request for SampleService.UpdateSample.

## Generated

from message audiotool.sample.v1.UpdateSampleRequest

## Extends

- `Message`\<`UpdateSampleRequest`\>

## Constructors

### Constructor

```ts
new UpdateSampleRequest(data?: PartialMessage<UpdateSampleRequest>): UpdateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:524](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L524)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateSampleRequest`\> |

#### Returns

`UpdateSampleRequest`

#### Overrides

```ts
Message<UpdateSampleRequest>.constructor
```

## Properties

### sample?

```ts
optional sample?: Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:515](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L515)

The sample

#### Generated

from field: audiotool.sample.v1.Sample sample = 1;

***

### updateMask?

```ts
optional updateMask?: FieldMask;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:522](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L522)

The update mask

#### Generated

from field: google.protobuf.FieldMask update_mask = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:531](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L531)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:529](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L529)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.UpdateSampleRequest" = "audiotool.sample.v1.UpdateSampleRequest";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:530](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L530)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateSampleRequest
  | PlainMessage<UpdateSampleRequest>
  | undefined, b: 
  | UpdateSampleRequest
  | PlainMessage<UpdateSampleRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:548](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L548)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateSampleRequest` \| `PlainMessage`\<`UpdateSampleRequest`\> \| `undefined` |
| `b` | \| `UpdateSampleRequest` \| `PlainMessage`\<`UpdateSampleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:536](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L536)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateSampleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:540](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L540)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSampleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:544](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L544)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSampleRequest`
