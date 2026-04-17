---
title: "SpaceSound"
parent: "entities"
grand_parent: "API"
nav_order: 138
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SpaceSound

```ts
type SpaceSound = {
  brightness: PrimitiveField<number, "mut">;
  combFilterAmount: PrimitiveField<number, "mut">;
  combFilterRate: PrimitiveField<number, "mut">;
  combFilterWidth: PrimitiveField<number, "mut">;
  dispersion: PrimitiveField<number, "mut">;
  harmonicsCount: PrimitiveField<number, "mut">;
  metal: PrimitiveField<number, "mut">;
  separation: PrimitiveField<number, "mut">;
  vaporisation: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:733](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L733)

key | value
--- | ---
type | object

 Datastructure for the Space's Wavetable (aka "sound"). A few of these parameters
 have a "qualitative" name, such as "dispersion", "metal", etc.

 The exact description of these parameters on the synth are complex and likely not useful
 when creating the sound, so they're left out.

 The comb filter parameters don't control a comb filter on the sound itself, but on its
 overtones.

## Properties

### brightness

```ts
brightness: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:760](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L760)

Controls the "brightness" quality of the sound, affecting the gains of higher overtones.

key | value
--- | ---
default | 0
range | [-1, 1]

***

### combFilterAmount

```ts
combFilterAmount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:797](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L797)

Comb filter amount - 0 means no filtering, 1 means maximum filtering. No unit.

key | value
--- | ---
default | 0
range | [0, 1]

***

### combFilterRate

```ts
combFilterRate: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:807](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L807)

The comb filter's "rate", controlling the interval of the sine wave that filters the
 wavetable's frequency. Higher values mean more peaks & valleys, lower means fewer.

key | value
--- | ---
default | 0.15000000596046448
range | [0, 1]

***

### combFilterWidth

```ts
combFilterWidth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:817](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L817)

The width of the comb filter. Low values mean the filter filters in the form of a square
 wave, high values mean it filters in the form of a sine wave. No unit.

key | value
--- | ---
default | 0
range | [0, 1]

***

### dispersion

```ts
dispersion: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:742](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L742)

Controls the "disperse" quality of the sound.

key | value
--- | ---
default | 0.5
range | [0, 1]

***

### harmonicsCount

```ts
harmonicsCount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:788](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L788)

Number of harmonics in the sound. More harmonics results in a more "rich"/complex
 sound.

key | value
--- | ---
default | 32
range | [1, 32]

***

### metal

```ts
metal: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:769](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L769)

Controls the "metal" quality of the sound.

key | value
--- | ---
default | 0
range | [0, 1]

***

### separation

```ts
separation: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:778](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L778)

Controls "separation" quality of the sound.

key | value
--- | ---
default | 1
range | [1, 4]

***

### vaporisation

```ts
vaporisation: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/space/v1/space\_nexus.ts:751](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/space/v1/space_nexus.ts#L751)

Controls the "vaporization" quality of the sound.

key | value
--- | ---
default | 0.20000000298023224
range | [0, 1]
