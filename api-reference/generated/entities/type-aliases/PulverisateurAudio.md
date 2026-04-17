---
title: "PulverisateurAudio"
parent: "entities"
grand_parent: "API"
nav_order: 108
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurAudio

```ts
type PulverisateurAudio = {
  channel: NexusObject<PulverisateurChannel>;
  drive: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:500](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L500)

key | value
--- | ---
type | object

 Data structure for Pulverisateur's audio input channel.
 Audio connected to this input passes through the Pulverisateur as though it were one of the oscillators.

## Properties

### channel

```ts
channel: NexusObject<PulverisateurChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:504](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L504)

Channel object containing common controls

***

### drive

```ts
drive: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:514](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L514)

The drive parameter applies some distortion to the incoming signal similar to the waveshaper device.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
