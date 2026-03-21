---
title: beatbox8
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# beatbox8

**Module:** `@audiotool/nexus/entities`

The Beatbox 8 is an 8-step drum machine in Audiotool. It sequences percussive sounds in a grid pattern and connects to the mixer for audio output. Useful for building rhythmic foundations in your project.

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
  t.create("beatbox8", {
    positionX: 100,
    positionY: 300,
    displayName: "Drums",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device's audio output to a mixer channel
