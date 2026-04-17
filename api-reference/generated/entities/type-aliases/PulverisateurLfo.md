---
title: "PulverisateurLfo"
parent: "entities"
grand_parent: "API"
nav_order: 112
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurLfo

```ts
type PulverisateurLfo = {
  modulationDepth: PrimitiveField<number, "mut">;
  rateIsSynced: PrimitiveField<boolean, "mut">;
  rateNormalized: PrimitiveField<number, "mut">;
  restartOnNote: PrimitiveField<boolean, "mut">;
  targetsFilterCutoff: PrimitiveField<boolean, "mut">;
  targetsOscillatorAPitch: PrimitiveField<boolean, "mut">;
  targetsOscillatorBPitch: PrimitiveField<boolean, "mut">;
  targetsOscillatorCPitch: PrimitiveField<boolean, "mut">;
  targetsPulseWidth: PrimitiveField<boolean, "mut">;
  waveform: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:670](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L670)

key | value
--- | ---
type | object

 The Pulverisateur's LFO.

## Properties

### modulationDepth

```ts
modulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:783](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L783)

The modulation depth of the LFO. If this is 1, the LFO affects pitch/filter/pulse with
 in its entire with.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### rateIsSynced

```ts
rateIsSynced: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:695](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L695)

Whether the LFO's frequency

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### rateNormalized

```ts
rateNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:709](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L709)

The LFO's rate/frequency in normalized form. The exact rate depends
 on the value of rate_is_synced:
 - if false, the value maps to milliseconds (1 .. 10_000.0)
 - if true, the value is quantized to the durations  8/1, 6/1, 4/1, 2/1, 1/1, 1/2, 1/4, 1/6, 1/8,
   1/12, 1/16, 1/24, 1/32, 1/48, 1/64, 1/96, 1/128.

key | value
--- | ---
default | 0.25
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### restartOnNote

```ts
restartOnNote: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:720](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L720)

The "trigger" parameter in the UI. If restart_on_note=true, the LFO's phase is reest on each note;
 if =false, the LFO's phase starts on global time 0 and continues indefinitely (resulting in
 the LFO's phase offset being consistent on play/pause/loop).

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### targetsFilterCutoff

```ts
targetsFilterCutoff: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:756](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L756)

Whether lfo is applied to filter cutoff.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### targetsOscillatorAPitch

```ts
targetsOscillatorAPitch: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:729](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L729)

Whether lfo is applied to Oscillator A pitch.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### targetsOscillatorBPitch

```ts
targetsOscillatorBPitch: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:738](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L738)

Whether lfo is applied to Oscillator B pitch.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### targetsOscillatorCPitch

```ts
targetsOscillatorCPitch: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:747](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L747)

Whether lfo is applied to Oscillator C pitch.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### targetsPulseWidth

```ts
targetsPulseWidth: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:772](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L772)

Whether lfo is applied to pulse width. The pulse width controls the width of the first half
 of the waves of every oscillator.

 Example:
 Square wave for pulse width 0.5:  |⎺⎺⎺|⎽⎽⎽|
 Square wave for pulse width 0.75: |⎺⎺⎺⎺⎺|⎽|

 This adds harmonic frequencies to the waveform.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### waveform

```ts
waveform: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:686](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L686)

The LFO's waveform shape:
 0:     random          Randomly switches between amplitudes in certain intervals.
 0.25:  sine            ∿∿∿
 0.5:   triangle        ///\
 0.75:  sawtooth up     /|/|/|
 1:     square          |⎺|⎽|⎺|
 Values between any two of these linearly interpolate the two waveforms.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
