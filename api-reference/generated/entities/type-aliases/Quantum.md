---
title: "Quantum"
parent: "entities"
grand_parent: "API"
nav_order: 118
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Quantum

```ts
type Quantum = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  bands: ArrayField<NexusObject<QuantumBand>, 4>;
  displayName: PrimitiveField<string, "mut">;
  gainDb: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  rmsWindowMs: PrimitiveField<number, "mut">;
  spectrumModeIndex: PrimitiveField<number, "mut">;
  splitFrequencyHz: ArrayField<PrimitiveField<number, "mut">, 3>;
};
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"quantum"`
is |

 The Quantum device, a multi-band compressor. It's essentially a band splitter,
 then a compressor for each band, then a merger.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:114](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L114)

Audio Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:122](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L122)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### bands

```ts
bands: ArrayField<NexusObject<QuantumBand>, 4>;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L106)

Compressor bands.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L26)

The user-assigned name of this device.

***

### gainDb

```ts
gainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L54)

Gain of the compressor.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L75)

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

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L35)

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

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L44)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### rmsWindowMs

```ts
rmsWindowMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:66](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L66)

Allows adjustment of the duration of the window during which the signal peak
 is detected that triggers the compressors, in milliseconds. If this is 0,
 the compressor will trigger on the first peak sample.

key | value
--- | ---
default | 5
range | [0, 30]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### spectrumModeIndex

```ts
spectrumModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:89](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L89)

Selects the spectrum mode of the quantum. This only affects the visual representation
 in the DAW.
 - 0: invalid
 - 1: Off   - no spectrum is displayed
 - 2: Pre   - the spectrum is displayed before the compression is applied
 - 3: Post  - the spectrum is displayed after the compression is applied

key | value
--- | ---
default | 2
range | [1, 3]

***

### splitFrequencyHz

```ts
splitFrequencyHz: ArrayField<PrimitiveField<number, "mut">, 3>;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L102)

The frequencies that split the different frequency bands for the band splitter.
 There are 4 frequency bands, thus 3 split points.

 These frequencies should be ordered in magnitude. If they aren't, then the different
 bands might overlap or not produce any sound at all.

key | value
--- | ---
default | 20
range | [20, 20000]
