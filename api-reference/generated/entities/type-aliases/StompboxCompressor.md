---
title: "StompboxCompressor"
parent: "entities"
grand_parent: "API"
nav_order: 142
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: StompboxCompressor

```ts
type StompboxCompressor = {
  attackMs: PrimitiveField<number, "mut">;
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  detectionModeIndex: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  makeupGainDb: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  ratio: PrimitiveField<number, "mut">;
  releaseMs: PrimitiveField<number, "mut">;
  sideChainInput: NexusObject<Empty>;
  thresholdDb: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"stompboxCompressor"`
is |

 A simple compressor in the form of a stompbox.

## Properties

### attackMs

```ts
attackMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L53)

Attack speed of the compressor.

key | value
--- | ---
default | 5
range | [1, 100]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:123](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L123)

Primary Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L139)

Single Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### detectionModeIndex

```ts
detectionModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L86)

Selects the compressor detection mode.
 - 0: invalid
 - 1: moving average
 - 2: peak

key | value
--- | ---
default | 1
range | [1, 2]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L25)

The user-assigned name of this device.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L115)

Whether the stompbox is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### makeupGainDb

```ts
makeupGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L73)

Makeup gain applied to the signal after compression.

key | value
--- | ---
default | 0
range | [-12, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### ratio

```ts
ratio: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L96)

Ratio of the compressor.

key | value
--- | ---
default | 0.4000000059604645
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### releaseMs

```ts
releaseMs: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L63)

Release speed of the compressor.

key | value
--- | ---
default | 25
range | [1, 600]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### sideChainInput

```ts
sideChainInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:131](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L131)

Side Chain Input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### thresholdDb

```ts
thresholdDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/stompbox\_compressor/v1/stompbox\_compressor\_nexus.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/stompbox_compressor/v1/stompbox_compressor_nexus.ts#L106)

Threshold above which compression kicks in.

key | value
--- | ---
default | -15
range | [-24, 0]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
