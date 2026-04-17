---
title: "MixerAux"
parent: "entities"
grand_parent: "API"
nav_order: 82
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerAux

```ts
type MixerAux = {
  displayParameters: NexusObject<MixerStripDisplayParameters>;
  faderParameters: NexusObject<MixerStripFaderParameters>;
  insertInput: NexusObject<Empty>;
  insertOutput: NexusObject<Empty>;
  preGain: PrimitiveField<number, "mut">;
  trimFilter: NexusObject<MixerTrimFilter>;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_nexus.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_nexus.ts#L50)

key | value
--- | ---
type | entity
key | `"mixerAux"`
is | [api.TargetType.MixerAuxReceive](../../api/enumerations/TargetType.html#enumeration-member-mixerauxreceive)

 An aux strip for the mixer with custom inserts.

 The purpose of an aux strip is to apply effects to multiple channel and group strips at once.
 Channel and group strips can send their signal to an aux strip if they're connected via a MixerAuxRoute message.
 The effect applied by the aux strip is defined by the effect devices connected between the insert output and input fields using
 regular desktop cables.
 The output of the aux strip is implicitly sent to the main out strip and cannot
 be rerouted.

 Note that signal passes the different "modules" in the same order
 as the fields in this message, which means:
 1. pre gain
 2. trim filter
 3. inserts
 5. fader parameters

 Unlike for the group- and master inserts, if the insert_output or insert_input are not connected,
 the aux strip doesn't forward any sound.

## Properties

### displayParameters

```ts
displayParameters: NexusObject<MixerStripDisplayParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_nexus.ts#L54)

Parameters controlling the visual appearance of this strip in the DAW.

***

### faderParameters

```ts
faderParameters: NexusObject<MixerStripFaderParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_nexus.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_nexus.ts#L91)

Fader parameters of this strip.

***

### insertInput

```ts
insertInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_nexus.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_nexus.ts#L87)

A location to which a regular desktop cable can be connected to end the insert signal chain
 on the desktop. This cable socket is shown on the stagebox.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### insertOutput

```ts
insertOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_nexus.ts#L78)

A location to which a regular desktop cable can be connected to start the insert signal chain
 on the desktop. This cable socket is shown on the stagebox.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_nexus.ts#L65)

Pre gain. This is the gain before the trim filter. Equivalent to a dB range
 of [-inf, 18.0].

key | value
--- | ---
default | 1
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### trimFilter

```ts
trimFilter: NexusObject<MixerTrimFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_nexus.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_nexus.ts#L69)

Trim filter applied to the input signal.
