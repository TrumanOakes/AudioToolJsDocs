---
title: mixerSidechain
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerSidechain

**Module:** `@audiotool/nexus/entities`

A mixerSidechain entity represents a sidechain routing connection in the Audiotool mixer. Sidechain routing lets one signal control a processing parameter of another — for example, routing a kick drum to duck (reduce the volume of) a bass synth, a technique common in electronic music production.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [MixerSideChainCable](../../api-reference/generated/entities/type-aliases/MixerSideChainCable.html).

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [mixerMaster](mixerMaster.html) — the master output
- [mixerChannel](mixerChannel.html) — individual channel strips
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — signal routing cables
