---
title: "Rasselbock"
parent: "entities"
grand_parent: "API"
nav_order: 121
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Rasselbock

```ts
type Rasselbock = {
  audioInput: NexusObject<Empty>;
  channelConfigs: ArrayField<NexusObject<RasselbockChannel>, 5>;
  displayName: PrimitiveField<string, "mut">;
  gateConfig: NexusObject<RasselbockGate>;
  isActive: PrimitiveField<boolean, "mut">;
  masterOutput: NexusObject<Empty>;
  patternIndex: PrimitiveField<number, "mut">;
  patternSlots: ArrayField<NexusObject<Empty>, 32>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  reverseConfig: NexusObject<RasselbockReverse>;
  scratchConfig: NexusObject<RasselbockScratch>;
  shuffleConfig: NexusObject<RasselbockShuffle>;
  speedConfig: NexusObject<RasselbockSpeed>;
  stopConfig: NexusObject<RasselbockStop>;
  stutterConfig: NexusObject<RasselbockStutter>;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L26)

key | value
--- | ---
type | entity
key | `"rasselbock"`
is | [api.TargetType.PatternTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-patterntrackplayer)

 The Rasselbock is a multi-purpose effects device that has patterns
 that can turn different modules on or off over time.

 The patterns can toggle a variety of effects, plus a few "channels"
 that can be toggled  audio to a different output if enabled.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L108)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### channelConfigs

```ts
channelConfigs: ArrayField<NexusObject<RasselbockChannel>, 5>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L72)

Each rasselbock channel's configuration. Channels configure the re-routing
 of audio to a different output.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L30)

The user-assigned name of this device.

***

### gateConfig

```ts
gateConfig: NexusObject<RasselbockGate>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L88)

The gate effect's configuration.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:127](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L127)

Whether the device is active or not. When is_active=false,
 audio signals bypass the effects and go directly to the main output.
 The secondary channels are quiet.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### masterOutput

```ts
masterOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:116](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L116)

The master output that doesn't go through any channels

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### patternIndex

```ts
patternIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:67](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L67)

The index of the currently selected pattern. Determines which pattern the Rasselbock
 currently plays back, unless a pattern track is connected to it.

key | value
--- | ---
default | 0
range | [0, 31]

***

### patternSlots

```ts
patternSlots: ArrayField<NexusObject<Empty>, 32>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:57](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L57)

Empty fields which RasselbockPatterns can point to. At most one pattern
 can point to a specific element in this list.

key | value
--- | ---
element is | [api.TargetType.RasselbockPatternSlot](../../api/enumerations/TargetType.html#enumeration-member-rasselbockpatternslot)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L39)

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

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L48)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### reverseConfig

```ts
reverseConfig: NexusObject<RasselbockReverse>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:100](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L100)

The reverse effect's configuration.

***

### scratchConfig

```ts
scratchConfig: NexusObject<RasselbockScratch>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L96)

The scratch effect's configuration.

***

### shuffleConfig

```ts
shuffleConfig: NexusObject<RasselbockShuffle>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L76)

The shuffle effect's configuration.

***

### speedConfig

```ts
speedConfig: NexusObject<RasselbockSpeed>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L80)

The speed effect's configuration.

***

### stopConfig

```ts
stopConfig: NexusObject<RasselbockStop>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L84)

The stop effect's configuration.

***

### stutterConfig

```ts
stutterConfig: NexusObject<RasselbockStutter>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L92)

The stutter effect's configuration.
