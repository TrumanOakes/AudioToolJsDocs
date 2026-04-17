---
title: "WaveshaperAnchor"
parent: "entities"
grand_parent: "API"
nav_order: 160
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: WaveshaperAnchor

```ts
type WaveshaperAnchor = {
  slope: PrimitiveField<number, "mut">;
  waveshaper: PrimitiveField<NexusLocation, "immut">;
  x: PrimitiveField<number, "mut">;
  y: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:317](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L317)

key | value
--- | ---
type | entity
key | `"waveshaperAnchor"`
is |

 An anchor on the waveshaper curve, influencing how the amplitude is remapped.

## Properties

### slope

```ts
slope: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:344](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L344)

The amount the curve right before this anchor is sloped.

key | value
--- | ---
default | 0
range | [-1, 1]

***

### waveshaper

```ts
waveshaper: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:355](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L355)

The waveshaper that uses this anchor.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.Waveshaper](../../api/enumerations/TargetType.html#enumeration-member-waveshaper), meaning one of: <br />[entities.Waveshaper](Waveshaper.html)
immutable | true

***

### x

```ts
x: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:326](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L326)

The x-coordinate of the anchor.

key | value
--- | ---
default | 0
range | [0, 1]

***

### y

```ts
y: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:335](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L335)

The y-coordinate of the anchor.

key | value
--- | ---
default | 0
range | [0, 1]
