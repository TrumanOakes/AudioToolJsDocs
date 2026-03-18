---
title: note
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# note

**Module:** `@audiotool/nexus/entities`

A note is an individual MIDI-style note stored inside a `noteCollection`. It has a start time, a pitch, a velocity, and a duration. Notes are the fundamental unit of melodic and harmonic content in Audiotool's timeline.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property. Pass `entity.location` wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `collection` | pointer | Points to the `noteCollection` this note belongs to — use `collection.location` |
| `positionTicks` | `number` | Start time of the note within its `noteCollection`, measured in ticks. `0` = the very beginning of the collection |
| `durationTicks` | `number` | How long the note lasts, in ticks |
| `pitch` | `number` | MIDI pitch value — `0` to `127`. `60` = middle C (C4), `69` = A4 (concert pitch 440 Hz) |
| `velocity` | `number` | How hard the note is struck — `0` to `127`. Higher values are louder/more intense |

> One tick = `1/3840` of a quarter note. See [Utilities](../utilities.md) for `Ticks` constants like `Ticks.Beat` and `Ticks.SemiBreve`.

## Example

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;

// Use createTransaction() to build everything in one operation
const t = await document.createTransaction();

const collection = t.create("noteCollection", {});

// A C major chord: C, E, G played at the same time
// Note: collection pointer uses .location
t.create("note", {
  collection: collection.location,
  positionTicks: 0,
  durationTicks: Ticks.Beat,
  pitch: 60,    // C4 (middle C)
  velocity: 100,
});

t.create("note", {
  collection: collection.location,
  positionTicks: 0,
  durationTicks: Ticks.Beat,
  pitch: 64,    // E4
  velocity: 90,
});

t.create("note", {
  collection: collection.location,
  positionTicks: 0,
  durationTicks: Ticks.Beat,
  pitch: 67,    // G4
  velocity: 95,
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteCollection](noteCollection.md) — the container that groups notes together
- [noteRegion](noteRegion.md) — places a collection of notes onto a track
- [Utilities](../utilities.md) — `Ticks` constants and time conversion helpers
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
