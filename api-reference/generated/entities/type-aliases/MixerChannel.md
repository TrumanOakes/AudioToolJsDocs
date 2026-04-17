---
title: "MixerChannel"
parent: "entities"
grand_parent: "API"
nav_order: 84
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerChannel

```ts
type MixerChannel = {
  audioInput: NexusObject<Empty>;
  auxSend: NexusObject<Empty>;
  auxSendsAreActive: PrimitiveField<boolean, "mut">;
  compressor: NexusObject<MixerCompressor>;
  displayParameters: NexusObject<MixerStripDisplayParameters>;
  doesPhaseReverse: PrimitiveField<boolean, "mut">;
  eq: NexusObject<MixerEq>;
  faderParameters: NexusObject<MixerStripFaderParameters>;
  preGain: PrimitiveField<number, "mut">;
  sideChainOutput: NexusObject<Empty>;
  trimFilter: NexusObject<MixerTrimFilter>;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L54)

key | value
--- | ---
type | entity
key | `"mixerChannel"`
is | [api.TargetType.MixerStripGroupChild](../../api/enumerations/TargetType.html#enumeration-member-mixerstripgroupchild)

 The main "channel" strip in the mixer to which devices on the desktop can connect to.
 This strip is visible on the stagebox, with a socket representing the audio_input field.

 The output of a channel strip is implicitly connected to the
 main out strip unless a mixer cable connects it to a group strip.

 The different effect modules are applied in the following order:
 1. pre gain
 2. trim filter
 3. compressor
 4. eq
 5. aux sends
 6. sidechain output
 7. fader parameters

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L62)

The input to this channel. Visible on the stagebox.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### auxSend

```ts
auxSend: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L113)

Sends to the aux strip.

key | value
--- | ---
is | [api.TargetType.MixerAuxSend](../../api/enumerations/TargetType.html#enumeration-member-mixerauxsend)

***

### auxSendsAreActive

```ts
auxSendsAreActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L105)

Whether the aux sends are active or not. If false, no signal is sent to the aux strips.

key | value
--- | ---
default | true

***

### compressor

```ts
compressor: NexusObject<MixerCompressor>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L93)

Strip compressor.

***

### displayParameters

```ts
displayParameters: NexusObject<MixerStripDisplayParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:66](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L66)

Display parameters of this strip.

***

### doesPhaseReverse

```ts
doesPhaseReverse: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L85)

Whether the input signal is phase reversed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eq

```ts
eq: NexusObject<MixerEq>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L97)

4-band strip eq.

***

### faderParameters

```ts
faderParameters: NexusObject<MixerStripFaderParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L125)

Fader parameters of this strip.

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L76)

Pre gain. This is the gain before the EQ. Equivalent to a dB range of [-inf, 18.0].

key | value
--- | ---
default | 0.39810699224472046
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sideChainOutput

```ts
sideChainOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L121)

Sidechain output (pre-gain).

key | value
--- | ---
is | [api.TargetType.MixerSideChainOutput](../../api/enumerations/TargetType.html#enumeration-member-mixersidechainoutput)

***

### trimFilter

```ts
trimFilter: NexusObject<MixerTrimFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_channel\_nexus.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_channel_nexus.ts#L89)

Trim filter applied to the input signal.
