---
title: "Space"
parent: "entities"
grand_parent: "API"
nav_order: 136
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Space

```ts
type Space = {
  amplitudeEnvelope: NexusObject<AdsrEnvelope>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  envelopeLfoAmountModulationDepth: PrimitiveField<number, "mut">;
  envelopeLfoRateModulationDepth: PrimitiveField<number, "mut">;
  envelopeMixModulationDepth: PrimitiveField<number, "mut">;
  envelopeTuneModulationDepth: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  glideMs: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  keyboardMixModulationDepth: PrimitiveField<number, "mut">;
  lfo: NexusObject<SpaceLFO>;
  lfoGainModulationDepth: PrimitiveField<number, "mut">;
  lfoMixModulationDepth: PrimitiveField<number, "mut">;
  lfoPanningModulationDepth: PrimitiveField<number, "mut">;
  lfoStereoDetuneShiftModulationDepth: PrimitiveField<number, "mut">;
  microTuning: PrimitiveField<NexusLocation, "mut">;
  mixAB: PrimitiveField<number, "mut">;
  modulationEnvelope: NexusObject<AdsrEnvelope>;
  modulationEnvelopeHasRelease: PrimitiveField<boolean, "mut">;
  notePlayModeIndex: PrimitiveField<number, "mut">;
  notesInput: NexusObject<Empty>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  soundA: NexusObject<SpaceSound>;
  soundB: NexusObject<SpaceSound>;
  stereoDetuneShift: PrimitiveField<number, "mut">;
  tuneASemitones: PrimitiveField<number, "mut">;
  tuneBSemitones: PrimitiveField<number, "mut">;
  tuneSemitones: PrimitiveField<number, "mut">;
  velocityGainModulationDepth: PrimitiveField<number, "mut">;
  velocityMixModulationDepth: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L29)

key | value
--- | ---
type | entity
key | `"space"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer)

 The Space is a wavetable synthesizer.

 It features 2 wavetables called "A" and "B", which can be independently adjusted
 and mixed together.

## Properties

### amplitudeEnvelope

```ts
amplitudeEnvelope: NexusObject<AdsrEnvelope>;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:274](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L274)

The adsr envelope that modulates the gain of the synth.

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:311](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L311)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:33](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L33)

The user-assigned name of this device.

***

### envelopeLfoAmountModulationDepth

```ts
envelopeLfoAmountModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:220](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L220)

The amount by which the modulation envelope modulates the LFO amount.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeLfoRateModulationDepth

```ts
envelopeLfoRateModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:210](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L210)

The amount by which the modulation envelope modulates the LFO rate.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeMixModulationDepth

```ts
envelopeMixModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:190](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L190)

The amount by which the modulation envelope modulates the mix_a_b parameter.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeTuneModulationDepth

```ts
envelopeTuneModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:200](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L200)

The amount by which the modulation envelope modulates the tune_semitones parameter.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L71)

Gain of the synthesizer. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.7079399824142456
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### glideMs

```ts
glideMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L130)

Glide time between notes in milliseconds.

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

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:320](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L320)

Whether the device is active or not

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### keyboardMixModulationDepth

```ts
keyboardMixModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:250](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L250)

The amount by which the keyboard (i.e. note pitch) modulates the mix_a_b parameter.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfo

```ts
lfo: NexusObject<SpaceLFO>;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:270](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L270)

Parameters for the space LFO.

***

### lfoGainModulationDepth

```ts
lfoGainModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:160](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L160)

The amount by which the LFO modulates the gain parameter.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoMixModulationDepth

```ts
lfoMixModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:150](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L150)

The amount by which the LFO modulates the mix_a_b parameter.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoPanningModulationDepth

```ts
lfoPanningModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:180](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L180)

The amount by which the LFO modulates the panning of the signal.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoStereoDetuneShiftModulationDepth

```ts
lfoStereoDetuneShiftModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:170](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L170)

The amount by which the LFO modulates the stereo_detune_shift parameter.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### microTuning

```ts
microTuning: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L61)

Micro tuning.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.MicroTuning](../../api/enumerations/TargetType.html#enumeration-member-microtuning), meaning one of: <br />[entities.MicroTuningOctave](MicroTuningOctave.html)

***

### mixAB

```ts
mixAB: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:140](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L140)

Mixes the two wavetables A and B. -1 means only wavetable A is used, 1.0 means only wavetable B is used.

key | value
--- | ---
default | -1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationEnvelope

```ts
modulationEnvelope: NexusObject<AdsrEnvelope>;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:278](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L278)

The adsr envelope that can be used to modulate other parameters of the synth.

***

### modulationEnvelopeHasRelease

```ts
modulationEnvelopeHasRelease: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:287](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L287)

Whether the modulation envelope's release phase is used or not.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notePlayModeIndex

```ts
notePlayModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:266](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L266)

Selects the play mode of the synth for notes.
 - 0: invalid
 - 1: Mono       At most once note is played at once with slight overlap during release. An incoming note
               cuts already playing notes, starting from the attack phase.
 - 2: Legato     At most once note is played at once. Incoming notes cut already playing notes, skipping the attack phase of notes,
               essentially acting as if the currently playing note's pitch was changed to the new note.
 - 3: Polyphone  Multiple notes/chords can be played simultaneously.

key | value
--- | ---
default | 3
range | [1, 3]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:303](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L303)

Notes Input.

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L42)

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

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L51)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### soundA

```ts
soundA: NexusObject<SpaceSound>;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:291](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L291)

The parameters for the wavetable "A".

***

### soundB

```ts
soundB: NexusObject<SpaceSound>;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:295](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L295)

The parameters for the wavetable "B".

***

### stereoDetuneShift

```ts
stereoDetuneShift: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L89)

Multi purpose parameter to widen the stereo image of the sound.

 In the negative range (-1..0) the widening happens by phase shifting the two channels
 (resulting in a wider perceived stereo sound without pitch shift), while
 in the positive range (0 ..1) the widening happens by detuning the voices, with
 the right channel being pitched down and the right channel being pitched up
 on a range between 0 and 12 semitones.

 If the value is at -1, both voices are equal (resulting in a mono sound).

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tuneASemitones

```ts
tuneASemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L110)

Tuning of wavetable "A".

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tuneBSemitones

```ts
tuneBSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:120](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L120)

Tuning of wavetable "B".

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tuneSemitones

```ts
tuneSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:100](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L100)

Global tuning of the synth, moves all notes played by a given amount of semitones.
 +/-12 semitones is equivalent to +/- 1 octave.

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### velocityGainModulationDepth

```ts
velocityGainModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L230)

The amount by which the velocity modulates the gain parameter.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### velocityMixModulationDepth

```ts
velocityMixModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:240](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L240)

The amount by which the note velocity modulates the mix_a_b parameter.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
