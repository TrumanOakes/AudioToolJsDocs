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

Use `createTransaction()` so that you can reference newly created entities' locations immediately:

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;

const t = await nexus.createTransaction();

// 1. Create the synthesizer that will play the track
const synth = t.create("pulverisateur", {
  positionX: 100,
  positionY: 100,
  displayName: "Lead Synth",
});

// 2. Create the track — player is required and uses .location
const track = t.create("noteTrack", {
  player: synth.location,
  orderAmongTracks: 1000 + Math.random() * 1000,
  displayName: "Melody",
});

// 3. Create a note collection to hold the notes
const collection = t.create("noteCollection", {});

// 4. Create a region on the track — timing lives inside the nested `region` object
t.create("noteRegion", {
  collection: collection.location,   // pointer uses .location
  track: track.location,             // pointer uses .location
  region: {
    positionTicks: 0,                // starts at bar 1
    durationTicks: Ticks.Beat * 4,   // 4 beats long
    loopDurationTicks: Ticks.Beat * 4, // same as durationTicks = no extra looping
    loopOffsetTicks: 0,
    collectionOffsetTicks: 0,
    colorIndex: 3,
    displayName: "Melody",
    isEnabled: true,
  },
});

// 5. Create individual notes inside the collection
t.create("note", {
  collection: collection.location,
  positionTicks: 0,
  durationTicks: Ticks.Beat,
  pitch: 60,       // MIDI pitch (60 = middle C)
  velocity: 100,   // 0–127
});

t.create("note", {
  collection: collection.location,
  positionTicks: Ticks.Beat,
  durationTicks: Ticks.Beat,
  pitch: 64,       // E4
  velocity: 80,
});

t.send();
```

See [noteRegion](../reference/entities/noteRegion.md), [noteTrack](../reference/entities/noteTrack.md), and [note](../reference/entities/note.md) for full field details.

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
const tracks = nexus.queryEntities.ofTypes("noteTrack").get();

// Find all notes
const notes = nexus.queryEntities.ofTypes("note").get();

// Find notes at a specific position
const beat1Notes = nexus.queryEntities
  .ofTypes("note")
  .get()
  .filter(n => n.fields.positionTicks.value === 0);
```

## Next step

→ [Find and Read Entities](find-and-read-entities.md) — query and inspect document state
