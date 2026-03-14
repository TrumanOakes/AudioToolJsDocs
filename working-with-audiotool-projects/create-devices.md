---
title: Create Devices
parent: Working With Audiotool Projects
nav_order: 3
---

# Create Devices

Audio devices are the synthesizers, drum machines, effects, and utility units that make up the audio processing graph in Audiotool. This page shows how to create and connect them.

## Creating a device

Use `document.modify()` to create any device entity:

```typescript
await document.modify((t) => {
  t.create("tinyGain", {
    positionX: 100,
    positionY: 200,
    displayName: "Main Gain"
  });
});
```

All device entities accept `positionX`, `positionY`, and `displayName` as fields. Position values control where the device appears on the Audiotool desktop.

> The system automatically adjusts positioning to prevent devices from overlapping. You can provide rough values and the DAW will place them cleanly.

## Available device types

### Synthesizers

| Entity key | Device name |
|------------|-------------|
| `pulverisateur` | Pulverisateur |
| `gakki` | Gakki |
| `bassline` | Bassline |

### Drum machines

| Entity key | Device name |
|------------|-------------|
| `beatbox8` | Beatbox 8 |
| `beatbox9` | Beatbox 9 |
| `rasselbock` | Rasselbock |
| `machiniste` | Machiniste |

### Filters and effects

| Entity key | Device name |
|------------|-------------|
| `autoFilter` | Auto Filter |
| `graphicalEQ` | Graphical EQ |
| `stompbox*` | Stompbox effects (various) |
| `tinyGain` | Tiny Gain |
| `audioMerger` | Audio Merger |
| `audioSplitter` | Audio Splitter |
| `crossfader` | Crossfader |

## Creating a synth and connecting it to the mixer

A typical setup involves creating a synthesizer, a mixer channel, and connecting them with an audio cable:

```typescript
await document.modify((t) => {
  // Create a synthesizer
  const synth = t.create("pulverisateur", {
    positionX: 100,
    positionY: 100,
  });

  // Create a mixer channel
  const channel = t.create("mixerChannel", {});

  // Connect synth output to mixer channel input via an audio cable
  const cable = t.create("audioCable", {
    // source: synth output
    // target: channel input
  });
});
```

The `audioCable` entity connects audio outputs to audio inputs. See [Entity Reference](../reference/entity-reference.md) for the exact field definitions for `audioCable`.

## Updating a device parameter

After creating a device, update its parameters with `t.update()`:

```typescript
let gainDevice;

await document.modify((t) => {
  gainDevice = t.create("tinyGain", {});
});

// Later, change the gain value
await document.modify((t) => {
  t.update(gainDevice.fields.gain, 0.8);
});
```

## Querying existing devices

To find all currently existing devices of a particular type:

```typescript
const gains = document.queryEntities.ofTypes("tinyGain").get();
const synths = document.queryEntities.ofTypes("pulverisateur", "gakki", "bassline").get();
```

## Next step

→ [Work With Timeline Data](work-with-timeline-data.md) — add tracks, regions, and notes
