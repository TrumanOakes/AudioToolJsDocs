---
title: "PulverisateurOscillator"
parent: "entities"
grand_parent: "API"
nav_order: 114
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurOscillator

```ts
type PulverisateurOscillator = {
  tuneOctaves: PrimitiveField<number, "mut">;
  tuneSemitones: PrimitiveField<number, "mut">;
  waveform: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1219](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1219)

key | value
--- | ---
type | object

 This object contains fields shared between the 3 main oscillators

## Properties

### tuneOctaves

```ts
tuneOctaves: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1240](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1240)

Adds or subtracts octaves to the oscillator frequency.

key | value
--- | ---
default | 0
range | [-3, 3]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tuneSemitones

```ts
tuneSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1230)

Tuning moves the oscillator frequency relative to the
 incoming note's pitch.

key | value
--- | ---
default | 0
range | [-7, 7]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### waveform

```ts
waveform: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1257](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1257)

This parameter selects the waveform shape. There are 4 values that map
 to a specific waveform; values between any two of them linearly interpolate
 between the two waveforms.

 0:      sine           ∿∿∿
 0.3333: triangle       ///\
 0.6666: sawtooth down  |\|\|\
 1:      square         |⎺|⎽|⎺|

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
