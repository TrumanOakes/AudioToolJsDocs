---
title: "TonematrixStep"
parent: "entities"
grand_parent: "API"
nav_order: 158
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: TonematrixStep

```ts
type TonematrixStep = {
  notes: ArrayField<PrimitiveField<boolean, "mut">, 16>;
};
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:236](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L236)

key | value
--- | ---
type | object

 A step for a tonematrix pattern.

## Properties

### notes

```ts
notes: ArrayField<PrimitiveField<boolean, "mut">, 16>;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:246](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L246)

Represents which notes are active (0 is top, 15 is bottom).
 Notes are pentatonic starting from C4 (at the bottom), so notes are
 in reverse order: C4, D4, F4, G4, A4; C5, D5, etc.

key | value
--- | ---
default | false
