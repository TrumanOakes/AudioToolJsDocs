---
title: "Heisenberg"
parent: "entities"
grand_parent: "API"
nav_order: 62
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Heisenberg

```ts
type Heisenberg = {
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  envelope2: NexusObject<AdsrEnvelope>;
  envelope3: NexusObject<AdsrEnvelope>;
  envelopeMain: NexusObject<AdsrEnvelope>;
  filter: NexusObject<HeisenbergFilter>;
  gain: PrimitiveField<number, "mut">;
  glideMs: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  lfo1: NexusObject<HeisenbergLFO>;
  lfo2: NexusObject<HeisenbergLFO>;
  microTuning: PrimitiveField<NexusLocation, "mut">;
  notesInput: NexusObject<Empty>;
  operatorA: NexusObject<HeisenbergOperator>;
  operatorB: NexusObject<HeisenbergOperator>;
  operatorC: NexusObject<HeisenbergOperator>;
  operatorD: NexusObject<HeisenbergOperator>;
  operatorDetuneModeIndex: PrimitiveField<number, "mut">;
  pitchEnvelope: NexusObject<HeisenbergPitchEnvelope>;
  playModeIndex: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  tuneSemitones: PrimitiveField<number, "mut">;
  unisonoCount: PrimitiveField<number, "mut">;
  unisonoDetuneSemitones: PrimitiveField<number, "mut">;
  unisonoStereoSpreadFactor: PrimitiveField<number, "mut">;
  velocityFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L26)

key | value
--- | ---
type | entity
key | `"heisenberg"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer)

 data structure for the Heisenberg FM synth

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:232](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L232)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L30)

The user-assigned name of this device.

***

### envelope2

```ts
envelope2: NexusObject<AdsrEnvelope>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:196](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L196)

The "env 1" envelope of the Heisenberg. Can be assigned to individual operators inside the operator message.

***

### envelope3

```ts
envelope3: NexusObject<AdsrEnvelope>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:200](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L200)

The "env 2" envelope of the Heisenberg. Can be assigned to individual operators inside the operator message.

***

### envelopeMain

```ts
envelopeMain: NexusObject<AdsrEnvelope>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:192](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L192)

The "main" envelope of the Heisenberg. Is always applied to the entire synth's gain, but can
 also be assigned to individual operators inside the operator message.

***

### filter

```ts
filter: NexusObject<HeisenbergFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:216](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L216)

The Heisenberg filter configuration.

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L78)

Gain of the synthesizer. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.7079460024833679
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### glideMs

```ts
glideMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:114](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L114)

Glide time controls the duration that a note's pitch "glides" to the next note
 once played. When in Mono or Legato mode, notes will glide if they overlap;
 in Polyphone mode, notes will glide if they don't overlap.

key | value
--- | ---
default | 0
range | [0, 5000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:241](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L241)

Whether the device is active or not. When is_active=false, the heisenberg is silent.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfo1

```ts
lfo1: NexusObject<HeisenbergLFO>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:208](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L208)

The first LFO of the Heisenberg. Can be assigned to the individual operators inside the operator message.

***

### lfo2

```ts
lfo2: NexusObject<HeisenbergLFO>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:212](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L212)

The second LFO of the Heisenberg. Can be assigned to the individual operators inside the operator message.

***

### microTuning

```ts
microTuning: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L58)

Micro tuning.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.MicroTuning](../../api/enumerations/TargetType.html#enumeration-member-microtuning), meaning one of: <br />[entities.MicroTuningOctave](MicroTuningOctave.html)

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:224](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L224)

Notes Input.

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### operatorA

```ts
operatorA: NexusObject<HeisenbergOperator>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L175)

Operator "A" of the Heisenberg.

***

### operatorB

```ts
operatorB: NexusObject<HeisenbergOperator>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:179](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L179)

Operator "B" of the Heisenberg.

***

### operatorC

```ts
operatorC: NexusObject<HeisenbergOperator>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:183](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L183)

Operator "C" of the Heisenberg.

***

### operatorD

```ts
operatorD: NexusObject<HeisenbergOperator>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:187](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L187)

Operator "D" of the Heisenberg.

***

### operatorDetuneModeIndex

```ts
operatorDetuneModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L171)

Selects the operator detune mode. This value affects which detune mode is shown in the DAW
 for each operator's detune gauge. It doesn't have an effect on the produced audio.
 - 0: invalid
 - 1: Semitone  - show's semitone to detune an operator
 - 2: Ratio     - show's the frequency ratio to detune an operator

key | value
--- | ---
default | 1
range | [1, 2]

***

### pitchEnvelope

```ts
pitchEnvelope: NexusObject<HeisenbergPitchEnvelope>;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:204](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L204)

The Heisenberg pitch envelope. Can be assigned to the individual operators inside the operator message.

***

### playModeIndex

```ts
playModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L102)

Selects the play mode of the synthesizer. The play mode determines how notes are played:
 - 0: invalid
 - 1: Mono
 - 2: Legato
 - 3: Polyphone

 Mono:
 At most once note is played at once with slight overlap during release. An incoming note
 cuts already playing notes.

 Legato:
 Same as mono, but attack is omitted when a new incoming note cut off an already playing note.

 Polyphone:
 Multiple notes/chords can be played simultaneously.

key | value
--- | ---
default | 3
range | [1, 3]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L39)

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

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L48)

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

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L68)

Global tuning of the synth, moves all notes played by a given amount of semitones.

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### unisonoCount

```ts
unisonoCount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:134](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L134)

Setting this parameter to > 1 will create multiple voices per note.

key | value
--- | ---
default | 1
range | [1, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### unisonoDetuneSemitones

```ts
unisonoDetuneSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:147](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L147)

If there's multiple voices per note (i.e. if unisono_count  > 1), increasing
 this parameter will detune all voices from each other more by up to 1 semitone.
 Increasing this parameter creates a "wider" sound.
 If unisono_count is 1, this parameter has no effect.

key | value
--- | ---
default | 0.0010000000474974513
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### unisonoStereoSpreadFactor

```ts
unisonoStereoSpreadFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:158](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L158)

Spreads the voices across the stereo field. 0 is centered, 1 moves some voices
 to the right, some to the left. -1 moves them in the opposite direction.

key | value
--- | ---
default | 0.5
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### velocityFactor

```ts
velocityFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:124](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L124)

Multiplier for the velocity of the notes, controlling their loudness. No unit.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
