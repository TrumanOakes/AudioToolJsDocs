---
title: "HeisenbergOperator"
parent: "entities"
grand_parent: "API"
nav_order: 65
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: HeisenbergOperator

```ts
type HeisenbergOperator = {
  detuneFactor: PrimitiveField<number, "mut">;
  envelope2AmplitudeModulationDepth: PrimitiveField<number, "mut">;
  envelope3AmplitudeModulationDepth: PrimitiveField<number, "mut">;
  envelopeMainAmplitudeModulationDepth: PrimitiveField<number, "mut">;
  frequencyOffsetHz: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  lfo1AmplitudeModulationDepth: PrimitiveField<number, "mut">;
  lfo2AmplitudeModulationDepth: PrimitiveField<number, "mut">;
  modulationFactorA: PrimitiveField<number, "mut">;
  modulationFactorB: PrimitiveField<number, "mut">;
  modulationFactorC: PrimitiveField<number, "mut">;
  modulationFactorD: PrimitiveField<number, "mut">;
  panning: PrimitiveField<number, "mut">;
  usePitchEnvelope: PrimitiveField<boolean, "mut">;
  velocityAmplitudeModulationDepth: PrimitiveField<number, "mut">;
  waveformIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:448](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L448)

key | value
--- | ---
type | object

 One of the 4 operators of the heisenberg. In the UI, they're also called
 "A", "B", "C" and "D".

## Properties

### detuneFactor

```ts
detuneFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:487](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L487)

The detuning factor of this operator. Acts as a multiplier of the frequency the
 operator is playing.

 The number of semitones this operator is detuned from is calculated as follows:
 semitone = (12.0 * Math.log(detune_factor)) / Math.log(2.0)

 In the DAW, this is shown either as "semitone" or "ratio" depending on the operator_detune_mode_index
 field of the heisenberg itself. The 'semitone" mode shows the number of semitones to detune,
 down/up to 99.999 semitones. If detune_factor is above or below this semitone range,
 looking at the ratio in semitone mode will show "--.-----"

key | value
--- | ---
default | 1
range | [0, 64]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelope2AmplitudeModulationDepth

```ts
envelope2AmplitudeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:666](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L666)

The extent to which envelope 2 influences this operator's amplitude.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelope3AmplitudeModulationDepth

```ts
envelope3AmplitudeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:676](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L676)

The extent to which envelope 3 influences this operator's amplitude.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeMainAmplitudeModulationDepth

```ts
envelopeMainAmplitudeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:656](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L656)

The extent to which the main envelope influences this operator's amplitude.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### frequencyOffsetHz

```ts
frequencyOffsetHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:498](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L498)

Offset in Hz of the final frequency produced. Added to the operator frequency
 after the detune factor has been applied.

key | value
--- | ---
default | 0
range | [-9999.990234375, 9999.990234375]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:458](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L458)

The operator's gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfo1AmplitudeModulationDepth

```ts
lfo1AmplitudeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:686](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L686)

The extent to which LFO 1 influences this operator's amplitude.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfo2AmplitudeModulationDepth

```ts
lfo2AmplitudeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:696](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L696)

The extent to which LFO 2 influences this operator's amplitude.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationFactorA

```ts
modulationFactorA: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:583](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L583)

Setting this factor to > 0 offsets the phase of this operator by
 the pre-modulation signal of operator "A" (the first operator of the 4)
 multiplied by this factor.

 Note that for all operators, phase modulation is the last step,
 after LFOs, envelopes, frequency offsets etc.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationFactorB

```ts
modulationFactorB: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:598](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L598)

Setting this factor to > 0 offsets the phase of this operator by
 the pre-modulation signal of operator "B" (the second operator of the 4)
 multiplied by this factor.

 Note that for all operators, phase modulation is the last step,
 after LFOs, envelopes, frequency offsets etc.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationFactorC

```ts
modulationFactorC: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:613](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L613)

Setting this factor to > 0 offsets the phase of this operator by
 the pre-modulation signal of operator "C" (the third operator of the 4)
 multiplied by this factor.

 Note that for all operators, phase modulation is the last step,
 after LFOs, envelopes, frequency offsets etc.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationFactorD

```ts
modulationFactorD: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:628](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L628)

Setting this factor to > 0 offsets the phase of this operator by
 the pre-modulation signal of operator "D" (the fourth operator of the 4)
 multiplied by this factor.

 Note that for all operators, phase modulation is the last step,
 after LFOs, envelopes, frequency offsets etc.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:468](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L468)

Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### usePitchEnvelope

```ts
usePitchEnvelope: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:568](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L568)

Whether the pitch envelope influences the pitch of the operator. The pitch
 envelope affects the pitch of the operator multiplicatively.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### velocityAmplitudeModulationDepth

```ts
velocityAmplitudeModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:646](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L646)

The extent to which a note's velocity influences this specific operator's
 amplitude. 0.0 means no influence, 1.0 means full influence. 0.25 means
 the operator's amplitude is between 0.75 and 1 depending on the note's velocity.

 Full formula:
 factor = (1 - velocity_amplitude_modulation_depth) + note_velocity * velocity_amplitude_modulation_depth

 Note that a note's velocity still influences the signal's amplitude overall
 after the operator's signals have been added together.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### waveformIndex

```ts
waveformIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:558](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L558)

Selects the waveform shape the operator produces.
 - 0: invalid
 - 1: Sinus
 - 2: Parabola
 - 3: Circle
 - 4: Triangle
 - 5: Sawtooth Up
 - 6: Sawtooth Down
 - 7: Square
 - 8: Andrew Wiles
 - 9: Ernest Rutherford
 - 10: Wilhelm Conrad Röntgen
 - 11: Peter Higgs
 - 12: Gottfried Wilhelm Leibniz;
 - 13: Alan Turing
 - 14: Hans Geiger
 - 15: Hermann von Helmholtz
 - 16: Jean Baptiste Joseph Fourier
 - 17: James Clerk Maxwell
 - 18: Formant I
 - 19: Formant II
 - 20: Formant III
 - 21: Formant IV
 - 22: Blaise Pascal
 - 23: Pierre de Fermat
 - 24: Carl Friedrich Gauß
 - 25: Isaac Newton
 - 26: Marie Curie
 - 27: Nikola Tesla
 - 28: Alessandro Volta
 - 29: Bernhard Riemann
 - 30: André Weil
 - 31: David Hilbert
 - 32: Pierre-Simon Laplace
 - 33: Andreas Christian Doppler
 - 34: Paul Dirac
 - 35: Max Planck
 - 36: André-Marie Ampère
 - 37: Max Born
 - 38: Richard Feynman
 - 39: Johannes Kepler
 - 40: Heinrich Hertz
 - 41: August Ferdinand Möbius
 - 42: Robert Moog;
 - 43: Albert Einstein
 - 44: Erwin Schrödinger
 - 45: Galileo Galilei
 - 46: Michael Faraday
 - 47: Leonhard Euler
 - 48: Werner Heisenberg
 - 49: Kurt Gödel

key | value
--- | ---
default | 1
range | [1, 49]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
