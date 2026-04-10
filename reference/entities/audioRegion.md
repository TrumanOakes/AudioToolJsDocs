---
title: audioRegion
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# audioRegion

**Module:** `@audiotool/nexus/entities`

An audioRegion is a block on an `audioTrack` in the timeline. It marks where an audio sample plays in the arrangement, defining the start position and duration of the clip.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionTicks` | `number` | Start position of the region on the timeline, measured in ticks |
| `durationTicks` | `number` | Length of the region in ticks |
| `track` | pointer | Points to the `audioTrack` this region belongs to |

> One tick = `1/3840` of a quarter note. See [Utilities](../utilities.md) for `Ticks` constants.

> For sample reference and audio clip parameters, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [audioTrack](audioTrack.md) — the track this region sits on
- [sample](sample.md) — audio sample referenced by this region
- [Utilities](../utilities.md) — `Ticks` constants for timing
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
