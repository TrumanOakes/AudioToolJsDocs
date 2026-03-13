# Module: entities

**@audiotool/nexus v0.0.12**

Contains field types for all possible entities in the nexus document. To create entities, use the transaction builder's `create` method with the entity key and configuration object:

```typescript
await nexus.modify((t) => {
  t.create("tinyGain", { positionX: 100, positionY: 200 });
})
```

## Device Entities

Audio device entities represent processing units placed on the desktop. They form the foundation of the audio processing graph.

All devices include these common fields:
- `positionX` — horizontal position on the desktop
- `positionY` — vertical position on the desktop
- `displayName` — label shown in the DAW
- Connection capabilities via audio and note cables

> The system manages automatic positioning to prevent overlaps.

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

## Mixer Entities

Mixer configuration entities control routing and mixing.

| Entity Key | Description |
|------------|-------------|
| `mixerMaster` | Required master mixer entity (one per document) |
| `mixerChannel` | Individual mixer channel strip |
| `mixerAux*` | Auxiliary send/return entities |
| `mixerGroup*` | Group channel entities |
| `mixerSidechain*` | Sidechain routing cables |

Audio devices connect to the mixer through cables linked to channel audio inputs.

## Timeline Entities

These entities construct the timeline.

| Entity Key | Description |
|------------|-------------|
| `noteTrack` | Track for note/MIDI data |
| `audioTrack` | Track for audio clips |
| `automationTrack` | Track for parameter automation |
| `patternTrack` | Track for pattern-based sequencing |
| `noteRegion` | A region on a note track |
| `audioRegion` | A region on an audio track |
| `automationRegion` | A region on an automation track |
| `noteCollection` | Collection of note entities |
| `note` | An individual note (fields: `positionTicks`, `pitch`, `velocity`) |

## Utility Entities

| Entity Key | Description |
|------------|-------------|
| `configuration` | Document-level configuration |
| `audioCable` | Connects audio outputs to inputs |
| `noteCable` | Connects note/MIDI outputs to inputs |
| `groove` | Groove/swing quantization entity |
| `microtuningOctave` | Microtuning definition per octave |
| `sample` | Reference to an audio sample |
| `vst3Plugin` | VST3 plugin instance |
