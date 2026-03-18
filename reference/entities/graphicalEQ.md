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

> For a full list of band gain parameters and frequency settings, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
await document.modify((t) => {
  t.create("graphicalEQ", {
    positionX: 600,
    positionY: 200,
    displayName: "EQ",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [audioCable](audioCable.md) — route audio through this effect
