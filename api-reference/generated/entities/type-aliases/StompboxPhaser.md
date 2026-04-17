---
title: "StompboxPhaser"
parent: "entities"
grand_parent: "API"
nav_order: 148
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxPhaser

```ts
type StompboxPhaser = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  feedbackFactor: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  lfoFrequencyHz: PrimitiveField<number, "mut">;
  maxFrequencyHz: PrimitiveField<number, "mut">;
  minFrequencyHz: PrimitiveField<number, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"stompboxPhaser"`
is |

 data structure for the stompbox phaser

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L113)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L121)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L25)

The user-assigned name of this device.

***

### feedbackFactor

```ts
feedbackFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L73)

Defines how much of the processed signal is feed back into the effect.

key | value
--- | ---
default | 0.699999988079071
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L105)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoFrequencyHz

```ts
lfoFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L83)

Allows adjustment of the speed of the phasing effect.

key | value
--- | ---
default | 0.6000000238418579
range | [0.03999999910593033, 5]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### maxFrequencyHz

```ts
maxFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L63)

Allow for a frequency range to be set for the effect. Only frequencies between the min and max will be affected.

key | value
--- | ---
default | 3000
range | [300, 8000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### minFrequencyHz

```ts
minFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L53)

Allow for a frequency range to be set for the effect. Only frequencies between the min and max will be affected.

key | value
--- | ---
default | 240
range | [30, 300]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mix

```ts
mix: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L96)

Controls the mix between the incoming and the effect signal. 0 ("dry") means 0% effect
 applied, 1 ("wet") means 100% effect applied; values between mixes the two linearly.

 Note: 100% here means maximum audible effect, unlike some physical phasers.

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_phaser/v1/stompbox\_phaser\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_phaser/v1/stompbox_phaser_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
