---
title: config
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# config

**Module:** `@audiotool/nexus/entities`

The config entity holds document-level settings for an Audiotool project — things like tempo (BPM) and time signature. There is exactly one config entity per document. Query for it rather than creating it.

{: .important }
There is always exactly one `config` per document. Do not create or remove it. Query for the existing one using `nexus.queryEntities.ofTypes("config").get()`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `bpm` | `number` | Project tempo in beats per minute |

> For the complete field listing with types, defaults, and ranges, see [Config](../../api-reference/generated/types/entities.Config.html).

## Example

```typescript
// Read the current project BPM
const configs = nexus.queryEntities.ofTypes("config").get();
const config = configs[0];
console.log("Project BPM:", config.fields.bpm.value);

// Update the BPM
await nexus.modify((t) => {
  t.update(config.fields.bpm, 140);
});
```

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.html) — using BPM with tick calculations
- [Utilities](../utilities.html) — `secondsToTicks` and `ticksToSeconds` for timing math
