---
title: "SchemaPath"
parent: "document"
grand_parent: "API"
nav_order: 31
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SchemaPath

```ts
type SchemaPath = `/${Submessage<"audioDevice", AudioDevicePath> | Submessage<"audioMerger", AudioMergerPath> | Submessage<"audioSplitter", AudioSplitterPath> | Submessage<"autoFilter", AutoFilterPath> | Submessage<"bandSplitter", BandSplitterPath> | Submessage<"bassline", BasslinePath> | Submessage<"basslinePattern", BasslinePatternPath> | Submessage<"beatbox8", Beatbox8Path> | Submessage<"beatbox8Pattern", Beatbox8PatternPath> | Submessage<"beatbox9", Beatbox9Path> | Submessage<"beatbox9Pattern", Beatbox9PatternPath> | Submessage<"centroid", CentroidPath> | Submessage<"centroidChannel", CentroidChannelPath> | Submessage<"config", ConfigPath> | Submessage<"crossfader", CrossfaderPath> | Submessage<"curve", CurvePath> | Submessage<"desktopAudioCable", DesktopAudioCablePath> | Submessage<"desktopNoteCable", DesktopNoteCablePath> | Submessage<"exciter", ExciterPath> | Submessage<"gakki", GakkiPath> | Submessage<"graphicalEQ", GraphicalEQPath> | Submessage<"gravity", GravityPath> | Submessage<"groove", GroovePath> | Submessage<"heisenberg", HeisenbergPath> | Submessage<"helmholtz", HelmholtzPath> | Submessage<"kobolt", KoboltPath> | Submessage<"machiniste", MachinistePath> | Submessage<"machinistePattern", MachinistePatternPath> | Submessage<"matrixArpeggiator", MatrixArpeggiatorPath> | Submessage<"matrixArpeggiatorPattern", MatrixArpeggiatorPatternPath> | Submessage<"microTuningOctave", MicroTuningOctavePath> | Submessage<"minimixer", MinimixerPath> | Submessage<"mixerAux", MixerAuxPath> | Submessage<"mixerAuxRoute", MixerAuxRoutePath> | Submessage<"mixerChannel", MixerChannelPath> | Submessage<"mixerDelayAux", MixerDelayAuxPath> | Submessage<"mixerGroup", MixerGroupPath> | Submessage<"mixerMaster", MixerMasterPath> | Submessage<"mixerReverbAux", MixerReverbAuxPath> | Submessage<"mixerSideChainCable", MixerSideChainCablePath> | Submessage<"mixerStripGrouping", MixerStripGroupingPath> | Submessage<"noteSplitter", NoteSplitterPath> | Submessage<"panorama", PanoramaPath> | Submessage<"pulsar", PulsarPath> | Submessage<"pulverisateur", PulverisateurPath> | Submessage<"quantum", QuantumPath> | Submessage<"quasar", QuasarPath> | Submessage<"rasselbock", RasselbockPath> | Submessage<"rasselbockPattern", RasselbockPatternPath> | Submessage<"ringModulator", RingModulatorPath> | Submessage<"sample", SamplePath> | Submessage<"space", SpacePath> | Submessage<"spitfireLabsVst3Plugin", SpitfireLabsVst3PluginPath> | Submessage<"stereoEnhancer", StereoEnhancerPath> | Submessage<"stompboxChorus", StompboxChorusPath> | Submessage<"stompboxCompressor", StompboxCompressorPath> | Submessage<"stompboxCrusher", StompboxCrusherPath> | Submessage<"stompboxDelay", StompboxDelayPath> | Submessage<"stompboxFlanger", StompboxFlangerPath> | Submessage<"stompboxGate", StompboxGatePath> | Submessage<"stompboxParametricEqualizer", StompboxParametricEqualizerPath> | Submessage<"stompboxPhaser", StompboxPhaserPath> | Submessage<"stompboxPitchDelay", StompboxPitchDelayPath> | Submessage<"stompboxReverb", StompboxReverbPath> | Submessage<"stompboxSlope", StompboxSlopePath> | Submessage<"stompboxStereoDetune", StompboxStereoDetunePath> | Submessage<"stompboxTube", StompboxTubePath> | Submessage<"audioRegion", AudioRegionPath> | Submessage<"audioTrack", AudioTrackPath> | Submessage<"automationCollection", AutomationCollectionPath> | Submessage<"automationEvent", AutomationEventPath> | Submessage<"automationRegion", AutomationRegionPath> | Submessage<"automationTrack", AutomationTrackPath> | Submessage<"tempoAutomationTrack", TempoAutomationTrackPath> | Submessage<"note", NotePath> | Submessage<"noteCollection", NoteCollectionPath> | Submessage<"noteRegion", NoteRegionPath> | Submessage<"noteTrack", NoteTrackPath> | Submessage<"patternRegion", PatternRegionPath> | Submessage<"patternTrack", PatternTrackPath> | Submessage<"tinyGain", TinyGainPath> | Submessage<"tonematrix", TonematrixPath> | Submessage<"tonematrixPattern", TonematrixPatternPath> | Submessage<"waveshaper", WaveshaperPath> | Submessage<"waveshaperAnchor", WaveshaperAnchorPath>}`;
```

Defined in: [gen/audiotool/document/v1/utils/path.ts:1637](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/utils/path.ts#L1637)

This is a generated type that is a subset of `string` that represents a path
to a field in the schema.

Examples:
```ts
import { SchemaPath } from "@audiotool/nexus/utils"

"/desktopAudioCable" satisfies SchemaPath
"/desktopAudioCable/audioInput" satisfies SchemaPath
"/heisenberg/pitchEnvelope/releaseBendFactor" satisfies SchemaPath
"/heisenberg/operators/0/pitchEnvelope/releaseBendFactor" satisfies SchemaPath
```

Converter functions:
* [document.schemaLocationToSchemaPath](../functions/schemaLocationToSchemaPath.html)
* [document.schemaPathToSchemaLocation](../functions/schemaPathToSchemaLocation.html)
