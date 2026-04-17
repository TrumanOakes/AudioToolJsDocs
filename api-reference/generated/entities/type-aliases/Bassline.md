---
title: "Bassline"
parent: "entities"
grand_parent: "API"
nav_order: 15
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Bassline

```ts
type Bassline = {
  accent: PrimitiveField<number, "mut">;
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  cutoffFrequencyHz: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  filterDecay: PrimitiveField<number, "mut">;
  filterEnvelopeModulationDepth: PrimitiveField<number, "mut">;
  filterResonance: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  microTuning: PrimitiveField<NexusLocation, "mut">;
  patternIndex: PrimitiveField<number, "mut">;
  patternSlots: ArrayField<NexusObject<Empty>, 28>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  tuneSemitones: PrimitiveField<number, "mut">;
  waveformIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"bassline"`
is | [api.TargetType.PatternTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-patterntrackplayer), [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer)

 The bassline is inspired by a very famous bass synthesizer.

## Properties

### accent

```ts
accent: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:117](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L117)

The accent factor affects the signal's volume and filter behavior
 of notes that are marked with "accent", relative to the non-accented ones.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:167](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L167)

The filter can be used with external input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L175)

Device output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### cutoffFrequencyHz

```ts
cutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L75)

Cutoff frequency for the low-pass filter.

key | value
--- | ---
default | 220
range | [220, 12000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L26)

The user-assigned name of this device.

***

### filterDecay

```ts
filterDecay: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L106)

The duration of the decay stage of the filter envelope.
 No unit; 0 is shorter, 1 is longer.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterEnvelopeModulationDepth

```ts
filterEnvelopeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L95)

Controls the impact of the filter envelope on the filter cutoff frequency.

key | value
--- | ---
default | 0.10000000149011612
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterResonance

```ts
filterResonance: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L85)

Filter resonance. No unit.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L54)

This device's output gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.7079399824142456
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:185](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L185)

Whether the bassline is active or not. When is_active=false no audio is
 produced by the bassline nor is the input audio audible.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### microTuning

```ts
microTuning: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:159](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L159)

Reference to the microtuning.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.MicroTuning](../../api/enumerations/TargetType.html#enumeration-member-microtuning), meaning one of: <br />[entities.MicroTuningOctave](MicroTuningOctave.html)

***

### patternIndex

```ts
patternIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:140](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L140)

The index of the currently selected pattern. Controls which pattern the bassline
 currently plays back, unless a pattern track is connected to it.

key | value
--- | ---
default | 0
range | [0, 27]

***

### patternSlots

```ts
patternSlots: ArrayField<NexusObject<Empty>, 28>;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:149](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L149)

Empty fields which BasslinePatterns can point to. At most one pattern
 can point to a given element in this list.

key | value
--- | ---
element is | [api.TargetType.BasslinePatternSlot](../../api/enumerations/TargetType.html#enumeration-member-basslinepatternslot)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L35)

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

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L44)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### tuneSemitones

```ts
tuneSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L65)

This parameter detunes every note (whether incoming or from the step sequencer)
 by a specified number of semitones. +/-12 semitones is equivalent to +/- 1 octave.

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### waveformIndex

```ts
waveformIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L130)

Selects the waveform used by the Synth:
 - 0: invalid
 - 1: sawtooth
 - 2: square

key | value
--- | ---
default | 1
range | [1, 2]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
