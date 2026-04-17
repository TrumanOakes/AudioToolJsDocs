---
title: "CurveShelf"
parent: "entities"
grand_parent: "API"
nav_order: 52
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: CurveShelf

```ts
type CurveShelf = {
  centerFrequencyHz: PrimitiveField<number, "mut">;
  gainDb: PrimitiveField<number, "mut">;
  isEnabled: PrimitiveField<boolean, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:323](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L323)

key | value
--- | ---
type | object

 Curve low/high shelf filter.

## Properties

### centerFrequencyHz

```ts
centerFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:333](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L333)

The center frequency of the filter.

key | value
--- | ---
default | 10000
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gainDb

```ts
gainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:343](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L343)

The gain of the filter in dB.

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

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:352](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L352)

Whether this shelf filter is enabled. If is_enabled=false, the filter is disabled.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
