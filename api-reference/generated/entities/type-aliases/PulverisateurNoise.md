---
title: "PulverisateurNoise"
parent: "entities"
grand_parent: "API"
nav_order: 113
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurNoise

```ts
type PulverisateurNoise = {
  channel: NexusObject<PulverisateurChannel>;
  color: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:441](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L441)

key | value
--- | ---
type | object

 The Pulverisateur's noise generator.

## Properties

### channel

```ts
channel: NexusObject<PulverisateurChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:445](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L445)

Channel object containing common controls

***

### color

```ts
color: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:462](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L462)

Color of noise. Meaning of values:
 - 0:    brown noise
 - 0.2:  pink noise
 - 0.5:  white noise
 - 0.8:  blue noise
 - 1:    purple noise

 Values between any two of these linearly mix the two colors.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
