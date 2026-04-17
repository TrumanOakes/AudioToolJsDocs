---
title: "PulverisateurFilterEnvelope"
parent: "entities"
grand_parent: "API"
nav_order: 111
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurFilterEnvelope

```ts
type PulverisateurFilterEnvelope = {
  attackMs: PrimitiveField<number, "mut">;
  decayIsLooped: PrimitiveField<boolean, "mut">;
  decayMs: PrimitiveField<number, "mut">;
  modulationDepth: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  sustainFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:903](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L903)

key | value
--- | ---
type | object

 The Pulverisateur filter envelope.

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:913](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L913)

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

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:933](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L933)

Whether the decay phase is looped. If decay_is_looped=true, the decay phase
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

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:923](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L923)

Duration of the decay phase of the envelope.

key | value
--- | ---
default | 500
range | [1, 5000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### modulationDepth

```ts
modulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:963](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L963)

The amount of modulation applied to the filter by this envelope.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseMs

```ts
releaseMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:953](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L953)

The duration of the release phase of this envelope

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

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:943](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L943)

Sustain factor of the envelope.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
