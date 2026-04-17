---
title: "Crossfader"
parent: "entities"
grand_parent: "API"
nav_order: 47
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Crossfader

```ts
type Crossfader = {
  audioOutput: NexusObject<Empty>;
  blendModeIndex: PrimitiveField<number, "mut">;
  channelA: NexusObject<CrossfaderChannel>;
  channelB: NexusObject<CrossfaderChannel>;
  crossfade: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  panning: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"crossfader"`
is |

 The crossfader is a tiny mixer with 2 input channels.

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L103)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### blendModeIndex

```ts
blendModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L87)

The algorithm used to blend the two input channels.
 0: invalid
 1: Quadratic
 2: Center
 3: Linear

key | value
--- | ---
default | 1
range | [1, 3]

***

### channelA

```ts
channelA: NexusObject<CrossfaderChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L91)

The first input channel (channel "A") of the crossfader.

***

### channelB

```ts
channelB: NexusObject<CrossfaderChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L95)

The second input channel (channel "B") of the crossfader.

***

### crossfade

```ts
crossfade: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L64)

Determines how the crossfade blends between channel A & channel B.
 -1 is fully channel A, 0 is balanced, 1 is fully channel B.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L25)

The user-assigned name of this device.

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L74)

Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### postGain

```ts
postGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L53)

The "master gain" crossfader. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
