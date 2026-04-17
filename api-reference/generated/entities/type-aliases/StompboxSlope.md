---
title: "StompboxSlope"
parent: "entities"
grand_parent: "API"
nav_order: 151
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxSlope

```ts
type StompboxSlope = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  bandWidthHz: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  filterModeIndex: PrimitiveField<number, "mut">;
  frequencyHz: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  resonanceFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L23)

key | value
--- | ---
type | entity
key | `"stompboxSlope"`
is |

 The slope filter is a multi-mode filter without envelope, with lowpass,
 highpass, notch, and bandpass modes. The notch & bandpass filters are implemented
 as a low and high pass filter in parallel or series, respectively.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:119](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L119)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:127](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L127)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### bandWidthHz

```ts
bandWidthHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L91)

The spacing in hertz between the low and high pass filters. Only has an effect for notch and bandpass modes.
 This effectively controls the bandwidth of the bandpass/notch filter.

key | value
--- | ---
default | 0
range | [-500, 500]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L27)

The user-assigned name of this device.

***

### filterModeIndex

```ts
filterModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L60)

Selects the filter mode of the slope.
 - 0: invalid
 - 1: Lowpass      a single lowpass filter
 - 2: Highpass     a single highpass filter
 - 3: Notch        a low and high pass filter in parallel
 - 4: Bandpass     a low and high pass filter in series

key | value
--- | ---
default | 1
range | [1, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### frequencyHz

```ts
frequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L70)

The cut-off frequency of the filter.

key | value
--- | ---
default | 300
range | [18, 10000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L111)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L102)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L36)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L45)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### resonanceFactor

```ts
resonanceFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_slope/v1/stompbox\_slope\_nexus.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_slope/v1/stompbox_slope_nexus.ts#L80)

The resonance of the filter. 0 means no resonance, 1 means maximum resonance. No unit.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
