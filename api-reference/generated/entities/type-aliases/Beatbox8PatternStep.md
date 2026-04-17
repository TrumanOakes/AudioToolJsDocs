---
title: "Beatbox8PatternStep"
parent: "entities"
grand_parent: "API"
nav_order: 26
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox8PatternStep

```ts
type Beatbox8PatternStep = {
  bassdrumIsActive: PrimitiveField<boolean, "mut">;
  clapMaracasIsActive: PrimitiveField<boolean, "mut">;
  closedHihatIsActive: PrimitiveField<boolean, "mut">;
  cowbellIsActive: PrimitiveField<boolean, "mut">;
  cymbalIsActive: PrimitiveField<boolean, "mut">;
  isAccented: PrimitiveField<boolean, "mut">;
  openHihatIsActive: PrimitiveField<boolean, "mut">;
  rimClavesIsActive: PrimitiveField<boolean, "mut">;
  snaredrumIsActive: PrimitiveField<boolean, "mut">;
  tomCongaHighIsActive: PrimitiveField<boolean, "mut">;
  tomCongaLowIsActive: PrimitiveField<boolean, "mut">;
  tomCongaMidIsActive: PrimitiveField<boolean, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:391](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L391)

key | value
--- | ---
type | object

 A single step inside a pattern

## Properties

### bassdrumIsActive

```ts
bassdrumIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:399](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L399)

Whether the bassdrum is active in this step.

key | value
--- | ---
default | false

***

### clapMaracasIsActive

```ts
clapMaracasIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:447](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L447)

Whether the handclap/maracas is active in this step.

key | value
--- | ---
default | false

***

### closedHihatIsActive

```ts
closedHihatIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:479](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L479)

Whether the closed hihat is active in this step.

key | value
--- | ---
default | false

***

### cowbellIsActive

```ts
cowbellIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:455](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L455)

Whether the cowbell is active in this step.

key | value
--- | ---
default | false

***

### cymbalIsActive

```ts
cymbalIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:463](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L463)

Whether the cymbal is active in this step.

key | value
--- | ---
default | false

***

### isAccented

```ts
isAccented: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:487](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L487)

If this is true, all active instruments in this step are accented, i.e. they are played louder than the other steps.

key | value
--- | ---
default | false

***

### openHihatIsActive

```ts
openHihatIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:471](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L471)

Whether the open hihat is active in this step.

key | value
--- | ---
default | false

***

### rimClavesIsActive

```ts
rimClavesIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:439](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L439)

Whether the rimshot/claves is active in this step.

key | value
--- | ---
default | false

***

### snaredrumIsActive

```ts
snaredrumIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:407](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L407)

Whether the snaredrum is active in this step.

key | value
--- | ---
default | false

***

### tomCongaHighIsActive

```ts
tomCongaHighIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:431](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L431)

Whether the high tom/high conga is active in this step.

key | value
--- | ---
default | false

***

### tomCongaLowIsActive

```ts
tomCongaLowIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:415](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L415)

Whether the low tom/low conga is active in this step.

key | value
--- | ---
default | false

***

### tomCongaMidIsActive

```ts
tomCongaMidIsActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:423](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L423)

Whether the mid tom/mid conga is active in this step.

key | value
--- | ---
default | false
