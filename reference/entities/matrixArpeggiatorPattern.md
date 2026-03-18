---
title: matrixArpeggiatorPattern
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# matrixArpeggiatorPattern

**Module:** `@audiotool/nexus/entities`

A matrixArpeggiatorPattern defines the sequence of steps for a matrix arpeggiator. It contains one or more `matrixArpeggiatorPatternStep` entities that each specify what happens at that position in the arpeggio sequence. Together, they drive the arpeggiator's rhythmic and harmonic movement.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property. Pass `entity.location` wherever a pointer field is expected.

## Fields

> For the full list of pattern configuration fields, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
// Use createTransaction() to build the pattern and its steps together
const t = await document.createTransaction();

// Create the arpeggiator pattern
const pattern = t.create("matrixArpeggiatorPattern", {});

// Add steps to the pattern — each step references the pattern
t.create("matrixArpeggiatorPatternStep", {
  pattern: pattern.location,  // pointer uses .location
});

t.create("matrixArpeggiatorPatternStep", {
  pattern: pattern.location,
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [matrixArpeggiatorPatternStep](matrixArpeggiatorPatternStep.md) — individual steps within this pattern
- [Making Changes](../../how-nexus-works/making-changes.md) — `createTransaction()` and `modify()` explained
