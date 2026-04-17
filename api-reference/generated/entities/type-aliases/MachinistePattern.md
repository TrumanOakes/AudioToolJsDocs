---
title: "MachinistePattern"
parent: "entities"
grand_parent: "API"
nav_order: 74
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MachinistePattern

```ts
type MachinistePattern = {
  channelPatterns: ArrayField<NexusObject<MachinisteChannelPattern>, 9>;
  groove: PrimitiveField<NexusLocation, "mut">;
  length: PrimitiveField<number, "mut">;
  slot: PrimitiveField<NexusLocation, "immut">;
  stepScaleIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:197](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L197)

key | value
--- | ---
type | entity
key | `"machinistePattern"`
is |

 A machiniste pattern. Contains all steps for all channels in a single pattern.
 Can point to a "pattern slot" of the machiniste.

## Properties

### channelPatterns

```ts
channelPatterns: ArrayField<NexusObject<MachinisteChannelPattern>, 9>;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:246](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L246)

Storage of the actual pattern steps for each of the 9 channels.

***

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:218](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L218)

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

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:242](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L242)

Number of steps before the pattern repeats.

key | value
--- | ---
default | 16
range | [1, 128]

***

### slot

```ts
slot: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:208](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L208)

The slot in a machiniste that this pattern belongs to.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MachinistePatternSlot](../../api/enumerations/TargetType.html#enumeration-member-machinistepatternslot), meaning one of: <br />[entities.Machiniste.patternSlots](Machiniste.html#patternslots)
immutable | true

***

### stepScaleIndex

```ts
stepScaleIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:233](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L233)

The duration of each step in ticks:

 - 0: invalid
 - 1: 4 steps per 1/4th note = 1/16th semibreve (960 ticks) per step
 - 2: 8 steps per 1/4th note = 1/32nd semibreve (480 ticks) per step
 - 3: 3 steps per 1/4th note = 1/12th semibreve (1280 ticks) per step
 - 4: 6 steps per 1/4th note = 1/24th semibreve (640 ticks) per step

key | value
--- | ---
default | 1
range | [1, 4]
