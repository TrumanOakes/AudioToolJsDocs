---
title: noteCollection
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteCollection

**Module:** `@audiotool/nexus/entities`

A noteCollection is a container that holds a set of `note` entities. One or more `noteRegion` entities can reference the same noteCollection, which means the same musical phrase can be reused across multiple regions in the timeline without duplicating the note data.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property. Pass `entity.location` wherever a pointer field is expected.

## Fields

A noteCollection has no required creation fields of its own — it is a container whose content comes from `note` entities that point to it.

| Field | Type | Description |
|-------|------|-------------|
| *(none required)* | — | Create with an empty fields object; notes reference this collection via their `collection` pointer |

## Example

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;

// Use createTransaction() to build everything in one operation
const t = await nexus.createTransaction();

// Create the collection first — notes will reference it
const collection = t.create("noteCollection", {});

// Add notes — use collection.location for the pointer field
t.create("note", {
  collection: collection.location,
  positionTicks: 0,
  durationTicks: Ticks.Beat,
  pitch: 60,       // middle C
  velocity: 100,
});

t.create("note", {
  collection: collection.location,
  positionTicks: Ticks.Beat,
  durationTicks: Ticks.Beat,
  pitch: 64,       // E4
  velocity: 90,
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [note](note.md) — individual notes stored inside this collection
- [noteRegion](noteRegion.md) — regions that reference and play back this collection
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
