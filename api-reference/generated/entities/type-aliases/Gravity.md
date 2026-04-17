---
title: "Gravity"
parent: "entities"
grand_parent: "API"
nav_order: 60
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Gravity

```ts
type Gravity = {
  attackMs: PrimitiveField<number, "mut">;
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  kneeDbRange: PrimitiveField<number, "mut">;
  makeupGainDb: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  ratio: PrimitiveField<number, "mut">;
  releaseIsSynced: PrimitiveField<boolean, "mut">;
  releaseTimeNormalized: PrimitiveField<number, "mut">;
  rmsWindowMs: PrimitiveField<number, "mut">;
  sideChainInput: NexusObject<Empty>;
  thresholdDb: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L26)

key | value
--- | ---
type | entity
key | `"gravity"`
is |

 The gravity is your off the shelf compressor.

 The compressor "compresses" the louder portions of a signal to lower levels.
 It has an envelope configuring the compressor curve which is triggered
 when the signal gain average over a configurable rms window size exceeds
 a certain threshold.

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L98)

The attack time in milliseconds. Controls how quickly compression kicks in.

key | value
--- | ---
default | 5
range | [0, 1000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L161)

Single Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L153)

Single Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L30)

The user-assigned name of this device.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:145](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L145)

Whether the device is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### kneeDbRange

```ts
kneeDbRange: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L78)

The width of the knee in decibels. A wider knee is a more rounded compression curve.

key | value
--- | ---
default | 3
range | [0, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### makeupGainDb

```ts
makeupGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L88)

Makeup gain apllied to the signal after compression.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L39)

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

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L48)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### ratio

```ts
ratio: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L68)

The strength of the compressor

key | value
--- | ---
default | 4
range | [1, 50]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseIsSynced

```ts
releaseIsSynced: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L107)

Whether the release_time_normalized is synchronized with the tempo.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseTimeNormalized

```ts
releaseTimeNormalized: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:124](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L124)

The time for the compressor to release when the input level is dropping below the threshold.

 The meaning of the value depends on the release_is_synced flag:
 - if release_is_synced is false, the value maps linearly to milliseconds (0.0 .. 1_000.0).
 - if release_is_synced is true, then the value is quantized to one of 30 bar time durations.
   The bar time durations are:
   0, 1/256, 1/192, 1/128, 1/96, 1/64, 1/48, 1/32, 1/24, 1/16, 1/12, 1/8, 1/6,
   3/16, 1/4, 5/16, 1/3, 3/8, 7/16, 1/2, 9/16, 7/12, 5/8, 2/3, 3/4, 5/6, 7/8, 1/1.

key | value
--- | ---
default | 0.5
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### rmsWindowMs

```ts
rmsWindowMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:136](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L136)

Allows adjustment of the duration of the window during which the signal peak
 is detected that triggers the compressor, in milliseconds. If this is 0,
 the compressor will trigger on the first peak sample.

key | value
--- | ---
default | 5
range | [0, 30]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sideChainInput

```ts
sideChainInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:169](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L169)

Side Chain Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### thresholdDb

```ts
thresholdDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gravity/v1/gravity\_nexus.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gravity/v1/gravity_nexus.ts#L58)

The level in dB on which the device starts compressing.

key | value
--- | ---
default | -10
range | [-40, 0]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
