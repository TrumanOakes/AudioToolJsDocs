---
title: "Quasar"
parent: "entities"
grand_parent: "API"
nav_order: 120
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Quasar

```ts
type Quasar = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  dryGain: PrimitiveField<number, "mut">;
  filterSlopeIndex: PrimitiveField<number, "mut">;
  highPassFrequencyHz: PrimitiveField<number, "mut">;
  inputDiffusion: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  lowPassFrequencyHz: PrimitiveField<number, "mut">;
  plateDamp: PrimitiveField<number, "mut">;
  plateDecay: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  preDelayMs: PrimitiveField<number, "mut">;
  tankDiffusion: PrimitiveField<number, "mut">;
  vibratoDepth: PrimitiveField<number, "mut">;
  vibratoFrequencyHz: PrimitiveField<number, "mut">;
  wetGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"quasar"`
is |

 The Quasar is a reverb effect that combines the simulation of a
 tank and plate reverb.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:191](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L191)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:199](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L199)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L26)

The user-assigned name of this device.

***

### dryGain

```ts
dryGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L101)

Gain factor for the dry signal (not affected by reverb). Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.5011870265007019
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterSlopeIndex

```ts
filterSlopeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L91)

Selects the filter cutoff slope for both lowpass- and highpass-filters.
 - 0: invalid
 - 1: 12dB/Octave
 - 2: 24dB/Octave
 - 3: 36dB/Octave
 - 4: 48dB/Octave

key | value
--- | ---
default | 1
range | [1, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### highPassFrequencyHz

```ts
highPassFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L76)

The frequency of the high-pass filter. The high-pass filter is applied to the
 signal after the pre-delay.

key | value
--- | ---
default | 20
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### inputDiffusion

```ts
inputDiffusion: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:152](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L152)

The first of two diffusion parameters that "diffuses" the input signal across time.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:120](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L120)

Whether the device is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowPassFrequencyHz

```ts
lowPassFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L65)

The frequency of the low-pass filter. The low-pass filter is applied to the
 signal after the pre-delay.

key | value
--- | ---
default | 20000
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### plateDamp

```ts
plateDamp: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L142)

Dampening factor of the plate decay. If you think of a plate reverb, the dampening restricts
 the vibration of the plate. 1 means maximum dampening, 0 means minimum dampening. No unit.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### plateDecay

```ts
plateDecay: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:131](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L131)

Controls the decay duration of the plate reverb tail. 0 means maximum decay time,
 1 means minimum decay time. No unit.

key | value
--- | ---
default | 0.75
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L35)

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

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L44)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### preDelayMs

```ts
preDelayMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L54)

Pre-delay applied globally to all delays.

key | value
--- | ---
default | 0
range | [0, 1000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tankDiffusion

```ts
tankDiffusion: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:162](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L162)

The second of two diffusion parameters that "diffuses" the input signal across time.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### vibratoDepth

```ts
vibratoDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:173](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L173)

The depth of the vibrato. 0 means no vibrato, 1 means maximum vibrato. No unit.
 Creates a "flutter" effect on the reverb tail.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### vibratoFrequencyHz

```ts
vibratoFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:183](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L183)

The frequency of the vibrato in Hz.

key | value
--- | ---
default | 1
range | [0.009999999776482582, 20]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### wetGain

```ts
wetGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quasar/v1/quasar\_nexus.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quasar/v1/quasar_nexus.ts#L111)

Gain factor for the wet (reverberated) signal. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.5011870265007019
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
