---
title: "GraphicalEQ"
parent: "entities"
grand_parent: "API"
nav_order: 58
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: GraphicalEQ

```ts
type GraphicalEQ = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  filter1: NexusObject<GraphicalEQFilter>;
  filter2: NexusObject<GraphicalEQFilter>;
  gainDb: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:24](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L24)

key | value
--- | ---
type | entity
key | `"graphicalEQ"`
is |

 The GraphicalEQ is an equalizer with two parametric peak filters.

 Each filter has a special parameter "panning" that results in the
 filter gain of the left channel to be the mirror of the right.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L83)

Audio input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L91)

Audio output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L28)

The user-assigned name of this device.

***

### filter1

```ts
filter1: NexusObject<GraphicalEQFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L50)

The first peak filter. In the DAW UI, parameters are shown to the left.

***

### filter2

```ts
filter2: NexusObject<GraphicalEQFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L54)

The second peak filter. In the DAW UI, parameters are shown to the right.

***

### gainDb

```ts
gainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L75)

Gain applied to the signal after equalization.

key | value
--- | ---
default | 0
range | [-18, 18]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:100](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L100)

Whether the device is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mix

```ts
mix: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L65)

Controls the mix between the incoming and the effect signal. 0 ("dry") means 0% effect
 applied, 1 ("wet") means 100% effect applied; values between mixes the two linearly.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L37)

X position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### positionY

```ts
positionY: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/graphical\_eq/v1/graphical\_eq\_nexus.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/graphical_eq/v1/graphical_eq_nexus.ts#L46)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
