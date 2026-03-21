---
title: tinyGain
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# tinyGain

**Module:** `@audiotool/nexus/entities`

A tinyGain is a simple volume control device on the Audiotool desktop. It sits in the signal chain between other devices and the mixer, letting you adjust the volume of a signal without any other processing. It is often used as a utility to trim or boost levels.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `gain` | `number` | Output level of the device. `0.0` is silence, `1.0` is unity gain (no change in volume) |
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

## Example

```typescript
// Create a tinyGain device
let gainDevice;

await document.modify((t) => {
  gainDevice = t.create("tinyGain", {
    positionX: 400,
    positionY: 200,
    displayName: "Master Trim",
    gain: 1.0,
  });
});

// Later, update the gain value
await document.modify((t) => {
  t.update(gainDevice.fields.gain, 0.8);
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this device into your signal chain
