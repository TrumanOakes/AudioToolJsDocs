---
title: "Kobolt"
parent: "entities"
grand_parent: "API"
nav_order: 69
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Kobolt

```ts
type Kobolt = {
  audioOutput: NexusObject<Empty>;
  channels: ArrayField<NexusObject<KoboltChannel>, 16>;
  displayName: PrimitiveField<string, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  postGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"kobolt"`
is |

 The Kobolt, a very simple 16 channel mixer.

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L65)

The audio output of the kobolt.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### channels

```ts
channels: ArrayField<NexusObject<KoboltChannel>, 16>;
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:57](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L57)

The 16 channels of the kobolt.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L25)

The user-assigned name of this device.

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L43)

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

Defined in: [gen/audiotool/document/v1/entity/kobolt/v1/kobolt\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/kobolt/v1/kobolt_nexus.ts#L53)

The post-gain of the kobolt. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
