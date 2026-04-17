---
title: "MachinisteStep"
parent: "entities"
grand_parent: "API"
nav_order: 75
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MachinisteStep

```ts
type MachinisteStep = {
  isActive: PrimitiveField<boolean, "mut">;
  modulationDepth: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:371](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L371)

key | value
--- | ---
type | object

 The step information for a single step. Each step has a modulation depth
 and a boolean flag indicating whether the step is on or off.
 The modulation depth causes the note played for that step to be modulated
 by the modulation amount assigned to every parameter for that channel
 below.

## Properties

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:379](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L379)

Whether the step is active. If is_active=false, the step is not played.

key | value
--- | ---
default | false

***

### modulationDepth

```ts
modulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:388](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L388)

The modulation depth for the step.

key | value
--- | ---
default | 1
range | [0, 1]
