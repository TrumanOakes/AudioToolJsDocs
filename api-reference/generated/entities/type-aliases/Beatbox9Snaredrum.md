---
title: "Beatbox9Snaredrum"
parent: "entities"
grand_parent: "API"
nav_order: 41
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox9Snaredrum

```ts
type Beatbox9Snaredrum = {
  audioOutput: NexusObject<Empty>;
  gain: PrimitiveField<number, "mut">;
  snappy: PrimitiveField<number, "mut">;
  tone: PrimitiveField<number, "mut">;
  tune: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:758](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L758)

key | value
--- | ---
type | object

 Snaredrum

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:808](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L808)

Single Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:768](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L768)

Snaredrum gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### snappy

```ts
snappy: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:800](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L800)

Controls the snaredrum's "snappiness"m, corresponding roughly to the amount of
 high frequency content. 0 is snappier, 1 is more mellow. No unit.

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

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:789](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L789)

Controls the snaredrum's "tone", controls the decay duration of the noisy component
 of the snare sound. 0 is shorter, 1 is longer. No unit.

key | value
--- | ---
default | 0.1837099939584732
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tune

```ts
tune: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:778](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L778)

Influence the pitch of the snaredrum. 0 is lower, 1 is higher. No unit.

key | value
--- | ---
default | 0.699999988079071
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
