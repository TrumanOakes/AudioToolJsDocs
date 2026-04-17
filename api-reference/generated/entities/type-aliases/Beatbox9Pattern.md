---
title: "Beatbox9Pattern"
parent: "entities"
grand_parent: "API"
nav_order: 37
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox9Pattern

```ts
type Beatbox9Pattern = {
  groove: PrimitiveField<NexusLocation, "mut">;
  length: PrimitiveField<number, "mut">;
  slot: PrimitiveField<NexusLocation, "immut">;
  steps: ArrayField<NexusObject<Beatbox9PatternStep>, 64>;
  stepScaleIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:263](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L263)

key | value
--- | ---
type | entity
key | `"beatbox9Pattern"`
is |

 A pattern for the composer

## Properties

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:284](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L284)

Every pattern can have a groove applied individually

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

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:293](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L293)

Length of the pattern

key | value
--- | ---
default | 16
range | [1, 64]

***

### slot

```ts
slot: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:274](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L274)

The beatbox9 this pattern belongs to, also includes the index of the pattern.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.Beatbox9PatternSlot](../../api/enumerations/TargetType.html#enumeration-member-beatbox9patternslot), meaning one of: <br />[entities.Beatbox9.patternSlots](Beatbox9.html#patternslots)
immutable | true

***

### steps

```ts
steps: ArrayField<NexusObject<Beatbox9PatternStep>, 64>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:312](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L312)

Steps inside the current pattern.

***

### stepScaleIndex

```ts
stepScaleIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:308](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L308)

The duration of each step in ticks.

 - 0: invalid
 - 1: 6 steps per 1/4th note = 1/24th semibreve (640 ticks) per step
 - 2: 3 steps per 1/4th note = 1/12th semibreve (1280 ticks) per step
 - 3: 4 steps per 1/4th note = 1/16th semibreve (960 ticks) per step
 - 4: 8 steps per 1/4th note = 1/32nd semibreve (480 ticks) per step

key | value
--- | ---
default | 3
range | [1, 4]
