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

> For plugin identifier fields and parameter state storage, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [audioCable](audioCable.md) — connect this plugin into the audio signal chain
