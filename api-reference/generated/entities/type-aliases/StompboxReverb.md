---
title: "StompboxReverb"
parent: "entities"
grand_parent: "API"
nav_order: 150
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxReverb

```ts
type StompboxReverb = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  dampFactor: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  feedbackFactor: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  preDelayTimeMs: PrimitiveField<number, "mut">;
  roomSizeFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L23)

key | value
--- | ---
type | entity
key | `"stompboxReverb"`
is |

 A reverb effect in the form of a stompbox.

 Simulates a signal bouncing around in a closed space.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L113)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L121)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### dampFactor

```ts
dampFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L85)

Control over the level of the devices low-pass filter. Low frequencies are passed while high frequencies are filtered out.

key | value
--- | ---
default | 0.10000000149011612
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L27)

The user-assigned name of this device.

***

### feedbackFactor

```ts
feedbackFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L75)

Allows adjustment of how much of the processed signal is fed back into the effect.

key | value
--- | ---
default | 0.6669999957084656
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L105)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mix

```ts
mix: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L96)

Controls the mix between the incoming and the effect signal. 0 ("dry") means 0% effect
 applied, 1 ("wet") means 100% effect applied; values between mixes the two linearly.

key | value
--- | ---
default | 0.20000000298023224
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L36)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L45)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### preDelayTimeMs

```ts
preDelayTimeMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L65)

Determines the length of time it takes for the echo to come back. (The length of the gap between the echos).

key | value
--- | ---
default | 160
range | [8, 500]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### roomSizeFactor

```ts
roomSizeFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_reverb/v1/stompbox\_reverb\_nexus.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_reverb/v1/stompbox_reverb_nexus.ts#L55)

Determines the size of the virtual enclosed space.

key | value
--- | ---
default | 0.800000011920929
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
