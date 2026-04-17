---
title: "AutoFilter"
parent: "entities"
grand_parent: "API"
nav_order: 9
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AutoFilter

```ts
type AutoFilter = {
  attackMs: PrimitiveField<number, "mut">;
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  cutoffFrequencyHz: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  filterModeIndex: PrimitiveField<number, "mut">;
  filterModulationDepth: PrimitiveField<number, "mut">;
  filterResonance: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  sideChainInput: NexusObject<Empty>;
  sustainMs: PrimitiveField<number, "mut">;
  thresholdGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L28)

key | value
--- | ---
type | entity
key | `"autoFilter"`
is |

 The auto filter device.

 The auto filter is a filter that low/high pass filter
 that filters the signal based on a configured cutoff frequency.

 When the main input (or side-chain) signal passes a certain threshold gain,
 the cutoff frequency of the filter is pulled up or down in frequency according to
 an attack-sustain-release envelope.

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L70)

The duration of the attack stage of the filter envelope.

key | value
--- | ---
default | 62.5
range | [1, 2000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:173](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L173)

The location of the audio input that is affected by the effect.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:193](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L193)

The location of the audio output containing the affected signal.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### cutoffFrequencyHz

```ts
cutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L118)

The cutoff frequency of the filter...:
 - if in inverted mode: when the filter is triggered
 - if in normal mode: when the filter is not triggered

key | value
--- | ---
default | 300
range | [18, 10000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:32](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L32)

The user-assigned name of this device.

***

### filterModeIndex

```ts
filterModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L106)

Filter mode of the filter that moves if passing above the threshold.

 - 0: invalid
 - 1: LowPass
 - 2: LowPass Inverted
 - 3: HighPass
 - 4: HighPass Inverted

key | value
--- | ---
default | 1
range | [0, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterModulationDepth

```ts
filterModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:133](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L133)

Depth and direction of the filter modulation that is applied when the envelope
 is triggered:
 - if inverted mode, how far away the current filter cutoff frequency is at when
    the filter is not triggered (moving to the cutoff frequency when the envelope is triggered)
 - if normal mode, how far away the current filter cutoff frequency is at when
    the filter is triggered (staying at cutoff frequency when the envelope is not triggered)

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterResonance

```ts
filterResonance: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:144](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L144)

Filter resonance (Q factor). Higher values create more pronounced resonance peaks.
 Range: 0.01 (minimal resonance) to 1.4142 (maximum resonance, √2).

key | value
--- | ---
default | 1.4142135381698608
range | [0.009999999776482582, 1.4142135381698608]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:154](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L154)

This device's output gain. Equivalent to a dB range of [-inf, 9.0].

key | value
--- | ---
default | 1
range | [0, 2.818382978439331]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:202](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L202)

Whether this device is active or not. If is_active=false, the device's effect is bypassed.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mix

```ts
mix: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:165](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L165)

Controls the mix between the incoming and the effect signal. 0 ("dry") means 0% effect
 applied, 1 ("wet") means 100% effect applied; values between mixes the two linearly.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L41)

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

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L50)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### releaseMs

```ts
releaseMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L90)

The duration of the release stage of the filter envelope.

key | value
--- | ---
default | 62.5
range | [1, 2000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sideChainInput

```ts
sideChainInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:185](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L185)

The location of the audio input for the side chain.

 If this is connected to a cable, the
 auto filter uses that to determine if the filter should move or not; the effect still applies
 to the audio_input signal.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### sustainMs

```ts
sustainMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L80)

The duration of the sustain stage of the filter envelope.

key | value
--- | ---
default | 62.5
range | [1, 2000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### thresholdGain

```ts
thresholdGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/auto\_filter/v1/auto\_filter\_nexus.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/auto_filter/v1/auto_filter_nexus.ts#L60)

The threshold gain above which the filter envelope is triggered. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.5
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
