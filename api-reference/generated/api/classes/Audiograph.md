---
title: "Audiograph"
parent: "api"
grand_parent: "API"
nav_order: 1
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Audiograph

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L74)

Audiograph represents a collection of audio nodes and connections between them.

## Generated

from message audiotool.audiograph.v1.Audiograph

## Extends

- `Message`\<`Audiograph`\>

## Constructors

### Constructor

```ts
new Audiograph(data?: PartialMessage<Audiograph>): Audiograph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L91)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Audiograph`\> |

#### Returns

`Audiograph`

#### Overrides

```ts
Message<Audiograph>.constructor
```

## Properties

### graphs

```ts
graphs: Graph[] = [];
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L89)

Depending on the requested audiograph configuration you will get:
one graph if you requested MONO
two graphs if you requested STEREO (index 0 is left, index 1 is right)

#### Generated

from field: repeated audiotool.audiograph.v1.Graph graphs = 2;

***

### resourceName

```ts
resourceName: string = "";
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L80)

The name of the resource the graph belongs to (track or sample).

#### Generated

from field: string resource_name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L98)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L96)

***

### typeName

```ts
readonly static typeName: "audiotool.audiograph.v1.Audiograph" = "audiotool.audiograph.v1.Audiograph";
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L97)

## Methods

### equals()

```ts
static equals(a: Audiograph | PlainMessage<Audiograph> | undefined, b: Audiograph | PlainMessage<Audiograph> | undefined): boolean;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L115)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Audiograph` \| `PlainMessage`\<`Audiograph`\> \| `undefined` |
| `b` | `Audiograph` \| `PlainMessage`\<`Audiograph`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Audiograph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L103)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Audiograph`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Audiograph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L107)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Audiograph`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Audiograph;
```

Defined in: [gen/audiotool/audiograph/v1/audiograph\_pb.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_pb.ts#L111)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Audiograph`
