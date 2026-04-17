---
title: "MinimixerChannel"
parent: "entities"
grand_parent: "API"
nav_order: 81
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MinimixerChannel

```ts
type MinimixerChannel = {
  audioInput: NexusObject<Empty>;
  auxIsPreGain: PrimitiveField<boolean, "mut">;
  auxSendGain: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  panning: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:205](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L205)

key | value
--- | ---
type | object

 data structure for a channel in the minimixer

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:272](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L272)

the pointer an input can connect to

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### auxIsPreGain

```ts
auxIsPreGain: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:246](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L246)

Whether or not the aux effect will be applied before or after the gain parameter of this channel.

 This parameter works the same as the aux_is_pre_gain parameter of the Minimixer.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### auxSendGain

```ts
auxSendGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:235](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L235)

How much of the channel's audio will be routed out off to the main aux effects.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:215](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L215)

This channel's output gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:255](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L255)

Mutes this channel. If is_muted=true, the channel is muted, including its aux sends.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSoloed

```ts
isSoloed: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:264](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L264)

Solo this channel. If is_soloed=true, all channels that don't have is_soloed=true are muted.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:225](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L225)

Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
