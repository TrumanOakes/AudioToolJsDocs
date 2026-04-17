---
title: "entities"
parent: "API"
nav_order: 2
has_children: true
---

[**@audiotool/nexus API Reference**](../)

***

# entities

Contains the field types of all possible entities in the nexus document.

To create an entity marked with `Entity key: "foo"` use the `create` method
of the transaction builder as follows:
```ts
const foo = t.create("foo", {})
```

## Device Entities

Audio Device Entities are entities representing devices that are placed on the desktop.

They're the main building blocks of the audio processing graph. Some of the types below are actual entities, some
are just fields of entities.

All devices have `positionX` and `positionY` fields that can be used to position the device on the desktop, and
a `displayName` field that can be used to name the device. They can be connected using [entities.DesktopAudioCable](type-aliases/DesktopAudioCable.html) and [entities.DesktopNoteCable](type-aliases/DesktopNoteCable.html).

The DAW will manage placement of these devices so they don't overlap whenever the user moves them.

- [AudioDevice](type-aliases/AudioDevice.html)
- [AudioMerger](type-aliases/AudioMerger.html)
- [AudioSplitter](type-aliases/AudioSplitter.html)
- [AutoFilter](type-aliases/AutoFilter.html)
- [BandSplitter](type-aliases/BandSplitter.html)
- [Bassline](type-aliases/Bassline.html)
- [Beatbox8](type-aliases/Beatbox8.html)
- [Beatbox8Pattern](type-aliases/Beatbox8Pattern.html)
- [Beatbox9](type-aliases/Beatbox9.html)
- [Beatbox9Pattern](type-aliases/Beatbox9Pattern.html)
- [Centroid](type-aliases/Centroid.html)
- [CentroidChannel](type-aliases/CentroidChannel.html)
- [Crossfader](type-aliases/Crossfader.html)
- [Curve](type-aliases/Curve.html)
- [Exciter](type-aliases/Exciter.html)
- [Gakki](type-aliases/Gakki.html)
- [GraphicalEQ](type-aliases/GraphicalEQ.html)
- [Gravity](type-aliases/Gravity.html)
- [Heisenberg](type-aliases/Heisenberg.html)
- [Helmholtz](type-aliases/Helmholtz.html)
- [Kobolt](type-aliases/Kobolt.html)
- [Machiniste](type-aliases/Machiniste.html)
- [MachinistePattern](type-aliases/MachinistePattern.html)
- [MatrixArpeggiator](type-aliases/MatrixArpeggiator.html)
- [Minimixer](type-aliases/Minimixer.html)
- [MinimixerChannel](type-aliases/MinimixerChannel.html)
- [NoteSplitter](type-aliases/NoteSplitter.html)
- [Panorama](type-aliases/Panorama.html)
- [Pulsar](type-aliases/Pulsar.html)
- [Pulverisateur](type-aliases/Pulverisateur.html)
- [Quantum](type-aliases/Quantum.html)
- [Quasar](type-aliases/Quasar.html)
- [Rasselbock](type-aliases/Rasselbock.html)
- [RasselbockPattern](type-aliases/RasselbockPattern.html)
- [RingModulator](type-aliases/RingModulator.html)
- [Space](type-aliases/Space.html)
- [StereoEnhancer](type-aliases/StereoEnhancer.html)
- [StompboxChorus](type-aliases/StompboxChorus.html)
- [StompboxCompressor](type-aliases/StompboxCompressor.html)
- [StompboxCrusher](type-aliases/StompboxCrusher.html)
- [StompboxDelay](type-aliases/StompboxDelay.html)
- [StompboxFlanger](type-aliases/StompboxFlanger.html)
- [StompboxGate](type-aliases/StompboxGate.html)
- [StompboxParametricEqualizer](type-aliases/StompboxParametricEqualizer.html)
- [StompboxPhaser](type-aliases/StompboxPhaser.html)
- [StompboxPitchDelay](type-aliases/StompboxPitchDelay.html)
- [StompboxReverb](type-aliases/StompboxReverb.html)
- [StompboxSlope](type-aliases/StompboxSlope.html)
- [StompboxStereoDetune](type-aliases/StompboxStereoDetune.html)
- [StompboxTube](type-aliases/StompboxTube.html)
- [TinyGain](type-aliases/TinyGain.html)
- [Tonematrix](type-aliases/Tonematrix.html)
- [TonematrixPattern](type-aliases/TonematrixPattern.html)
- [Waveshaper](type-aliases/Waveshaper.html)
- [WaveshaperAnchor](type-aliases/WaveshaperAnchor.html)

## Device Fields

- [AudioMergerCoordinates](type-aliases/AudioMergerCoordinates.html)
- [AudioSplitterCoordinates](type-aliases/AudioSplitterCoordinates.html)
- [BasslinePattern](type-aliases/BasslinePattern.html)
- [BasslineStep](type-aliases/BasslineStep.html)
- [Beatbox8Bassdrum](type-aliases/Beatbox8Bassdrum.html)
- [Beatbox8ClapMaracas](type-aliases/Beatbox8ClapMaracas.html)
- [Beatbox8ClosedHihat](type-aliases/Beatbox8ClosedHihat.html)
- [Beatbox8Cowbell](type-aliases/Beatbox8Cowbell.html)
- [Beatbox8Cymbal](type-aliases/Beatbox8Cymbal.html)
- [Beatbox8OpenHihat](type-aliases/Beatbox8OpenHihat.html)
- [Beatbox8PatternStep](type-aliases/Beatbox8PatternStep.html)
- [Beatbox8RimClaves](type-aliases/Beatbox8RimClaves.html)
- [Beatbox8Snaredrum](type-aliases/Beatbox8Snaredrum.html)
- [Beatbox8TomCongaHigh](type-aliases/Beatbox8TomCongaHigh.html)
- [Beatbox8TomCongaLow](type-aliases/Beatbox8TomCongaLow.html)
- [Beatbox8TomCongaMid](type-aliases/Beatbox8TomCongaMid.html)
- [Beatbox9Bassdrum](type-aliases/Beatbox9Bassdrum.html)
- [Beatbox9Clap](type-aliases/Beatbox9Clap.html)
- [Beatbox9Crash](type-aliases/Beatbox9Crash.html)
- [Beatbox9Hihat](type-aliases/Beatbox9Hihat.html)
- [Beatbox9PatternStep](type-aliases/Beatbox9PatternStep.html)
- [Beatbox9Ride](type-aliases/Beatbox9Ride.html)
- [Beatbox9Rim](type-aliases/Beatbox9Rim.html)
- [Beatbox9Snaredrum](type-aliases/Beatbox9Snaredrum.html)
- [Beatbox9Tom](type-aliases/Beatbox9Tom.html)
- [CentroidAux](type-aliases/CentroidAux.html)
- [CrossfaderChannel](type-aliases/CrossfaderChannel.html)
- [CurvePass](type-aliases/CurvePass.html)
- [CurvePeak](type-aliases/CurvePeak.html)
- [CurveShelf](type-aliases/CurveShelf.html)
- [GraphicalEQFilter](type-aliases/GraphicalEQFilter.html)
- [HeisenbergFilter](type-aliases/HeisenbergFilter.html)
- [HeisenbergLFO](type-aliases/HeisenbergLFO.html)
- [HeisenbergOperator](type-aliases/HeisenbergOperator.html)
- [HeisenbergPitchEnvelope](type-aliases/HeisenbergPitchEnvelope.html)
- [HelmholtzFilter](type-aliases/HelmholtzFilter.html)
- [KoboltChannel](type-aliases/KoboltChannel.html)
- [MachinisteChannel](type-aliases/MachinisteChannel.html)
- [MachinisteChannelPattern](type-aliases/MachinisteChannelPattern.html)
- [MachinisteStep](type-aliases/MachinisteStep.html)
- [MatrixArpeggiatorPattern](type-aliases/MatrixArpeggiatorPattern.html)
- [MatrixArpeggiatorPatternStep](type-aliases/MatrixArpeggiatorPatternStep.html)
- [NoteSplitterChannel](type-aliases/NoteSplitterChannel.html)
- [PulverisateurAmplitudeEnvelope](type-aliases/PulverisateurAmplitudeEnvelope.html)
- [PulverisateurAudio](type-aliases/PulverisateurAudio.html)
- [PulverisateurChannel](type-aliases/PulverisateurChannel.html)
- [PulverisateurFilter](type-aliases/PulverisateurFilter.html)
- [PulverisateurFilterEnvelope](type-aliases/PulverisateurFilterEnvelope.html)
- [PulverisateurLfo](type-aliases/PulverisateurLfo.html)
- [PulverisateurNoise](type-aliases/PulverisateurNoise.html)
- [PulverisateurOscillator](type-aliases/PulverisateurOscillator.html)
- [PulverisateurOscillatorA](type-aliases/PulverisateurOscillatorA.html)
- [PulverisateurOscillatorB](type-aliases/PulverisateurOscillatorB.html)
- [PulverisateurOscillatorC](type-aliases/PulverisateurOscillatorC.html)
- [QuantumBand](type-aliases/QuantumBand.html)
- [RasselbockChannel](type-aliases/RasselbockChannel.html)
- [RasselbockGate](type-aliases/RasselbockGate.html)
- [RasselbockReverse](type-aliases/RasselbockReverse.html)
- [RasselbockRowPattern](type-aliases/RasselbockRowPattern.html)
- [RasselbockScratch](type-aliases/RasselbockScratch.html)
- [RasselbockShuffle](type-aliases/RasselbockShuffle.html)
- [RasselbockSpeed](type-aliases/RasselbockSpeed.html)
- [RasselbockStep](type-aliases/RasselbockStep.html)
- [RasselbockStop](type-aliases/RasselbockStop.html)
- [RasselbockStutter](type-aliases/RasselbockStutter.html)
- [SpaceLFO](type-aliases/SpaceLFO.html)
- [SpaceSound](type-aliases/SpaceSound.html)
- [TonematrixStep](type-aliases/TonematrixStep.html)

## Mixer Entities

Mixer related entities are entities with which the main audiotool mixer is configured. An audiotool project must
contain an [entities.MixerMaster](type-aliases/MixerMaster.html) entity in order to produce sound. To connect an audio device to the mixer,
create a [entities.MixerChannel](type-aliases/MixerChannel.html) entity and connect a device to it through the field [entities.MixerChannel.audioInput](type-aliases/MixerChannel.html#audioinput)
using a [entities.DesktopAudioCable](type-aliases/DesktopAudioCable.html).

- [MixerAux](type-aliases/MixerAux.html)
- [MixerAuxRoute](type-aliases/MixerAuxRoute.html)
- [MixerChannel](type-aliases/MixerChannel.html)
- [MixerDelayAux](type-aliases/MixerDelayAux.html)
- [MixerGroup](type-aliases/MixerGroup.html)
- [MixerMaster](type-aliases/MixerMaster.html)
- [MixerReverbAux](type-aliases/MixerReverbAux.html)
- [MixerSideChainCable](type-aliases/MixerSideChainCable.html)
- [MixerStripGrouping](type-aliases/MixerStripGrouping.html)

## Mixer Fields

- [MixerCompressor](type-aliases/MixerCompressor.html)
- [MixerEq](type-aliases/MixerEq.html)
- [MixerStripDisplayParameters](type-aliases/MixerStripDisplayParameters.html)
- [MixerStripFaderParameters](type-aliases/MixerStripFaderParameters.html)
- [MixerTrimFilter](type-aliases/MixerTrimFilter.html)

## Timeline Entities

These are entities that are built to build the timeline - be it note tracks, audio tracks, automation tracks, or pattern tracks.

- [AudioRegion](type-aliases/AudioRegion.html)
- [AudioTrack](type-aliases/AudioTrack.html)
- [AutomationCollection](type-aliases/AutomationCollection.html)
- [AutomationEvent](type-aliases/AutomationEvent.html)
- [AutomationRegion](type-aliases/AutomationRegion.html)
- [AutomationTrack](type-aliases/AutomationTrack.html)
- [Note](type-aliases/Note.html)
- [NoteCollection](type-aliases/NoteCollection.html)
- [NoteRegion](type-aliases/NoteRegion.html)
- [NoteTrack](type-aliases/NoteTrack.html)
- [PatternRegion](type-aliases/PatternRegion.html)
- [PatternTrack](type-aliases/PatternTrack.html)
- [TempoAutomationTrack](type-aliases/TempoAutomationTrack.html)

## Timeline Fields

- [Region](type-aliases/Region.html)

## Utility Entities

Utility types and helper entities used throughout the system.

- [Config](type-aliases/Config.html)
- [DesktopAudioCable](type-aliases/DesktopAudioCable.html)
- [DesktopNoteCable](type-aliases/DesktopNoteCable.html)
- [Groove](type-aliases/Groove.html)
- [MicroTuningOctave](type-aliases/MicroTuningOctave.html)
- [Sample](type-aliases/Sample.html)
- [SpitfireLabsVst3Plugin](type-aliases/SpitfireLabsVst3Plugin.html)

## Utility Fields

- [AdsrEnvelope](type-aliases/AdsrEnvelope.html)
- [Empty](type-aliases/Empty.html)
