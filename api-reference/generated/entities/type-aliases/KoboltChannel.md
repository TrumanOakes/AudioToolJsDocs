---
title: "KoboltChannel"
parent: "entities"
grand_parent: "API"
nav_order: 70
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: KoboltChannel

```ts
type KoboltChannel = {
  audioInput: NexusObject<Empty>;
  gain: PrimitiveField<number, "mut">;
  panning: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:117](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L117)

key | value
--- | ---
type | object

 A channel in the Kobolt.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L125)

The pointer to the input that this channel is connected to.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:135](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L135)

The channel input gain of a kobolt channel. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:145](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L145)

Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
