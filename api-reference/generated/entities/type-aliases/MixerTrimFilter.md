---
title: "MixerTrimFilter"
parent: "entities"
grand_parent: "API"
nav_order: 95
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerTrimFilter

```ts
type MixerTrimFilter = {
  highPassCutoffFrequencyHz: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  lowPassCutoffFrequencyHz: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_trim\_filter\_nexus.ts:18](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_trim_filter_nexus.ts#L18)

key | value
--- | ---
type | object

 Low- and high-pass filter for channel, group and aux strips.
 It's a simple filter with fixed filter gains at 4th order (i.e. 24dB/octave).
 Not an entity but a submessage used by other strips.

## Properties

### highPassCutoffFrequencyHz

```ts
highPassCutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_trim\_filter\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_trim_filter_nexus.ts#L28)

High pass cutoff frequency.

key | value
--- | ---
default | 20
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_trim\_filter\_nexus.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_trim_filter_nexus.ts#L47)

Whether the trim filter is active or not. If is_active=false, the trim filter is bypassed.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowPassCutoffFrequencyHz

```ts
lowPassCutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_trim\_filter\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_trim_filter_nexus.ts#L38)

Low pass cutoff frequency.

key | value
--- | ---
default | 20000
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
