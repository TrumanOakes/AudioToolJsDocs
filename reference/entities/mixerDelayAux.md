---
title: mixerDelayAux
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# mixerDelayAux

**Module:** `@audiotool/nexus/entities`

A mixerDelayAux is a delay-specific auxiliary send/return bus in the Audiotool mixer. Like a `mixerAux`, it provides an effects send that multiple channels can route signal to — but it is pre-configured for the built-in delay effect. Channels send signal to the aux using their send level controls, and the processed signal is returned to the mix.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `positionX` | `number` | Horizontal position on the Audiotool desktop |
| `positionY` | `number` | Vertical position on the Audiotool desktop |
| `displayName` | `string` | Label shown on the aux bus in the DAW UI |

> For delay time, feedback, wet/dry mix, and other effect parameters, refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
// Use createTransaction() to build the mixer routing
const t = await nexus.createTransaction();

// Create a mixer channel
const channel = t.create("mixerChannel", {
  displayName: "Lead Synth",
});

// Create a delay aux bus
t.create("mixerDelayAux", {
  displayName: "Room Delay",
});

// Channel sends are configured via the channel's send level fields
// See the official TypeDoc for send field names

t.send();
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [mixerAux](mixerAux.md) — generic auxiliary send/return bus
- [mixerReverbAux](mixerReverbAux.md) — reverb-specific aux bus
- [mixerChannel](mixerChannel.md) — channel strip that sends to this aux
- [mixerMaster](mixerMaster.md) — the master output
