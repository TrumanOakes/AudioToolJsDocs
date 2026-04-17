---
title: "AudioTrack"
parent: "entities"
grand_parent: "API"
nav_order: 8
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudioTrack

```ts
type AudioTrack = {
  groove: PrimitiveField<NexusLocation, "mut">;
  isEnabled: PrimitiveField<boolean, "mut">;
  orderAmongTracks: PrimitiveField<number, "mut">;
  player: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_track\_nexus.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_track_nexus.ts#L20)

key | value
--- | ---
type | entity
key | `"audioTrack"`
is | [api.TargetType.AudioTrack](../../api/enumerations/TargetType.html#enumeration-member-audiotrack)

 A track on the timeline that can contain audio regions. Must be attached to an AudioDevice.

## Properties

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_track\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_track_nexus.ts#L48)

Optionally apply a Groove to the audio.

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

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_track\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_track_nexus.ts#L38)

Whether the audio track is enabled or not. When is_enabled=false, no audio is played back on the track.

key | value
--- | ---
default | true

***

### orderAmongTracks

```ts
orderAmongTracks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_track\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_track_nexus.ts#L30)

Orders the track visually among all tracks (including audio, automation, pattern, and note tracks).
 If this value isn't unique, the frontend might update it to make it unique.

key | value
--- | ---
default | 0
range | full

***

### player

```ts
player: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_track\_nexus.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_track_nexus.ts#L60)

The audio track player that receives the audio from this track and forwards it on the processing
 graph. Currently can only point to an AudioDevice.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AudioTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-audiotrackplayer), meaning one of: <br />[entities.AudioDevice](AudioDevice.html)
immutable | true
