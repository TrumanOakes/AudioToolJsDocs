---
title: patternTrack
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# patternTrack

**Module:** `@audiotool/nexus/entities`

A patternTrack is a lane in the Audiotool timeline that uses pattern-based sequencing. Instead of freeform note regions, it works with repeating patterns — similar to a step sequencer approach arranged in the timeline.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | Label shown on the track in the timeline |

> For pattern-specific properties and sequencing parameters, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
await nexus.modify((t) => {
  t.create("patternTrack", {
    displayName: "Beat Pattern",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteTrack](noteTrack.md) — for freeform MIDI/note data
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide to building timeline content
