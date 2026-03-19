---
title: tonematrixPattern
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# tonematrixPattern

**Module:** `@audiotool/nexus/entities`

A tonematrixPattern holds the step-sequencer grid data for a `tonematrix` device. Each pattern is attached to one of the Tonematrix's 8 pattern slots and stores a 16×16 grid of on/off steps. You can create multiple patterns per device (one per slot) to build up different sequences.

> **Pointer syntax:** The `slot` field uses the **`.location`** property on an **array element** of the device's `patternSlots` field.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `slot` | pointer | Which pattern slot on the `tonematrix` this pattern occupies — use `device.fields.patternSlots.array[n].location` (index 0–7) |
| `steps` | array | A 16-element array of step objects. Each step has a `notes` array of 16 booleans (true = step is active). Use `createTypedArray()` from `@audiotool/nexus/utils` to build this |

> The Tonematrix has 8 pattern slots (`array[0]` through `array[7]`). At most one pattern can occupy each slot.

## Example

```typescript
import { createTypedArray } from "@audiotool/nexus/utils";

const t = await document.createTransaction();

// Create the Tonematrix device
const tm = t.create("tonematrix", {
  positionX: 100,
  positionY: 100,
  displayName: "Arp Matrix",
});

// Create a pattern for slot 0 with a random 16×16 grid
// slot uses array[n].location — the pointer to the nth pattern slot
t.create("tonematrixPattern", {
  slot: tm.fields.patternSlots.array[0].location,
  steps: createTypedArray(16, () => ({
    notes: createTypedArray(16, () => Math.random() > 0.74),
  })),
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [tonematrix](tonematrix.md) — the step sequencer device this pattern belongs to
- [Utilities](../utilities.md) — `createTypedArray` helper used to build the steps array
- [Making Changes](../../how-nexus-works/making-changes.md) — `createTransaction()` explained
