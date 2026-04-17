---
title: "StereoEnhancer"
parent: "entities"
grand_parent: "API"
nav_order: 140
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StereoEnhancer

```ts
type StereoEnhancer = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  channelsAreInverted: PrimitiveField<boolean, "mut">;
  displayName: PrimitiveField<string, "mut">;
  frequencyHz: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  stereoWidth: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"stereoEnhancer"`
is |

 The StereoEnhancer widens or narrows the stereo width of a sound above
 a specified frequency.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L84)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L92)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### channelsAreInverted

```ts
channelsAreInverted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L53)

If this is true, the delay is applied to the right channel.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L26)

The user-assigned name of this device.

***

### frequencyHz

```ts
frequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L63)

Specifies the cut-off frequency above which the stereo processing will begin.

key | value
--- | ---
default | 11000
range | [32.70000076293945, 16744.0390625]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L101)

Whether the device is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L35)

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

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L44)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### stereoWidth

```ts
stereoWidth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stereo\_enhancer/v1/stereo\_enhancer\_nexus.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stereo_enhancer/v1/stereo_enhancer_nexus.ts#L76)

The stereo width of the signal above the cutoff frequency:
 - -1 means the signal is mixed to mono
 - 0  means unchanged
 - 1  means maximum width

key | value
--- | ---
default | 0.25
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
