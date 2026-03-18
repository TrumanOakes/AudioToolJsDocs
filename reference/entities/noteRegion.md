---
title: noteRegion
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteRegion

**Module:** `@audiotool/nexus/entities`

A noteRegion is a block on a `noteTrack` in the timeline that marks where a collection of notes plays. It defines the position and length of the block in the arrangement and points to the `noteCollection` that contains the actual note data.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionTicks` | `number` | Start position of the region on the timeline, measured in ticks |
| `durationTicks` | `number` | Length of the region in ticks |
| `collection` | pointer | Points to the `noteCollection` that holds the notes played by this region |
| `track` | pointer | Points to the `noteTrack` this region belongs to |

> One tick = `1/3840` of a quarter note. See [Utilities](../utilities.md) for `Ticks` constants.

## Example

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;

let track, collection;

await document.modify((t) => {
  track = t.create("noteTrack", { displayName: "Melody" });
  collection = t.create("noteCollection", {});
});

await document.modify((t) => {
  // Place a region at bar 1, lasting 4 beats
  t.create("noteRegion", {
    positionTicks: 0,
    durationTicks: Ticks.SemiBreve, // one bar (4 beats in 4/4)
    collection: collection,
    track: track,
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteTrack](noteTrack.md) — the track this region sits on
- [noteCollection](noteCollection.md) — the note data this region references
- [note](note.md) — individual notes within the collection
- [Utilities](../utilities.md) — `Ticks` constants for timing
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
