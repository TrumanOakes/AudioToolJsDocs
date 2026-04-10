---
title: Entity Reference
parent: Reference
nav_order: 4
has_children: true
---

# Entity Reference

**Module:** `@audiotool/nexus/entities`

Field types for all <span class="tooltip" data-tooltip="A single item inside a project document, such as a device, note region, or other project object.">entities</span> in the Nexus schema. Click any entity name below to see its fields, types, and a code example.

## How to use entity types

Create entities using the `t.create()` method with the entity key and an initial fields object:

```typescript
await nexus.modify((t) => {
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
| [`pulverisateur`](entities/pulverisateur.md) · [fields](../api-reference/generated/entities/type-aliases/Pulverisateur.md) | Pulverisateur virtual analog synthesizer |
| [`gakki`](entities/gakki.md) · [fields](../api-reference/generated/entities/type-aliases/Gakki.md) | Gakki synthesizer |
| [`bassline`](entities/bassline.md) · [fields](../api-reference/generated/entities/type-aliases/Bassline.md) | Bassline synthesizer |
| [`kobolt`](entities/kobolt.md) · [fields](../api-reference/generated/entities/type-aliases/Kobolt.md) | Kobolt bass synthesizer (multi-channel, with per-channel gain and panning) |
| [`tonematrix`](entities/tonematrix.md) · [fields](../api-reference/generated/entities/type-aliases/Tonematrix.md) | Tonematrix step sequencer synthesizer |

### Drum Machines

| Entity Key | Description |
|------------|-------------|
| [`beatbox8`](entities/beatbox8.md) · [fields](../api-reference/generated/entities/type-aliases/Beatbox8.md) | Beatbox 8-step drum machine |
| [`beatbox9`](entities/beatbox9.md) · [fields](../api-reference/generated/entities/type-aliases/Beatbox9.md) | Beatbox 9-step drum machine |
| [`rasselbock`](entities/rasselbock.md) · [fields](../api-reference/generated/entities/type-aliases/Rasselbock.md) | Rasselbock drum machine |
| [`machiniste`](entities/machiniste.md) · [fields](../api-reference/generated/entities/type-aliases/Machiniste.md) | Machiniste drum machine |

### Filters and Effects

| Entity Key | Description |
|------------|-------------|
| [`autoFilter`](entities/autoFilter.md) · [fields](../api-reference/generated/entities/type-aliases/AutoFilter.md) | Auto filter effect |
| [`graphicalEQ`](entities/graphicalEQ.md) · [fields](../api-reference/generated/entities/type-aliases/GraphicalEQ.md) | Graphical equalizer |
| [`stompboxDelay`](entities/stompboxDelay.md) · [fields](../api-reference/generated/entities/type-aliases/StompboxDelay.md) | Stompbox delay effect (tempo-synced, with feedback and wet/dry mix) |
| [`stompboxSlope`](entities/stompboxSlope.md) · [fields](../api-reference/generated/entities/type-aliases/StompboxSlope.md) | Stompbox filter effect (low-pass, high-pass, band-pass, or notch) |
| [`tinyGain`](entities/tinyGain.md) · [fields](../api-reference/generated/entities/type-aliases/TinyGain.md) | Simple gain/volume utility device |
| [`audioMerger`](entities/audioMerger.md) · [fields](../api-reference/generated/entities/type-aliases/AudioMerger.md) | Merges multiple audio signals into one |
| [`audioSplitter`](entities/audioSplitter.md) · [fields](../api-reference/generated/entities/type-aliases/AudioSplitter.md) | Splits one audio signal into multiple outputs |
| [`crossfader`](entities/crossfader.md) · [fields](../api-reference/generated/entities/type-aliases/Crossfader.md) | Crossfader device |

---

## Mixer Entities

Mixer entities control signal routing and the mixing console.

| Entity Key | Description |
|------------|-------------|
| [`mixerMaster`](entities/mixerMaster.md) · [fields](../api-reference/generated/entities/type-aliases/MixerMaster.md) | Required master output — exactly one per document |
| [`mixerChannel`](entities/mixerChannel.md) · [fields](../api-reference/generated/entities/type-aliases/MixerChannel.md) | Individual channel strip |
| [`mixerAux`](entities/mixerAux.md) · [fields](../api-reference/generated/entities/type-aliases/MixerAux.md) | Auxiliary send/return entities |
| [`mixerGroup`](entities/mixerGroup.md) · [fields](../api-reference/generated/entities/type-aliases/MixerGroup.md) | Group channel entities |
| [`mixerSidechain`](entities/mixerSidechain.md) · [fields](../api-reference/generated/entities/type-aliases/MixerSidechain.md) | Sidechain routing cables |

Audio devices connect to mixer channels via [`desktopAudioCable`](entities/desktopAudioCable.md) entities that link device audio outputs to channel inputs.

---

## Timeline Entities

Timeline entities form the arrangement view: tracks, regions, and the content within them.

| Entity Key | Description |
|------------|-------------|
| [`noteTrack`](entities/noteTrack.md) · [fields](../api-reference/generated/entities/type-aliases/NoteTrack.md) | Track for note/MIDI data |
| [`audioTrack`](entities/audioTrack.md) · [fields](../api-reference/generated/entities/type-aliases/AudioTrack.md) | Track for audio clips |
| [`automationTrack`](entities/automationTrack.md) · [fields](../api-reference/generated/entities/type-aliases/AutomationTrack.md) | Track for parameter automation |
| [`patternTrack`](entities/patternTrack.md) · [fields](../api-reference/generated/entities/type-aliases/PatternTrack.md) | Pattern-based sequencing track |
| [`noteRegion`](entities/noteRegion.md) · [fields](../api-reference/generated/entities/type-aliases/NoteRegion.md) | A region on a note track |
| [`audioRegion`](entities/audioRegion.md) · [fields](../api-reference/generated/entities/type-aliases/AudioRegion.md) | A region on an audio track |
| [`automationRegion`](entities/automationRegion.md) · [fields](../api-reference/generated/entities/type-aliases/AutomationRegion.md) | A region on an automation track |
| [`noteCollection`](entities/noteCollection.md) · [fields](../api-reference/generated/entities/type-aliases/NoteCollection.md) | A container of notes referenced by `noteRegion` entities |
| [`note`](entities/note.md) · [fields](../api-reference/generated/entities/type-aliases/Note.md) | An individual note with pitch, velocity, and position |

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
| [`configuration`](entities/configuration.md) · [fields](../api-reference/generated/entities/type-aliases/Configuration.md) | Document-level configuration settings (BPM, time signature, etc.) |
| [`desktopAudioCable`](entities/desktopAudioCable.md) · [fields](../api-reference/generated/entities/type-aliases/DesktopAudioCable.md) | Connects audio device outputs to audio inputs (e.g. synth → mixer channel) |
| [`noteCable`](entities/noteCable.md) · [fields](../api-reference/generated/entities/type-aliases/NoteCable.md) | Connects note/MIDI outputs to inputs |
| [`groove`](entities/groove.md) · [fields](../api-reference/generated/entities/type-aliases/Groove.md) | Groove/swing quantization pattern |
| [`microtuningOctave`](entities/microtuningOctave.md) · [fields](../api-reference/generated/entities/type-aliases/MicrotuningOctave.md) | Per-octave microtuning definition |
| [`sample`](entities/sample.md) · [fields](../api-reference/generated/entities/type-aliases/Sample.md) | Reference to an audio sample file |
| [`vst3Plugin`](entities/vst3Plugin.md) | VST3 plugin instance |
| [`tonematrixPattern`](entities/tonematrixPattern.md) · [fields](../api-reference/generated/entities/type-aliases/TonematrixPattern.md) | Step-sequencer pattern used by the Tonematrix device |
| [`mixerDelayAux`](entities/mixerDelayAux.md) · [fields](../api-reference/generated/entities/type-aliases/MixerDelayAux.md) | Delay-specific auxiliary send/return bus |
| [`mixerReverbAux`](entities/mixerReverbAux.md) · [fields](../api-reference/generated/entities/type-aliases/MixerReverbAux.md) | Reverb-specific auxiliary send/return bus |
| [`matrixArpeggiatorPattern`](entities/matrixArpeggiatorPattern.md) · [fields](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPattern.md) | Pattern for the matrix arpeggiator |
| [`matrixArpeggiatorPatternStep`](entities/matrixArpeggiatorPatternStep.md) · [fields](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPatternStep.md) | An individual step within a matrix arpeggiator pattern |

---

## See also

- [Entities and Fields](../how-nexus-works/entities-and-fields.md) — conceptual explanation of entity types and pointers
- [Create Devices](../working-with-audiotool-projects/create-devices.md) — task guide for creating audio devices
- [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md) — task guide for timeline content
