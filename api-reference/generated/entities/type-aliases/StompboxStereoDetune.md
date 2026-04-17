---
title: "StompboxStereoDetune"
parent: "entities"
grand_parent: "API"
nav_order: 152
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxStereoDetune

```ts
type StompboxStereoDetune = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  delayTimeMs: PrimitiveField<number, "mut">;
  detuneSemitones: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L23)

key | value
--- | ---
type | entity
key | `"stompboxStereoDetune"`
is |

 A stereo detune effect in the form of a stompbox. Allows to widen the stereo
 image of a sound by slightly detuning the channels and adding a very short
 delay.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L82)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L90)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### delayTimeMs

```ts
delayTimeMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L65)

The delay time of the detune effect.

key | value
--- | ---
default | 14
range | [2, 30]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### detuneSemitones

```ts
detuneSemitones: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L55)

The amount of detune in semitones.

key | value
--- | ---
default | 0.25
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L27)

The user-assigned name of this device.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L74)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L36)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_stereo\_detune/v1/stompbox\_stereo\_detune\_nexus.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_stereo_detune/v1/stompbox_stereo_detune_nexus.ts#L45)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
