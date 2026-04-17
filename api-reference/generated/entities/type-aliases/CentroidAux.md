---
title: "CentroidAux"
parent: "entities"
grand_parent: "API"
nav_order: 44
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: CentroidAux

```ts
type CentroidAux = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  sendGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:145](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L145)

key | value
--- | ---
type | object

 data structure representing the aux of the centroid mixer

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:163](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L163)

Aux input.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L171)

Aux output.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### sendGain

```ts
sendGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/centroid/v1/centroid\_nexus.ts:155](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/centroid/v1/centroid_nexus.ts#L155)

Gain applied before the is sent to the aux output. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
