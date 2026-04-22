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

> One tick = `1/3840` of a quarter note. See [Utilities](../utilities.html) for `Ticks` constants.

> For the complete field listing with types, defaults, and ranges, see [AudioRegion](../../api-reference/generated/types/entities.AudioRegion.html).

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [audioTrack](audioTrack.html) — the track this region sits on
- [sample](sample.html) — audio sample referenced by this region
- [Utilities](../utilities.html) — `Ticks` constants for timing
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.html) — step-by-step guide
