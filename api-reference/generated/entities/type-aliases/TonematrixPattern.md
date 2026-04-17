---
title: "TonematrixPattern"
parent: "entities"
grand_parent: "API"
nav_order: 157
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: TonematrixPattern

```ts
type TonematrixPattern = {
  groove: PrimitiveField<NexusLocation, "mut">;
  slot: PrimitiveField<NexusLocation, "immut">;
  steps: ArrayField<NexusObject<TonematrixStep>, 16>;
};
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L171)

key | value
--- | ---
type | entity
key | `"tonematrixPattern"`
is |

 A tonematrix pattern entity.

## Properties

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:196](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L196)

Every pattern can have a groove applied individually.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.Groove](../../api/enumerations/TargetType.html#enumeration-member-groove), meaning one of: <br />[entities.Groove](Groove.html)

***

### slot

```ts
slot: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:182](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L182)

The slot in the tonematrix that this pattern belongs to.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.TonematrixPatternSlot](../../api/enumerations/TargetType.html#enumeration-member-tonematrixpatternslot), meaning one of: <br />[entities.Tonematrix.patternSlots](Tonematrix.html#patternslots)
immutable | true

***

### steps

```ts
steps: ArrayField<NexusObject<TonematrixStep>, 16>;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:186](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L186)

The steps in this pattern; a list of 16 elements, each representing a step in the pattern.
