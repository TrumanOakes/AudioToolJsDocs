---
title: sample
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# sample

**Module:** `@audiotool/nexus/entities`

A sample entity is a reference to an audio sample file stored in Audiotool. Devices like drum machines and the audio track use sample entities to know which audio file to load and play back.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | Label shown for the sample in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [Sample](../../api-reference/generated/entities/type-aliases/Sample.md).

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [audioTrack](audioTrack.md) — track that plays back audio regions referencing samples
- [audioRegion](audioRegion.md) — timeline block that references a sample
