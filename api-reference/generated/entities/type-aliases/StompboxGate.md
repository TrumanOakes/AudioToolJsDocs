---
title: "StompboxGate"
parent: "entities"
grand_parent: "API"
nav_order: 146
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxGate

```ts
type StompboxGate = {
  attackMs: PrimitiveField<number, "mut">;
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  holdMs: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  isInverted: PrimitiveField<boolean, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  sideChainInput: NexusObject<Empty>;
  thresholdGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"stompboxGate"`
is |

 A gate effect in the form of a stompbox.s

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L53)

Sets the amount of time for the Gate to change from open to closed, can give the effect of the sound fading in.

key | value
--- | ---
default | 10
range | [1, 100]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:123](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L123)

Primary Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L139)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L25)

The user-assigned name of this device.

***

### holdMs

```ts
holdMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L96)

Allows definition of the amount of time the Gate will stay open after the signal falls below the given threshold.

key | value
--- | ---
default | 100
range | [0.009999999776482582, 2000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L115)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isInverted

```ts
isInverted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L86)

Selects the gate mode whether it is inverse or not.
 By default, the gate effect is off and can be triggered to turn on.
 If inverted, the gate is on (the signal off) by default and can be triggered to turn off.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### postGain

```ts
postGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L75)

Gain applied to the signal after the effect. Equivalent to a dB range of [-inf, 9.0].

key | value
--- | ---
default | 1
range | [0, 2.818382978439331]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseMs

```ts
releaseMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L65)

Sets the amount of time the Gate takes to go from closed to open.
 A fast release will abruptly cut of the sound once it has fallen below the given threshold,
 a slower release will smoothly change from closed to open much like a slow fade out.

key | value
--- | ---
default | 50
range | [10, 600]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sideChainInput

```ts
sideChainInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:131](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L131)

Side Chain Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### thresholdGain

```ts
thresholdGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_gate/v1/stompbox\_gate\_nexus.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_gate/v1/stompbox_gate_nexus.ts#L106)

Threshold of the gate, any signals with gain levels below the the threshold will be muted.

key | value
--- | ---
default | 0.6665999889373779
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
