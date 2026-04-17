---
title: "MixerCompressor"
parent: "entities"
grand_parent: "API"
nav_order: 85
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerCompressor

```ts
type MixerCompressor = {
  attackMs: PrimitiveField<number, "mut">;
  detectionModeIndex: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  makeupGainDb: PrimitiveField<number, "mut">;
  ratio: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  sideChainInput: NexusObject<Empty>;
  thresholdDb: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:18](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L18)

key | value
--- | ---
type | object

 Compressor for channel and group strips. This is not an entity but a submessage used by other strips.

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L28)

Attack speed of the compressor.

key | value
--- | ---
default | 15
range | [0.0010000000474974513, 200]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### detectionModeIndex

```ts
detectionModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L61)

Selects the compressor detection mode.
 - 0: invalid
 - 1: Rms
 - 2: Peak

key | value
--- | ---
default | 1
range | [1, 2]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L90)

Whether the compressor is active or not. If is_active=false, the compressor is bypassed.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### makeupGainDb

```ts
makeupGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L48)

Makeup gain applied to the signal after compression.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### ratio

```ts
ratio: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L71)

Ratio of the compressor.

key | value
--- | ---
default | 2
range | [1, 50]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseMs

```ts
releaseMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L38)

Release speed of the compressor.

key | value
--- | ---
default | 100
range | [0.0010000000474974513, 2000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sideChainInput

```ts
sideChainInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L98)

Side chain input for this compressor.

key | value
--- | ---
is | [api.TargetType.MixerSideChainInput](../../api/enumerations/TargetType.html#enumeration-member-mixersidechaininput)

***

### thresholdDb

```ts
thresholdDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_compressor\_nexus.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_compressor_nexus.ts#L81)

Threshold decibels of the compressor.

key | value
--- | ---
default | -10
range | [-48, 0]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
