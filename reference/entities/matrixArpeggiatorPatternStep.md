---
title: matrixArpeggiatorPatternStep
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# matrixArpeggiatorPatternStep

**Module:** `@audiotool/nexus/entities`

A matrixArpeggiatorPatternStep is a single step within a `matrixArpeggiatorPattern`. Each step specifies its behavior at that position in the arpeggio sequence. A pattern is composed of multiple ordered steps.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property. Pass `entity.location` wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `pattern` | pointer | Points to the `matrixArpeggiatorPattern` this step belongs to — use `pattern.location` |

> For the complete field listing with types, defaults, and ranges, see [MatrixArpeggiatorPatternStep](../../api-reference/generated/entities/type-aliases/MatrixArpeggiatorPatternStep.html).

## Example

```typescript
// Use createTransaction() to create the pattern and its steps together
const t = await nexus.createTransaction();

// Create the parent pattern
const pattern = t.create("matrixArpeggiatorPattern", {});

// Create steps — each points back to the pattern using .location
t.create("matrixArpeggiatorPatternStep", {
  pattern: pattern.location,
});

t.create("matrixArpeggiatorPatternStep", {
  pattern: pattern.location,
});

t.create("matrixArpeggiatorPatternStep", {
  pattern: pattern.location,
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [matrixArpeggiatorPattern](matrixArpeggiatorPattern.html) — the parent pattern this step belongs to
- [Making Changes](../../how-nexus-works/making-changes.html) — `createTransaction()` and `modify()` explained
