---
title: configuration
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# configuration

**Module:** `@audiotool/nexus/entities`

The configuration entity holds document-level settings for an Audiotool project — things like tempo (BPM) and time signature. There is exactly one configuration entity per document. Query for it rather than creating it.

{: .important }
There is always exactly one `configuration` per document. Do not create or remove it. Query for the existing one using `document.queryEntities.ofTypes("configuration").get()`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `bpm` | `number` | Project tempo in beats per minute |

> For the full list of project settings (time signature, loop range, etc.), refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
// Read the current project BPM
const configs = document.queryEntities.ofTypes("configuration").get();
const config = configs[0];
console.log("Project BPM:", config.fields.bpm);

// Update the BPM
await document.modify((t) => {
  t.update(config.fields.bpm, 140);
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — using BPM with tick calculations
- [Utilities](../utilities.md) — `secondsToTicks` and `ticksToSeconds` for timing math
