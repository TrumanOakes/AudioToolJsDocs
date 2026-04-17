---
title: "Beatbox8Cowbell"
parent: "entities"
grand_parent: "API"
nav_order: 22
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox8Cowbell

```ts
type Beatbox8Cowbell = {
  audioOutput: NexusObject<Empty>;
  gain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1166](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1166)

key | value
--- | ---
type | object

 Parameters for the beatbox8 Cowbell instrument.

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1184)

Single Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1176](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1176)

Cowbell gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
