---
title: tonematrixPattern
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# tonematrixPattern

**Module:** `@audiotool/nexus/entities`

A tonematrixPattern holds the step-sequencer grid state for a `tonematrix` device. The Tonematrix is a 16×16 (or similar) step sequencer — each pattern stores which steps are active. You create a pattern and associate it with a Tonematrix device to program its sequence.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property. Pass `entity.location` wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `device` | pointer | Points to the `tonematrix` device this pattern belongs to — use `device.location` |

> For the full grid data fields (step states, pitch rows, etc.), refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
// Use createTransaction() to build the device and its pattern together
const t = await document.createTransaction();

// Create the Tonematrix device
const matrix = t.create("tonematrix", {
  positionX: 100,
  positionY: 100,
  displayName: "Arp Matrix",
});

// Create a pattern for it
t.create("tonematrixPattern", {
  device: matrix.location,   // pointer uses .location
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [tonematrix](tonematrix.md) — the step sequencer device this pattern belongs to
- [Making Changes](../../how-nexus-works/making-changes.md) — `createTransaction()` and `modify()` explained
