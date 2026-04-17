---
title: "PulverisateurOscillatorB"
parent: "entities"
grand_parent: "API"
nav_order: 116
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurOscillatorB

```ts
type PulverisateurOscillatorB = {
  channel: NexusObject<PulverisateurChannel>;
  hardSyncToOscillatorA: PrimitiveField<boolean, "mut">;
  oscillator: NexusObject<PulverisateurOscillator>;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:337](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L337)

key | value
--- | ---
type | object

 The Pulverisateur's second oscillator. Same as the first one, but can be synced to the first one's phase.

## Properties

### channel

```ts
channel: NexusObject<PulverisateurChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:341](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L341)

Channel object containing common controls

***

### hardSyncToOscillatorA

```ts
hardSyncToOscillatorA: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:354](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L354)

If this is true, then whenever oscillator A's phase restarts, oscillator B's phase is restarted as well.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### oscillator

```ts
oscillator: NexusObject<PulverisateurOscillator>;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:345](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L345)

Oscillator object containing common controls
