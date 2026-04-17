---
title: "GetAudiographsResponse"
parent: "api"
grand_parent: "API"
nav_order: 44
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetAudiographsResponse

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:191](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L191)

Response for AudiographService.GetAudiograph

## Generated

from message audiotool.audiograph.v1.GetAudiographsResponse

## Extends

- `Message`\<`GetAudiographsResponse`\>

## Constructors

### Constructor

```ts
new GetAudiographsResponse(data?: PartialMessage<GetAudiographsResponse>): GetAudiographsResponse;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:199](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L199)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetAudiographsResponse`\> |

#### Returns

`GetAudiographsResponse`

#### Overrides

```ts
Message<GetAudiographsResponse>.constructor
```

## Properties

### audiographs

```ts
audiographs: Audiograph[] = [];
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:197](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L197)

The audiograph data.

#### Generated

from field: repeated audiotool.audiograph.v1.Audiograph audiographs = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:206](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L206)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:204](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L204)

***

### typeName

```ts
readonly static typeName: "audiotool.audiograph.v1.GetAudiographsResponse" = "audiotool.audiograph.v1.GetAudiographsResponse";
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:205](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L205)

## Methods

### equals()

```ts
static equals(a: 
  | GetAudiographsResponse
  | PlainMessage<GetAudiographsResponse>
  | undefined, b: 
  | GetAudiographsResponse
  | PlainMessage<GetAudiographsResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:222](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L222)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `GetAudiographsResponse` \| `PlainMessage`\<`GetAudiographsResponse`\> \| `undefined` |
| `b` | \| `GetAudiographsResponse` \| `PlainMessage`\<`GetAudiographsResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAudiographsResponse;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:210](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L210)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetAudiographsResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAudiographsResponse;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:214](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L214)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetAudiographsResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAudiographsResponse;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:218](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L218)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetAudiographsResponse`
