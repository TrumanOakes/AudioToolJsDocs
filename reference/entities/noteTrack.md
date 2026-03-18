---
title: noteTrack
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteTrack

**Module:** `@audiotool/nexus/entities`

A noteTrack is a lane in the Audiotool timeline that holds MIDI-style note data. You place `noteRegion` entities on a noteTrack to define sections of notes, and then connect the track to a synthesizer or instrument device using a `noteCable` so those notes trigger sounds.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | Label shown on the track in the timeline |

> For additional track properties (color, mute, solo, etc.), refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
await document.modify((t) => {
  t.create("noteTrack", {
    displayName: "Melody",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteRegion](noteRegion.md) — regions placed on this track
- [noteCollection](noteCollection.md) — the note data inside a region
- [note](note.md) — individual notes within a collection
- [noteCable](noteCable.md) — connects this track to a device
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide to building timeline content
