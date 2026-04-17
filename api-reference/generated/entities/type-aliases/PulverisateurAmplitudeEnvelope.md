---
title: "PulverisateurAmplitudeEnvelope"
parent: "entities"
grand_parent: "API"
nav_order: 107
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurAmplitudeEnvelope

```ts
type PulverisateurAmplitudeEnvelope = {
  attackMs: PrimitiveField<number, "mut">;
  decayIsLooped: PrimitiveField<boolean, "mut">;
  decayMs: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  sustainFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1034](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1034)

key | value
--- | ---
type | object

 The Pulverisateur's amplitude envelope.

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1044](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1044)

Duration of the attack phase of the envelope.

key | value
--- | ---
default | 1
range | [1, 5000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### decayIsLooped

```ts
decayIsLooped: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1064](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1064)

Whether the decay phase is looped. If loop_decay=true, the decay phase
 will repeat indefinitely, going forward and backward.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### decayMs

```ts
decayMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1054](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1054)

Duration of the decay phase of the envelope.

key | value
--- | ---
default | 500
range | [1, 5000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseMs

```ts
releaseMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1084](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1084)

The duration of the release phase of this envelope.

key | value
--- | ---
default | 1
range | [1, 20000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sustainFactor

```ts
sustainFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:1074](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L1074)

The sustain factor of the envelope.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
