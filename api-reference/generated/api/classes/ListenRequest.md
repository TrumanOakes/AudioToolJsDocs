---
title: "ListenRequest"
parent: "api"
grand_parent: "API"
nav_order: 65
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListenRequest

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:673](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L673)

Request for SampleService.Listen.

## Generated

from message audiotool.sample.v1.ListenRequest

## Extends

- `Message`\<`ListenRequest`\>

## Constructors

### Constructor

```ts
new ListenRequest(data?: PartialMessage<ListenRequest>): ListenRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:681](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L681)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListenRequest`\> |

#### Returns

`ListenRequest`

#### Overrides

```ts
Message<ListenRequest>.constructor
```

## Properties

### names

```ts
names: string[] = [];
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:679](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L679)

The names of the sample to listen to, in the form `samples/{name}`.

#### Generated

from field: repeated string names = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:688](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L688)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:686](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L686)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.ListenRequest" = "audiotool.sample.v1.ListenRequest";
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:687](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L687)

## Methods

### equals()

```ts
static equals(a: ListenRequest | PlainMessage<ListenRequest> | undefined, b: ListenRequest | PlainMessage<ListenRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:704](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L704)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ListenRequest` \| `PlainMessage`\<`ListenRequest`\> \| `undefined` |
| `b` | `ListenRequest` \| `PlainMessage`\<`ListenRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListenRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:692](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L692)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListenRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListenRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:696](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L696)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListenRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListenRequest;
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_pb.ts:700](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_pb.ts#L700)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListenRequest`
