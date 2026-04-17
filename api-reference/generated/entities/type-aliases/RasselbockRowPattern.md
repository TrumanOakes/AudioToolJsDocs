---
title: "RasselbockRowPattern"
parent: "entities"
grand_parent: "API"
nav_order: 126
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RasselbockRowPattern

```ts
type RasselbockRowPattern = {
  steps: ArrayField<NexusObject<RasselbockStep>, 256>;
};
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:360](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L360)

key | value
--- | ---
type | object

 Holds the state of a pattern for a single channel or effect.

## Properties

### steps

```ts
steps: ArrayField<NexusObject<RasselbockStep>, 256>;
```

Defined in: [gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock\_nexus.ts:364](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/rasselbock/v1/rasselbock_nexus.ts#L364)

A pattern is made up of 256 steps, each representing 1/64th of a semibreve.
