---
title: "HeisenbergLFO"
parent: "entities"
grand_parent: "API"
nav_order: 64
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: HeisenbergLFO

```ts
type HeisenbergLFO = {
  blendTimeNormalized: PrimitiveField<number, "mut">;
  delayTimeNormalized: PrimitiveField<number, "mut">;
  doesRestart: PrimitiveField<boolean, "mut">;
  isSynced: PrimitiveField<boolean, "mut">;
  offsetFactor: PrimitiveField<number, "mut">;
  rateNormalized: PrimitiveField<number, "mut">;
  waveformIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:946](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L946)

key | value
--- | ---
type | object

 The two LFO's for the Heisenberg that can be used to modulate the operators's
 amplitude.

## Properties

### blendTimeNormalized

```ts
blendTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1032](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1032)

The duration of the blend phase of the LFO during which the LFO transitions from
 no offset to full offset, expressed as a normalized value.

 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (0 .. 5000.0).
 - if is_synced is true, then the value is quantized to one of 30 bar time durations.
   The bar time durations are:
      0, 1/256, 1/192, 1/128, 1/96, 1/64, 1/48, 1/32, 1/24, 1/16,
      1/12, 1/8, 1/6, 3/16, 1/4, 5/16, 1/3, 3/8, 7/16, 1/2, 9/16, 7/12, 5/8,
      2/3, 3/4, 5/6, 7/8, 1/1, 2/1, 3/1, 4/1.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### delayTimeNormalized

```ts
delayTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1013](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1013)

The delay before the LFO enters the blend phase on every note trigger, expressed as a normalized value.
 During the delay phase, the LFO is not active.

 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (0 .. 5000.0).
 - if is_synced is true, then the value is quantized to one of 30 bar time durations.
   The bar time durations are:
      0, 1/256, 1/192, 1/128, 1/96, 1/64, 1/48, 1/32, 1/24, 1/16,
      1/12, 1/8, 1/6, 3/16, 1/4, 5/16, 1/3, 3/8, 7/16, 1/2, 9/16, 7/12, 5/8,
      2/3, 3/4, 5/6, 7/8, 1/1, 2/1, 3/1, 4/1.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### doesRestart

```ts
doesRestart: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:967](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L967)

If true, the LFO will restart its phase when a note is played.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSynced

```ts
isSynced: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:958](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L958)

Whether the LFO is synced to the project tempo. When synced, the
 rate_normalized value below maps to "bar time" and as such depends on the project
 tempo. When not synced, the rate_normalized value maps to "Hz" and as such is
 independent of the project tempo.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### offsetFactor

```ts
offsetFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:994](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L994)

Phase offset factor of the LFO, in percentage of the entire phase.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### rateNormalized

```ts
rateNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:984](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L984)

The rate of the LFO, expressed as a normalized value.
 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the  value maps linearly to Hz (0.01 .. 500.0).
 - if is_synced is true, then the value is quantized to one of 30 bar time durations.
   The bar time durations are:
      1/256, 1/192, 1/128, 1/96, 1/64, 1/48, 1/32, 1/24, 1/16,
      1/12, 1/8, 1/6, 3/16, 1/4, 5/16, 1/3, 3/8, 7/16, 1/2, 9/16, 7/12, 5/8,
      2/3, 3/4, 5/6, 7/8, 1/1, 2/1, 3/1, 4/1.

key | value
--- | ---
default | 0.5
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### waveformIndex

```ts
waveformIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1092](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1092)

Selects the waveform of the LFO:
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
