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
| [`pulverisateur`](entities/pulverisateur.html) · [fields](../api-reference/generated/entities/type-aliases/Pulverisateur.html) | Pulverisateur virtual analog synthesizer |
| [`gakki`](entities/gakki.html) · [fields](../api-reference/generated/entities/type-aliases/Gakki.html) | Gakki synthesizer |
| [`bassline`](entities/bassline.html) · [fields](../api-reference/generated/entities/type-aliases/Bassline.html) | Bassline synthesizer |
| [`kobolt`](entities/kobolt.html) · [fields](../api-reference/generated/entities/type-aliases/Kobolt.html) | Kobolt bass synthesizer (multi-channel, with per-channel gain and panning) |
| [`tonematrix`](entities/tonematrix.html) · [fields](../api-reference/generated/entities/type-aliases/Tonematrix.html) | Tonematrix step sequencer synthesizer |

### Drum Machines

| Entity Key | Description |
|------------|-------------|
| [`beatbox8`](entities/beatbox8.html) · [fields](../api-reference/generated/entities/type-aliases/Beatbox8.html) | Beatbox 8-step drum machine |
| [`beatbox9`](entities/beatbox9.html) · [fields](../api-reference/generated/entities/type-aliases/Beatbox9.html) | Beatbox 9-step drum machine |
| [`rasselbock`](entities/rasselbock.html) · [fields](../api-reference/generated/entities/type-aliases/Rasselbock.html) | Rasselbock drum machine |
| [`machiniste`](entities/machiniste.html) · [fields](../api-reference/generated/entities/type-aliases/Machiniste.html) | Machiniste drum machine |

### Filters and Effects

| Entity Key | Description |
|------------|-------------|
| [`autoFilter`](entities/autoFilter.html) · [fields](../api-reference/generated/entities/type-aliases/AutoFilter.html) | Auto filter effect |
| [`graphicalEQ`](entities/graphicalEQ.html) · [fields](../api-reference/generated/entities/type-aliases/GraphicalEQ.html) | Graphical equalizer |
| [`stompboxDelay`](entities/stompboxDelay.html) · [fields](../api-reference/generated/entities/type-aliases/StompboxDelay.html) | Stompbox delay effect (tempo-synced, with feedback and wet/dry mix) |
| [`stompboxSlope`](entities/stompboxSlope.html) · [fields](../api-reference/generated/entities/type-aliases/StompboxSlope.html) | Stompbox filter effect (low-pass, high-pass, band-pass, or notch) |
| [`tinyGain`](entities/tinyGain.html) · [fields](../api-reference/generated/entities/type-aliases/TinyGain.html) | Simple gain/volume utility device |
| [`audioMerger`](entities/audioMerger.html) · [fields](../api-reference/generated/entities/type-aliases/AudioMerger.html) | Merges multiple audio signals into one |
| [`audioSplitter`](entities/audioSplitter.html) · [fields](../api-reference/generated/entities/type-aliases/AudioSplitter.html) | Splits one audio signal into multiple outputs |
| [`crossfader`](entities/crossfader.html) · [fields](../api-reference/generated/entities/type-aliases/Crossfader.html) | Crossfader device |

---

## Mixer Entities

Mixer entities control signal routing and the mixing console.

| Entity Key | Description |
|------------|-------------|
| [`mixerMaster`](entities/mixerMaster.html) · [fields](../api-reference/generated/entities/type-aliases/MixerMaster.html) | Required master output — exactly one per document |
| [`mixerChannel`](entities/mixerChannel.html) · [fields](../api-reference/generated/entities/type-aliases/MixerChannel.html) | Individual channel strip |
| [`mixerAux`](entities/mixerAux.html) · [fields](../api-reference/generated/entities/type-aliases/MixerAux.html) | Auxiliary send/return entities |
| [`mixerGroup`](entities/mixerGroup.html) · [fields](../api-reference/generated/entities/type-aliases/MixerGroup.html) | Group channel entities |
| [`mixerSidechain`](entities/mixerSidechain.html) · [fields](../api-reference/generated/entities/type-aliases/MixerSidechain.html) | Sidechain routing cables |

Audio devices connect to mixer channels via [`desktopAudioCable`](entities/desktopAudioCable.html) entities that link device audio outputs to channel inputs.

---

## Timeline Entities

Timeline entities form the arrangement view: tracks, regions, and the content within them.

| Entity Key | Description |
|------------|-------------|
| [`noteTrack`](entities/noteTrack.html) · [fields](../api-reference/generated/entities/type-aliases/NoteTrack.html) | Track for note/MIDI data |
| [`audioTrack`](entities/audioTrack.html) · [fields](../api-reference/generated/entities/type-aliases/AudioTrack.html) | Track for audio clips |
| [`automationTrack`](entities/automationTrack.html) · [fields](../api-reference/generated/entities/type-aliases/AutomationTrack.html) | Track for parameter automation |
| [`patternTrack`](entities/patternTrack.html) · [fields](../api-reference/generated/entities/type-aliases/PatternTrack.html) | Pattern-based sequencing track |
| [`noteRegion`](entities/noteRegion.html) · [fields](../api-reference/generated/entities/type-aliases/NoteRegion.html) | A region on a note track |
| [`audioRegion`](entities/audioRegion.html) · [fields](../api-reference/generated/entities/type-aliases/AudioRegion.html) | A region on an audio track |
| [`automationRegion`](entities/automationRegion.html) · [fields](../api-reference/generated/entities/type-aliases/AutomationRegion.html) | A region on an automation track |
| [`noteCollection`](entities/noteCollection.html) · [fields](../api-reference/generated/entities/type-aliases/NoteCollection.html) | A container of notes referenced by `noteRegion` entities |
| [`note`](entities/note.html) · [fields](../api-reference/generated/entities/type-aliases/Note.html) | An individual note with pitch, velocity, and position |

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
| [`configuration`](entities/configuration.html) · [fields](../api-reference/generated/entities/type-aliases/Configuration.html) | Document-level configuration settings (BPM, time signature, etc.) |
| [`desktopAudioCable`](entities/desktopAudioCable.html) · [fields](../api-reference/generated/entities/type-aliases/DesktopAudioCable.html) | Connects audio device outputs to audio inputs (e.g. synth → mixer channel) |
| [`noteCable`](entities/noteCable.html) · [fields](../api-reference/generated/entities/type-aliases/NoteCable.html) | Connects note/MIDI outputs to inputs |
| [`groove`](entities/groove.html) · [fields](../api-reference/generated/entities/type-aliases/Groove.html) | Groove/swing quantization pattern |
| [`microtuningOctave`](entities/microtuningOctave.html) · [fields](../api-reference/generated/entities/type-aliases/MicrotuningOctave.html) | Per-octave microtuning definition |
| [`sample`](entities/sample.html) · [fields](../api-reference/generated/entities/type-aliases/Sample.html) | Reference to an audio sample file |
| [`vst3Plugin`](entities/vst3Plugin.html) | VST3 plugin instance |
| [`tonematrixPattern`](entities/tonematrixPattern.html) · [fields](../api-reference/generated/entities/type-aliases/TonematrixPattern.html) | Step-sequencer pattern used by the Tonematrix device |
| [`mixerDelayAux`](entities/mixerDelayAux.html) · [fields](../api-reference/generated/entities/type-aliases/MixerDelayAux.html) | Delay-specific auxiliary send/return bus |
| [`mixerReverbAux`](entities/mixerReverbAux.html) · [fields](../api-reference/generated/entities/type-aliases/MixerReverbAux.html) | Reverb-specific auxiliary send/return bus |
| [`matrixArpeggiatorPattern`](entities/matrixArpeggiatorPattern.html) · [fields](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPattern.html) | Pattern for the matrix arpeggiator |
| [`matrixArpeggiatorPatternStep`](entities/matrixArpeggiatorPatternStep.html) · [fields](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPatternStep.html) | An individual step within a matrix arpeggiator pattern |

---

## See also

- [Entities and Fields](../how-nexus-works/entities-and-fields.html) — conceptual explanation of entity types and pointers
- [Create Devices](../working-with-audiotool-projects/create-devices.html) — task guide for creating audio devices
- [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.html) — task guide for timeline content
