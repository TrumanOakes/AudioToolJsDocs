---
title: "StompboxParametricEqualizer"
parent: "entities"
grand_parent: "API"
nav_order: 147
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxParametricEqualizer

```ts
type StompboxParametricEqualizer = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  bandwidthFactor: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  frequencyHz: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  postGainDb: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"stompboxParametricEqualizer"`
is |

 A parametric equalizer in the form of a stompbox.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L90)

Single Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L98)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### bandwidthFactor

```ts
bandwidthFactor: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L63)

The width of the affected frequency range.

key | value
--- | ---
default | 0.15000000596046448
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L25)

The user-assigned name of this device.

***

### frequencyHz

```ts
frequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L53)

The center frequency of the range being EQ'd.

key | value
--- | ---
default | 3600
range | [31, 12000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L82)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### postGainDb

```ts
postGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_parametric\_equalizer/v1/stompbox\_parametric\_equalizer\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_parametric_equalizer/v1/stompbox_parametric_equalizer_nexus.ts#L73)

Gain applied to the frequency range in dB.

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
