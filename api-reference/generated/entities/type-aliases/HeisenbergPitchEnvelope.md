---
title: "HeisenbergPitchEnvelope"
parent: "entities"
grand_parent: "API"
nav_order: 66
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: HeisenbergPitchEnvelope

```ts
type HeisenbergPitchEnvelope = {
  attackRangeFactor: PrimitiveField<number, "mut">;
  attackSlopeFactor: PrimitiveField<number, "mut">;
  attackTimeNormalized: PrimitiveField<number, "mut">;
  decayRangeFactor: PrimitiveField<number, "mut">;
  decaySlopeFactor: PrimitiveField<number, "mut">;
  decayTimeNormalized: PrimitiveField<number, "mut">;
  isSynced: PrimitiveField<boolean, "mut">;
  loopDecayIndex: PrimitiveField<number, "mut">;
  releaseRangeFactor: PrimitiveField<number, "mut">;
  releaseSlopeFactor: PrimitiveField<number, "mut">;
  releaseTimeNormalized: PrimitiveField<number, "mut">;
  semitoneRange: PrimitiveField<number, "mut">;
  sustainRangeFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1250](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1250)

key | value
--- | ---
type | object

 The Heisenberg pitch envelope is a ADSR envelope that controls the pitch detune of the notes played.
 The enveloped can be toggled on or off on each operator using the use_pitch_envelope flag.
 If active, the pitch envelope detunes each incoming note's pitch by a certain factor.

## Properties

### attackRangeFactor

```ts
attackRangeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1286](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1286)

The value of the attack phase of the envelope. The amount detuned is this factor multiplied
 by the semitone value below.

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### attackSlopeFactor

```ts
attackSlopeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1313](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1313)

Controls how much the attack phase is bent. 0 is linear, more or less means more or less sloping.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### attackTimeNormalized

```ts
attackTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1303](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1303)

The attack time of the pitch envelope, expressed as a normalized value.
 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (1.0 .. 10_000.0).
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

### decayRangeFactor

```ts
decayRangeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1324](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1324)

The value of the decay phase of the envelope. The amount detuned is this factor multiplied
 by the semitone value below.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### decaySlopeFactor

```ts
decaySlopeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1351](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1351)

Controls how much the decay phase is bent. 0 is linear, more or less means more or less sloping.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### decayTimeNormalized

```ts
decayTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1341](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1341)

The decay time of the pitch envelope, expressed as a normalized value.
 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (1.0 .. 10_000.0).
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

### isSynced

```ts
isSynced: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1259](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1259)

Wether the pitch envelope is in time sync or not. This affects the meaning of the time values below.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### loopDecayIndex

```ts
loopDecayIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1275](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1275)

If enabled, the decay phase of the envelope will loop. Looping means playing
 the decay phase "back and forth".
 - 0: invalid
 - 1: Off
 - 2: Gate       loops the decay phase until the note is released; then it loops until
               the end of the currently playing decay phase, then enters the release phase and stops.
 - 3: Infinity   the decay phase will loop forever.

key | value
--- | ---
default | 1
range | [1, 3]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseRangeFactor

```ts
releaseRangeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1400](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1400)

The value the release phase ends at. The amount detuned is this factor multiplied
 by the semitone value below.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseSlopeFactor

```ts
releaseSlopeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1389](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1389)

Controls how much the release phase is bent. 0 is linear, more or less means more or less sloping.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseTimeNormalized

```ts
releaseTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1379](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1379)

The release time of the pitch envelope, expressed as a normalized value.
 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (1.0 .. 10_000.0).
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

### semitoneRange

```ts
semitoneRange: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1411](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1411)

The semitone value of the pitch envelope. This is the semitone value that is used to detune
 the notes played. The different envelope phases use this value to calculate the amount detuned.

key | value
--- | ---
default | 12
range | [1, 36]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sustainRangeFactor

```ts
sustainRangeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1362](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1362)

Sustain phase of the envelope. The amount detuned is this factor multiplied
 by the semitone value below.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
