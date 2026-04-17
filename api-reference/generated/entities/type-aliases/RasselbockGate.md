---
title: "RasselbockGate"
parent: "entities"
grand_parent: "API"
nav_order: 123
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockGate

```ts
type RasselbockGate = {
  durationFactor: PrimitiveField<number, "mut">;
  intervalDurationIndex: PrimitiveField<number, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:902](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L902)

key | value
--- | ---
type | object

 The configuration for the rasselbock gate effect.
 The gate effect "gates" the audio (meaning, turns it on and off) in intervals
 defined by the interval_duration_index parameter.

## Properties

### durationFactor

```ts
durationFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:930](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L930)

The percentage within the interval during which the audio is turned on.

key | value
--- | ---
default | 0.5
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### intervalDurationIndex

```ts
intervalDurationIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:920](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L920)

The duration of the interval during which the audio is turned on and off.
 0:  invalid
 1:  1/64 bars
 2:  1/32 bars
 3:  1/16 bars
 4:  1/8  bars
 5:  1/4  bars
 6:  1/2  bars
 7:  1/1  bars

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

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:939](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L939)

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

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:948](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L948)

If is_soloed=true, effects that don't have is_soloed=true are bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
