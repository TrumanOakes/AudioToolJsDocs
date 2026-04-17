---
title: "Config"
parent: "entities"
grand_parent: "API"
nav_order: 46
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Config

```ts
type Config = {
  baseFrequencyHz: PrimitiveField<number, "mut">;
  defaultGroove: PrimitiveField<NexusLocation, "immut">;
  durationTicks: PrimitiveField<number, "mut">;
  signatureDenominator: PrimitiveField<number, "mut">;
  signatureNumerator: PrimitiveField<number, "mut">;
  tempoBpm: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/config/v1/config\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/config/v1/config_nexus.ts#L26)

key | value
--- | ---
type | entity
key | `"config"`
is |

 Represents the global project configuration.

 At most one config object can exist in a project.
 The audio engine will assume some sensible default values for the config parameters
 before the config object is created, and will keep the values set by the last
 config object if a config object is removed. When a new config object is created,
 the audio engine will use the values from the new config object.

## Properties

### baseFrequencyHz

```ts
baseFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/config/v1/config\_nexus.ts:45](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/config/v1/config_nexus.ts#L45)

The base frequency in hertz of the project. The base frequency tunes the A4 note,
 from which the frequency of all other notes are calculated.

key | value
--- | ---
default | 440
range | [400, 800]

***

### defaultGroove

```ts
defaultGroove: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/config/v1/config\_nexus.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/config/v1/config_nexus.ts#L86)

The default groove pointer.

 In the DAW, the default groove is used in various places to assign grooves to entities
 such as tracks or instruments. It can also be configure in the top bar of the DAW.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.Groove](../../api/enumerations/TargetType.html#enumeration-member-groove), meaning one of: <br />[entities.Groove](Groove.html)
immutable | true

***

### durationTicks

```ts
durationTicks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/config/v1/config\_nexus.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/config/v1/config_nexus.ts#L72)

The complete duration of the track in ticks.

key | value
--- | ---
default | 1966080
range | full

***

### signatureDenominator

```ts
signatureDenominator: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/config/v1/config\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/config/v1/config_nexus.ts#L63)

The denominator of the time signature.

key | value
--- | ---
default | 4
range | [1, 32]

***

### signatureNumerator

```ts
signatureNumerator: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/config/v1/config\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/config/v1/config_nexus.ts#L54)

The numerator of the time signature.

key | value
--- | ---
default | 4
range | [1, 32]

***

### tempoBpm

```ts
tempoBpm: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/config/v1/config\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/config/v1/config_nexus.ts#L35)

Global tempo in beats per minute of the project. Has no effect when tempo automation is used.

key | value
--- | ---
default | 125
range | [30, 1000]
