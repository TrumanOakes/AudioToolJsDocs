---
title: "Panorama"
parent: "entities"
grand_parent: "API"
nav_order: 102
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Panorama

```ts
type Panorama = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  leftFactor: PrimitiveField<number, "mut">;
  leftPanning: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  rightFactor: PrimitiveField<number, "mut">;
  rightPanning: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L23)

key | value
--- | ---
type | entity
key | `"panorama"`
is |

 The Panorama is a simple device that allows manipulation of the
 stereo signal. The left/right channel can be be independently
 moved to left/right, and their amplitudes can be independently adjusted.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L93)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L101)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L27)

The user-assigned name of this device.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L110)

Whether the device is active or not. When is_active=false, the effect is bypassed.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### leftFactor

```ts
leftFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L55)

Gain factor applied to the left channel. Can go negative, which reverses the phase of the signal.

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### leftPanning

```ts
leftPanning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L75)

Pans the left channel to left/right. -1 is fully left (unchanged), 0 is centered, 1 is fully right.

key | value
--- | ---
default | -1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L36)

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

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L45)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### rightFactor

```ts
rightFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L65)

Gain factor applied to the right channel. Can go negative, which reverses the phase of the signal.

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### rightPanning

```ts
rightPanning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/panorama/v1/panorama\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/panorama/v1/panorama_nexus.ts#L85)

Pans the right channel to left/right. -1 is fully left, 0 is centered, 1 is fully right (unchanged).

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
