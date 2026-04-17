---
title: "PulverisateurOscillatorC"
parent: "entities"
grand_parent: "API"
nav_order: 117
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PulverisateurOscillatorC

```ts
type PulverisateurOscillatorC = {
  channel: NexusObject<PulverisateurChannel>;
  doesTrackKeyboard: PrimitiveField<boolean, "mut">;
  oscillator: NexusObject<PulverisateurOscillator>;
};
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:387](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L387)

key | value
--- | ---
type | object

 The Pulverisateur's third oscillator. Same as the first one, but can be tracked by the keyboard.

## Properties

### channel

```ts
channel: NexusObject<PulverisateurChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:391](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L391)

Channel object containing common controls

***

### doesTrackKeyboard

```ts
doesTrackKeyboard: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:406](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L406)

Whether this oscillator's pitch is tracked by the keyboard.
 If does_track_keyboard is off, then the oscillator plays as if every incoming note was a C4/midi 60.
 If it's on, it behaves the same as oscillator A & B.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### oscillator

```ts
oscillator: NexusObject<PulverisateurOscillator>;
```

Defined in: [gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur\_nexus.ts:395](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/pulverisateur/v1/pulverisateur_nexus.ts#L395)

Oscillator object containing common controls
