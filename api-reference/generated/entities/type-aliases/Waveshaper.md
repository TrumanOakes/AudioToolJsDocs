---
title: "Waveshaper"
parent: "entities"
grand_parent: "API"
nav_order: 159
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Waveshaper

```ts
type Waveshaper = {
  attackMs: PrimitiveField<number, "mut">;
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  autoDrive: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  finalSlope: PrimitiveField<number, "mut">;
  finalY: PrimitiveField<number, "mut">;
  invertEnvelope: PrimitiveField<boolean, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  preGain: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  sideChainInput: NexusObject<Empty>;
  thresholdGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L39)

key | value
--- | ---
type | entity
key | `"waveshaper"`
is | [api.TargetType.Waveshaper](../../api/enumerations/TargetType.html#enumeration-member-waveshaper)

 The waveshaper is a distortion effect that allows to remap the amplitude of
 the incoming signal according to a curve defined by a series of anchors.

 The mix factor can be modulated by an envelope that's triggered by the peak
 of the main incoming signal or a side-chain signal.

 The curve of the waveshaper is defined by a series of anchors that mark points
 on the plane spanned by (0, 0) and (1, 1). To draw the curve, sort
 all anchors by x-coordinate and then connect them with lines such that
 line between p1 and p2 are sloped with the slope parameter of anchor p2.

 There are two implicit anchors:
 - one at (0, 0) where the curve starts
 - one at (1, y) where the curve ends, sloped with "final_slope" field.
   where y is the "final_y" field.

 This is to make sure the curve always starts at (0, 0) and ends at (1, 1),
 and that the curve can be sloped even if no anchor is present.

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L103)

The attack time of the envelope influencing the mix factor.

key | value
--- | ---
default | 5
range | [1, 1000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:159](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L159)

Single Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L175)

Single Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### autoDrive

```ts
autoDrive: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L93)

The amount that the envelope influences the mix factor. 0 means no influence, 1 means full influence.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L43)

The user-assigned name of this device.

***

### finalSlope

```ts
finalSlope: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L142)

The slope of the implicit anchor at (1, final_y), see message documentation for more details.

key | value
--- | ---
default | 0
range | [-1, 1]

***

### finalY

```ts
finalY: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:151](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L151)

The y-coordinate of the implicit anchor at (1, final_y), see message documentation for more details.

key | value
--- | ---
default | 1
range | [0, 1]

***

### invertEnvelope

```ts
invertEnvelope: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:133](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L133)

Whether to invert the auto envelope. If invert_envelope=true, then the envelope
 is by default "on" (mix is reduced), and can be turned off when triggered.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L184)

Whether the device is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mix

```ts
mix: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L83)

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

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L52)

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

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L61)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L72)

Allow adjustment of the volume of the signal before it is processed
 Equivalent to a dB range of [-inf, 9.0].

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

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L113)

The release time of the envelope influencing the mix factor.

key | value
--- | ---
default | 50
range | [1, 1000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sideChainInput

```ts
sideChainInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:167](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L167)

Side Chain Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### thresholdGain

```ts
thresholdGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper\_nexus.ts:123](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/waveshaper/v1/waveshaper_nexus.ts#L123)

The gain threshold above which the envelope is triggered/released. Equivalent to a dB range of [-inf, 9.0].

key | value
--- | ---
default | 1
range | [0, 2.818382978439331]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
