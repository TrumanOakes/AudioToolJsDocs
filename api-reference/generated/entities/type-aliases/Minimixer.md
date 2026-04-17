---
title: "Minimixer"
parent: "entities"
grand_parent: "API"
nav_order: 80
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Minimixer

```ts
type Minimixer = {
  auxIsPreGain: PrimitiveField<boolean, "mut">;
  auxReturnInput: NexusObject<Empty>;
  auxSendGain: PrimitiveField<number, "mut">;
  auxSendOutput: NexusObject<Empty>;
  channel1: NexusObject<MinimixerChannel>;
  channel2: NexusObject<MinimixerChannel>;
  channel3: NexusObject<MinimixerChannel>;
  channel4: NexusObject<MinimixerChannel>;
  displayName: PrimitiveField<string, "mut">;
  gain: PrimitiveField<number, "mut">;
  mainOutput: NexusObject<Empty>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"minimixer"`
is |

 data structure for the minimixer

## Properties

### auxIsPreGain

```ts
auxIsPreGain: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L78)

Whether or not the aux effect will be applied before or after the main gain.

 If this is true, the aux are sent to the effect before the main gain is applied
 to them; if false, the are sent after. In both cases, the aux return remains
 unaffected by the main gain. This means, if this is true, the main gain is
 not applied to the aux at all.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### auxReturnInput

```ts
auxReturnInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L118)

the aux return output of the minimixer

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### auxSendGain

```ts
auxSendGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L64)

The aux level allows for the sum of aux sends to be leveled before
 being sent to some effect. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### auxSendOutput

```ts
auxSendOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L110)

the aux send output of the minimixer

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### channel1

```ts
channel1: NexusObject<MinimixerChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L82)

The first channel of the minimixer.

***

### channel2

```ts
channel2: NexusObject<MinimixerChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L86)

The second channel of the minimixer.

***

### channel3

```ts
channel3: NexusObject<MinimixerChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L90)

The third channel of the minimixer.

***

### channel4

```ts
channel4: NexusObject<MinimixerChannel>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L94)

The fourth channel of the minimixer.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L25)

The user-assigned name of this device.

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L53)

The main gain of the minimixer. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mainOutput

```ts
mainOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L102)

the main audio output of the minimixer

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/minimixer/v1/minimixer\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/minimixer/v1/minimixer_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
