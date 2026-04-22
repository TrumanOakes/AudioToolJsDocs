---
title: noteRegion
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteRegion

**Module:** `@audiotool/nexus/entities`

A noteRegion is a block placed on a `noteTrack` in the timeline. It marks where a collection of notes plays in the arrangement. The region points to a `noteCollection` (which holds the actual note data) and defines its position, length, looping behaviour, and display properties through a nested `region` object.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property. Pass `entity.location` wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `collection` | pointer | Points to the `noteCollection` containing the notes — use `collection.location` |
| `track` | pointer | Points to the `noteTrack` this region sits on — use `track.location` |
| `region` | object | Nested object that defines the region's timing and display (see sub-fields below) |

### `region` sub-fields

| Sub-field | Type | Description |
|-----------|------|-------------|
| `positionTicks` | `number` | Start position of the region on the timeline, measured in ticks |
| `durationTicks` | `number` | Total length of the region in ticks |
| `loopDurationTicks` | `number` | How many ticks of the collection loop within the region. Set equal to `durationTicks` for no looping |
| `loopOffsetTicks` | `number` | How far into the collection the loop starts. Set to `0` for standard playback |
| `collectionOffsetTicks` | `number` | Offset into the noteCollection to start reading from. Set to `0` for standard playback |
| `colorIndex` | `number` | Color used to display the region block in the timeline |
| `displayName` | `string` | Label shown on the region block in the timeline |
| `isEnabled` | `boolean` | When `false`, the region is muted and its notes do not play |

> One tick = `1/3840` of a quarter note. See [Utilities](../utilities.md) for `Ticks` constants.

## Example

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;

// Use createTransaction() to build several entities in one operation
const t = await nexus.createTransaction();

const track = t.create("noteTrack", {
  player: myDevice.location,       // device that plays this track's notes
  orderAmongTracks: 1000,
});

const collection = t.create("noteCollection", {});

// noteRegion — timing lives inside the nested `region` object
t.create("noteRegion", {
  collection: collection.location, // pointer uses .location
  track: track.location,           // pointer uses .location
  region: {
    positionTicks: 0,              // starts at bar 1
    durationTicks: Ticks.Beat * 4, // 4 beats long
    loopDurationTicks: Ticks.Beat * 4, // same as durationTicks = no extra looping
    loopOffsetTicks: 0,
    collectionOffsetTicks: 0,
    colorIndex: 3,
    displayName: "Verse 1",
    isEnabled: true,
  },
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteTrack](noteTrack.md) — the track this region sits on
- [noteCollection](noteCollection.md) — the note data this region references
- [note](note.md) — individual notes within the collection
- [Utilities](../utilities.md) — `Ticks` constants for timing
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
