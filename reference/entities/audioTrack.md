---
title: audioTrack
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# audioTrack

**Module:** `@audiotool/nexus/entities`

An audioTrack is a lane in the Audiotool timeline that holds audio clips. You place `audioRegion` entities on an audioTrack to define where audio samples play back in the arrangement.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | Label shown on the track in the timeline |

> For the complete field listing with types, defaults, and ranges, see [AudioTrack](../../api-reference/generated/entities/type-aliases/AudioTrack.html).

## Example

```typescript
await nexus.modify((t) => {
  t.create("audioTrack", {
    displayName: "Vocals",
  });
});
```

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [audioRegion](audioRegion.html) — regions placed on this track
- [sample](sample.html) — audio sample file referenced by audio regions
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.html) — step-by-step guide to building timeline content
