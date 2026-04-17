---
title: "Helmholtz"
parent: "entities"
grand_parent: "API"
nav_order: 67
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Helmholtz

```ts
type Helmholtz = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  decayTime: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  filters: ArrayField<NexusObject<HelmholtzFilter>, 5>;
  gain: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  microTuning: PrimitiveField<NexusLocation, "mut">;
  mix: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L31)

key | value
--- | ---
type | entity
key | `"helmholtz"`
is |

 The Helmholtz is a device that has up to 5 short delay lines
 that can be tuned to make certain frequencies resonate,
 resulting in something akin to a comb filter, i.e. a filter
 that filters out frequencies that are multiples of a certain frequency.

 The filter frequencies can be set to specific notes such as C4, D3, etc.

 Because it's implemented with delay lines, the Helmholtz sounds like
 it's "resonating" and highlighting certain frequencies and their overtones,
 and the resonance frequencies will sound after the incoming signal has become quiet.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:117](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L117)

Audio input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L125)

Audio output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### decayTime

```ts
decayTime: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L85)

The decay time of the delay lines. Increasing this value will make the
 Helmholtz resonate for longer and louder after the incoming signal has become quiet.
 No unit.

key | value
--- | ---
default | 0.75
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L35)

The user-assigned name of this device.

***

### filters

```ts
filters: ArrayField<NexusObject<HelmholtzFilter>, 5>;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L109)

The 5 filters/delay lines of the Helmholtz.

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L73)

This device's output gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.7079399824142456
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L105)

Whether the device is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### microTuning

```ts
microTuning: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L63)

Reference to the microtuning.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.MicroTuning](../../api/enumerations/TargetType.html#enumeration-member-microtuning), meaning one of: <br />[entities.MicroTuningOctave](MicroTuningOctave.html)

***

### mix

```ts
mix: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L96)

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

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L44)

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

Defined in: [gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/helmholtz/v1/helmholtz_nexus.ts#L53)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
