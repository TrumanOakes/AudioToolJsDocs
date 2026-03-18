---
title: stompboxSlope
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# stompboxSlope

**Module:** `@audiotool/nexus/entities`

The stompboxSlope is a filter effect device in Audiotool. It can operate in several filter modes (low-pass, high-pass, band-pass, notch) to selectively remove or emphasize frequency content in the audio passing through it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `frequencyHz` | `number` | The center or cutoff frequency of the filter in Hz |
| `resonanceFactor` | `number` | Controls the resonance (peak) at the cutoff frequency — `0.0` is no resonance, `1.0` is maximum resonance |
| `bandWidthHz` | `number` | The spacing in Hz between the low and high pass filters. Only affects notch and bandpass modes — effectively sets the bandwidth of the filter |
| `filterModeIndex` | `number` | Selects the filter type (e.g. low-pass, high-pass, band-pass, notch) |
| `mix` | `number` | Balance between the dry (original) and wet (filtered) signal — `0.0` is fully dry, `1.0` is fully wet |
| `isActive` | `boolean` | When `false`, the effect is bypassed and audio passes through unchanged |
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

## Example

```typescript
await document.modify((t) => {
  t.create("stompboxSlope", {
    positionX: 600,
    positionY: 300,
    displayName: "Filter",
    frequencyHz: 2000,
    resonanceFactor: 0.5,
    mix: 1.0,
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [stompboxDelay](stompboxDelay.md) — another Stompbox effect: a delay
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [audioCable](audioCable.md) — route audio through this effect
