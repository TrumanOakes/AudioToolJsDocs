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

> For the complete field listing with types, defaults, and ranges, see [PatternTrack](../../api-reference/generated/entities/type-aliases/PatternTrack.html).

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
