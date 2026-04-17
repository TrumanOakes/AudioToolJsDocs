---
title: "RasselbockPattern"
parent: "entities"
grand_parent: "API"
nav_order: 124
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockPattern

```ts
type RasselbockPattern = {
  channelPatterns: ArrayField<NexusObject<RasselbockRowPattern>, 5>;
  effectOrder: ArrayField<PrimitiveField<number, "mut">, 7>;
  effectPatterns: ArrayField<NexusObject<RasselbockRowPattern>, 7>;
  groove: PrimitiveField<NexusLocation, "mut">;
  length: PrimitiveField<number, "mut">;
  slot: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:223](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L223)

key | value
--- | ---
type | entity
key | `"rasselbockPattern"`
is |

 A Rasselbock pattern, which turns effects and channels on or off
 for every pattern step.

## Properties

### channelPatterns

```ts
channelPatterns: ArrayField<NexusObject<RasselbockRowPattern>, 5>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:247](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L247)

Store of the channel pattern splitting the audio to secondary audio outputs.

***

### effectOrder

```ts
effectOrder: ArrayField<PrimitiveField<number, "mut">, 7>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:262](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L262)

This list defines the order in which the effects are applied in this pattern.
 The i-th element defines the "magnitude" of that effect. The audio engine orders
 the list in magnitudes, and takes the original indices as orders.

 - Example:         [0.5, 0.2, 10]
 - Sorted to:       [0.2, 0.5, 10]
 - => Effect order: [  1,   0,  2]

key | value
--- | ---
default | 0
range | full

***

### effectPatterns

```ts
effectPatterns: ArrayField<NexusObject<RasselbockRowPattern>, 7>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:274](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L274)

Storage of the step pattern of each effect row. The order of effects is independent of effect_order
 as follows:
 * 0: Shuffle
 * 1: Speed
 * 2: Stop
 * 3: Gate
 * 4: Stutter
 * 5: Scratch
 * 6: Reverse

***

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:284](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L284)

Every pattern can have a groove applied individually.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.Groove](../../api/enumerations/TargetType.html#enumeration-member-groove), meaning one of: <br />[entities.Groove](Groove.html)

***

### length

```ts
length: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:243](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L243)

Length of the pattern in steps. One step is always 1/64th of a semibreve long.

key | value
--- | ---
default | 16
range | [1, 64]

***

### slot

```ts
slot: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:234](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L234)

The pattern slot in the Rasselbock that this pattern belongs to.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.RasselbockPatternSlot](../../api/enumerations/TargetType.html#enumeration-member-rasselbockpatternslot), meaning one of: <br />[entities.Rasselbock.patternSlots](Rasselbock.html#patternslots)
immutable | true
