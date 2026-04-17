---
title: "HeisenbergFilter"
parent: "entities"
grand_parent: "API"
nav_order: 63
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: HeisenbergFilter

```ts
type HeisenbergFilter = {
  cutoffFrequencyHz: PrimitiveField<number, "mut">;
  envelope2CutoffModulationDepth: PrimitiveField<number, "mut">;
  envelope3CutoffModulationDepth: PrimitiveField<number, "mut">;
  envelopeMainCutoffModulationDepth: PrimitiveField<number, "mut">;
  filterType: PrimitiveField<number, "mut">;
  keyboardTrackingAmount: PrimitiveField<number, "mut">;
  lfo1CutoffModulationDepth: PrimitiveField<number, "mut">;
  lfo2CutoffModulationDepth: PrimitiveField<number, "mut">;
  orderIndex: PrimitiveField<number, "mut">;
  resonance: PrimitiveField<number, "mut">;
  velocityCutoffModulationDepth: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1577](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1577)

key | value
--- | ---
type | object

 The filter parameters of the Heisenberg. The filter is applied to the entire
 signal after all operators have been added together.

## Properties

### cutoffFrequencyHz

```ts
cutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1587](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1587)

Filter cutoff frequency in Hz.

key | value
--- | ---
default | 11025
range | [33, 22050]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelope2CutoffModulationDepth

```ts
envelope2CutoffModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1655](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1655)

The extent to which envelope 1 influences the filter's cutoff frequency.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelope3CutoffModulationDepth

```ts
envelope3CutoffModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1665](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1665)

The extent to which envelope 2 influences the filter's cutoff frequency.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### envelopeMainCutoffModulationDepth

```ts
envelopeMainCutoffModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1645](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1645)

The extent to which the main envelope influences the filter's cutoff frequency.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterType

```ts
filterType: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1610](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1610)

Controls the filter "type" in a continuous way:
 - -1: LowPass
 - ~0: Shelf Filter
 -  1: HighPass

key | value
--- | ---
default | -1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### keyboardTrackingAmount

```ts
keyboardTrackingAmount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1697](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1697)

The extent to which the filter's cutoff frequency is influence by the playing note's
 pitch. If this is > 0, the higher the note, the higher the filter's cutoff frequency.
 If this is < 0, the higher the note, the lower the filter's cutoff frequency.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfo1CutoffModulationDepth

```ts
lfo1CutoffModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1675](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1675)

The extent to which LFO 1 influences the filter's cutoff frequency.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfo2CutoffModulationDepth

```ts
lfo2CutoffModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1685](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1685)

The extent to which LFO 2 influences the filter's cutoff frequency.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### orderIndex

```ts
orderIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1625](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1625)

Selects the filter order/filter gain:
 - 0: invalid
 - 1: 12dB
 - 2: 24dB
 - 3: 36dB
 - 4: 48dB

key | value
--- | ---
default | 1
range | [1, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### resonance

```ts
resonance: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1597](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1597)

Filter resonance. as a value from 1/sqrt(2) to 60 (maxQ).

key | value
--- | ---
default | 0.7071067690849304
range | [0.7071067690849304, 60]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### velocityCutoffModulationDepth

```ts
velocityCutoffModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg\_nexus.ts:1635](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/heisenberg/v1/heisenberg_nexus.ts#L1635)

The extent to which the note's velocity influences the filter's cutoff frequency.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
