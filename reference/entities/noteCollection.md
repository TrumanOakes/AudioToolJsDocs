---
title: noteCollection
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# noteCollection

**Module:** `@audiotool/nexus/entities`

A noteCollection is a container that holds a set of `note` entities. One or more `noteRegion` entities can reference the same noteCollection, which means the same musical phrase can be reused across multiple regions in the timeline without duplicating the note data.

## Fields

A noteCollection has no required creation fields of its own — it is a container whose content comes from `note` entities that point to it.

| Field | Type | Description |
|-------|------|-------------|
| *(none required)* | — | Create with an empty fields object; notes reference this collection via their `collection` pointer |

## Example

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;

let collection;

// Step 1: create the collection
await document.modify((t) => {
  collection = t.create("noteCollection", {});
});

// Step 2: add notes to it
await document.modify((t) => {
  t.create("note", {
    collection: collection,
    positionTicks: 0,
    pitch: 60,       // middle C
    velocity: 100,
  });

  t.create("note", {
    collection: collection,
    positionTicks: Ticks.Beat,
    pitch: 64,       // E4
    velocity: 90,
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [note](note.md) — individual notes stored inside this collection
- [noteRegion](noteRegion.md) — regions that reference and play back this collection
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide
