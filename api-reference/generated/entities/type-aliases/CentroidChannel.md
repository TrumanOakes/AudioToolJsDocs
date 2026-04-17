---
title: "CentroidChannel"
parent: "entities"
grand_parent: "API"
nav_order: 45
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: CentroidChannel

```ts
type CentroidChannel = {
  audioInput: NexusObject<Empty>;
  aux1SendGain: PrimitiveField<number, "mut">;
  aux2SendGain: PrimitiveField<number, "mut">;
  centroid: PrimitiveField<NexusLocation, "immut">;
  displayName: PrimitiveField<string, "mut">;
  eqHighGainDb: PrimitiveField<number, "mut">;
  eqLowGainDb: PrimitiveField<number, "mut">;
  eqMidFrequency: PrimitiveField<number, "mut">;
  eqMidGainDb: PrimitiveField<number, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  isSoloed: PrimitiveField<boolean, "mut">;
  orderAmongChannels: PrimitiveField<number, "mut">;
  panning: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
  preGain: PrimitiveField<number, "mut">;
  useAuxPreMode: PrimitiveField<boolean, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:200](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L200)

key | value
--- | ---
type | entity
key | `"centroidChannel"`
is |

 data structure representing the centroid channel strip

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:233](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L233)

The channel's audio input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### aux1SendGain

```ts
aux1SendGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:293](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L293)

Aux 1 send level. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### aux2SendGain

```ts
aux2SendGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:303](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L303)

Aux 2 send level. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### centroid

```ts
centroid: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:211](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L211)

Centroid reference that owns this channel.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.Centroid](../../api/enumerations/TargetType.html#enumeration-member-centroid), meaning one of: <br />[entities.Centroid](Centroid.html)
immutable | true

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:225](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L225)

The user-assigned name of this channel.

***

### eqHighGainDb

```ts
eqHighGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:253](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L253)

High gain in decibels. This is the gain of the high band.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqLowGainDb

```ts
eqLowGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:283](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L283)

Low gain in decibels. This is the gain of the low band.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqMidFrequency

```ts
eqMidFrequency: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:263](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L263)

The center frequency of the mid eq band of the channel.

key | value
--- | ---
default | 1000
range | [240, 4200]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqMidGainDb

```ts
eqMidGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:273](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L273)

Mid gain in decibels. This is the gain of the mid band.

key | value
--- | ---
default | 0
range | [-24, 24]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:342](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L342)

Mute this channel. If is_muted=true, the channel is muted, including its aux sends.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isSoloed

```ts
isSoloed: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:351](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L351)

Solo this channel. If is_soloed=true, all channels that don't have is_soloed=true are muted.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### orderAmongChannels

```ts
orderAmongChannels: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:221](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L221)

Sorts this channel visually among all channels. Must be unique among
 all channels of a given centroid.

key | value
--- | ---
default | 0
range | full

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:323](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L323)

Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### postGain

```ts
postGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:333](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L333)

Post gain applied after all other processing. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:243](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L243)

Pre gain. This is the gain before the EQ. Equivalent to a dB range of [-inf, 18.0].

key | value
--- | ---
default | 1
range | [0, 7.943282127380371]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### useAuxPreMode

```ts
useAuxPreMode: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:313](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L313)

Use the "aux pre mode". If enabled, the signal is sent to the aux before
 the post_gain is applied, otherwise it is sent after.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
