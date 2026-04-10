---
title: mixerSideChainCable
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerSideChainCable

**Module:** `@audiotool/nexus/entities`

A mixerSideChainCable entity represents a sidechain routing connection in the Audiotool mixer. Sidechain routing lets one signal control a processing parameter of another — for example, routing a kick drum to duck (reduce the volume of) a bass synth, a technique common in electronic music production.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [MixerSideChainCable](../../api-reference/generated/entities/type-aliases/MixerSideChainCable.html).

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [mixerMaster](mixerMaster.md) — the master output
- [mixerChannel](mixerChannel.md) — individual channel strips
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — signal routing cables
