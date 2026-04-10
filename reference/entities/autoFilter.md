---
title: autoFilter
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# autoFilter

**Module:** `@audiotool/nexus/entities`

The autoFilter is an effect device in Audiotool that automatically sweeps a filter over your audio signal over time. You place it on the desktop between a sound source and the mixer to add a moving, wah-like quality to the audio passing through it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [AutoFilter](../../api-reference/generated/entities/type-aliases/AutoFilter.html).

## Example

```typescript
await nexus.modify((t) => {
  t.create("autoFilter", {
    positionX: 500,
    positionY: 200,
    displayName: "Auto Filter",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — route audio through this effect
