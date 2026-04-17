---
title: "SampleConvertDone"
parent: "api"
grand_parent: "API"
nav_order: 104
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: SampleConvertDone

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:136](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L136)

Triggered when a sample is converted.

## Generated

from message audiotool.sample.v1.SampleConvertDone

## Extends

- `Message`\<`SampleConvertDone`\>

## Constructors

### Constructor

```ts
new SampleConvertDone(data?: PartialMessage<SampleConvertDone>): SampleConvertDone;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:151](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L151)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`SampleConvertDone`\> |

#### Returns

`SampleConvertDone`

#### Overrides

```ts
Message<SampleConvertDone>.constructor
```

## Properties

### error

```ts
error: SampleConvertDoneErrorType = SampleConvertDoneErrorType.UNSPECIFIED;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:149](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L149)

The type of error that happened during the conversion if any.

#### Generated

from field: audiotool.sample.v1.SampleConvertDoneErrorType error = 2;

***

### sample?

```ts
optional sample?: Sample;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L142)

The user_name who uploaded the sample.

#### Generated

from field: audiotool.sample.v1.Sample sample = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:158](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L158)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:156](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L156)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.SampleConvertDone" = "audiotool.sample.v1.SampleConvertDone";
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:157](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L157)

## Methods

### equals()

```ts
static equals(a: SampleConvertDone | PlainMessage<SampleConvertDone> | undefined, b: SampleConvertDone | PlainMessage<SampleConvertDone> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L175)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `SampleConvertDone` \| `PlainMessage`\<`SampleConvertDone`\> \| `undefined` |
| `b` | `SampleConvertDone` \| `PlainMessage`\<`SampleConvertDone`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SampleConvertDone;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:163](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L163)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`SampleConvertDone`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SampleConvertDone;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:167](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L167)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SampleConvertDone`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SampleConvertDone;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L171)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SampleConvertDone`
