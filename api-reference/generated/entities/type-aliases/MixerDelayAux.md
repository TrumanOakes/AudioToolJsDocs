---
title: "MixerDelayAux"
parent: "entities"
grand_parent: "API"
nav_order: 86
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerDelayAux

```ts
type MixerDelayAux = {
  displayParameters: NexusObject<MixerStripDisplayParameters>;
  faderParameters: NexusObject<MixerStripFaderParameters>;
  feedbackFactor: PrimitiveField<number, "mut">;
  preGain: PrimitiveField<number, "mut">;
  stepCount: PrimitiveField<number, "mut">;
  stepLengthIndex: PrimitiveField<number, "mut">;
  trimFilter: NexusObject<MixerTrimFilter>;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L40)

key | value
--- | ---
type | entity
key | `"mixerDelayAux"`
is | [api.TargetType.MixerAuxReceive](../../api/enumerations/TargetType.html#enumeration-member-mixerauxreceive)

 This is a special kind of aux strip that works like a regular aux strip
 but doesn't have inserts. Instead, it has a hard-coded delay effect.
 There can be at most one of these in the document.

 The delay effect has a feedback parameter controlling the amount of the original
 signal that's played back after a delay.

 The duration of the delay is the multiplication of the step duration with
 the step count.

## Properties

### displayParameters

```ts
displayParameters: NexusObject<MixerStripDisplayParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L44)

Display parameters of this strip.

***

### faderParameters

```ts
faderParameters: NexusObject<MixerStripFaderParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L97)

Fader parameters of this strip.

***

### feedbackFactor

```ts
feedbackFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L69)

Feedback of the delay effect.

key | value
--- | ---
default | 0.30000001192092896
range | [0, 0.800000011920929]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L55)

Pre gain. This is the gain before the trim filter. Equivalent to a dB range
 of [-inf, 18.0].

key | value
--- | ---
default | 1
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stepCount

```ts
stepCount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:79](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L79)

Step count of the delay effect. Multiplied with the step length to get the total delay time.

key | value
--- | ---
default | 3
range | [1, 7]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stepLengthIndex

```ts
stepLengthIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L93)

Selects the length of each delay step as bar time in the delay effect.
 - 0: invalid
 - 1: 1/16 bars
 - 2: 1/8T bars
 - 3: 1/8  bars

key | value
--- | ---
default | 1
range | [1, 3]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### trimFilter

```ts
trimFilter: NexusObject<MixerTrimFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_delay\_aux\_nexus.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_delay_aux_nexus.ts#L59)

Trim filter applied to the input signal.
