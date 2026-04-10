---
title: mixerMaster
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerMaster

**Module:** `@audiotool/nexus/entities`

The mixerMaster is the master output entity of the Audiotool mixer. Every project document has exactly one mixerMaster — it is created automatically and cannot be removed. All audio in the project ultimately flows through the master to reach the final output.

{: .important }
There is always exactly one `mixerMaster` per document. Do not create or remove it. Query for the existing one using `nexus.queryEntities.ofTypes("mixerMaster").get()`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the mixer master in the DAW UI |

> For the complete field listing with types, defaults, and ranges, see [MixerMaster](../../api-reference/generated/entities/type-aliases/MixerMaster.html).

## Example

```typescript
// The mixerMaster already exists — query for it rather than creating it
const masters = nexus.queryEntities.ofTypes("mixerMaster").get();
const master = masters[0]; // There is always exactly one

console.log("Master display name:", master.fields.displayName);
```

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [mixerChannel](mixerChannel.html) — individual channel strips that feed into the master
- [desktopAudioCable]({{ '/reference/entities/desktopAudioCable.html' | relative_url }}) — cables that route signals through the mixer
