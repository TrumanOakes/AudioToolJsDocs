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

> For additional track properties (color, mute, solo, etc.), refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
await document.modify((t) => {
  t.create("audioTrack", {
    displayName: "Vocals",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [audioRegion](audioRegion.md) — regions placed on this track
- [sample](sample.md) — audio sample file referenced by audio regions
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide to building timeline content
