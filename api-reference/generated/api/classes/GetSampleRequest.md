---
title: "GetSampleRequest"
parent: "api"
grand_parent: "API"
nav_order: 53
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetSampleRequest

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:427](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L427)

Request for SampleService.GetSample.

## Generated

from message audiotool.sample.v1.GetSampleRequest

## Extends

- `Message`\<`GetSampleRequest`\>

## Constructors

### Constructor

```ts
new GetSampleRequest(data?: PartialMessage<GetSampleRequest>): GetSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:435](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L435)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetSampleRequest`\> |

#### Returns

`GetSampleRequest`

#### Overrides

```ts
Message<GetSampleRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:433](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L433)

Required. The name of the sample to be retrieved, in the form `samples/{name}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:442](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L442)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:440](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L440)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.GetSampleRequest" = "audiotool.sample.v1.GetSampleRequest";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:441](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L441)

## Methods

### equals()

```ts
static equals(a: GetSampleRequest | PlainMessage<GetSampleRequest> | undefined, b: GetSampleRequest | PlainMessage<GetSampleRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:458](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L458)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetSampleRequest` \| `PlainMessage`\<`GetSampleRequest`\> \| `undefined` |
| `b` | `GetSampleRequest` \| `PlainMessage`\<`GetSampleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:446](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L446)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetSampleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:450](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L450)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSampleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSampleRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:454](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L454)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSampleRequest`
