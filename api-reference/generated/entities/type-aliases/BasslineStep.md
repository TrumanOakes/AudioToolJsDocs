---
title: "BasslineStep"
parent: "entities"
grand_parent: "API"
nav_order: 17
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: BasslineStep

```ts
type BasslineStep = {
  doesSlide: PrimitiveField<boolean, "mut">;
  isAccented: PrimitiveField<boolean, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  key: PrimitiveField<number, "mut">;
  transposeOctaves: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:419](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L419)

key | value
--- | ---
type | object

 a single step in a BasslinePattern

## Properties

### doesSlide

```ts
doesSlide: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:453](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L453)

If this is true, the note for this step slides from the last note played.

key | value
--- | ---
default | false

***

### isAccented

```ts
isAccented: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:461](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L461)

If this is true, the note for this step is accented, i.e. it is played louder than the other notes.

key | value
--- | ---
default | false

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:445](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L445)

Controls whether the note for this step is active. If `is_active=false`, the note for this step is not played.

key | value
--- | ---
default | true

***

### key

```ts
key: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:428](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L428)

MIDI key that specifies the note to be played in combination with transpose. For pattern steps, it covers one octave only.

key | value
--- | ---
default | 36
range | [36, 48]

***

### transposeOctaves

```ts
transposeOctaves: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/bassline/v1/bassline\_nexus.ts:437](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/bassline/v1/bassline_nexus.ts#L437)

In the bassline, each step can be transposed one octave up or down.

key | value
--- | ---
default | 0
range | [-1, 1]
