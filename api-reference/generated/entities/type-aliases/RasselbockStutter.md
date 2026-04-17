---
title: "RasselbockStutter"
parent: "entities"
grand_parent: "API"
nav_order: 132
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockStutter

```ts
type RasselbockStutter = {
  intervalDurationIndex: PrimitiveField<number, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  pitchSemitones: PrimitiveField<number, "mut">;
  scaleFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1010](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1010)

key | value
--- | ---
type | object

 The configuration for the rasselbock stutter effect.
 The stutter effect passed the signal through for a given interval duration while writing
 it to a delay line. After that interval has passed, it plays back that delay line
 again and again, optionally while changing the pitch every repetition interval.

## Properties

### intervalDurationIndex

```ts
intervalDurationIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1029](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1029)

The duration of the interval during which the signal is passed through.
 - 0:  invalid
 - 1:  1/256 bars
 - 2:  1/128 bars
 - 3:  1/64 bars
 - 4:  1/32 bars
 - 5:  1/16 bars
 - 6:  1/8  bars
 - 7:  1/4  bars
 - 8:  1/2  bars

key | value
--- | ---
default | 5
range | [1, 8]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1058](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1058)

If is_muted=true, this effect is bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSoloed

```ts
isSoloed: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1067](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1067)

If is_soloed=true, effects that don't have is_soloed=true are bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### pitchSemitones

```ts
pitchSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1049](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1049)

The pitch change in semitones per repetition interval. -12/+12 semitones is equivalent to +/- 1 octave.

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### scaleFactor

```ts
scaleFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1039](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1039)

Out of the interval duration, how long the audio is audible for every interval.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
