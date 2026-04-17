---
title: "MixerStripDisplayParameters"
parent: "entities"
grand_parent: "API"
nav_order: 92
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerStripDisplayParameters

```ts
type MixerStripDisplayParameters = {
  colorIndex: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  orderAmongStrips: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_display\_parameters\_nexus.ts:16](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_display_parameters_nexus.ts#L16)

key | value
--- | ---
type | object

 Parameters most strips need that control the visual appearance of the strip in the DAW.

## Properties

### colorIndex

```ts
colorIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_display\_parameters\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_display_parameters_nexus.ts#L38)

Color of the strip.

key | value
--- | ---
default | 0
range | [0, 41]

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_display\_parameters\_nexus.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_display_parameters_nexus.ts#L29)

Strip display name. If left empty, the DAW will use other relevant information to show a name.

***

### orderAmongStrips

```ts
orderAmongStrips: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_display\_parameters\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_display_parameters_nexus.ts#L25)

This parameter orders the strips visually in the DAW. Orders must be globally unique amongst all strips.

key | value
--- | ---
default | 0
range | full
