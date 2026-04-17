---
title: "PatternTrack"
parent: "entities"
grand_parent: "API"
nav_order: 104
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PatternTrack

```ts
type PatternTrack = {
  isEnabled: PrimitiveField<boolean, "mut">;
  orderAmongTracks: PrimitiveField<number, "mut">;
  player: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_track\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_track_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"patternTrack"`
is | [api.TargetType.PatternTrack](../../api/enumerations/TargetType.html#enumeration-member-patterntrack)

 a pattern track that allows automating pattern changes for devices that
 support them

## Properties

### isEnabled

```ts
isEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_track\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_track_nexus.ts#L39)

If the track is disabled, no pattern is played back.

key | value
--- | ---
default | true

***

### orderAmongTracks

```ts
orderAmongTracks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_track\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_track_nexus.ts#L31)

Sorts this track visually among all tracks. Must be unique among
 all AutomationTracks, NoteTracks, PatternTracks, and AudioTracks.

key | value
--- | ---
default | 0
range | full

***

### player

```ts
player: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern\_track\_nexus.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/pattern/pattern_track_nexus.ts#L50)

The entity that receives the pattern information from this track.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.PatternTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-patterntrackplayer), meaning one of: <br />[entities.Bassline](Bassline.html), <br />[entities.Beatbox8](Beatbox8.html), <br />[entities.Beatbox9](Beatbox9.html), <br />[entities.Machiniste](Machiniste.html), <br />[entities.MatrixArpeggiator](MatrixArpeggiator.html), <br />[entities.Rasselbock](Rasselbock.html), <br />[entities.Tonematrix](Tonematrix.html)
immutable | true
