---
title: mixerChannel
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerChannel

**Module:** `@audiotool/nexus/entities`

A mixerChannel is an individual channel strip in the Audiotool mixer. Audio devices connect to mixer channels via `audioCable` entities, and each channel handles volume, panning, and routing for its connected signal before sending it on to the master output.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the channel strip in the DAW UI |

> For volume, panning, send levels, and other channel parameters, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
await document.modify((t) => {
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

  // Connect the synth to the channel with an audio cable
  t.create("audioCable", {
    // source: synth audio output
    // target: channel audio input
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [mixerMaster](mixerMaster.md) — the master output all channels feed into
- [audioCable](audioCable.md) — connects device outputs to channel inputs
- [Create Devices](../../working-with-audiotool-projects/create-devices.md) — full guide including mixer setup
