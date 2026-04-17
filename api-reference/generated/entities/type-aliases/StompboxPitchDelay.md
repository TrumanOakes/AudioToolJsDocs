---
title: "StompboxPitchDelay"
parent: "entities"
grand_parent: "API"
nav_order: 149
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxPitchDelay

```ts
type StompboxPitchDelay = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  feedbackFactor: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  stepCount: PrimitiveField<number, "mut">;
  stepLengthIndex: PrimitiveField<number, "mut">;
  tuneFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:24](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L24)

key | value
--- | ---
type | entity
key | `"stompboxPitchDelay"`
is |

 A simple delay where the delayed signal can be pitched on every repetition,
 in the form of a stompbox.

 The total delay time is step_count*step_length.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L118)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:126](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L126)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L28)

The user-assigned name of this device.

***

### feedbackFactor

```ts
feedbackFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L80)

Feedback of the delay.

key | value
--- | ---
default | 0.6660000085830688
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L110)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mix

```ts
mix: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L101)

Controls the mix between the incoming and the effect signal. 0 ("dry") means 0% effect
 applied, 1 ("wet") means 100% effect applied; values between mixes the two linearly.

key | value
--- | ---
default | 0.699999988079071
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L37)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L46)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### stepCount

```ts
stepCount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:56](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L56)

Count of delay steps.

key | value
--- | ---
default | 3
range | [1, 7]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stepLengthIndex

```ts
stepLengthIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L70)

Selects the length of each delay step as bar time.
 - 0: invalid
 - 1: 1/16 bars
 - 2: 1/8T bars
 - 3: 1/8  bars

key | value
--- | ---
default | 1
range | [1, 3]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tuneFactor

```ts
tuneFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_pitch\_delay/v1/stompbox\_pitch\_delay\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_pitch_delay/v1/stompbox_pitch_delay_nexus.ts#L90)

Pitch of the delay.

key | value
--- | ---
default | 0.20000000298023224
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
