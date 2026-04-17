---
title: "BandSplitter"
parent: "entities"
grand_parent: "API"
nav_order: 14
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: BandSplitter

```ts
type BandSplitter = {
  audioInput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  filterHighHz: PrimitiveField<number, "mut">;
  filterLowHz: PrimitiveField<number, "mut">;
  highAudioOutput: NexusObject<Empty>;
  highGain: PrimitiveField<number, "mut">;
  lowAudioOutput: NexusObject<Empty>;
  lowGain: PrimitiveField<number, "mut">;
  midAudioOutput: NexusObject<Empty>;
  midGain: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"bandSplitter"`
is |

 The band splitter splits the audio signal into three non-overlapping
 frequency sub-bands.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:129](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L129)

Audio input that will be split into frequency bands.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L26)

The user-assigned name of this device.

***

### filterHighHz

```ts
filterHighHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L64)

Frequency where the middle band stops, and the high band starts.

key | value
--- | ---
default | 3600
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterLowHz

```ts
filterLowHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L54)

Frequency where the low band stops, and the middle band starts.

key | value
--- | ---
default | 360
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### highAudioOutput

```ts
highAudioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L83)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### highGain

```ts
highGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L75)

Gain multiplier applied to the high frequency band output.
 Equivalent to a dB range of [-inf, 18.0].

key | value
--- | ---
default | 1
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowAudioOutput

```ts
lowAudioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L121)

Audio output for the low frequency band.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### lowGain

```ts
lowGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L113)

Gain multiplier applied to the low frequency band output.
 Equivalent to a dB range of [-inf, 18.0].

key | value
--- | ---
default | 1
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### midAudioOutput

```ts
midAudioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L102)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### midGain

```ts
midGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L94)

Gain multiplier applied to the mid frequency band output.
 Equivalent to a dB range of [-inf, 18.0].

key | value
--- | ---
default | 1
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L35)

X position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### positionY

```ts
positionY: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/band\_splitter/v1/band\_splitter\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/band_splitter/v1/band_splitter_nexus.ts#L44)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
