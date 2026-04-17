---
title: "AudioMerger"
parent: "entities"
grand_parent: "API"
nav_order: 3
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudioMerger

```ts
type AudioMerger = {
  audioInputA: NexusObject<Empty>;
  audioInputB: NexusObject<Empty>;
  audioInputC: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  blendModeIndex: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  mergeCoords: NexusObject<AudioMergerCoordinates>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L25)

key | value
--- | ---
type | entity
key | `"audioMerger"`
is |

 Represents an audio merger device.

 The merger device takes audio from three inputs, A, B, C,
 and mixes them according to coordinates on a triangle
 spanned by points A, B, C.

## Properties

### audioInputA

```ts
audioInputA: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L83)

Location for the audio input A.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioInputB

```ts
audioInputB: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L91)

Location for the audio input B.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioInputC

```ts
audioInputC: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L99)

Location for the audio input C.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L108)

Location for the audio input, contains a mix of A, B and C according to the
 merge coords.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### blendModeIndex

```ts
blendModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L75)

Selects the blending algorithm used to calculate the gains
 of the input signals based on the distance to the points
 A, B and C in the AudioMergerCoordinates below.

 - 0: invalid
 - 1: full-power
 - 2: equal-power

 The difference between algorithms is best understood when considering
 the situation where all 3 input signals receive an identical sine wave
 peak value 1.

 - full-power:
    Means the output will become louder when the knob is in the
    center - you will basically add all 3 signals, resulting in a sine wave
    with peak 3. If the knob is at e.g. point A, the signal will get gain 1.

 - equal-power:
    The output gain of the signal will be near-constant when moving the knob.

key | value
--- | ---
default | 1
range | [1, 2]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L29)

The user-assigned name of this device.

***

### mergeCoords

```ts
mergeCoords: NexusObject<AudioMergerCoordinates>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:112](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L112)

Contains the coordinates determining the mix between A, B and C.

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L38)

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

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L47)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
