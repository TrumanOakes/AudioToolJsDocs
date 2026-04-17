---
title: "StompboxChorus"
parent: "entities"
grand_parent: "API"
nav_order: 141
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxChorus

```ts
type StompboxChorus = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  delayTimeMs: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  feedbackFactor: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  lfoFrequencyHz: PrimitiveField<number, "mut">;
  lfoModulationDepth: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  spreadFactor: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"stompboxChorus"`
is |

 A chorus effect in the form of a stompbox.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:112](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L112)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:120](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L120)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### delayTimeMs

```ts
delayTimeMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L54)

Allows control of the Chorus' short delay. Higher values results in a more
 noticeable chorus effect.

key | value
--- | ---
default | 20
range | [20, 40]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L25)

The user-assigned name of this device.

***

### feedbackFactor

```ts
feedbackFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L65)

Controls the amount of the signal that is fed back into the effect after
 the delay line. A higher value means the chorus sounds longer.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:104](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L104)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoFrequencyHz

```ts
lfoFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L75)

Allows adjustment of the speed of the chorus effect in hertz.

key | value
--- | ---
default | 0.33329999446868896
range | [0.10000000149011612, 5]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lfoModulationDepth

```ts
lfoModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L85)

The amount the LFO influences the delay_time_ms parameter.

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### spreadFactor

```ts
spreadFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_chorus/v1/stompbox\_chorus\_nexus.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_chorus/v1/stompbox_chorus_nexus.ts#L95)

Allows adjustment of the perceived width of the of effect.

key | value
--- | ---
default | 0
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
