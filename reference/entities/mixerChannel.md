---
title: mixerChannel
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerChannel

**Module:** `@audiotool/nexus/entities`

A mixerChannel is an individual channel strip in the Audiotool mixer. Audio devices connect to mixer channels via `desktopAudioCable` entities, and each channel handles volume, panning, and routing for its connected signal before sending it on to the master output.

> **Pointer syntax:** Fields that reference other entities use the **`.location`** property on a **field**. Pass `entity.fields.socketName.location` wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the channel strip in the DAW UI |

> For volume, panning, send levels, and other channel parameters, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
// Use createTransaction() to build everything in one operation
const t = await document.createTransaction();

// Create a synthesizer
const synth = t.create("pulverisateur", {
  positionX: 100,
  positionY: 100,
  displayName: "Lead Synth",
});

// Create a mixer channel for it
const channel = t.create("mixerChannel", {
  displayName: "Synth Channel",
});

// Connect the synth audio output to the channel audio input
// Use .location on the field socket, not on the entity
t.create("desktopAudioCable", {
  fromSocket: synth.fields.audioOutput.location,
  toSocket: channel.fields.audioInput.location,
});

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [mixerMaster](mixerMaster.md) — the master output all channels feed into
- [desktopAudioCable](desktopAudioCable.md) — connects device outputs to channel inputs
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — full guide including mixer setup
