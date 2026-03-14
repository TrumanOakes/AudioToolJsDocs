---
title: Entity Reference
parent: Reference
nav_order: 4
---

# Entity Reference

**Module:** `@audiotool/nexus/entities`

Field types for all entities in the Nexus document schema. Use these types when creating or updating entities via the transaction builder.

## How to use entity types

Create entities using the `t.create()` method with the entity key and an initial fields object:

```typescript
await document.modify((t) => {
  t.create("tinyGain", { positionX: 100, positionY: 200 });
});
```

The TypeScript types for entity fields are exported from `@audiotool/nexus/entities`.

---

## Device Entities

Audio devices represent processing units placed on the Audiotool desktop. They form the audio processing graph.

**Common fields on all devices:**

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | number | Horizontal position on the desktop |
| `positionY` | number | Vertical position on the desktop |
| `displayName` | string | Label shown in the DAW UI |

> The system manages automatic positioning to prevent device overlaps.

### Synthesizers

| Entity Key | Description |
|------------|-------------|
| `pulverisateur` | Pulverisateur synthesizer |
| `gakki` | Gakki synthesizer |
| `bassline` | Bassline synthesizer |

### Drum Machines

| Entity Key | Description |
|------------|-------------|
| `beatbox8` | Beatbox 8-step drum machine |
| `beatbox9` | Beatbox 9-step drum machine |
| `rasselbock` | Rasselbock drum machine |
| `machiniste` | Machiniste drum machine |

### Filters and Effects

| Entity Key | Description |
|------------|-------------|
| `autoFilter` | Auto filter effect |
| `graphicalEQ` | Graphical equalizer |
| `stompbox*` | Various Stompbox effect modules |
| `tinyGain` | Simple gain utility device |
| `audioMerger` | Merges multiple audio signals |
| `audioSplitter` | Splits an audio signal |
| `crossfader` | Crossfader device |

---

## Mixer Entities

Mixer entities control signal routing and the mixing console.

| Entity Key | Description |
|------------|-------------|
| `mixerMaster` | Required master output — exactly one per document |
| `mixerChannel` | Individual channel strip |
| `mixerAux*` | Auxiliary send/return entities |
| `mixerGroup*` | Group channel entities |
| `mixerSidechain*` | Sidechain routing cables |

Audio devices connect to mixer channels via `audioCable` entities that link device audio outputs to channel inputs.

---

## Timeline Entities

Timeline entities form the arrangement view: tracks, regions, and the content within them.

| Entity Key | Description |
|------------|-------------|
| `noteTrack` | Track for note/MIDI data |
| `audioTrack` | Track for audio clips |
| `automationTrack` | Track for parameter automation |
| `patternTrack` | Pattern-based sequencing track |
| `noteRegion` | A region on a note track |
| `audioRegion` | A region on an audio track |
| `automationRegion` | A region on an automation track |
| `noteCollection` | A collection of notes referenced by `noteRegion` entities |
| `note` | An individual note |

### Note fields

| Field | Type | Description |
|-------|------|-------------|
| `positionTicks` | number | Start time within the note collection |
| `pitch` | number | MIDI pitch value (0–127, 60 = middle C) |
| `velocity` | number | Note velocity (0–127) |

---

## Utility Entities

| Entity Key | Description |
|------------|-------------|
| `configuration` | Document-level configuration settings |
| `audioCable` | Connects audio outputs to audio inputs |
| `noteCable` | Connects note/MIDI outputs to inputs |
| `groove` | Groove/swing quantization entity |
| `microtuningOctave` | Per-octave microtuning definition |
| `sample` | Reference to an audio sample file |
| `vst3Plugin` | VST3 plugin instance |

---

## See also

- [Entities and Fields](../how-nexus-works/entities-and-fields.md) — conceptual explanation of entity types and pointers
- [Create Devices](../working-with-audiotool-projects/create-devices.md) — task guide for creating audio devices
- [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md) — task guide for timeline content
