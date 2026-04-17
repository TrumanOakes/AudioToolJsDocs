---
title: "MixerMaster"
parent: "entities"
grand_parent: "API"
nav_order: 89
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerMaster

```ts
type MixerMaster = {
  doBypassInserts: PrimitiveField<boolean, "mut">;
  insertInput: NexusObject<Empty>;
  insertOutput: NexusObject<Empty>;
  isMuted: PrimitiveField<boolean, "mut">;
  limiterEnabled: PrimitiveField<boolean, "mut">;
  panning: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L26)

key | value
--- | ---
type | entity
key | `"mixerMaster"`
is |

 The master strip of the DAW. Audio that passes through this strip is audible, audio that doesn't
 pass through this strip is not audible (unless cuing is enabled).

 The master can be placed on the desktop. In the DAW, it's represented as the "stagebox", which contains all audio sockets
 from the mixer so they can be connected to devices on the desktop. The position of the stagebox in the DAW
 is determined by the position_x and position_y fields.

## Properties

### doBypassInserts

```ts
doBypassInserts: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L52)

If this is true, the audio will bypass inserts. This is true automatically if both insert_output and insert_input are not connected.

key | value
--- | ---
default | false

***

### insertInput

```ts
insertInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L68)

Insert returning to the strip. Represented on stage box.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### insertOutput

```ts
insertOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L60)

Insert leaving the strip. Represented on stage box.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L109)

Mutes everything. Why? Why not.

key | value
--- | ---
default | false

***

### limiterEnabled

```ts
limiterEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L101)

Whether the limited is enabled or not. The limiter reduces the volume of the output signal
 to 0dB by reducing the incoming signal if it exceeds this threshold in a smooth manner, otherwise
 it leaves the signal untouched.

 Enabling the limiter incurs a global latency penalty of 20ms for the entire project
 because the limiter has to "look ahead" the signal to have smooth volume reduction.

key | value
--- | ---
default | false

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L78)

Panning of the entire project. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

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

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L35)

X position of the stagebox in the DAW. The Stagebox represents the entire mixer on the desktop.

key | value
--- | ---
default | 0
range | full

***

### positionY

```ts
positionY: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L44)

Y position of the stagebox in the DAW. The Stagebox represents the entire mixer on the desktop.

key | value
--- | ---
default | 0
range | full

***

### postGain

```ts
postGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_master\_nexus.ts:88](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_master_nexus.ts#L88)

Gain right before the signal leaves the mixer, before the limiter is applied. Equivalent to a dB range of [-inf, 6.0].

key | value
--- | ---
default | 1
range | [0, 1.9952620267868042]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
