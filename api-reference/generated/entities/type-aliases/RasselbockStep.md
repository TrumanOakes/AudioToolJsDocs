---
title: "RasselbockStep"
parent: "entities"
grand_parent: "API"
nav_order: 130
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockStep

```ts
type RasselbockStep = {
  isEnd: PrimitiveField<boolean, "mut">;
  isOn: PrimitiveField<boolean, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:389](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L389)

key | value
--- | ---
type | object

 Holds the state for an individual pattern step. Visually/acoustically,
 a step can have more than 1 1/64th of a duration. Steps like these
 are represented as multiple consecutive steps that each have is_on=true
 and is_end=false. Multiple consecutive steps with is_on=true and is_end=true
 result in individual consecutive 1/64th-long steps.

## Properties

### isEnd

```ts
isEnd: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:405](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L405)

whether the step is an end of a region (multiple steps connected)

key | value
--- | ---
default | false

***

### isOn

```ts
isOn: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:397](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L397)

whether the step is on.

key | value
--- | ---
default | false
