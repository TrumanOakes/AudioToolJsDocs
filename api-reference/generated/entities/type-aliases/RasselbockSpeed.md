---
title: "RasselbockSpeed"
parent: "entities"
grand_parent: "API"
nav_order: 129
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockSpeed

```ts
type RasselbockSpeed = {
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  speedRatioIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:701](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L701)

key | value
--- | ---
type | object

 The configuration for the rasselbock speed effect.
 The speed effect writes the incoming signal to a delay line, and plays it back at a slower speed.
 When a step starts, the delay line is cleared and started fresh.

## Properties

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:729](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L729)

If is_muted=true, this effect is bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSoloed

```ts
isSoloed: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:738](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L738)

If is_soloed=true, effects that don't have is_soloed=true are bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### speedRatioIndex

```ts
speedRatioIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:720](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L720)

The speed of the played back audio. 1/2 means half the speed compared to the incoming signal.
 - 0:  invalid
 - 1:  1/16
 - 2:  1/8
 - 3:  1/6
 - 4:  1/4
 - 5:  1/3
 - 6:  1/2
 - 7:  2/3
 - 8:  3/4

key | value
--- | ---
default | 6
range | [1, 8]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
