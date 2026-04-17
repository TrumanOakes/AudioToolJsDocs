---
title: "CurvePass"
parent: "entities"
grand_parent: "API"
nav_order: 50
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: CurvePass

```ts
type CurvePass = {
  cutoffFrequencyHz: PrimitiveField<number, "mut">;
  filterSlopeIndex: PrimitiveField<number, "mut">;
  isEnabled: PrimitiveField<boolean, "mut">;
  q: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:223](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L223)

key | value
--- | ---
type | object

 Curve high/low pass filter.

## Properties

### cutoffFrequencyHz

```ts
cutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:233](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L233)

The cutoff frequency of the filter.

key | value
--- | ---
default | 40
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterSlopeIndex

```ts
filterSlopeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:247](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L247)

The high/low pass filter slope/order, controlling how "steep" the filter curve is:
 - 0: invalid
 - 1: 12dB
 - 2: 24dB
 - 3: 36dB
 - 4: 48dB

key | value
--- | ---
default | 1
range | [1, 4]

***

### isEnabled

```ts
isEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:266](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L266)

Whether this filter is enabled. If is_enabled=false,

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### q

```ts
q: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:257](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L257)

The high/low pass Q parameter, controls the bandwidth and resonance of the filter.

key | value
--- | ---
default | 0.7099999785423279
range | [0.009999999776482582, 10]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
