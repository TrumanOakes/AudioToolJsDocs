---
title: kobolt
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# kobolt

**Module:** `@audiotool/nexus/entities`

The Kobolt is a bass synthesizer in Audiotool. It generates bass tones and connects to the mixer for audio output. The Kobolt has multiple channels, each represented by a `KoboltChannel` sub-entity that controls an individual input's gain and panning.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

## KoboltChannel fields

Each channel of the Kobolt is a `KoboltChannel` entity with these fields:

| Field | Type | Description |
|-------|------|-------------|
| `audioInput` | pointer | Points to the audio input this channel is connected to |
| `gain` | `number` | Input gain for this channel, equivalent to a dB range of `-∞` to `0.0` (so values approach silence as they decrease below 1.0) |
| `panning` | `number` | Pans the channel left or right — `-1.0` is fully left, `0.0` is center, `1.0` is fully right |

## Example

```typescript
await nexus.modify((t) => {
  t.create("kobolt", {
    positionX: 100,
    positionY: 200,
    displayName: "Kobolt Bass",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device's audio output to a mixer channel
