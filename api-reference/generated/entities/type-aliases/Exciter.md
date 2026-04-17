---
title: "Exciter"
parent: "entities"
grand_parent: "API"
nav_order: 56
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Exciter

```ts
type Exciter = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  powerFactor: PrimitiveField<number, "mut">;
  toneFrequencyHz: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L23)

key | value
--- | ---
type | entity
key | `"exciter"`
is |

 The exciter device. Enriches the signal by adding a harmonic content to the signal.

 It does so by adding distortion to the higher frequencies above a certain threshold.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L53)

Audio Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L61)

Audio Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L27)

The user-assigned name of this device.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L101)

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

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L92)

Controls the mix between the incoming and the distorted signal. 0 ("dry") means 0% distortion
 applied, 1 ("wet") means 100% distortion applied; values between mixes the two linearly.

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

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L36)

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

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L45)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### powerFactor

```ts
powerFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L81)

The "power" factor controls how much distortion is added to the signal above the tone frequency.

key | value
--- | ---
default | 0.5
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### toneFrequencyHz

```ts
toneFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/exciter/v1/exciter\_nexus.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/exciter/v1/exciter_nexus.ts#L71)

The "tone" frequency is the frequency above which the exciter will add distortion to the signal.

key | value
--- | ---
default | 3500
range | [20, 13000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
