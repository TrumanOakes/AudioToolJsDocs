---
title: "AudioMergerCoordinates"
parent: "entities"
grand_parent: "API"
nav_order: 4
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudioMergerCoordinates

```ts
type AudioMergerCoordinates = {
  x: PrimitiveField<number, "mut">;
  y: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:196](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L196)

key | value
--- | ---
type | object

 The coordinates by which signals A, B and C in the audio merger are mixed.

 The coordinates are on the cartesian plane bounded by [0, 1]
 in both dimensions. On this plane, a triangle is formed between
 points:
 - A: (0, 0.5)
 - B: (1, 0)
 - C: (0, -0.5)

 For a given coordinate (x, y), the point is first clamped vertically
 to be within the y-range of the triangle (for the given x value). Then,
 the distance to points A, B, C is calculated.

 How these distances are used to mix the signals together depends
 on the blend_algorithm fields of the merger.

## Properties

### x

```ts
x: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:206](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L206)

The x-coordinates. See the message documentation for what this means.

key | value
--- | ---
default | 0.6666666865348816
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### y

```ts
y: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_merger/v1/audio\_merger\_nexus.ts:216](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_merger/v1/audio_merger_nexus.ts#L216)

The y-coordinates. See the message documentation for what this means.

key | value
--- | ---
default | 0
range | [-0.5, 0.5]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
