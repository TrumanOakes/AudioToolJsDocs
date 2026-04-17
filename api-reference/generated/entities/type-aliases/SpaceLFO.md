---
title: "SpaceLFO"
parent: "entities"
grand_parent: "API"
nav_order: 137
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SpaceLFO

```ts
type SpaceLFO = {
  doesRetrigger: PrimitiveField<boolean, "mut">;
  isSynced: PrimitiveField<boolean, "mut">;
  phaseOffset: PrimitiveField<number, "mut">;
  rateNormalized: PrimitiveField<number, "mut">;
  waveformIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:590](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L590)

key | value
--- | ---
type | object

 The Space's LFO parameters.

## Properties

### doesRetrigger

```ts
doesRetrigger: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:652](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L652)

If this is true, the LFO retriggers for every incoming note. Otherwise
 it starts at project time 0.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSynced

```ts
isSynced: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:642](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L642)

Whether rate_normalized is synced to the project tempo or not.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### phaseOffset

```ts
phaseOffset: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:633](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L633)

The LFO's phase offset.

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

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:623](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L623)

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
default | 0.25
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### waveformIndex

```ts
waveformIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:606](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L606)

Selects the waveform of the lfo.
 - 0: invalid
 - 1: Sine
 - 2: Triangle
 - 3: Sawtooth Up
 - 4: Square
 - 5: Random

key | value
--- | ---
default | 1
range | [1, 5]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
