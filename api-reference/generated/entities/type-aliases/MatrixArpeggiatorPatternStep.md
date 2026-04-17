---
title: "MatrixArpeggiatorPatternStep"
parent: "entities"
grand_parent: "API"
nav_order: 78
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MatrixArpeggiatorPatternStep

```ts
type MatrixArpeggiatorPatternStep = {
  isChord: PrimitiveField<boolean, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isTied: PrimitiveField<boolean, "mut">;
  overrideVelocity: PrimitiveField<boolean, "mut">;
  stepVelocity: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:505](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L505)

key | value
--- | ---
type | object

 A step in a matrix arpeggiator pattern.

## Properties

### isChord

```ts
isChord: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:553](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L553)

If this is true, then in this step a chord is played made up of all notes
 currently entering the arpeggiator.

key | value
--- | ---
default | false

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:532](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L532)

Whether the step is muted or not. Muted steps are not played.

key | value
--- | ---
default | false

***

### isTied

```ts
isTied: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:544](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L544)

Whether the step is tied or not. Tied steps are "tied together" with the next
 step, resulting in a single note being played for both steps. If multiple
 steps in a row are tied together, the first tied step is played longer.

 The parameters of a step following a tied step are ignored.

key | value
--- | ---
default | false

***

### overrideVelocity

```ts
overrideVelocity: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:514](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L514)

Whether the step's velocity is overridden by the step_velocity parameter; otherwise,
 the velocity defined by the matrix arpeggiator's velocity parameter is used.

key | value
--- | ---
default | false

***

### stepVelocity

```ts
stepVelocity: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:524](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L524)

The velocity to use for this step. If override_velocity is false, the velocity defined
 by the matrix arpeggiator's velocity parameter is used, and this parameter is ignored.

key | value
--- | ---
default | 1
range | [0, 1]
