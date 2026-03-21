---
title: bassline
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# bassline

**Module:** `@audiotool/nexus/entities`

The Bassline is a synthesizer in Audiotool designed for bass and melodic lines. It can be driven by note data from a note track and connected to your mixer for audio output.

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
  t.create("bassline", {
    positionX: 300,
    positionY: 100,
    displayName: "Bass",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device's audio output to a mixer channel
