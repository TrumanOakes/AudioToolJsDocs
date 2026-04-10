---
title: Entity Reference
parent: Reference
nav_order: 4
has_children: true
---

# Entity Reference

**Module:** `@audiotool/nexus/entities`

Field types for all <span class="tooltip" data-tooltip="A single item inside a project document, such as a device, note region, or other project object.">entities</span> in the Nexus schema. Click an entity name to open its generated API type page, or use the explanation link for the written guide page.

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
| [`pulverisateur`](../api-reference/generated/entities/type-aliases/Pulverisateur.html) · [explanation](entities/pulverisateur.html) | Pulverisateur virtual analog synthesizer |
| [`gakki`](../api-reference/generated/entities/type-aliases/Gakki.html) · [explanation](entities/gakki.html) | Gakki synthesizer |
| [`bassline`](../api-reference/generated/entities/type-aliases/Bassline.html) · [explanation](entities/bassline.html) | Bassline synthesizer |
| [`kobolt`](../api-reference/generated/entities/type-aliases/Kobolt.html) · [explanation](entities/kobolt.html) | Kobolt bass synthesizer (multi-channel, with per-channel gain and panning) |
| [`tonematrix`](../api-reference/generated/entities/type-aliases/Tonematrix.html) · [explanation](entities/tonematrix.html) | Tonematrix step sequencer synthesizer |

### Drum Machines

| Entity Key | Description |
|------------|-------------|
| [`beatbox8`](../api-reference/generated/entities/type-aliases/Beatbox8.html) · [explanation](entities/beatbox8.html) | Beatbox 8-step drum machine |
| [`beatbox9`](../api-reference/generated/entities/type-aliases/Beatbox9.html) · [explanation](entities/beatbox9.html) | Beatbox 9-step drum machine |
| [`rasselbock`](../api-reference/generated/entities/type-aliases/Rasselbock.html) · [explanation](entities/rasselbock.html) | Rasselbock drum machine |
| [`machiniste`](../api-reference/generated/entities/type-aliases/Machiniste.html) · [explanation](entities/machiniste.html) | Machiniste drum machine |

### Filters and Effects

| Entity Key | Description |
|------------|-------------|
| [`autoFilter`](../api-reference/generated/entities/type-aliases/AutoFilter.html) · [explanation](entities/autoFilter.html) | Auto filter effect |
| [`graphicalEQ`](../api-reference/generated/entities/type-aliases/GraphicalEQ.html) · [explanation](entities/graphicalEQ.html) | Graphical equalizer |
| [`stompboxDelay`](../api-reference/generated/entities/type-aliases/StompboxDelay.html) · [explanation](entities/stompboxDelay.html) | Stompbox delay effect (tempo-synced, with feedback and wet/dry mix) |
| [`stompboxSlope`](../api-reference/generated/entities/type-aliases/StompboxSlope.html) · [explanation](entities/stompboxSlope.html) | Stompbox filter effect (low-pass, high-pass, band-pass, or notch) |
| [`tinyGain`](../api-reference/generated/entities/type-aliases/TinyGain.html) · [explanation](entities/tinyGain.html) | Simple gain/volume utility device |
| [`audioMerger`](../api-reference/generated/entities/type-aliases/AudioMerger.html) · [explanation](entities/audioMerger.html) | Merges multiple audio signals into one |
| [`audioSplitter`](../api-reference/generated/entities/type-aliases/AudioSplitter.html) · [explanation](entities/audioSplitter.html) | Splits one audio signal into multiple outputs |
| [`crossfader`](../api-reference/generated/entities/type-aliases/Crossfader.html) · [explanation](entities/crossfader.html) | Crossfader device |

---

## Mixer Entities

Mixer entities control signal routing and the mixing console.

| Entity Key | Description |
|------------|-------------|
| [`mixerMaster`](../api-reference/generated/entities/type-aliases/MixerMaster.html) · [explanation](entities/mixerMaster.html) | Required master output — exactly one per document |
| [`mixerChannel`](../api-reference/generated/entities/type-aliases/MixerChannel.html) · [explanation](entities/mixerChannel.html) | Individual channel strip |
| [`mixerAux`](../api-reference/generated/entities/type-aliases/MixerAux.html) · [explanation](entities/mixerAux.html) | Auxiliary send/return entities |
| [`mixerGroup`](../api-reference/generated/entities/type-aliases/MixerGroup.html) · [explanation](entities/mixerGroup.html) | Group channel entities |
| [`mixerSideChainCable`](../api-reference/generated/entities/type-aliases/MixerSideChainCable.html) · [explanation](entities/mixerSideChainCable.html) | Sidechain routing cables |

Audio devices connect to mixer channels via [`desktopAudioCable`](../api-reference/generated/entities/type-aliases/DesktopAudioCable.html) entities that link device audio outputs to channel inputs.

---

## Timeline Entities

Timeline entities form the arrangement view: tracks, regions, and the content within them.

| Entity Key | Description |
|------------|-------------|
| [`noteTrack`](../api-reference/generated/entities/type-aliases/NoteTrack.html) · [explanation](entities/noteTrack.html) | Track for note/MIDI data |
| [`audioTrack`](../api-reference/generated/entities/type-aliases/AudioTrack.html) · [explanation](entities/audioTrack.html) | Track for audio clips |
| [`automationTrack`](../api-reference/generated/entities/type-aliases/AutomationTrack.html) · [explanation](entities/automationTrack.html) | Track for parameter automation |
| [`patternTrack`](../api-reference/generated/entities/type-aliases/PatternTrack.html) · [explanation](entities/patternTrack.html) | Pattern-based sequencing track |
| [`noteRegion`](../api-reference/generated/entities/type-aliases/NoteRegion.html) · [explanation](entities/noteRegion.html) | A region on a note track |
| [`audioRegion`](../api-reference/generated/entities/type-aliases/AudioRegion.html) · [explanation](entities/audioRegion.html) | A region on an audio track |
| [`automationRegion`](../api-reference/generated/entities/type-aliases/AutomationRegion.html) · [explanation](entities/automationRegion.html) | A region on an automation track |
| [`noteCollection`](../api-reference/generated/entities/type-aliases/NoteCollection.html) · [explanation](entities/noteCollection.html) | A container of notes referenced by `noteRegion` entities |
| [`note`](../api-reference/generated/entities/type-aliases/Note.html) · [explanation](entities/note.html) | An individual note with pitch, velocity, and position |

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
| [`config`](../api-reference/generated/entities/type-aliases/Config.html) · [explanation](entities/config.html) | Document-level configuration settings (BPM, time signature, etc.) |
| [`desktopAudioCable`](../api-reference/generated/entities/type-aliases/DesktopAudioCable.html) · [explanation](entities/desktopAudioCable.html) | Connects audio device outputs to audio inputs (e.g. synth → mixer channel) |
| [`desktopNoteCable`](../api-reference/generated/entities/type-aliases/DesktopNoteCable.html) · [explanation](entities/desktopNoteCable.html) | Connects note/MIDI outputs to inputs |
| [`groove`](../api-reference/generated/entities/type-aliases/Groove.html) · [explanation](entities/groove.html) | Groove/swing quantization pattern |
| [`microTuningOctave`](../api-reference/generated/entities/type-aliases/MicroTuningOctave.html) · [explanation](entities/microTuningOctave.html) | Per-octave microtuning definition |
| [`sample`](../api-reference/generated/entities/type-aliases/Sample.html) · [explanation](entities/sample.html) | Reference to an audio sample file |
| [`spitfireLabsVst3Plugin`](../api-reference/generated/entities/type-aliases/SpitfireLabsVst3Plugin.html) · [explanation](entities/spitfireLabsVst3Plugin.html) | VST3 plugin instance |
| [`tonematrixPattern`](../api-reference/generated/entities/type-aliases/TonematrixPattern.html) · [explanation](entities/tonematrixPattern.html) | Step-sequencer pattern used by the Tonematrix device |
| [`mixerDelayAux`](../api-reference/generated/entities/type-aliases/MixerDelayAux.html) · [explanation](entities/mixerDelayAux.html) | Delay-specific auxiliary send/return bus |
| [`mixerReverbAux`](../api-reference/generated/entities/type-aliases/MixerReverbAux.html) · [explanation](entities/mixerReverbAux.html) | Reverb-specific auxiliary send/return bus |
| [`matrixArpeggiatorPattern`](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPattern.html) · [explanation](entities/matrixArpeggiatorPattern.html) | Pattern for the matrix arpeggiator |
| [`matrixArpeggiatorPatternStep`](../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPatternStep.html) · [explanation](entities/matrixArpeggiatorPatternStep.html) | An individual step within a matrix arpeggiator pattern |

---

## See also

- [Entities and Fields](../how-nexus-works/entities-and-fields.html) — conceptual explanation of entity types and pointers
- [Create Devices](../working-with-audiotool-projects/create-devices.html) — task guide for creating audio devices
- [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.html) — task guide for timeline content
