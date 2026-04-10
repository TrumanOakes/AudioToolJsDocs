---
title: mixerAux
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerAux

**Module:** `@audiotool/nexus/entities`

A mixerAux entity represents an auxiliary send and return in the Audiotool mixer. Aux sends let you route a portion of one or more channel signals to a shared effects bus (such as reverb or delay), then blend the return back into the mix. The exact entity key variant used depends on the specific aux configuration in the project.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [MixerAux](../../api-reference/generated/entities/type-aliases/MixerAux.html).

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [mixerMaster](mixerMaster.md) — the master output
- [mixerChannel](mixerChannel.md) — individual channel strips
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — signal routing cables
