---
title: stompboxDelay
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# stompboxDelay

**Module:** `@audiotool/nexus/entities`

The stompboxDelay is a delay effect device in Audiotool. It repeats the incoming audio signal after a set time interval, creating echo effects. The delay time is linked to the project tempo via a step length index, so your echoes stay rhythmically in sync.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `feedbackFactor` | `number` | How much of the delayed signal feeds back into the delay line — `0.0` is no feedback (single echo), `1.0` is maximum (infinite repeating echoes) |
| `mix` | `number` | Balance between the dry (original) and wet (delayed) signal — `0.0` is fully dry, `1.0` is fully wet |
| `stepLengthIndex` | `number` | Sets the delay time as a musical note value (e.g. eighth note, quarter note) relative to the project tempo |
| `isActive` | `boolean` | When `false`, the effect is bypassed and audio passes through unchanged |
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

## Example

```typescript
await document.modify((t) => {
  t.create("stompboxDelay", {
    positionX: 500,
    positionY: 300,
    displayName: "Delay",
    feedbackFactor: 0.3,
    mix: 0.3,
    stepLengthIndex: 2,
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [stompboxSlope](stompboxSlope.md) — another Stompbox effect: a filter
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — route audio through this effect
