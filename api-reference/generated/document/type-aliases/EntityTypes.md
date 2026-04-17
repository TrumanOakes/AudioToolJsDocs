---
title: "EntityTypes"
parent: "document"
grand_parent: "API"
nav_order: 9
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: EntityTypes

```ts
type EntityTypes = {
  audioDevice: AudioDevice;
  audioMerger: AudioMerger;
  audioRegion: AudioRegion;
  audioSplitter: AudioSplitter;
  audioTrack: AudioTrack;
  autoFilter: AutoFilter;
  automationCollection: AutomationCollection;
  automationEvent: AutomationEvent;
  automationRegion: AutomationRegion;
  automationTrack: AutomationTrack;
  bandSplitter: BandSplitter;
  bassline: Bassline;
  basslinePattern: BasslinePattern;
  beatbox8: Beatbox8;
  beatbox8Pattern: Beatbox8Pattern;
  beatbox9: Beatbox9;
  beatbox9Pattern: Beatbox9Pattern;
  centroid: Centroid;
  centroidChannel: CentroidChannel;
  config: Config;
  crossfader: Crossfader;
  curve: Curve;
  desktopAudioCable: DesktopAudioCable;
  desktopNoteCable: DesktopNoteCable;
  exciter: Exciter;
  gakki: Gakki;
  graphicalEQ: GraphicalEQ;
  gravity: Gravity;
  groove: Groove;
  heisenberg: Heisenberg;
  helmholtz: Helmholtz;
  kobolt: Kobolt;
  machiniste: Machiniste;
  machinistePattern: MachinistePattern;
  matrixArpeggiator: MatrixArpeggiator;
  matrixArpeggiatorPattern: MatrixArpeggiatorPattern;
  microTuningOctave: MicroTuningOctave;
  minimixer: Minimixer;
  mixerAux: MixerAux;
  mixerAuxRoute: MixerAuxRoute;
  mixerChannel: MixerChannel;
  mixerDelayAux: MixerDelayAux;
  mixerGroup: MixerGroup;
  mixerMaster: MixerMaster;
  mixerReverbAux: MixerReverbAux;
  mixerSideChainCable: MixerSideChainCable;
  mixerStripGrouping: MixerStripGrouping;
  note: Note;
  noteCollection: NoteCollection;
  noteRegion: NoteRegion;
  noteSplitter: NoteSplitter;
  noteTrack: NoteTrack;
  panorama: Panorama;
  patternRegion: PatternRegion;
  patternTrack: PatternTrack;
  pulsar: Pulsar;
  pulverisateur: Pulverisateur;
  quantum: Quantum;
  quasar: Quasar;
  rasselbock: Rasselbock;
  rasselbockPattern: RasselbockPattern;
  ringModulator: RingModulator;
  sample: Sample;
  space: Space;
  spitfireLabsVst3Plugin: SpitfireLabsVst3Plugin;
  stereoEnhancer: StereoEnhancer;
  stompboxChorus: StompboxChorus;
  stompboxCompressor: StompboxCompressor;
  stompboxCrusher: StompboxCrusher;
  stompboxDelay: StompboxDelay;
  stompboxFlanger: StompboxFlanger;
  stompboxGate: StompboxGate;
  stompboxParametricEqualizer: StompboxParametricEqualizer;
  stompboxPhaser: StompboxPhaser;
  stompboxPitchDelay: StompboxPitchDelay;
  stompboxReverb: StompboxReverb;
  stompboxSlope: StompboxSlope;
  stompboxStereoDetune: StompboxStereoDetune;
  stompboxTube: StompboxTube;
  tempoAutomationTrack: TempoAutomationTrack;
  tinyGain: TinyGain;
  tonematrix: Tonematrix;
  tonematrixPattern: TonematrixPattern;
  waveshaper: Waveshaper;
  waveshaperAnchor: WaveshaperAnchor;
};
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:444](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L444)

Maps entity type keys to their field types.

Field types are the types of the fields of a nexus entity. so e.g.:
```ts
// "tonematrix" is the "type key"
const tm = t.create("tonematrix", {})

// tm.fields is TypeKeyToType["tonematrix"]
tm.fields
```

## Properties

### audioDevice

```ts
audioDevice: AudioDevice;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:445](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L445)

***

### audioMerger

```ts
audioMerger: AudioMerger;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:446](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L446)

***

### audioRegion

```ts
audioRegion: AudioRegion;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:512](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L512)

***

### audioSplitter

```ts
audioSplitter: AudioSplitter;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:447](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L447)

***

### audioTrack

```ts
audioTrack: AudioTrack;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:513](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L513)

***

### autoFilter

```ts
autoFilter: AutoFilter;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:448](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L448)

***

### automationCollection

```ts
automationCollection: AutomationCollection;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:514](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L514)

***

### automationEvent

```ts
automationEvent: AutomationEvent;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:515](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L515)

***

### automationRegion

```ts
automationRegion: AutomationRegion;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:516](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L516)

***

### automationTrack

```ts
automationTrack: AutomationTrack;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:517](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L517)

***

### bandSplitter

```ts
bandSplitter: BandSplitter;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:449](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L449)

***

### bassline

```ts
bassline: Bassline;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:450](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L450)

***

### basslinePattern

```ts
basslinePattern: BasslinePattern;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:451](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L451)

***

### beatbox8

```ts
beatbox8: Beatbox8;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:452](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L452)

***

### beatbox8Pattern

```ts
beatbox8Pattern: Beatbox8Pattern;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:453](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L453)

***

### beatbox9

```ts
beatbox9: Beatbox9;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:454](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L454)

***

### beatbox9Pattern

```ts
beatbox9Pattern: Beatbox9Pattern;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:455](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L455)

***

### centroid

```ts
centroid: Centroid;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:456](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L456)

***

### centroidChannel

```ts
centroidChannel: CentroidChannel;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:457](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L457)

***

### config

```ts
config: Config;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:458](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L458)

***

### crossfader

```ts
crossfader: Crossfader;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:459](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L459)

***

### curve

```ts
curve: Curve;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:460](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L460)

***

### desktopAudioCable

```ts
desktopAudioCable: DesktopAudioCable;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:461](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L461)

***

### desktopNoteCable

```ts
desktopNoteCable: DesktopNoteCable;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:462](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L462)

***

### exciter

```ts
exciter: Exciter;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:463](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L463)

***

### gakki

```ts
gakki: Gakki;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:464](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L464)

***

### graphicalEQ

```ts
graphicalEQ: GraphicalEQ;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:465](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L465)

***

### gravity

```ts
gravity: Gravity;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:466](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L466)

***

### groove

```ts
groove: Groove;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:467](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L467)

***

### heisenberg

```ts
heisenberg: Heisenberg;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:468](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L468)

***

### helmholtz

```ts
helmholtz: Helmholtz;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:469](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L469)

***

### kobolt

```ts
kobolt: Kobolt;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:470](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L470)

***

### machiniste

```ts
machiniste: Machiniste;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:471](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L471)

***

### machinistePattern

```ts
machinistePattern: MachinistePattern;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:472](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L472)

***

### matrixArpeggiator

```ts
matrixArpeggiator: MatrixArpeggiator;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:473](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L473)

***

### matrixArpeggiatorPattern

```ts
matrixArpeggiatorPattern: MatrixArpeggiatorPattern;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:474](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L474)

***

### microTuningOctave

```ts
microTuningOctave: MicroTuningOctave;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:475](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L475)

***

### minimixer

```ts
minimixer: Minimixer;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:476](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L476)

***

### mixerAux

```ts
mixerAux: MixerAux;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:477](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L477)

***

### mixerAuxRoute

```ts
mixerAuxRoute: MixerAuxRoute;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:478](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L478)

***

### mixerChannel

```ts
mixerChannel: MixerChannel;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:479](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L479)

***

### mixerDelayAux

```ts
mixerDelayAux: MixerDelayAux;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:480](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L480)

***

### mixerGroup

```ts
mixerGroup: MixerGroup;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:481](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L481)

***

### mixerMaster

```ts
mixerMaster: MixerMaster;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:482](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L482)

***

### mixerReverbAux

```ts
mixerReverbAux: MixerReverbAux;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:483](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L483)

***

### mixerSideChainCable

```ts
mixerSideChainCable: MixerSideChainCable;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:484](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L484)

***

### mixerStripGrouping

```ts
mixerStripGrouping: MixerStripGrouping;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:485](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L485)

***

### note

```ts
note: Note;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:519](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L519)

***

### noteCollection

```ts
noteCollection: NoteCollection;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:520](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L520)

***

### noteRegion

```ts
noteRegion: NoteRegion;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:521](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L521)

***

### noteSplitter

```ts
noteSplitter: NoteSplitter;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:486](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L486)

***

### noteTrack

```ts
noteTrack: NoteTrack;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:522](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L522)

***

### panorama

```ts
panorama: Panorama;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:487](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L487)

***

### patternRegion

```ts
patternRegion: PatternRegion;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:523](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L523)

***

### patternTrack

```ts
patternTrack: PatternTrack;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:524](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L524)

***

### pulsar

```ts
pulsar: Pulsar;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:488](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L488)

***

### pulverisateur

```ts
pulverisateur: Pulverisateur;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:489](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L489)

***

### quantum

```ts
quantum: Quantum;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:490](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L490)

***

### quasar

```ts
quasar: Quasar;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:491](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L491)

***

### rasselbock

```ts
rasselbock: Rasselbock;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:492](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L492)

***

### rasselbockPattern

```ts
rasselbockPattern: RasselbockPattern;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:493](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L493)

***

### ringModulator

```ts
ringModulator: RingModulator;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:494](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L494)

***

### sample

```ts
sample: Sample;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:495](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L495)

***

### space

```ts
space: Space;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:496](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L496)

***

### spitfireLabsVst3Plugin

```ts
spitfireLabsVst3Plugin: SpitfireLabsVst3Plugin;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:497](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L497)

***

### stereoEnhancer

```ts
stereoEnhancer: StereoEnhancer;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:498](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L498)

***

### stompboxChorus

```ts
stompboxChorus: StompboxChorus;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:499](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L499)

***

### stompboxCompressor

```ts
stompboxCompressor: StompboxCompressor;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:500](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L500)

***

### stompboxCrusher

```ts
stompboxCrusher: StompboxCrusher;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:501](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L501)

***

### stompboxDelay

```ts
stompboxDelay: StompboxDelay;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:502](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L502)

***

### stompboxFlanger

```ts
stompboxFlanger: StompboxFlanger;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:503](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L503)

***

### stompboxGate

```ts
stompboxGate: StompboxGate;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:504](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L504)

***

### stompboxParametricEqualizer

```ts
stompboxParametricEqualizer: StompboxParametricEqualizer;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:505](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L505)

***

### stompboxPhaser

```ts
stompboxPhaser: StompboxPhaser;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:506](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L506)

***

### stompboxPitchDelay

```ts
stompboxPitchDelay: StompboxPitchDelay;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:507](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L507)

***

### stompboxReverb

```ts
stompboxReverb: StompboxReverb;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:508](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L508)

***

### stompboxSlope

```ts
stompboxSlope: StompboxSlope;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:509](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L509)

***

### stompboxStereoDetune

```ts
stompboxStereoDetune: StompboxStereoDetune;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:510](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L510)

***

### stompboxTube

```ts
stompboxTube: StompboxTube;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:511](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L511)

***

### tempoAutomationTrack

```ts
tempoAutomationTrack: TempoAutomationTrack;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:518](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L518)

***

### tinyGain

```ts
tinyGain: TinyGain;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:525](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L525)

***

### tonematrix

```ts
tonematrix: Tonematrix;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:526](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L526)

***

### tonematrixPattern

```ts
tonematrixPattern: TonematrixPattern;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:527](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L527)

***

### waveshaper

```ts
waveshaper: Waveshaper;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:528](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L528)

***

### waveshaperAnchor

```ts
waveshaperAnchor: WaveshaperAnchor;
```

Defined in: [gen/audiotool/document/v1/utils/types.ts:529](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/types.ts#L529)
