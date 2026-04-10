---
title: graphicalEQ
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# graphicalEQ

**Module:** `@audiotool/nexus/entities`

The graphicalEQ is a graphical equalizer effect device in Audiotool. It lets you boost or cut different frequency bands across the audio spectrum, shaping the tone of whatever signal passes through it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [GraphicalEQ](../../api-reference/generated/entities/type-aliases/GraphicalEQ.html).

## Example

```typescript
await nexus.modify((t) => {
  t.create("graphicalEQ", {
    positionX: 600,
    positionY: 200,
    displayName: "EQ",
  });
});
```

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.html) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — route audio through this effect
