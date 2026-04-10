---
title: automationRegion
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# automationRegion

**Module:** `@audiotool/nexus/entities`

An automationRegion is a block on an `automationTrack` in the timeline. It holds the automation curve data for a specific time range — defining how a device parameter changes over that section of the arrangement.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionTicks` | `number` | Start position of the region on the timeline, measured in ticks |
| `durationTicks` | `number` | Length of the region in ticks |
| `track` | pointer | Points to the `automationTrack` this region belongs to |

> One tick = `1/3840` of a quarter note. See [Utilities](../utilities.html) for `Ticks` constants.

> For the complete field listing with types, defaults, and ranges, see [AutomationRegion](../../api-reference/generated/entities/type-aliases/AutomationRegion.html).

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [automationTrack](automationTrack.html) — the track this region sits on
- [Utilities](../utilities.html) — `Ticks` constants for timing
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.html) — step-by-step guide
