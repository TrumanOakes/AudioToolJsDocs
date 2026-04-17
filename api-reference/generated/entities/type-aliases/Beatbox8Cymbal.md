---
title: "Beatbox8Cymbal"
parent: "entities"
grand_parent: "API"
nav_order: 23
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox8Cymbal

```ts
type Beatbox8Cymbal = {
  audioOutput: NexusObject<Empty>;
  decay: PrimitiveField<number, "mut">;
  gain: PrimitiveField<number, "mut">;
  tone: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1210](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1210)

key | value
--- | ---
type | object

 Parameters for the beatbox8 Cymbal instrument.

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1248](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1248)

Single Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### decay

```ts
decay: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1240](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1240)

Decay time for the instrument. 0 is shorter, 1 is longer. No unit.

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

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1220](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1220)

Cymbal gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tone

```ts
tone: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:1230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L1230)

Instrument tone. 0 is lower, 1 is higher. No unit.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
