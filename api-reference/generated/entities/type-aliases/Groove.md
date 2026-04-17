---
title: "Groove"
parent: "entities"
grand_parent: "API"
nav_order: 61
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Groove

```ts
type Groove = {
  displayName: PrimitiveField<string, "mut">;
  durationTicks: PrimitiveField<number, "mut">;
  functionIndex: PrimitiveField<number, "mut">;
  impact: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/groove/v1/groove\_nexus.ts:33](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/groove/v1/groove_nexus.ts#L33)

key | value
--- | ---
type | entity
key | `"groove"`
is | [api.TargetType.Groove](../../api/enumerations/TargetType.html#enumeration-member-groove)

 A groove is a function that maps time values in a monotonically ascending way,
 i.e. for a groove g, it holds u > v => g(u) > g(v).

 The groove can be "applied" to the start times and durations of events,
 such as note, automation events, or pattern events. For a simple example,
 a groove applied to a pattern device can create a feel of swing or shuffle.

 Grooves map values in a period, so that the "rhythm" repeats every period.
 The first period of any groove starts at time 0.

 Various entities in the document have optional pointers to a groove. If that
 pointer is set, the audio engine applies the groove to the entity's events.

 The config has a required pointer to a groove that is the "default" groove,
 which is automatically applied to many entities created in the DAW.

## Properties

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/groove/v1/groove\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/groove/v1/groove_nexus.ts#L78)

The user-assigned name of the groove.

***

### durationTicks

```ts
durationTicks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/groove/v1/groove\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/groove/v1/groove_nexus.ts#L64)

The duration in ticks of the period of the groove. The groove's mapping repeats after
 this duration. The interval always starts at time 0.

 1920 ticks = 1/8 bars

key | value
--- | ---
default | 1920
range | [960, 15360]

***

### functionIndex

```ts
functionIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/groove/v1/groove\_nexus.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/groove/v1/groove_nexus.ts#L52)

The groove function that transforms time, parametrized with the impact field
 below. A groove function is generally defined in the interval `[0, 1]` and
 linearly mapped to the actual groove duration defined below.

 The precise formulas for the mapping are fairly complicated, below just
 a high level description:

 - 0: invalid
 - 1: "groove A", positive values move all notes forward, negative values move all notes backward.
 - 2: "groove B", positive values move all notes to the center, negative values move all notes to the edges.
 - 3: "groove C", similar to groove A.

key | value
--- | ---
default | 1
range | [1, 3]

***

### impact

```ts
impact: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/groove/v1/groove\_nexus.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/groove/v1/groove_nexus.ts#L74)

The impact value of the groove. 0 means no impact, 1/-1 means full impact
 in somewhat-but-not-quite opposite direction, depending on the function index.

key | value
--- | ---
default | 0
range | [-1, 1]
