---
title: "DesktopAudioCable"
parent: "entities"
grand_parent: "API"
nav_order: 53
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: DesktopAudioCable

```ts
type DesktopAudioCable = {
  colorIndex: PrimitiveField<number, "mut">;
  fromSocket: PrimitiveField<NexusLocation, "mut">;
  toSocket: PrimitiveField<NexusLocation, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_audio\_cable/v1/desktop\_audio\_cable\_nexus.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_audio_cable/v1/desktop_audio_cable_nexus.ts#L20)

key | value
--- | ---
type | entity
key | `"desktopAudioCable"`
is | [api.TargetType.Listenable](../../api/enumerations/TargetType.html#enumeration-member-listenable)

 A cable connecting an audio output to an audio input on the desktop.

## Properties

### colorIndex

```ts
colorIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_audio\_cable/v1/desktop\_audio\_cable\_nexus.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_audio_cable/v1/desktop_audio_cable_nexus.ts#L49)

Index of the color. The meaning of the color index is implementation-specific.

key | value
--- | ---
default | 0
range | [0, 41]

***

### fromSocket

```ts
fromSocket: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_audio\_cable/v1/desktop\_audio\_cable\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_audio_cable/v1/desktop_audio_cable_nexus.ts#L30)

Pointer to an audio output from which the cable transports audio.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput), meaning one of: <br />[entities.AudioDevice.audioOutput](AudioDevice.html#audiooutput), <br />[entities.AudioMerger.audioOutput](AudioMerger.html#audiooutput), <br />[entities.AudioSplitter.audioOutputA](AudioSplitter.html#audiooutputa), <br />[entities.AudioSplitter.audioOutputB](AudioSplitter.html#audiooutputb), <br />[entities.AudioSplitter.audioOutputC](AudioSplitter.html#audiooutputc), <br />[entities.AutoFilter.audioOutput](AutoFilter.html#audiooutput), <br />[entities.BandSplitter.highAudioOutput](BandSplitter.html#highaudiooutput), <br />[entities.BandSplitter.midAudioOutput](BandSplitter.html#midaudiooutput), <br />[entities.BandSplitter.lowAudioOutput](BandSplitter.html#lowaudiooutput), <br />[entities.Bassline.audioOutput](Bassline.html#audiooutput), <br />[entities.Beatbox8.audioOutput](Beatbox8.html#audiooutput), <br />[entities.Beatbox8Bassdrum.audioOutput](Beatbox8Bassdrum.html#audiooutput), <br />[entities.Beatbox8Snaredrum.audioOutput](Beatbox8Snaredrum.html#audiooutput), <br />[entities.Beatbox8TomCongaLow.audioOutput](Beatbox8TomCongaLow.html#audiooutput), <br />[entities.Beatbox8TomCongaMid.audioOutput](Beatbox8TomCongaMid.html#audiooutput), <br />[entities.Beatbox8TomCongaHigh.audioOutput](Beatbox8TomCongaHigh.html#audiooutput), <br />[entities.Beatbox8RimClaves.audioOutput](Beatbox8RimClaves.html#audiooutput), <br />[entities.Beatbox8ClapMaracas.audioOutput](Beatbox8ClapMaracas.html#audiooutput), <br />[entities.Beatbox8Cowbell.audioOutput](Beatbox8Cowbell.html#audiooutput), <br />[entities.Beatbox8Cymbal.audioOutput](Beatbox8Cymbal.html#audiooutput), <br />[entities.Beatbox8OpenHihat.audioOutput](Beatbox8OpenHihat.html#audiooutput), <br />[entities.Beatbox8ClosedHihat.audioOutput](Beatbox8ClosedHihat.html#audiooutput), <br />[entities.Beatbox9.audioOutput](Beatbox9.html#audiooutput), <br />[entities.Beatbox9Bassdrum.audioOutput](Beatbox9Bassdrum.html#audiooutput), <br />[entities.Beatbox9Snaredrum.audioOutput](Beatbox9Snaredrum.html#audiooutput), <br />[entities.Beatbox9Tom.audioOutput](Beatbox9Tom.html#audiooutput), <br />[entities.Beatbox9Rim.audioOutput](Beatbox9Rim.html#audiooutput), <br />[entities.Beatbox9Clap.audioOutput](Beatbox9Clap.html#audiooutput), <br />[entities.Beatbox9Hihat.audioOutput](Beatbox9Hihat.html#audiooutput), <br />[entities.Beatbox9Crash.audioOutput](Beatbox9Crash.html#audiooutput), <br />[entities.Beatbox9Ride.audioOutput](Beatbox9Ride.html#audiooutput), <br />[entities.Centroid.audioOutput](Centroid.html#audiooutput), <br />[entities.CentroidAux.audioOutput](CentroidAux.html#audiooutput), <br />[entities.Crossfader.audioOutput](Crossfader.html#audiooutput), <br />[entities.Curve.audioOutput](Curve.html#audiooutput), <br />[entities.Exciter.audioOutput](Exciter.html#audiooutput), <br />[entities.Gakki.audioOutput](Gakki.html#audiooutput), <br />[entities.GraphicalEQ.audioOutput](GraphicalEQ.html#audiooutput), <br />[entities.Gravity.audioOutput](Gravity.html#audiooutput), <br />[entities.Heisenberg.audioOutput](Heisenberg.html#audiooutput), <br />[entities.Helmholtz.audioOutput](Helmholtz.html#audiooutput), <br />[entities.Kobolt.audioOutput](Kobolt.html#audiooutput), <br />[entities.Machiniste.mainOutput](Machiniste.html#mainoutput), <br />[entities.MachinisteChannel.channelOutput](MachinisteChannel.html#channeloutput), <br />[entities.Minimixer.mainOutput](Minimixer.html#mainoutput), <br />[entities.Minimixer.auxSendOutput](Minimixer.html#auxsendoutput), <br />[entities.MixerAux.insertOutput](MixerAux.html#insertoutput), <br />[entities.MixerGroup.insertOutput](MixerGroup.html#insertoutput), <br />[entities.MixerMaster.insertOutput](MixerMaster.html#insertoutput), <br />[entities.Panorama.audioOutput](Panorama.html#audiooutput), <br />[entities.Pulsar.audioOutput](Pulsar.html#audiooutput), <br />[entities.Pulverisateur.audioOutput](Pulverisateur.html#audiooutput), <br />[entities.Quantum.audioOutput](Quantum.html#audiooutput), <br />[entities.Quasar.audioOutput](Quasar.html#audiooutput), <br />[entities.Rasselbock.masterOutput](Rasselbock.html#masteroutput), <br />[entities.RasselbockChannel.audioOutput](RasselbockChannel.html#audiooutput), <br />[entities.RingModulator.audioOutput](RingModulator.html#audiooutput), <br />[entities.Space.audioOutput](Space.html#audiooutput), <br />[entities.SpitfireLabsVst3Plugin.audioOutput](SpitfireLabsVst3Plugin.html#audiooutput), <br />[entities.StereoEnhancer.audioOutput](StereoEnhancer.html#audiooutput), <br />[entities.StompboxChorus.audioOutput](StompboxChorus.html#audiooutput), <br />[entities.StompboxCompressor.audioOutput](StompboxCompressor.html#audiooutput), <br />[entities.StompboxCrusher.audioOutput](StompboxCrusher.html#audiooutput), <br />[entities.StompboxDelay.audioOutput](StompboxDelay.html#audiooutput), <br />[entities.StompboxFlanger.audioOutput](StompboxFlanger.html#audiooutput), <br />[entities.StompboxGate.audioOutput](StompboxGate.html#audiooutput), <br />[entities.StompboxParametricEqualizer.audioOutput](StompboxParametricEqualizer.html#audiooutput), <br />[entities.StompboxPhaser.audioOutput](StompboxPhaser.html#audiooutput), <br />[entities.StompboxPitchDelay.audioOutput](StompboxPitchDelay.html#audiooutput), <br />[entities.StompboxReverb.audioOutput](StompboxReverb.html#audiooutput), <br />[entities.StompboxSlope.audioOutput](StompboxSlope.html#audiooutput), <br />[entities.StompboxStereoDetune.audioOutput](StompboxStereoDetune.html#audiooutput), <br />[entities.StompboxTube.audioOutput](StompboxTube.html#audiooutput), <br />[entities.TinyGain.audioOutput](TinyGain.html#audiooutput), <br />[entities.Tonematrix.audioOutput](Tonematrix.html#audiooutput), <br />[entities.Waveshaper.audioOutput](Waveshaper.html#audiooutput)

***

### toSocket

```ts
toSocket: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_audio\_cable/v1/desktop\_audio\_cable\_nexus.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_audio_cable/v1/desktop_audio_cable_nexus.ts#L40)

Pointer to an audio input to which the cable transports audio.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput), meaning one of: <br />[entities.AudioMerger.audioInputA](AudioMerger.html#audioinputa), <br />[entities.AudioMerger.audioInputB](AudioMerger.html#audioinputb), <br />[entities.AudioMerger.audioInputC](AudioMerger.html#audioinputc), <br />[entities.AudioSplitter.audioInput](AudioSplitter.html#audioinput), <br />[entities.AutoFilter.audioInput](AutoFilter.html#audioinput), <br />[entities.AutoFilter.sideChainInput](AutoFilter.html#sidechaininput), <br />[entities.BandSplitter.audioInput](BandSplitter.html#audioinput), <br />[entities.Bassline.audioInput](Bassline.html#audioinput), <br />[entities.CentroidAux.audioInput](CentroidAux.html#audioinput), <br />[entities.CentroidChannel.audioInput](CentroidChannel.html#audioinput), <br />[entities.CrossfaderChannel.audioInput](CrossfaderChannel.html#audioinput), <br />[entities.Curve.audioInput](Curve.html#audioinput), <br />[entities.Exciter.audioInput](Exciter.html#audioinput), <br />[entities.GraphicalEQ.audioInput](GraphicalEQ.html#audioinput), <br />[entities.Gravity.audioInput](Gravity.html#audioinput), <br />[entities.Gravity.sideChainInput](Gravity.html#sidechaininput), <br />[entities.Helmholtz.audioInput](Helmholtz.html#audioinput), <br />[entities.KoboltChannel.audioInput](KoboltChannel.html#audioinput), <br />[entities.Minimixer.auxReturnInput](Minimixer.html#auxreturninput), <br />[entities.MinimixerChannel.audioInput](MinimixerChannel.html#audioinput), <br />[entities.MixerAux.insertInput](MixerAux.html#insertinput), <br />[entities.MixerChannel.audioInput](MixerChannel.html#audioinput), <br />[entities.MixerGroup.insertInput](MixerGroup.html#insertinput), <br />[entities.MixerMaster.insertInput](MixerMaster.html#insertinput), <br />[entities.Panorama.audioInput](Panorama.html#audioinput), <br />[entities.Pulsar.audioInput](Pulsar.html#audioinput), <br />[entities.Pulverisateur.audioInput](Pulverisateur.html#audioinput), <br />[entities.Quantum.audioInput](Quantum.html#audioinput), <br />[entities.Quasar.audioInput](Quasar.html#audioinput), <br />[entities.Rasselbock.audioInput](Rasselbock.html#audioinput), <br />[entities.RingModulator.audioInput1](RingModulator.html#audioinput1), <br />[entities.RingModulator.audioInput2](RingModulator.html#audioinput2), <br />[entities.StereoEnhancer.audioInput](StereoEnhancer.html#audioinput), <br />[entities.StompboxChorus.audioInput](StompboxChorus.html#audioinput), <br />[entities.StompboxCompressor.audioInput](StompboxCompressor.html#audioinput), <br />[entities.StompboxCompressor.sideChainInput](StompboxCompressor.html#sidechaininput), <br />[entities.StompboxCrusher.audioInput](StompboxCrusher.html#audioinput), <br />[entities.StompboxDelay.audioInput](StompboxDelay.html#audioinput), <br />[entities.StompboxFlanger.audioInput](StompboxFlanger.html#audioinput), <br />[entities.StompboxGate.audioInput](StompboxGate.html#audioinput), <br />[entities.StompboxGate.sideChainInput](StompboxGate.html#sidechaininput), <br />[entities.StompboxParametricEqualizer.audioInput](StompboxParametricEqualizer.html#audioinput), <br />[entities.StompboxPhaser.audioInput](StompboxPhaser.html#audioinput), <br />[entities.StompboxPitchDelay.audioInput](StompboxPitchDelay.html#audioinput), <br />[entities.StompboxReverb.audioInput](StompboxReverb.html#audioinput), <br />[entities.StompboxSlope.audioInput](StompboxSlope.html#audioinput), <br />[entities.StompboxStereoDetune.audioInput](StompboxStereoDetune.html#audioinput), <br />[entities.StompboxTube.audioInput](StompboxTube.html#audioinput), <br />[entities.TinyGain.audioInput](TinyGain.html#audioinput), <br />[entities.Waveshaper.audioInput](Waveshaper.html#audioinput), <br />[entities.Waveshaper.sideChainInput](Waveshaper.html#sidechaininput)
