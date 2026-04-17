---
title: "GraphicalEQFilter"
parent: "entities"
grand_parent: "API"
nav_order: 59
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: GraphicalEQFilter

```ts
type GraphicalEQFilter = {
  frequencyHz: PrimitiveField<number, "mut">;
  gainDb: PrimitiveField<number, "mut">;
  q: PrimitiveField<number, "mut">;
  stereoSeparation: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:174](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L174)

key | value
--- | ---
type | object

 The graphical equalizer filter.

## Properties

### frequencyHz

```ts
frequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:194](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L194)

The filter peak frequency in hertz.

key | value
--- | ---
default | 3800
range | [32, 17000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gainDb

```ts
gainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L184)

The gain of the filter in decibels.

key | value
--- | ---
default | 0
range | [-18, 18]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### q

```ts
q: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:204](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L204)

Filter Q factor, controls the bandwidth and resonance of the filter.

key | value
--- | ---
default | 0.07000000029802322
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stereoSeparation

```ts
stereoSeparation: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:216](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L216)

Stereo separation of the filter. If 0, both filter gains are equal.
 If 1, the left channel is fully boosted and the right channel is fully attenuated.
 If -1, the right channel is fully boosted and the left channel is fully attenuated.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
