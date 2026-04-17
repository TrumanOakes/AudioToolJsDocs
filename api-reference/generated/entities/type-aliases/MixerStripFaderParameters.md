---
title: "MixerStripFaderParameters"
parent: "entities"
grand_parent: "API"
nav_order: 93
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerStripFaderParameters

```ts
type MixerStripFaderParameters = {
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  panning: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_fader\_parameters\_nexus.ts:17](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_fader_parameters_nexus.ts#L17)

key | value
--- | ---
type | object

 Parameters of faders of channel, aux and group strips, controlling panning, gain, and solo/mute state.
 This is not an entity but a submessage used by these strips.

## Properties

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_fader\_parameters\_nexus.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_fader_parameters_nexus.ts#L50)

If is_muted=true, the strip is muted.

 If a channel, group or aux strip has "is_muted" set to true any signal is cut off in the strip before it's sent to any inserts, effects,
 or aux strips. If a channel or group that has "is_muted" set to true is part of a group in some way,
 all descendants of the channel in the group hierarchy also behave as though they had is_muted=true.

key | value
--- | ---
default | false

***

### isSoloed

```ts
isSoloed: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_fader\_parameters\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_fader_parameters_nexus.ts#L73)

If is_soloed=true, the strip is soloed. The behavior depends on the type of strip:

 - Channel and group strips:
   If a channel or group strip has is_soloed true, all other channel and group strips behave as though
   they have is_muted=true, with the exception of ancestors and descendants of the soloed strip in the group hierarchy, which behave as
   though they have is_soloed=true as well. No effect on aux strips themselves.

 - Aux strips:
   If an aux strip has is_soloed set to true, all other aux strips behave as though they had is_muted=true. Further, channel
   and group strips whose output is routed directly to the master behave as though their fader gain are set to 0. This
   way, none of them are audible, but aux sends of both channels and groups still get passed through.

   The solo and mute behavior of channel and group strips override the solo/mute behavior of the
   aux strips - if a channel is muted, it doesn't send to any aux anymore; if a channel is soloed,
   it becomes audible.

key | value
--- | ---
default | false

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_fader\_parameters\_nexus.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_fader_parameters_nexus.ts#L27)

Panning of the strip. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### postGain

```ts
postGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_fader\_parameters\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_fader_parameters_nexus.ts#L38)

Gain right before the signal leaves the strip, i.e. after inserts,
 eq, aux sends, etc., Equivalent to a dB range of [-inf, 6.0].

key | value
--- | ---
default | 1
range | [0, 1.9952620267868042]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
