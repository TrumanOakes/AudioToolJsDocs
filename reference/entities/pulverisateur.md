---
title: pulverisateur
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# pulverisateur

**Module:** `@audiotool/nexus/entities`

The Pulverisateur is a virtual analog synthesizer in Audiotool. It generates sound from scratch using oscillators and filters, and is one of the core instruments you can place on the Audiotool desktop and wire into your mixer.

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
await nexus.modify((t) => {
  t.create("pulverisateur", {
    positionX: 100,
    positionY: 100,
    displayName: "Lead Synth",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device's audio output to a mixer channel
