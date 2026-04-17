---
title: "HelmholtzFilter"
parent: "entities"
grand_parent: "API"
nav_order: 68
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: HelmholtzFilter

```ts
type HelmholtzFilter = {
  frequencyNote: PrimitiveField<number, "mut">;
  frequencyTuneSemitones: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  panning: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:215](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L215)

key | value
--- | ---
type | object

 One of the 5 filters/delay lines of the Helmholtz.

## Properties

### frequencyNote

```ts
frequencyNote: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:254](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L254)

The frequency this filter will resonate at. Is a midi note, e.g. C4 is 60, D4 is 62, etc.

key | value
--- | ---
default | 60
range | [0, 127]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### frequencyTuneSemitones

```ts
frequencyTuneSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:267](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L267)

Detune the filter frequency by a given amount of semitones, these are added
 to the frequency_note. You can detune the filter frequency by up
 to 7 semitones (a perfect fifth, the dominant) above or down to
 7 semitones below (a perfect fourth, the subdominant) the original note.

key | value
--- | ---
default | 0
range | [-7, 7]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:234](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L234)

Gain applied to the signal after the filter. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:224](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L224)

Whether the filter is active or not. When is_active=false, the filter doesn't produce any sound.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:244](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L244)

Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
