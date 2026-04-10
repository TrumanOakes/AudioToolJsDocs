---
title: desktopAudioCable
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# desktopAudioCable

**Module:** `@audiotool/nexus/entities`

A desktopAudioCable connects an audio output socket of one device to an audio input socket of another on the Audiotool desktop. Audio flows through cables — if you create a synthesizer but don't connect it to a mixer channel with a cable, you won't hear it. Think of cables as the virtual patch cables you'd use in a hardware studio.

Pointer fields in Nexus use the **`.location`** property — this gives a reference to a specific socket in the document schema. Pass `field.location` (for field-level sockets like `audioOutput`) or `entity.location` (for entity-level pointers) wherever a pointer field is expected.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `fromSocket` | pointer | The audio output socket this cable connects **from** — use `device.fields.audioOutput.location` |
| `toSocket` | pointer | The audio input socket this cable connects **to** — use `device.fields.audioInput.location` or `channel.fields.audioInput.location` |

## Example

```typescript
import { utils } from "@audiotool/nexus";

// Using createTransaction() — the standard way to batch multiple creates
const t = await nexus.createTransaction();

// Create a synthesizer
const synth = t.create("pulverisateur", {
  positionX: 100,
  positionY: 100,
  displayName: "Lead Synth",
});

// Create a mixer channel
const channel = t.create("mixerChannel", {});

// Connect synth output → channel input with a desktop audio cable
// Note: use .location on the field, not the field itself
t.create("desktopAudioCable", {
  fromSocket: synth.fields.audioOutput.location,
  toSocket: channel.fields.audioInput.location,
});

t.send(); // commit all three creates at once
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [desktopNoteCable](desktopNoteCable.md) — the note/MIDI equivalent: connects note outputs to note inputs
- [mixerChannel](mixerChannel.md) — common destination for audio cables from devices
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — full guide including signal routing
- [Making Changes](../../how-nexus-works/making-changes.md) — `createTransaction()` and `modify()` explained
