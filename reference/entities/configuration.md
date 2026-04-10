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
There is always exactly one `configuration` per document. Do not create or remove it. Query for the existing one using `nexus.queryEntities.ofTypes("configuration").get()`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `bpm` | `number` | Project tempo in beats per minute |

> For the complete field listing with types, defaults, and ranges, see [Config](../../api-reference/generated/entities/type-aliases/Config.html).

## Example

```typescript
// Read the current project BPM
const configs = nexus.queryEntities.ofTypes("configuration").get();
const config = configs[0];
console.log("Project BPM:", config.fields.bpm);

// Update the BPM
await nexus.modify((t) => {
  t.update(config.fields.bpm, 140);
});
```

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.html) — using BPM with tick calculations
- [Utilities](../utilities.html) — `secondsToTicks` and `ticksToSeconds` for timing math
