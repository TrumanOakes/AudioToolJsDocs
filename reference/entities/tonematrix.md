---
title: tonematrix
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# tonematrix

**Module:** `@audiotool/nexus/entities`

The tonematrix is a step sequencer synthesizer in Audiotool. It presents a grid of steps that you activate to create looping melodic patterns. Each pattern index selects a different active grid in the sequencer.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `patternIndex` | `number` | The currently active pattern in the tonematrix grid |
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

## Example

```typescript
// Create a tonematrix device
await nexus.modify((t) => {
  t.create("tonematrix", {
    positionX: 100,
    positionY: 200,
    displayName: "My first device!",
  });
});

// Listen for tonematrix creation events
nexus.events.onCreate("tonematrix", (tm) => {
  console.log("tonematrix added, pattern index:", tm.fields.patternIndex);
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device's audio output to a mixer channel
- [Queries and Events](../../how-nexus-works/queries-and-events.md) — reacting to entity creation with `events.onCreate`
