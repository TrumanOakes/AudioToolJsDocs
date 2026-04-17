---
title: "PatternRegion"
parent: "entities"
grand_parent: "API"
nav_order: 103
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PatternRegion

```ts
type PatternRegion = {
  patternIndex: PrimitiveField<number, "mut">;
  region: NexusObject<Region>;
  restart: PrimitiveField<boolean, "mut">;
  track: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_region\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_region_nexus.ts#L25)

key | value
--- | ---
type | entity
key | `"patternRegion"`
is |

 a region on a pattern track

## Properties

### patternIndex

```ts
patternIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_region\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_region_nexus.ts#L43)

The index of the pattern in the pattern device that the track points to.

 32 is the maximum number of patterns supported by any current pattern device;
 if more pattern devices are added, this value must be increased.

 If a region exists with an index higher than the pattern device supports, the region is mute.

key | value
--- | ---
default | 0
range | [0, 32]

***

### region

```ts
region: NexusObject<Region>;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_region\_nexus.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_region_nexus.ts#L29)

How this region maps to the underlying container.

***

### restart

```ts
restart: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_region\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_region_nexus.ts#L63)

Defines whether the pattern is started at this point in
 time, or whether it uses 0 as its starting point

key | value
--- | ---
default | false

***

### track

```ts
track: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_region\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_region_nexus.ts#L54)

The track this region belongs to.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.PatternTrack](../../api/enumerations/TargetType.html#enumeration-member-patterntrack), meaning one of: <br />[entities.PatternTrack](PatternTrack.html)
immutable | true
