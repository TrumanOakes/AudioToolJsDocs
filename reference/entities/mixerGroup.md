---
title: mixerGroup
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerGroup

**Module:** `@audiotool/nexus/entities`

A mixerGroup entity represents a group channel in the Audiotool mixer. Group channels let you collect several mixer channels under one fader so you can control their combined volume and processing together — for example, grouping all drum channels under a single "Drums" group.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown in the DAW UI |

> For group volume, routing, and assignment parameters, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [mixerMaster](mixerMaster.md) — the master output
- [mixerChannel](mixerChannel.md) — individual channel strips that can be routed to a group
- [audioCable](audioCable.md) — signal routing cables
