---
title: noteCable
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteCable

**Module:** `@audiotool/nexus/entities`

A noteCable connects a note output socket (from a track or sequencer) to a note input socket (on a device). It is the MIDI equivalent of a `desktopAudioCable` — instead of carrying audio, it carries note trigger data so that notes in a `noteTrack` can play a synthesizer or drum machine.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property on a **field**, not the entity itself. Pass `entity.fields.socketName.location` wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `fromSocket` | pointer | The note output socket this cable connects **from** — use `track.fields.noteOutput.location` |
| `toSocket` | pointer | The note input socket this cable connects **to** — use `device.fields.noteInput.location` |

## Example

```typescript
// Use createTransaction() to build everything in one operation
const t = await document.createTransaction();

const synth = t.create("pulverisateur", {
  positionX: 100,
  positionY: 100,
  displayName: "Lead Synth",
});

const track = t.create("noteTrack", {
  player: synth.location,
  orderAmongTracks: 1000,
  displayName: "Melody",
});

// Connect the note track output to the synthesizer note input
// Use .location on the field, not on the entity
t.create("noteCable", {
  fromSocket: track.fields.noteOutput.location,
  toSocket: synth.fields.noteInput.location,
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [desktopAudioCable](desktopAudioCable.md) — connects audio outputs to audio inputs
- [noteTrack](noteTrack.md) — common source of note data
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
