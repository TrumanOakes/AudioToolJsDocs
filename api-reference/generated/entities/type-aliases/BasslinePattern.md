---
title: "BasslinePattern"
parent: "entities"
grand_parent: "API"
nav_order: 16
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: BasslinePattern

```ts
type BasslinePattern = {
  groove: PrimitiveField<NexusLocation, "mut">;
  length: PrimitiveField<number, "mut">;
  slot: PrimitiveField<NexusLocation, "immut">;
  steps: ArrayField<NexusObject<BasslineStep>, 99>;
};
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:336](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L336)

key | value
--- | ---
type | entity
key | `"basslinePattern"`
is |

 A bassline pattern. Can point to a "pattern slot" of the bassline.

 A bassline pattern is a sequence of "steps", each step can have at most
 one active note. One step is always 1/16th note long.

## Properties

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:357](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L357)

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

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:366](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L366)

Length of the pattern in steps.

key | value
--- | ---
default | 16
range | [1, 99]

***

### slot

```ts
slot: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:347](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L347)

The Bassline this pattern belongs to, also includes the index of the pattern.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.BasslinePatternSlot](../../api/enumerations/TargetType.html#enumeration-member-basslinepatternslot), meaning one of: <br />[entities.Bassline.patternSlots](Bassline.html#patternslots)
immutable | true

***

### steps

```ts
steps: ArrayField<NexusObject<BasslineStep>, 99>;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:370](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L370)

Storage for the steps of a pattern.
