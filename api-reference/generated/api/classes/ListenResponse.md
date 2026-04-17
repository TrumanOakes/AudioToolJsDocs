---
title: "ListenResponse"
parent: "api"
grand_parent: "API"
nav_order: 66
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListenResponse

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:714](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L714)

Response for SampleService.Listen.

## Generated

from message audiotool.sample.v1.ListenResponse

## Extends

- `Message`\<`ListenResponse`\>

## Constructors

### Constructor

```ts
new ListenResponse(data?: PartialMessage<ListenResponse>): ListenResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:722](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L722)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListenResponse`\> |

#### Returns

`ListenResponse`

#### Overrides

```ts
Message<ListenResponse>.constructor
```

## Properties

### event?

```ts
optional event?: SampleEvent;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:720](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L720)

The sample.

#### Generated

from field: audiotool.sample.v1.SampleEvent event = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:729](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L729)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:727](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L727)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.ListenResponse" = "audiotool.sample.v1.ListenResponse";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:728](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L728)

## Methods

### equals()

```ts
static equals(a: ListenResponse | PlainMessage<ListenResponse> | undefined, b: ListenResponse | PlainMessage<ListenResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:745](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L745)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ListenResponse` \| `PlainMessage`\<`ListenResponse`\> \| `undefined` |
| `b` | `ListenResponse` \| `PlainMessage`\<`ListenResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:733](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L733)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListenResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:737](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L737)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListenResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenResponse;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:741](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L741)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListenResponse`
