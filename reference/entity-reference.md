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
| [`pulverisateur`](entities/pulverisateur.md) · [fields](../api-reference/generated/entities/type-aliases/Pulverisateur.html) | Pulverisateur virtual analog synthesizer |
| [`gakki`](entities/gakki.md) · [fields](../api-reference/generated/entities/type-aliases/Gakki.html) | Gakki synthesizer |
| [`bassline`](entities/bassline.md) · [fields](../api-reference/generated/entities/type-aliases/Bassline.html) | Bassline synthesizer |
| [`kobolt`](entities/kobolt.md) · [fields](../api-reference/generated/entities/type-aliases/Kobolt.html) | Kobolt bass synthesizer (multi-channel, with per-channel gain and panning) |
| [`tonematrix`](entities/tonematrix.md) · [fields](../api-reference/generated/entities/type-aliases/Tonematrix.html) | Tonematrix step sequencer synthesizer |

### Drum Machines

| Entity Key | Description |
|------------|-------------|
| [`beatbox8`](entities/beatbox8.md) · [fields](../api-reference/generated/entities/type-aliases/Beatbox8.html) | Beatbox 8-step drum machine |
| [`beatbox9`](entities/beatbox9.md) · [fields](../api-reference/generated/entities/type-aliases/Beatbox9.html) | Beatbox 9-step drum machine |
| [`rasselbock`](entities/rasselbock.md) · [fields](../api-reference/generated/entities/type-aliases/Rasselbock.html) | Rasselbock drum machine |
| [`machiniste`](entities/machiniste.md) · [fields](../api-reference/generated/entities/type-aliases/Machiniste.html) | Machiniste drum machine |

### Filters and Effects

| Entity Key | Description |
|------------|-------------|
| [`autoFilter`](entities/autoFilter.md) · [fields](../api-reference/generated/entities/type-aliases/AutoFilter.html) | Auto filter effect |
| [`graphicalEQ`](entities/graphicalEQ.md) · [fields](../api-reference/generated/entities/type-aliases/GraphicalEQ.html) | Graphical equalizer |
| [`stompboxDelay`](entities/stompboxDelay.md) · [fields](../api-reference/generated/entities/type-aliases/StompboxDelay.html) | Stompbox delay effect (tempo-synced, with feedback and wet/dry mix) |
| [`stompboxSlope`](entities/stompboxSlope.md) · [fields](../api-reference/generated/entities/type-aliases/StompboxSlope.html) | Stompbox filter effect (low-pass, high-pass, band-pass, or notch) |
| [`tinyGain`](entities/tinyGain.md) · [fields](../api-reference/generated/entities/type-aliases/TinyGain.html) | Simple gain/volume utility device |
| [`audioMerger`](entities/audioMerger.md) · [fields](../api-reference/generated/entities/type-aliases/AudioMerger.html) | Merges multiple audio signals into one |
| [`audioSplitter`](entities/audioSplitter.md) · [fields](../api-reference/generated/entities/type-aliases/AudioSplitter.html) | Splits one audio signal into multiple outputs |
| [`crossfader`](entities/crossfader.md) · [fields](../api-reference/generated/entities/type-aliases/Crossfader.html) | Crossfader device |

---

## Mixer Entities

Mixer entities control signal routing and the mixing console.

| Entity Key | Description |
|------------|-------------|
| [`mixerMaster`](entities/mixerMaster.md) · [fields](../api-reference/generated/entities/type-aliases/MixerMaster.html) | Required master output — exactly one per document |
| [`mixerChannel`](entities/mixerChannel.md) · [fields](../api-reference/generated/entities/type-aliases/MixerChannel.html) | Individual channel strip |
| [`mixerAux`](entities/mixerAux.md) · [fields](../api-reference/generated/entities/type-aliases/MixerAux.html) | Auxiliary send/return entities |
| [`mixerGroup`](entities/mixerGroup.md) · [fields](../api-reference/generated/entities/type-aliases/MixerGroup.html) | Group channel entities |
| [`mixerSideChainCable`](entities/mixerSideChainCable.md) · [fields](../api-reference/generated/entities/type-aliases/MixerSideChainCable.html) | Sidechain routing cables |

Audio devices connect to mixer channels via [`desktopAudioCable`](entities/desktopAudioCable.md) entities that link device audio outputs to channel inputs.

---

## Timeline Entities

Timeline entities form the arrangement view: tracks, regions, and the content within them.

| Entity Key | Description |
|------------|-------------|
| [`noteTrack`](entities/noteTrack.md) · [fields](../api-reference/generated/entities/type-aliases/NoteTrack.html) | Track for note/MIDI data |
| [`audioTrack`](entities/audioTrack.md) · [fields](../api-reference/generated/entities/type-aliases/AudioTrack.html) | Track for audio clips |
| [`automationTrack`](entities/automationTrack.md) · [fields](../api-reference/generated/entities/type-aliases/AutomationTrack.html) | Track for parameter automation |
| [`patternTrack`](entities/patternTrack.md) · [fields](../api-reference/generated/entities/type-aliases/PatternTrack.html) | Pattern-based sequencing track |
| [`noteRegion`](entities/noteRegion.md) · [fields](../api-reference/generated/entities/type-aliases/NoteRegion.html) | A region on a note track |
| [`audioRegion`](entities/audioRegion.md) · [fields](../api-reference/generated/entities/type-aliases/AudioRegion.html) | A region on an audio track |
| [`automationRegion`](entities/automationRegion.md) · [fields](../api-reference/generated/entities/type-aliases/AutomationRegion.html) | A region on an automation track |
| [`noteCollection`](entities/noteCollection.md) · [fields](../api-reference/generated/entities/type-aliases/NoteCollection.html) | A container of notes referenced by `noteRegion` entities |
| [`note`](entities/note.md) · [fields](../api-reference/generated/entities/type-aliases/Note.html) | An individual note with pitch, velocity, and position |

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
| [`config`](entities/config.md) · [fields](../api-reference/generated/entities/type-aliases/Config.html) | Document-level configuration settings (BPM, time signature, etc.) |
| [`desktopAudioCable`](entities/desktopAudioCable.md) · [fields](../api-reference/generated/entities/type-aliases/DesktopAudioCable.html) | Connects audio device outputs to audio inputs (e.g. synth → mixer channel) |
| [`desktopNoteCable`](entities/desktopNoteCable.md) · [fields](../api-reference/generated/entities/type-aliases/DesktopNoteCable.html) | Connects note/MIDI outputs to inputs |
| [`groove`](entities/groove.md) · [fields](../api-reference/generated/entities/type-aliases/Groove.html) | Groove/swing quantization pattern |
| [`microTuningOctave`](entities/microTuningOctave.md) · [fields](../api-reference/generated/entities/type-aliases/MicroTuningOctave.html) | Per-octave microtuning definition |
| [`sample`](entities/sample.md) · [fields](../api-reference/generated/entities/type-aliases/Sample.html) | Reference to an audio sample file |
| [`spitfireLabsVst3Plugin`](entities/spitfireLabsVst3Plugin.md) · [fields](../api-reference/generated/entities/type-aliases/SpitfireLabsVst3Plugin.html) | VST3 plugin instance |
| [`tonematrixPattern`](entities/tonematrixPattern.md) · [fields](../api-reference/generated/entities/type-aliases/TonematrixPattern.html) | Step-sequencer pattern used by the Tonematrix device |
| [`mixerDelayAux`](entities/mixerDelayAux.md) · [fields](../api-reference/generated/entities/type-aliases/MixerDelayAux.html) | Delay-specific auxiliary send/return bus |
| [`mixerReverbAux`](entities/mixerReverbAux.md) · [fields](../api-reference/generated/entities/type-aliases/MixerReverbAux.html) | Reverb-specific auxiliary send/return bus |
| [`matrixArpeggiatorPattern`](entities/matrixArpeggiatorPattern.md) · [fields](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPattern.html) | Pattern for the matrix arpeggiator |
| [`matrixArpeggiatorPatternStep`](entities/matrixArpeggiatorPatternStep.md) · [fields](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPatternStep.html) | An individual step within a matrix arpeggiator pattern |

---

## See also

- [Entities and Fields](../how-nexus-works/entities-and-fields.md) — conceptual explanation of entity types and pointers
- [Create Devices](../working-with-audiotool-projects/create-devices.md) — task guide for creating audio devices
- [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md) — task guide for timeline content
