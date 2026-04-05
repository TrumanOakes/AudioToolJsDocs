---
title: audioSplitter
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# audioSplitter

**Module:** `@audiotool/nexus/entities`

An audioSplitter is a utility device in Audiotool that takes one incoming audio signal and sends copies of it to multiple outputs. Use it when you want to route one sound source through several different effects chains or to multiple mixer channels simultaneously.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

## Example

```typescript
await nexus.modify((t) => {
  t.create("audioSplitter", {
    positionX: 800,
    positionY: 200,
    displayName: "Split",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [audioMerger](audioMerger.md) — the reverse: merge multiple signals into one
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect signals into and out of this device
