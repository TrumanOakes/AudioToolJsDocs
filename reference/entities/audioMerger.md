---
title: audioMerger
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# audioMerger

**Module:** `@audiotool/nexus/entities`

An audioMerger is a utility device in Audiotool that combines multiple incoming audio signals into a single output. Use it when you want to feed several device outputs into one signal path — for example, merging two synthesizers before routing them to one mixer channel.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

## Example

```typescript
await document.modify((t) => {
  t.create("audioMerger", {
    positionX: 700,
    positionY: 200,
    displayName: "Merge",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [audioSplitter](audioSplitter.md) — the reverse: split one signal into multiple outputs
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect signals into and out of this device
