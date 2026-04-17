---
title: "StompboxCrusher"
parent: "entities"
grand_parent: "API"
nav_order: 143
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxCrusher

```ts
type StompboxCrusher = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  bits: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  downsamplingFactor: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
  preGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"stompboxCrusher"`
is |

 A bitcrusher in the form of a stompbox.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L113)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L121)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### bits

```ts
bits: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L85)

Bit depth of the signal. Lower bit depth results in more distortion.

key | value
--- | ---
default | 8
range | [1, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L25)

The user-assigned name of this device.

***

### downsamplingFactor

```ts
downsamplingFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L64)

How much the signal is downsampled - higher values result in more noisy output.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L105)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L96)

Controls how much of the processed signal is mixed with the original, unprocessed signal.
 0 = 100% dry signal, 1 = 100% wet signal

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L43)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L75)

Allows control over the volume of the signal once it has been processed.
 Gain factors, equivalent to a dB range of [-inf, 9.0]. Default is unit gain.

key | value
--- | ---
default | 1
range | [0, 2.818382978439331]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_crusher/v1/stompbox\_crusher\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_crusher/v1/stompbox_crusher_nexus.ts#L54)

Allows for adjustment of the volume of the signal before it is processed.
 Equivalent to a dB range of [-inf, 27.0].

key | value
--- | ---
default | 1
range | [0, 22.387210845947266]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
