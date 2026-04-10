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

> For the complete field listing with types, defaults, and ranges, see [MixerDelayAux](../../api-reference/generated/entities/type-aliases/MixerDelayAux.html).

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
// See MixerDelayAux in Entity Reference for send field names

t.send();
```

## See also

- [Entity Reference](../entity-reference.html) — full list of all entity types
- [mixerAux](mixerAux.html) — generic auxiliary send/return bus
- [mixerReverbAux](mixerReverbAux.html) — reverb-specific aux bus
- [mixerChannel](mixerChannel.html) — channel strip that sends to this aux
- [mixerMaster](mixerMaster.html) — the master output
