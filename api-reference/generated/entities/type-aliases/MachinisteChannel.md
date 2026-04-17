---
title: "MachinisteChannel"
parent: "entities"
grand_parent: "API"
nav_order: 72
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MachinisteChannel

```ts
type MachinisteChannel = {
  channelOutput: NexusObject<Empty>;
  cutoffFrequencyHz: PrimitiveField<number, "mut">;
  cutoffModulationDepth: PrimitiveField<number, "mut">;
  endTrimFactor: PrimitiveField<number, "mut">;
  endTrimModulationDepth: PrimitiveField<number, "mut">;
  envelopePeakRatio: PrimitiveField<number, "mut">;
  envelopeRatioModulationDepth: PrimitiveField<number, "mut">;
  envelopeSlope: PrimitiveField<number, "mut">;
  envelopeSlopeModulationDepth: PrimitiveField<number, "mut">;
  filterTypeIndex: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  gainModulationDepth: PrimitiveField<number, "mut">;
  panning: PrimitiveField<number, "mut">;
  panningModulationDepth: PrimitiveField<number, "mut">;
  pitchModulationDepth: PrimitiveField<number, "mut">;
  pitchSemitones: PrimitiveField<number, "mut">;
  resonance: PrimitiveField<number, "mut">;
  resonanceModulationDepth: PrimitiveField<number, "mut">;
  sample: PrimitiveField<NexusLocation, "mut">;
  startTrimFactor: PrimitiveField<number, "mut">;
  startTrimModulationDepth: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:437](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L437)

key | value
--- | ---
type | object

 Holds the parameters, their modulation amount, and the loaded sample
 for a single channel.

 The effective "modulation depth" for each step is the multiplication of
 the various modulation depths for this step & parameter, which are:
 - the global modulation depth
 - the parameter modulation depth
 - the step modulation depth

 Call this "mod amount".

 The effective parameter value used, in % of the parameter's full range, is:
 - -> if the modulation is positive:
        mod amount * (1 - parameter value) + parameter value
 - -> if the modulation is negative:
        mod amount * parameter value + parameter value

## Properties

### channelOutput

```ts
channelOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:659](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L659)

Individual channel output, if connected then the audio from
 this channel no longer outputs via the master output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### cutoffFrequencyHz

```ts
cutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:540](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L540)

Filter cutoff, mapped to [28hz, 12000hz].

key | value
--- | ---
default | 6000
range | [28, 12000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### cutoffModulationDepth

```ts
cutoffModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:550](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L550)

Modulation depth of cutoff. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### endTrimFactor

```ts
endTrimFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:483](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L483)

This sets the ending point in the sample in % of the sample length.
 0 means end is at time 0, 1 means end is at the end of the sample.

 If start > end, the sample is played backwards.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### endTrimModulationDepth

```ts
endTrimModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:493](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L493)

Modulation depth of end_trim_factor. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopePeakRatio

```ts
envelopePeakRatio: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:580](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L580)

At what point during the sample playback, in % of the sample length, the envelope peaks.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeRatioModulationDepth

```ts
envelopeRatioModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:590](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L590)

Modulation depth of envelope ratio. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeSlope

```ts
envelopeSlope: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:600](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L600)

The steepness of the slope. 0 is linear, -1 slopes up, 1 slopes down.

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeSlopeModulationDepth

```ts
envelopeSlopeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:610](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L610)

Modulation depth of envelope slope. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterTypeIndex

```ts
filterTypeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:530](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L530)

Selects the sample filter type.

 - 0: invalid
 - 1: no filter
 - 2: low-pass
 - 3: high-pass

key | value
--- | ---
default | 1
range | [1, 3]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:640](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L640)

Output gain of the channel. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.10000000149011612
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gainModulationDepth

```ts
gainModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:650](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L650)

Modulation depth of gain. See message documentation for more details.

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:620](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L620)

Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### panningModulationDepth

```ts
panningModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:630](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L630)

Modulation depth of panning. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### pitchModulationDepth

```ts
pitchModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:515](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L515)

Modulation depth of tune. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### pitchSemitones

```ts
pitchSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:505](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L505)

Tunes the sample by a given amount of semitones by playing it at a different speed.

 For example, -12 detunes the sample by 1 octave by playing it at half the original speed.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### resonance

```ts
resonance: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:560](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L560)

Filter resonance. No unit.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### resonanceModulationDepth

```ts
resonanceModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:570](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L570)

Modulation depth of resonance. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sample

```ts
sample: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:447](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L447)

Audio sample to be played on this channel.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.Sample](../../api/enumerations/TargetType.html#enumeration-member-sample), meaning one of: <br />[entities.Sample](Sample.html)

***

### startTrimFactor

```ts
startTrimFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:460](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L460)

This sets the starting point in the sample in % of the sample length.
 0 means start is at time 0, 1 means start is at the end of the sample.

 If start > end, the sample is played backwards.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### startTrimModulationDepth

```ts
startTrimModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:470](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L470)

Modulation depth of start_trim_factor. See message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
