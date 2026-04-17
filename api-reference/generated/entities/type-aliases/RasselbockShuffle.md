---
title: "RasselbockShuffle"
parent: "entities"
grand_parent: "API"
nav_order: 128
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockShuffle

```ts
type RasselbockShuffle = {
  intervalIndex: PrimitiveField<number, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  seed: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:600](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L600)

key | value
--- | ---
type | object

 Holds the configuration for the rasselbock shuffle effect.

 The shuffle effect writes all incoming signal on a delay line, and plays
 the delay line back in segments (sized by interval_index) at random positions quantized by the
 interval_index parameter.

 The delay line is cleared and built up from scratch every time a step starts, and the random segment
 is only picked from the already written to part of the delay line. This means the first
 interval heard when a step starts will always be the incoming signal, and the longer the step lasts,
 the more random the audio will become.

## Properties

### intervalIndex

```ts
intervalIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:615](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L615)

The size of the interval picked randomly from the delay line.
 - 0:  invalid
 - 1:  1/64 bars
 - 2:  1/32 bars
 - 3:  1/16 bars
 - 4:  1/8  bars

key | value
--- | ---
default | 3
range | [1, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:634](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L634)

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

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:643](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L643)

If is_soloed=true, effects that don't have is_soloed=true are bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### seed

```ts
seed: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:625](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L625)

The seed for the random number generator. Determines the order in which the intervals are picked.

key | value
--- | ---
default | 16777215
range | [65535, 16777215]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
