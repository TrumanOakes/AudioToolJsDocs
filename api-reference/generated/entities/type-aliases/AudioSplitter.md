---
title: "AudioSplitter"
parent: "entities"
grand_parent: "API"
nav_order: 6
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudioSplitter

```ts
type AudioSplitter = {
  audioInput: NexusObject<Empty>;
  audioOutputA: NexusObject<Empty>;
  audioOutputB: NexusObject<Empty>;
  audioOutputC: NexusObject<Empty>;
  blendModeIndex: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  splitCoords: NexusObject<AudioSplitterCoordinates>;
};
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:24](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L24)

key | value
--- | ---
type | entity
key | `"audioSplitter"`
is |

 Represents an audio splitter device.

 The audio splitter takes a single audio input, and "splits"
 the signal according to coordinates.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L82)

Single Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutputA

```ts
audioOutputA: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L90)

Output A

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### audioOutputB

```ts
audioOutputB: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L98)

Output B

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### audioOutputC

```ts
audioOutputC: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L106)

Output C

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### blendModeIndex

```ts
blendModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L74)

Selects the blending algorithm used to calculate the gains
 of the output signals based on the distance to the points
 A, B and C in the AudioSplitterCoordinates below.

 - 0: invalid
 - 1: full-power
 - 2: equal-power

 The difference between algorithms is best understood when considering
 the situation where the input signal is a simple sine wave of gain 1.

 - full-power:
    Means each output will have the full gain of the input signal, i.e.
    a sine wave with peak 1. Moving to any point A, B, C will keep a sine wave
    with gain 1.

 - equal-power:
    The gain of the SUM of the output signals will always match the whole incoming
    signal.

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

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L28)

The user-assigned name of this device.

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L37)

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

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L46)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### splitCoords

```ts
splitCoords: NexusObject<AudioSplitterCoordinates>;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L110)

Contains the coordinates determining how the signals as split between A, B and C.
