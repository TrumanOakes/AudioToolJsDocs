---
title: "SampleEvent"
parent: "api"
grand_parent: "API"
nav_order: 106
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: SampleEvent

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L71)

An event that is sent to a channel.

## Generated

from message audiotool.sample.v1.SampleEvent

## Extends

- `Message`\<`SampleEvent`\>

## Constructors

### Constructor

```ts
new SampleEvent(data?: PartialMessage<SampleEvent>): SampleEvent;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L101)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`SampleEvent`\> |

#### Returns

`SampleEvent`

#### Overrides

```ts
Message<SampleEvent>.constructor
```

## Properties

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L84)

The time the event was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 2;

***

### event

```ts
event: 
  | {
  case: "sampleConvertDone";
  value: SampleConvertDone;
}
  | {
  case: undefined;
  value?: undefined;
};
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L91)

The type of the event.

#### Union Members

##### Type Literal

```ts
{
  case: "sampleConvertDone";
  value: SampleConvertDone;
}
```

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `case` | `"sampleConvertDone"` | - | [gen/audiotool/sample/v1/sample\_event\_pb.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L98) |
| `value` | [`SampleConvertDone`](SampleConvertDone.html) | The conversion of a sample is done. **Generated** from field: audiotool.sample.v1.SampleConvertDone sample_convert_done = 3; | [gen/audiotool/sample/v1/sample\_event\_pb.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L97) |

***

##### Type Literal

```ts
{
  case: undefined;
  value?: undefined;
}
```

#### Generated

from oneof audiotool.sample.v1.SampleEvent.event

***

### id

```ts
id: string = "";
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:77](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L77)

The ID of the event.

#### Generated

from field: string id = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L108)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L106)

***

### typeName

```ts
readonly static typeName: "audiotool.sample.v1.SampleEvent" = "audiotool.sample.v1.SampleEvent";
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L107)

## Methods

### equals()

```ts
static equals(a: SampleEvent | PlainMessage<SampleEvent> | undefined, b: SampleEvent | PlainMessage<SampleEvent> | undefined): boolean;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:126](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L126)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `SampleEvent` \| `PlainMessage`\<`SampleEvent`\> \| `undefined` |
| `b` | `SampleEvent` \| `PlainMessage`\<`SampleEvent`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SampleEvent;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:114](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L114)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`SampleEvent`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SampleEvent;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L118)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SampleEvent`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SampleEvent;
```

Defined in: [gen/audiotool/sample/v1/sample\_event\_pb.ts:122](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_event_pb.ts#L122)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`SampleEvent`
