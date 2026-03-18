---
title: Work With Timeline Data
parent: Working With Audiotool Projects
nav_order: 4
---

# Work With Timeline Data

The Audiotool timeline contains tracks, regions, note collections, and individual notes. This page shows how to create and work with timeline content using Nexus.

## Understanding timeline structure

The timeline is built from several linked <span class="tooltip" data-tooltip="A single item inside a project document, such as a device, note region, or other project object.">entities</span>. A track holds regions, each region points to a note collection, and the collection holds the individual notes:

```
noteTrack
  └── noteRegion (references a noteCollection)
        └── noteCollection
              └── note (positionTicks, pitch, velocity)
```

To place notes in a project, you create all of these in a single <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transaction</span>.

## Time measurement: ticks

All timeline positions and durations are measured in **ticks** — tempo-independent time units. Use the `Ticks` constants and conversion functions from the `utils` module:

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks, secondsToTicks, ticksToSeconds } = utils;

Ticks.Beat       // 3840  — one quarter note
Ticks.SemiBreve  // 15360 — one whole note / one bar in 4/4
Ticks.SemiQuaver // 960   — one sixteenth note

// Convert between ticks and seconds
const ticks = secondsToTicks(2.0, 120); // 2 seconds at 120 BPM
const secs  = ticksToSeconds(3840, 120); // one beat at 120 BPM = 0.5s
```

## Creating a note track with notes

```typescript
await document.modify((t) => {
  // 1. Create the track
  const track = t.create("noteTrack", {
    displayName: "Melody"
  });

  // 2. Create a note collection to hold the notes
  const collection = t.create("noteCollection", {});

  // 3. Create a region on the track that references the collection
  const region = t.create("noteRegion", {
    // positionTicks: start of the region
    // lengthTicks: duration of the region
    // collection: pointer to noteCollection
  });

  // 4. Create individual notes inside the collection
  t.create("note", {
    positionTicks: 0,
    pitch: 60,       // MIDI pitch (60 = middle C)
    velocity: 100,   // 0–127
  });

  t.create("note", {
    positionTicks: Ticks.Beat,
    pitch: 64,
    velocity: 80,
  });
});
```

See [Entity Reference](../reference/entity-reference.md) for the exact field definitions, including pointer fields for `noteRegion` and `noteCollection`.

## Track types

| Entity | Description |
|--------|-------------|
| [`noteTrack`](../reference/entities/noteTrack.md) | Track for MIDI/note data |
| [`audioTrack`](../reference/entities/audioTrack.md) | Track for audio clips |
| [`automationTrack`](../reference/entities/automationTrack.md) | Track for parameter automation curves |
| [`patternTrack`](../reference/entities/patternTrack.md) | Track for pattern-based sequencing |

## Region types

| Entity | Description |
|--------|-------------|
| [`noteRegion`](../reference/entities/noteRegion.md) | A region on a note track, references a `noteCollection` |
| [`audioRegion`](../reference/entities/audioRegion.md) | A region on an audio track, references a `sample` |
| [`automationRegion`](../reference/entities/automationRegion.md) | A region on an automation track |

## Note fields

A `note` entity has three fields:

| Field | Type | Description |
|-------|------|-------------|
| `positionTicks` | number | Start time within the note collection |
| `pitch` | number | MIDI pitch value (0–127, 60 = middle C) |
| `velocity` | number | Note velocity (0–127) |

## Querying timeline entities

```typescript
// Find all note tracks
const tracks = document.queryEntities.ofTypes("noteTrack").get();

// Find all notes
const notes = document.queryEntities.ofTypes("note").get();

// Find notes at a specific position
const beat1Notes = document.queryEntities
  .ofTypes("note")
  .where(n => n.fields.positionTicks === 0)
  .get();
```

## Next step

→ [Find and Read Entities](find-and-read-entities.md) — query and inspect document state
