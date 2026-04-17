---
title: "AudioRegion"
parent: "entities"
grand_parent: "API"
nav_order: 5
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudioRegion

```ts
type AudioRegion = {
  fadeInDurationTicks: PrimitiveField<number, "mut">;
  fadeInSlope: PrimitiveField<number, "mut">;
  fadeOutDurationTicks: PrimitiveField<number, "mut">;
  fadeOutSlope: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  pitchShiftSemitones: PrimitiveField<number, "mut">;
  playbackAutomationCollection: PrimitiveField<NexusLocation, "immut">;
  region: NexusObject<Region>;
  sample: PrimitiveField<NexusLocation, "immut">;
  timestretchMode: PrimitiveField<number, "mut">;
  track: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L34)

key | value
--- | ---
type | entity
key | `"audioRegion"`
is |

 An Region of audio on the timeline. Must be attached to an AudioTrack.

 Note that multiple regions can point to the same sample and/or the same
 automation collection. In the current audio tool version, it's possible to create
 "virtual regions" that point to both the same sample and same automation collection,
 and to create two regions with different collections but the same sample.

 It is also possible to create two regions that point to
 different samples but the same automation collection, even though the UI
 doesn't allow for such an operation.

## Properties

### fadeInDurationTicks

```ts
fadeInDurationTicks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L90)

The duration of the fade-in envelope in ticks. The sum of this and fade out
 duration cannot be higher than the region's total duration.

key | value
--- | ---
default | 10
range | full

***

### fadeInSlope

```ts
fadeInSlope: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L99)

The slope of the fade-in envelope. 0 is linear, more or less curves the slope.

key | value
--- | ---
default | 0
range | [-1, 1]

***

### fadeOutDurationTicks

```ts
fadeOutDurationTicks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L109)

The duration of the fade-out envelope in ticks. The sum of this and fade in
 duration cannot be higher than the region's total duration.

key | value
--- | ---
default | 10
range | full

***

### fadeOutSlope

```ts
fadeOutSlope: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L118)

The slope of the fade-out envelope. 0 is linear, more or less curves the slope.

key | value
--- | ---
default | 0
range | [-1, 1]

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L80)

Gain applied to the sample in the region. Equivalent to a dB range of [-inf, 30.0].

key | value
--- | ---
default | 1
range | [0, 31.622777938842773]

***

### pitchShiftSemitones

```ts
pitchShiftSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:141](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L141)

in timestretch mode, pitch shift the signal by a certain
 amount of semitones

key | value
--- | ---
default | 0
range | [-24, 24]

***

### playbackAutomationCollection

```ts
playbackAutomationCollection: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L60)

Automation events that define the playback speed of the sample in this region.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AutomationCollection](../../api/enumerations/TargetType.html#enumeration-member-automationcollection), meaning one of: <br />[entities.AutomationCollection](AutomationCollection.html), <br />[entities.TempoAutomationTrack](TempoAutomationTrack.html)
immutable | true

***

### region

```ts
region: NexusObject<Region>;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L38)

This region maps to the audio content of the track.

***

### sample

```ts
sample: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L71)

The sample that is played back in this region.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.Sample](../../api/enumerations/TargetType.html#enumeration-member-sample), meaning one of: <br />[entities.Sample](Sample.html)
immutable | true

***

### timestretchMode

```ts
timestretchMode: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:131](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L131)

The time stretching algorithm, determines the pitch of the sample if it's stretched
 or compressed over time:
 - 0: invalid
 - 1: pitch shift    no processing - faster/slower playback result in lower/higher pitch
 - 2: time stretch   processing - faster/slower keeps the original pitch, with some artifacts.

key | value
--- | ---
default | 2
range | [1, 2]

***

### track

```ts
track: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/audio/audio\_region\_nexus.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/audio/audio_region_nexus.ts#L49)

The track this region belongs to.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AudioTrack](../../api/enumerations/TargetType.html#enumeration-member-audiotrack), meaning one of: <br />[entities.AudioTrack](AudioTrack.html)
immutable | true
