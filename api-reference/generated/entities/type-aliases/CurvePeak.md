---
title: "CurvePeak"
parent: "entities"
grand_parent: "API"
nav_order: 51
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: CurvePeak

```ts
type CurvePeak = {
  centerFrequencyHz: PrimitiveField<number, "mut">;
  gainDb: PrimitiveField<number, "mut">;
  isEnabled: PrimitiveField<boolean, "mut">;
  q: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:395](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L395)

key | value
--- | ---
type | object

 Curve peak filter.

## Properties

### centerFrequencyHz

```ts
centerFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:405](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L405)

The center frequency of the peak.

key | value
--- | ---
default | 4000
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gainDb

```ts
gainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:415](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L415)

The gain of the peak in dB.

key | value
--- | ---
default | 0
range | [-40, 40]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isEnabled

```ts
isEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:434](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L434)

Whether this peak filter is enabled. If is_enabled=false, the filter is disabled.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### q

```ts
q: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:425](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L425)

The bandwidth of the peak, aka Q factor.

key | value
--- | ---
default | 1
range | [0.009999999776482582, 10]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
