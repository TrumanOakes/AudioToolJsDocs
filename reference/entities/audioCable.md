---
title: audioCable
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# audioCable

**Module:** `@audiotool/nexus/entities`

An audioCable connects an audio output port of one device to an audio input port of another. Audio flows through cables — if you create a synthesizer but don't connect it to a mixer channel with a cable, you won't hear it. Think of cables as the virtual patch cables you'd use in a hardware studio.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `source` | pointer | Points to the audio output being connected from (e.g. a device's audio output port) |
| `target` | pointer | Points to the audio input being connected to (e.g. a mixer channel's audio input port) |

## Example

```typescript
await document.modify((t) => {
  // Create a synthesizer
  const synth = t.create("pulverisateur", {
    positionX: 100,
    positionY: 100,
    displayName: "Lead Synth",
  });

  // Create a mixer channel
  const channel = t.create("mixerChannel", {
    displayName: "Synth Channel",
  });

  // Connect them with an audio cable
  t.create("audioCable", {
    source: synth.fields.audioOutput,
    target: channel.fields.audioInput,
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteCable](noteCable.md) — the MIDI equivalent: connects note outputs to note inputs
- [mixerChannel](mixerChannel.md) — common target for audio cables from devices
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — full guide including signal routing
