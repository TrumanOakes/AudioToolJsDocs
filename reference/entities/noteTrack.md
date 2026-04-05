---
title: noteTrack
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteTrack

**Module:** `@audiotool/nexus/entities`

A noteTrack is a lane in the Audiotool timeline that holds MIDI-style note data. You place `noteRegion` entities on a noteTrack to define sections of notes. The track must be connected to a synthesizer or instrument device — set the `player` field to tell the track which device will play its notes.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property. Pass `entity.location` wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | pointer | **Required.** The device that plays this track's notes — use `device.location` |
| `orderAmongTracks` | `number` | A floating-point number that controls the track's position in the timeline view. Use a large unique value (e.g. `1000`) and add a random offset to avoid collisions |
| `displayName` | `string` | Label shown on the track in the timeline |

> **`orderAmongTracks` tip:** Each track needs a unique value. A safe pattern is `1000 + Math.random() * 1000` — this keeps tracks spread apart and avoids ordering conflicts when creating multiple tracks at once.

## Example

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;

// Use createTransaction() to build several entities in one operation
const t = await nexus.createTransaction();

// First, create the synthesizer that will play the notes
const synth = t.create("pulverisateur", {
  positionX: 100,
  positionY: 100,
  displayName: "Lead Synth",
});

// Create the note track — player is required and uses .location
const track = t.create("noteTrack", {
  player: synth.location,                     // pointer uses .location
  orderAmongTracks: 1000 + Math.random() * 1000,
  displayName: "Melody",
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteRegion](noteRegion.md) — regions placed on this track
- [noteCollection](noteCollection.md) — the note data inside a region
- [note](note.md) — individual notes within a collection
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide to building timeline content
