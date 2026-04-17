---
title: "RasselbockStop"
parent: "entities"
grand_parent: "API"
nav_order: 131
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockStop

```ts
type RasselbockStop = {
  doesSpinback: PrimitiveField<boolean, "mut">;
  durationIndex: PrimitiveField<number, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:795](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L795)

key | value
--- | ---
type | object

 The configuration for the rasselbock stop effect.
 The stop effect emulates the effect of a stop button on a turntable.

 The stop effect writes the incoming signal to a delay line, which is then played back
 at the normal speed when the step starts, and gradually slows down as the step progresses.
 When a step starts, the delay line is cleared, the new incoming signal is written to it,
 and the speed is reset to the normal speed, to slow down again.

## Properties

### doesSpinback

```ts
doesSpinback: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:823](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L823)

If does_spinback=true, the audio will ramp back to the normal speed after the stop, gradually
 such that the original speed is reached at the end of the step.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### durationIndex

```ts
durationIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:813](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L813)

How long it takes for the audio to come to a stop.
 - 0:  invalid
 - 1:  1/64 bars
 - 2:  1/32 bars
 - 3:  1/16 bars
 - 4:  1/8  bars
 - 5:  1/4  bars
 - 6:  1/2  bars
 - 7:  1/1  bars

key | value
--- | ---
default | 5
range | [1, 7]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:832](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L832)

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

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:841](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L841)

If is_soloed=true, effects that don't have is_soloed=true are bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
