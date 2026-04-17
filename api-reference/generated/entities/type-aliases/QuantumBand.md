---
title: "QuantumBand"
parent: "entities"
grand_parent: "API"
nav_order: 119
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: QuantumBand

```ts
type QuantumBand = {
  attackMs: PrimitiveField<number, "mut">;
  isCompressorActive: PrimitiveField<boolean, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  kneeDb: PrimitiveField<number, "mut">;
  makeupGainDb: PrimitiveField<number, "mut">;
  ratio: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  thresholdDb: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:220](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L220)

key | value
--- | ---
type | object

 data structure for the Quantum compressor band

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:260](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L260)

Attack time of the compressor band.

key | value
--- | ---
default | 5
range | [0, 1000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isCompressorActive

```ts
isCompressorActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:290](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L290)

Whether the compressor is active for this band. If is_compressor_active is false,
 the compressor is disabled, but the frequency band is still added to the final signal.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:300](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L300)

Whether the compressor band is muted or not. If is_muted is true, the entire frequency
 band is muted.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSoloed

```ts
isSoloed: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:310](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L310)

Whether the compressor band is soloed or not. If is_soloed is true, only bands
 with is_soloed true are audible.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### kneeDb

```ts
kneeDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:250](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L250)

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

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:280](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L280)

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

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:240](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L240)

Ratio of the compressor band.

key | value
--- | ---
default | 4
range | [1, 50]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseMs

```ts
releaseMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:270](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L270)

Release time of the compressor band.

key | value
--- | ---
default | 50
range | [0, 1000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### thresholdDb

```ts
thresholdDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/quantum/v1/quantum\_nexus.ts:230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/quantum/v1/quantum_nexus.ts#L230)

Threshold at which the compressor band starts compressing, expressed in dB.

key | value
--- | ---
default | -10
range | [-48, 0]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
