---
title: beatbox9
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# beatbox9

**Module:** `@audiotool/nexus/entities`

The Beatbox 9 is a drum machine in Audiotool. Similar to the Beatbox 8, it sequences percussive sounds and connects to the mixer — choose this version for its distinct set of sounds and sequencing options.

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
  t.create("beatbox9", {
    positionX: 100,
    positionY: 300,
    displayName: "Beatbox 9",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [audioCable](audioCable.md) — connect this device's audio output to a mixer channel
