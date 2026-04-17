---
title: "Pulsar"
parent: "entities"
grand_parent: "API"
nav_order: 105
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Pulsar

```ts
type Pulsar = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  dryGain: PrimitiveField<number, "mut">;
  feedbackDelayTimeMs: PrimitiveField<number, "mut">;
  feedbackDelayTimeSemibreveIndex: PrimitiveField<number, "mut">;
  feedbackFactor: PrimitiveField<number, "mut">;
  filterMaxHz: PrimitiveField<number, "mut">;
  filterMinHz: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  lfoModulationDepthMs: PrimitiveField<number, "mut">;
  lfoSpeedHz: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  preDelayLeftPanning: PrimitiveField<number, "mut">;
  preDelayLeftTimeMs: PrimitiveField<number, "mut">;
  preDelayLeftTimeSemibreveIndex: PrimitiveField<number, "mut">;
  preDelayRightPanning: PrimitiveField<number, "mut">;
  preDelayRightTimeMs: PrimitiveField<number, "mut">;
  preDelayRightTimeSemibreveIndex: PrimitiveField<number, "mut">;
  stereoCrossFactor: PrimitiveField<number, "mut">;
  wetGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L27)

key | value
--- | ---
type | entity
key | `"pulsar"`
is |

 The Pulsar delay is an advanced delay effect.

 The pre-delay allows adjusting the delay time for the left and right channel independently,
 and further allows panning the left/right channel for the pre-delay independently.

 The main delay controls allow applying a filter, setting sync and unsynced delay times, and applying
 a LFO to modulate the delay amount continuously.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:273](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L273)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:281](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L281)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L31)

The user-assigned name of this device.

***

### dryGain

```ts
dryGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:246](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L246)

The gain applied to the (unprocessed) incoming signal that's added to the output mix. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### feedbackDelayTimeMs

```ts
feedbackDelayTimeMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:173](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L173)

Milliseconds duration of the main delay feedback. Added to feedback_delay_time_semibreve internally.

key | value
--- | ---
default | 0
range | [0, 500]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### feedbackDelayTimeSemibreveIndex

```ts
feedbackDelayTimeSemibreveIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:163](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L163)

Semibreve (music time) duration of the main delay feedback.
 Is added with the milliseconds delay time internally to calculate the actual interval time
 - 0: invalid
 - 1:  0    semibreve
 - 2:  1/16 semibreve
 - 3:  1/12 semibreve
 - 4:  1/8  semibreve
 - 5:  1/6  semibreve
 - 6:  3/16 semibreve
 - 7:  1/4  semibreve
 - 8:  5/16 semibreve
 - 9:  1/3  semibreve
 - 10:  3/8  semibreve
 - 11: 7/16 semibreve
 - 12: 1/2  semibreve

key | value
--- | ---
default | 1
range | [1, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### feedbackFactor

```ts
feedbackFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:203](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L203)

The feedback factor of the main delay.

key | value
--- | ---
default | 0.699999988079071
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterMaxHz

```ts
filterMaxHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:236](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L236)

The max frequency cutoff for the lowpass filter applied to the feedback signal.

key | value
--- | ---
default | 20000
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### filterMinHz

```ts
filterMinHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:226](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L226)

The min frequency cutoff for the highpass filter applied to the feedback signal.

key | value
--- | ---
default | 20
range | [20, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:265](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L265)

Whether the device is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoModulationDepthMs

```ts
lfoModulationDepthMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:193](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L193)

The delay-time modulating LFO's depth in milliseconds.

key | value
--- | ---
default | 0
range | [0, 50]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoSpeedHz

```ts
lfoSpeedHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:183](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L183)

The delay-time modulating LFO's speed in Hz.

key | value
--- | ---
default | 5
range | [0.10000000149011612, 25]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L40)

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

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L49)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### preDelayLeftPanning

```ts
preDelayLeftPanning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L94)

Panning of the left channel of the pre-delay. This value controls the panning of the delayed signal.
 -1 is fully left (unchanged), 0 is centered, 1 is fully right.

key | value
--- | ---
default | -1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preDelayLeftTimeMs

```ts
preDelayLeftTimeMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L83)

Milliseconds duration of the pre-delay of the left channel. Added to pre_delay_left_time_semibreve internally.

key | value
--- | ---
default | 0
range | [0, 500]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preDelayLeftTimeSemibreveIndex

```ts
preDelayLeftTimeSemibreveIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L73)

Semibreve (music time) duration of the pre-delay of the left channel.
 Is added with the milliseconds delay time internally to calculate the actual pre-delay time.
 - 0: invalid
 - 1:  0    semibreve
 - 2:  1/16 semibreve
 - 3:  1/12 semibreve
 - 4:  1/8  semibreve
 - 5:  1/6  semibreve
 - 6:  3/16 semibreve
 - 7:  1/4  semibreve
 - 8:  5/16 semibreve
 - 9:  1/3  semibreve
 - 10:  3/8  semibreve
 - 11: 7/16 semibreve
 - 12: 1/2  semibreve

key | value
--- | ---
default | 1
range | [1, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preDelayRightPanning

```ts
preDelayRightPanning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L139)

Panning of the right channel of the pre-delay. This value controls the panning of the delayed signal.
 -1 is fully left, 0 is centered, 1 is fully right (unchanged).

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preDelayRightTimeMs

```ts
preDelayRightTimeMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:128](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L128)

Milliseconds duration of the pre-delay of the right channel. Added to pre_delay_right_time_semibreve internally.

key | value
--- | ---
default | 0
range | [0, 500]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preDelayRightTimeSemibreveIndex

```ts
preDelayRightTimeSemibreveIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L118)

Semibreve (music time) duration of the pre-delay of the right channel.
 Is added with the milliseconds delay time internally to calculate the actual pre-delay time.
 - 0: invalid
 - 1:  0/1  semibreve
 - 2:  1/16 semibreve
 - 3:  1/12 semibreve
 - 4:  1/8  semibreve
 - 5:  1/6  semibreve
 - 6:  3/16 semibreve
 - 7:  1/4  semibreve
 - 8:  5/16 semibreve
 - 9:  1/3  semibreve
 - 10: 3/8  semibreve
 - 11: 7/16 semibreve
 - 12: 1/2  semibreve

key | value
--- | ---
default | 3
range | [1, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stereoCrossFactor

```ts
stereoCrossFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:216](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L216)

This controls to what extend the signal swaps left/right channel on every feedback cycle:
 1: fully swapped,
 0.5: turned into mono
 0: unmodified

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### wetGain

```ts
wetGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulsar/v1/pulsar\_nexus.ts:256](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulsar/v1/pulsar_nexus.ts#L256)

The gain applied to the (processed) delayed signal that's added to the output mix. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.699999988079071
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
