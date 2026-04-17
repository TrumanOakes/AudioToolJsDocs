---
title: "Beatbox9PatternStep"
parent: "entities"
grand_parent: "API"
nav_order: 38
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox9PatternStep

```ts
type Beatbox9PatternStep = {
  bassdrumStepIndex: PrimitiveField<number, "mut">;
  clapStepIndex: PrimitiveField<number, "mut">;
  closedHihatStepIndex: PrimitiveField<number, "mut">;
  crashStepIndex: PrimitiveField<number, "mut">;
  openHihatStepIndex: PrimitiveField<number, "mut">;
  rideStepIndex: PrimitiveField<number, "mut">;
  rimStepIndex: PrimitiveField<number, "mut">;
  snaredrumStepIndex: PrimitiveField<number, "mut">;
  tomHighStepIndex: PrimitiveField<number, "mut">;
  tomLowStepIndex: PrimitiveField<number, "mut">;
  tomMidStepIndex: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:376](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L376)

key | value
--- | ---
type | object

 A single step inside a pattern

## Properties

### bassdrumStepIndex

```ts
bassdrumStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:388](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L388)

Whether the bassdrum is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### clapStepIndex

```ts
clapStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:460](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L460)

Whether the handclap is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### closedHihatStepIndex

```ts
closedHihatStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:472](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L472)

Whether the closed hihat is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### crashStepIndex

```ts
crashStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:496](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L496)

Whether the crash is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### openHihatStepIndex

```ts
openHihatStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:484](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L484)

Whether the open hihat is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### rideStepIndex

```ts
rideStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:508](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L508)

Whether the ride is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### rimStepIndex

```ts
rimStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:448](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L448)

Whether the rimshot is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### snaredrumStepIndex

```ts
snaredrumStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:400](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L400)

Whether the snaredrum is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### tomHighStepIndex

```ts
tomHighStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:436](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L436)

Whether the high tom is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### tomLowStepIndex

```ts
tomLowStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:412](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L412)

Whether the low tom is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]

***

### tomMidStepIndex

```ts
tomMidStepIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9\_nexus.ts:424](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox9/v1/beatbox9_nexus.ts#L424)

Whether the mid tom is active in this step.
 - 0: off
 - 1: active
 - 2: active and accented

key | value
--- | ---
default | 0
range | [0, 2]
