---
title: "AudioSplitterCoordinates"
parent: "entities"
grand_parent: "API"
nav_order: 7
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudioSplitterCoordinates

```ts
type AudioSplitterCoordinates = {
  x: PrimitiveField<number, "mut">;
  y: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:199](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L199)

key | value
--- | ---
type | object

 Datastructure holding how the values are split.
 The splitting works according to a triangle spanned by the following three corners:
 - A: coordinate (1, 0.5)
 - B: coordinate (0, 0)
 - C: coordinates (1, -0.5)

 Given a `AudioSplitterCoordinates` point (x, y), the gain for outputs for A, B, and C depends on the distance
 from the Split point to their respective corners after the y value is clipped such that the
 point lies inside the triangle.

 For example, point (1, 0) lies inside the triangle, so the distances are calculated from the
 point directly; point (0.5, 0.5) however lies outside triangle, so the y value is clipped to move the
 point to the edge of the triangle, in this case (0.5, 0.75), before the distances are calculated.

 The default values are chosen such that the distance to all three corners is equal.

 Note: The Barycentric coordinate system was considered, but not used to the following reasons:
 - non-unique coordinates for a given point
 - undefined coordinate (0, 0, 0)
 - the old documents work using the system above, hence is the behavior expected by users

## Properties

### x

```ts
x: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:209](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L209)

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

Defined in: [gen/audiotool/document/v1/entity/audio\_splitter/v1/audio\_splitter\_nexus.ts:219](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/audio_splitter/v1/audio_splitter_nexus.ts#L219)

The y-coordinates. See the message documentation for what this means.

key | value
--- | ---
default | 0
range | [-0.5, 0.5]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
