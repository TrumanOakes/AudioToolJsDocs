---
title: "Curve"
parent: "entities"
grand_parent: "API"
nav_order: 49
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Curve

```ts
type Curve = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  gainDb: PrimitiveField<number, "mut">;
  highPass: NexusObject<CurvePass>;
  highShelf: NexusObject<CurveShelf>;
  isActive: PrimitiveField<boolean, "mut">;
  lowPass: NexusObject<CurvePass>;
  lowShelf: NexusObject<CurveShelf>;
  peak1: NexusObject<CurvePeak>;
  peak2: NexusObject<CurvePeak>;
  peak3: NexusObject<CurvePeak>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  spectrumModeIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L26)

key | value
--- | ---
type | entity
key | `"curve"`
is |

 The curve is a graphical equalizer that has 7 band eqs:
 - 1 low pass
 - 1 low shelf
 - 3 fully parametric peak filters
 - 1 high pass
 - 1 high shelf

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:117](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L117)

Audio Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L125)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L30)

The user-assigned name of this device.

***

### gainDb

```ts
gainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L58)

Gain applied to the signal after equalization.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### highPass

```ts
highPass: NexusObject<CurvePass>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L89)

The high pass filter.

***

### highShelf

```ts
highShelf: NexusObject<CurveShelf>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L97)

The high shelf filter.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:67](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L67)

Whether the equalizer is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowPass

```ts
lowPass: NexusObject<CurvePass>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L85)

The low pass filter.

***

### lowShelf

```ts
lowShelf: NexusObject<CurveShelf>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L93)

The low shelf filter.

***

### peak1

```ts
peak1: NexusObject<CurvePeak>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L101)

The first peak filter.

***

### peak2

```ts
peak2: NexusObject<CurvePeak>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L105)

The second peak filter.

***

### peak3

```ts
peak3: NexusObject<CurvePeak>;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L109)

The third peak filter.

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L39)

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

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L48)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### spectrumModeIndex

```ts
spectrumModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/curve/v1/curve\_nexus.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/curve/v1/curve_nexus.ts#L81)

Selects the spectrum mode of the equalizer. This only affects the visual representation
 in the DAW.
 - 0: invalid
 - 1: Off   - no spectrum is displayed
 - 2: Pre   - the spectrum is displayed before the equalizer is applied
 - 3: Post  - the spectrum is displayed after the equalizer is applied

key | value
--- | ---
default | 1
range | [1, 3]
