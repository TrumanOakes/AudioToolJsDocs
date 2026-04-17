---
title: "NoteTrack"
parent: "entities"
grand_parent: "API"
nav_order: 101
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NoteTrack

```ts
type NoteTrack = {
  groove: PrimitiveField<NexusLocation, "mut">;
  isEnabled: PrimitiveField<boolean, "mut">;
  orderAmongTracks: PrimitiveField<number, "mut">;
  player: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_track\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_track_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"noteTrack"`
is | [api.TargetType.NoteTrack](../../api/enumerations/TargetType.html#enumeration-member-notetrack)

 A note track containing note regions. A note track must always be attached
 to a note playing device and can't exist without one.

## Properties

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_track\_nexus.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_track_nexus.ts#L49)

Optionally apply a Groove to the notes.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.Groove](../../api/enumerations/TargetType.html#enumeration-member-groove), meaning one of: <br />[entities.Groove](Groove.html)

***

### isEnabled

```ts
isEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_track\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_track_nexus.ts#L39)

If the track is disabled, no notes are played back.

key | value
--- | ---
default | true

***

### orderAmongTracks

```ts
orderAmongTracks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_track\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_track_nexus.ts#L31)

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

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_track\_nexus.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_track_nexus.ts#L60)

The entity that receives the notes of this note track.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer), meaning one of: <br />[entities.Bassline](Bassline.html), <br />[entities.Beatbox8](Beatbox8.html), <br />[entities.Beatbox9](Beatbox9.html), <br />[entities.Gakki](Gakki.html), <br />[entities.Heisenberg](Heisenberg.html), <br />[entities.Machiniste](Machiniste.html), <br />[entities.MatrixArpeggiator](MatrixArpeggiator.html), <br />[entities.NoteSplitter](NoteSplitter.html), <br />[entities.Pulverisateur](Pulverisateur.html), <br />[entities.Space](Space.html), <br />[entities.SpitfireLabsVst3Plugin](SpitfireLabsVst3Plugin.html), <br />[entities.Tonematrix](Tonematrix.html)
immutable | true
