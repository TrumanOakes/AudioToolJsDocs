---
title: automationTrack
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# automationTrack

**Module:** `@audiotool/nexus/entities`

An automationTrack is a lane in the Audiotool timeline dedicated to automating a single device parameter over time. For example, you might automate the gain of a tinyGain device so it rises and falls throughout your arrangement. Each automationTrack points to the specific device field it controls.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | Label shown on the track in the timeline |
| `target` | pointer | Points to the specific device parameter (field) being automated |

> For the complete field listing with types, defaults, and ranges, see [AutomationTrack](../../api-reference/generated/entities/type-aliases/AutomationTrack.md).

## Example

```typescript
let gainDevice;

await nexus.modify((t) => {
  gainDevice = t.create("tinyGain", {
    positionX: 100,
    positionY: 200,
    displayName: "Fade",
  });
});

await nexus.modify((t) => {
  // Create an automation track targeting the gain field
  t.create("automationTrack", {
    displayName: "Volume Fade",
    target: gainDevice.fields.gain,
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [automationRegion](automationRegion.md) — regions placed on this track
- [Work With Timeline Data](../../working-with-audiotool-projects/work-with-timeline-data.md) — step-by-step guide to building timeline content
