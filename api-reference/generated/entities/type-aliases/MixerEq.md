---
title: "MixerEq"
parent: "entities"
grand_parent: "API"
nav_order: 87
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerEq

```ts
type MixerEq = {
  highMidFrequencyHz: PrimitiveField<number, "mut">;
  highMidGainDb: PrimitiveField<number, "mut">;
  highShelfFrequencyHz: PrimitiveField<number, "mut">;
  highShelfGainDb: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  lowMidFrequencyHz: PrimitiveField<number, "mut">;
  lowMidGainDb: PrimitiveField<number, "mut">;
  lowShelfFrequencyHz: PrimitiveField<number, "mut">;
  lowShelfGainDb: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:18](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L18)

key | value
--- | ---
type | object

 The equalizer module used in various mixer strips. This is not an entity but a submessage used by other strips.

 The mixer eq is a 4-band eq with a low shelf, a high shelf, and two mid bands.

## Properties

### highMidFrequencyHz

```ts
highMidFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L68)

High mid shelf filter frequency in hertz.

key | value
--- | ---
default | 4800
range | [1600, 7200]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### highMidGainDb

```ts
highMidGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L78)

High mid shelf filter gain in decibels.

key | value
--- | ---
default | 0
range | [-18, 18]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### highShelfFrequencyHz

```ts
highShelfFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L88)

High shelf filter frequency in hertz.

key | value
--- | ---
default | 12000
range | [10000, 16000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### highShelfGainDb

```ts
highShelfGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L98)

High shelf gain ("air").

key | value
--- | ---
default | 0
range | [-18, 18]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L107)

Whether the equalizer is active or not. If is_active=false, the equalizer is bypassed.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowMidFrequencyHz

```ts
lowMidFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L48)

Low-mid shelf filter frequency in hertz.

key | value
--- | ---
default | 500
range | [200, 700]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowMidGainDb

```ts
lowMidGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L58)

Low mid shelf filter gain in decibels.

key | value
--- | ---
default | 0
range | [-18, 18]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowShelfFrequencyHz

```ts
lowShelfFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L28)

Low shelf filter frequency in hertz.

key | value
--- | ---
default | 60
range | [35, 220]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowShelfGainDb

```ts
lowShelfGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_eq\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_eq_nexus.ts#L38)

Low shelf filter gain in decibels.

key | value
--- | ---
default | 0
range | [-18, 18]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
