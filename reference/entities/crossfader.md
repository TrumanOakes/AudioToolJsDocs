---
title: crossfader
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# crossfader

**Module:** `@audiotool/nexus/entities`

The crossfader is a utility device in Audiotool that blends between two audio inputs. As you move the crossfader position, one input fades out while the other fades in — useful for DJ-style transitions or blending two separate signal paths.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the device in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [Crossfader](../../api-reference/generated/entities/type-aliases/Crossfader.md).

## Example

```typescript
await nexus.modify((t) => {
  t.create("crossfader", {
    positionX: 900,
    positionY: 200,
    displayName: "Crossfader",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — step-by-step guide to creating and connecting devices
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect the two input signals and the output
