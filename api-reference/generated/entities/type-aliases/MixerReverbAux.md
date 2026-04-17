---
title: "MixerReverbAux"
parent: "entities"
grand_parent: "API"
nav_order: 90
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerReverbAux

```ts
type MixerReverbAux = {
  dampFactor: PrimitiveField<number, "mut">;
  displayParameters: NexusObject<MixerStripDisplayParameters>;
  faderParameters: NexusObject<MixerStripFaderParameters>;
  preDelayTimeMs: PrimitiveField<number, "mut">;
  preGain: PrimitiveField<number, "mut">;
  roomSizeFactor: PrimitiveField<number, "mut">;
  trimFilter: NexusObject<MixerTrimFilter>;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:33](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L33)

key | value
--- | ---
type | entity
key | `"mixerReverbAux"`
is | [api.TargetType.MixerAuxReceive](../../api/enumerations/TargetType.html#enumeration-member-mixerauxreceive)

 This is a special kind of aux strip that doesn't offer custom inserts but instead
 has a hard-coded reverb effect. There can be at most one of these in the document.

## Properties

### dampFactor

```ts
dampFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L83)

Control over the level of the devices low-pass filter.
 0 means no filtering, 1 means high frequencies are heavily filtered out.

key | value
--- | ---
default | 0.10000000149011612
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayParameters

```ts
displayParameters: NexusObject<MixerStripDisplayParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L37)

Display parameters of this strip.

***

### faderParameters

```ts
faderParameters: NexusObject<MixerStripFaderParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L87)

Fader parameters of this strip.

***

### preDelayTimeMs

```ts
preDelayTimeMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L72)

Determines the length of time it takes for the echo to come back.
 (The length of the gap between the echos).

key | value
--- | ---
default | 160
range | [8, 500]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L47)

Pre gain. This is the gain before the trim filter. Equivalent to a dB range of [-inf, 18.0].

key | value
--- | ---
default | 1
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### roomSizeFactor

```ts
roomSizeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L61)

Determines the size of the virtual enclosed space of the reverb effect.

key | value
--- | ---
default | 0.800000011920929
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### trimFilter

```ts
trimFilter: NexusObject<MixerTrimFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_reverb\_aux\_nexus.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_reverb_aux_nexus.ts#L51)

Trim filter applied to the input signal.
