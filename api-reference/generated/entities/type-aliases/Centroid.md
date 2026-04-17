---
title: "Centroid"
parent: "entities"
grand_parent: "API"
nav_order: 43
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Centroid

```ts
type Centroid = {
  audioOutput: NexusObject<Empty>;
  aux1: NexusObject<CentroidAux>;
  aux2: NexusObject<CentroidAux>;
  displayName: PrimitiveField<string, "mut">;
  panning: PrimitiveField<number, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"centroid"`
is | [api.TargetType.Centroid](../../api/enumerations/TargetType.html#enumeration-member-centroid)

 data structure representing the centroid mixer

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L80)

Sum Output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### aux1

```ts
aux1: NexusObject<CentroidAux>;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L68)

First centroid aux.

***

### aux2

```ts
aux2: NexusObject<CentroidAux>;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L72)

Second centroid aux.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L26)

The user-assigned name of this device.

***

### panning

```ts
panning: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L64)

Master panning. Pans the signal to left/right. -1 is fully left, 0 is centered (unchanged), 1 is fully right.

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

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L35)

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

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L44)

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

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L54)

Master gain after the summing. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
