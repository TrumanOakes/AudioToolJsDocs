---
title: "MatrixArpeggiatorPattern"
parent: "entities"
grand_parent: "API"
nav_order: 77
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MatrixArpeggiatorPattern

```ts
type MatrixArpeggiatorPattern = {
  groove: PrimitiveField<NexusLocation, "mut">;
  length: PrimitiveField<number, "mut">;
  slot: PrimitiveField<NexusLocation, "immut">;
  steps: ArrayField<NexusObject<MatrixArpeggiatorPatternStep>, 64>;
};
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:420](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L420)

key | value
--- | ---
type | entity
key | `"matrixArpeggiatorPattern"`
is |

 A pattern of the matrix arpeggiator. Contains step-specific parameters such as
 velocity and mute, and the pattern length.

## Properties

### groove

```ts
groove: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:441](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L441)

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

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:451](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L451)

The length of the pattern in steps. The duration of each step is controlled
 by the step_length_index parameter of the matrix arpeggiator.

key | value
--- | ---
default | 16
range | [1, 64]

***

### slot

```ts
slot: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:431](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L431)

The Matrix this pattern belongs to, also includes the index of the pattern.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MatrixArpeggiatorPatternSlot](../../api/enumerations/TargetType.html#enumeration-member-matrixarpeggiatorpatternslot), meaning one of: <br />[entities.MatrixArpeggiator.patternSlots](MatrixArpeggiator.html#patternslots)
immutable | true

***

### steps

```ts
steps: ArrayField<NexusObject<MatrixArpeggiatorPatternStep>, 64>;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:455](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L455)

The 64 steps of the pattern.
