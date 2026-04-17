---
title: "MachinisteChannelPattern"
parent: "entities"
grand_parent: "API"
nav_order: 73
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MachinisteChannelPattern

```ts
type MachinisteChannelPattern = {
  isExclusive: PrimitiveField<boolean, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  steps: ArrayField<NexusObject<MachinisteStep>, 128>;
};
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:310](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L310)

key | value
--- | ---
type | object

 Holds the pattern steps for a single machiniste chanel.

## Properties

### isExclusive

```ts
isExclusive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:318](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L318)

Specifies whether the channel is grouped as "exclusive", preventing channels from playing notes on the same step

key | value
--- | ---
default | false

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:326](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L326)

Specifies whether the channel is muted

key | value
--- | ---
default | false

***

### steps

```ts
steps: ArrayField<NexusObject<MachinisteStep>, 128>;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:330](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L330)

Storage of the pattern steps.
