---
title: machiniste
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# machiniste

**Module:** `@audiotool/nexus/entities`

The Machiniste is a drum machine in Audiotool. It handles percussion sequencing and connects to the mixer for audio output. Use it alongside the other drum machine types to layer rhythmic elements in your project.

## Fields

All device entities share these common placement fields:

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

> The system automatically adjusts positioning to prevent devices from overlapping. You can provide rough values and the DAW will place them cleanly.

## Example

```typescript
await document.modify((t) => {
  t.create("machiniste", {
    positionX: 200,
    positionY: 400,
    displayName: "Machiniste",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device's audio output to a mixer channel
