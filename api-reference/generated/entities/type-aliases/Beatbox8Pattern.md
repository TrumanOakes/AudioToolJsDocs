---
title: "Beatbox8Pattern"
parent: "entities"
grand_parent: "API"
nav_order: 25
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox8Pattern

```ts
type Beatbox8Pattern = {
  groove: PrimitiveField<NexusLocation, "mut">;
  length: PrimitiveField<number, "mut">;
  slot: PrimitiveField<NexusLocation, "immut">;
  steps: ArrayField<NexusObject<Beatbox8PatternStep>, 64>;
  stepScaleIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:278](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L278)

key | value
--- | ---
type | entity
key | `"beatbox8Pattern"`
is |

 A pattern of the beatbox8. A beatbox8 pattern is a sequence of "steps", each step can have at most
 step can contain zero, one or multiple active instruments. Further, each step can
 be "accented", resulting in all instruments being played louder on that step.

 The step duration depends on the step_scale_index field.

## Properties

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:299](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L299)

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

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:308](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L308)

Number of steps before the pattern repeats.

key | value
--- | ---
default | 16
range | [1, 64]

***

### slot

```ts
slot: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:289](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L289)

The beatbox8 this pattern belongs to, also includes the index of the pattern.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.Beatbox8PatternSlot](../../api/enumerations/TargetType.html#enumeration-member-beatbox8patternslot), meaning one of: <br />[entities.Beatbox8.patternSlots](Beatbox8.html#patternslots)
immutable | true

***

### steps

```ts
steps: ArrayField<NexusObject<Beatbox8PatternStep>, 64>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:327](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L327)

Steps inside the current pattern.

***

### stepScaleIndex

```ts
stepScaleIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:323](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L323)

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
