---
title: noteCable
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteCable

**Module:** `@audiotool/nexus/entities`

A noteCable connects a note output (from a track or sequencer) to a note input (on a device). It is the MIDI equivalent of an `audioCable` — instead of carrying audio, it carries note trigger data so that notes in a `noteTrack` can play a synthesizer or drum machine.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `source` | pointer | Points to the note output being connected from (e.g. a `noteTrack`'s note output port) |
| `target` | pointer | Points to the note input being connected to (e.g. a device's note input port) |

## Example

```typescript
await document.modify((t) => {
  const synth = t.create("pulverisateur", {
    positionX: 100,
    positionY: 100,
    displayName: "Lead Synth",
  });

  const track = t.create("noteTrack", {
    displayName: "Melody",
  });

  // Connect the note track to the synthesizer
  t.create("noteCable", {
    source: track.fields.noteOutput,
    target: synth.fields.noteInput,
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [audioCable](audioCable.md) — connects audio outputs to audio inputs
- [noteTrack](noteTrack.md) — common source of note data
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
