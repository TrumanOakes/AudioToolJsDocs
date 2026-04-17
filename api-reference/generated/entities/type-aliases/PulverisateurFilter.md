---
title: "PulverisateurFilter"
parent: "entities"
grand_parent: "API"
nav_order: 110
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurFilter

```ts
type PulverisateurFilter = {
  cutoffFrequencyHz: PrimitiveField<number, "mut">;
  filterSpacing: PrimitiveField<number, "mut">;
  keyboardTrackingAmount: PrimitiveField<number, "mut">;
  modeIndex: PrimitiveField<number, "mut">;
  resonance: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:544](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L544)

key | value
--- | ---
type | object

 The Pulverisateur's filter. The filter can be set to track the keyboard.

## Properties

### cutoffFrequencyHz

```ts
cutoffFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:567](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L567)

Controls the cutoff frequencies of the filters. The

key | value
--- | ---
default | 15500
range | [18, 15500]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterSpacing

```ts
filterSpacing: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:588](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L588)

Controls the spacing between the two filters. Only has an effect in the HP/LP mode,
 ignored in LP/LP mode.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### keyboardTrackingAmount

```ts
keyboardTrackingAmount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:601](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L601)

How much filter cutoff frequency tracks notes's pitch.
 -1 means the higher the note, the lower is the cutoff frequency
 1 means the higher the note, the higher is the cutoff frequency
 0 means the cutoff frequency is not affected by the note's pitch.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modeIndex

```ts
modeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:557](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L557)

Filter mode.
 - 0: invalid
 - 1: "LP/LP"  Two low pass filters in series
 - 2: "LP/HP"  A low and a high pass filter, run in parallel and added together, creating something like a notch filter.

key | value
--- | ---
default | 1
range | [1, 2]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### resonance

```ts
resonance: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:577](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L577)

Controls the resonance of the filters.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
