---
title: "Graph"
parent: "api"
grand_parent: "API"
nav_order: 59
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Graph

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L28)

Graph represents a single graph of an audiograph.

## Generated

from message audiotool.audiograph.v1.Graph

## Extends

- `Message`\<`Graph`\>

## Constructors

### Constructor

```ts
new Graph(data?: PartialMessage<Graph>): Graph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L41)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Graph`\> |

#### Returns

`Graph`

#### Overrides

```ts
Message<Graph>.constructor
```

## Properties

### values

```ts
values: number[] = [];
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L39)

The values will be normalized to the range of a uint32.

On the server side, a Root Mean Square (RMS) value of the audio signal is calculated.
The RMS value is then normalized to the range of a uint32.

(It will not be scaled up to the maximum scale of a uint32.)

#### Generated

from field: repeated uint32 values = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L48)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L46)

***

### typeName

```ts
readonly static typeName: "audiotool.audiograph.v1.Graph" = "audiotool.audiograph.v1.Graph";
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L47)

## Methods

### equals()

```ts
static equals(a: Graph | PlainMessage<Graph> | undefined, b: Graph | PlainMessage<Graph> | undefined): boolean;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L64)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Graph` \| `PlainMessage`\<`Graph`\> \| `undefined` |
| `b` | `Graph` \| `PlainMessage`\<`Graph`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Graph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L52)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Graph`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Graph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:56](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L56)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Graph`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Graph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L60)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Graph`
