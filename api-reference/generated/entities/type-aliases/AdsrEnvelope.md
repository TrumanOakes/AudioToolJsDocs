---
title: "AdsrEnvelope"
parent: "entities"
grand_parent: "API"
nav_order: 1
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AdsrEnvelope

```ts
type AdsrEnvelope = {
  attackSlopeFactor: PrimitiveField<number, "mut">;
  attackTimeNormalized: PrimitiveField<number, "mut">;
  decayIsLooped: PrimitiveField<boolean, "mut">;
  decaySlopeFactor: PrimitiveField<number, "mut">;
  decayTimeNormalized: PrimitiveField<number, "mut">;
  isSynced: PrimitiveField<boolean, "mut">;
  releaseSlopeFactor: PrimitiveField<number, "mut">;
  releaseTimeNormalized: PrimitiveField<number, "mut">;
  sustainFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:16](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L16)

key | value
--- | ---
type | object

 ADSR Envelope, used by the Heisenberg and Space synths. Not an entity on its own.

## Properties

### attackSlopeFactor

```ts
attackSlopeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L52)

Slope factor of the attack phase of the envelope. 0 is linear, < 0 slopes up, > 0 slopes down.

key | value
--- | ---
default | -0.5
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### attackTimeNormalized

```ts
attackTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L42)

The attack time of this envelope, expressed as a normalized value.
 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (1.0 .. 10_000.0).
 - if is_synced is true, then the value is quantized to one of 30 bar time durations.
   The bar time durations are:
      1/256, 1/192, 1/128, 1/96, 1/64, 1/48, 1/32, 1/24, 1/16,
      1/12, 1/8, 1/6, 3/16, 1/4, 5/16, 1/3, 3/8, 7/16, 1/2, 9/16, 7/12, 5/8,
      2/3, 3/4, 5/6, 7/8, 1/1, 2/1, 3/1, 4/1.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### decayIsLooped

```ts
decayIsLooped: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L89)

Whether the decay phase is looped or not. If decay_is_looped=true, the decay phase
 will repeat indefinitely, going forward and backward.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### decaySlopeFactor

```ts
decaySlopeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:79](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L79)

Slope factor of the decay phase of the envelope. 0 is linear, < 0 slopes up, > 0 slopes down.

key | value
--- | ---
default | 0.5
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### decayTimeNormalized

```ts
decayTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L69)

The attack time of this envelope, expressed as a normalized value.
 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (1.0 .. 10_000.0).
 - if is_synced is true, then the value is quantized to one of 30 bar time durations.
   The bar time durations are:
      1/256, 1/192, 1/128, 1/96, 1/64, 1/48, 1/32, 1/24, 1/16,
      1/12, 1/8, 1/6, 3/16, 1/4, 5/16, 1/3, 3/8, 7/16, 1/2, 9/16, 7/12, 5/8,
      2/3, 3/4, 5/6, 7/8, 1/1, 2/1, 3/1, 4/1.

key | value
--- | ---
default | 0.25
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSynced

```ts
isSynced: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L25)

Wether the envelope is in time sync or not. This affects the meaning of the time values below.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseSlopeFactor

```ts
releaseSlopeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:126](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L126)

Slope factor of the release phase of the envelope. 0 is linear, < 0 slopes up, > 0 slopes down.

key | value
--- | ---
default | 0.5
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseTimeNormalized

```ts
releaseTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:116](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L116)

The attack time of this envelope, expressed as a normalized value.
 The meaning of the value depends on the is_synced flag:
 - if is_synced is false, the value maps linearly to milliseconds (1.0 .. 10_000.0).
 - if is_synced is true, then the value is quantized to one of 30 bar time durations.
   The bar time durations are:
      1/256, 1/192, 1/128, 1/96, 1/64, 1/48, 1/32, 1/24, 1/16,
      1/12, 1/8, 1/6, 3/16, 1/4, 5/16, 1/3, 3/8, 7/16, 1/2, 9/16, 7/12, 5/8,
      2/3, 3/4, 5/6, 7/8, 1/1, 2/1, 3/1, 4/1.

key | value
--- | ---
default | 0.25
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sustainFactor

```ts
sustainFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/adsr\_envelope/v1/adsr\_envelope\_nexus.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/adsr_envelope/v1/adsr_envelope_nexus.ts#L99)

Sustain factor of the envelope.

key | value
--- | ---
default | 0.5
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
