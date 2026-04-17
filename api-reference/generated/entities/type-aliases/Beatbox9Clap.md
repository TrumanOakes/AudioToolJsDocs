---
title: "Beatbox9Clap"
parent: "entities"
grand_parent: "API"
nav_order: 34
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox9Clap

```ts
type Beatbox9Clap = {
  audioOutput: NexusObject<Empty>;
  gain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:989](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L989)

key | value
--- | ---
type | object

 Handclap

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:1007](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L1007)

Single Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:999](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L999)

Handclap gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
