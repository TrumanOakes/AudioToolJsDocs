---
title: vst3Plugin
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# vst3Plugin

**Module:** `@audiotool/nexus/entities`

A vst3Plugin entity represents an instance of a VST3 plugin loaded in the project. VST3 is a standard format for third-party audio effects and instruments. This entity tracks the plugin's identity and its saved state within the project.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | Label shown on the plugin device in the DAW UI |
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |

> For the complete field listing with types, defaults, and ranges, see [SpitfireLabsVst3Plugin](../../api-reference/generated/entities/type-aliases/SpitfireLabsVst3Plugin.html).

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — connect this plugin into the audio signal chain
