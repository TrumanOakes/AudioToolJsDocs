---
title: gakki
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# gakki

**Module:** `@audiotool/nexus/entities`

The Gakki is a synthesizer in Audiotool that generates musical tones. Like all synthesizer devices, you place it on the Audiotool desktop and connect it to a mixer channel to hear its output.

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
  t.create("gakki", {
    positionX: 200,
    positionY: 100,
    displayName: "Gakki Synth",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device's audio output to a mixer channel
