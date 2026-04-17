---
title: "RasselbockScratch"
parent: "entities"
grand_parent: "API"
nav_order: 127
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockScratch

```ts
type RasselbockScratch = {
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  modulationDepth: PrimitiveField<number, "mut">;
  modulationOffset: PrimitiveField<number, "mut">;
  modulationShapeIndex: PrimitiveField<number, "mut">;
  rateBars: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1138](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1138)

key | value
--- | ---
type | object

 The configuration for the rasselbock scratch effect.
 The scratch effect writes the incoming signal to a delay line which it plays back
 with a speed modulated by an LFO.

## Properties

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1211](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1211)

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

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1220](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1220)

If is_soloed=true, effects that don't have is_soloed=true are bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationDepth

```ts
modulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1173](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1173)

Multiplied with the LFO and the modulation offset to get the final speed.
 Influences the difference between the highest and lowest speed of the sample.

key | value
--- | ---
default | 1
range | [0, 2]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationOffset

```ts
modulationOffset: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1184)

The "base" speed from which the modulation changes.
 Multiplied with the LFO and the modulation depth to get the final speed.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationShapeIndex

```ts
modulationShapeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1202](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1202)

The shape of the modulation curve, is repeated in intervals of the rate_bars parameter.
 - 0:  invalid
 - 1:  Sinus
 - 2:  Triangle
 - 3:  Sawtooth Down
 - 4:  Sawtooth Up

 Note that the wave is phase offset to make sure the sample always plays slower before it plays faster,
 so the delay line always has audio to play back.

key | value
--- | ---
default | 1
range | [1, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### rateBars

```ts
rateBars: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:1162](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L1162)

The rate of the oscillator controlling the playback speed, and the length of the
 sample that's written to the delay line. The effect will repeat the audio
 after this duration has passed.
 - 0:  invalid
 - 1:  1/64 bars
 - 2:  1/32 bars
 - 3:  1/16 bars
 - 4:  1/8  bars
 - 5:  1/6  bars
 - 6:  1/4  bars
 - 7:   1/3  bars
 - 8:  1/2  bars
 - 9:   2/3  bars
 - 10: 3/4  bars
 - 11: 1/1  bars

key | value
--- | ---
default | 4
range | [1, 11]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
