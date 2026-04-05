---
title: Create Devices
parent: Working With Audiotool Projects
nav_order: 3
---

# Create Devices

Audio devices are the synthesizers, drum machines, effects, and utility units in Audiotool. This page shows how to create and connect them using <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transactions</span>.

## Creating a device

Use `nexus.modify()` to create any device entity:

```typescript
await nexus.modify((t) => {
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
| [`pulverisateur`](../reference/entities/pulverisateur.md) | Pulverisateur |
| [`gakki`](../reference/entities/gakki.md) | Gakki |
| [`bassline`](../reference/entities/bassline.md) | Bassline |
| [`kobolt`](../reference/entities/kobolt.md) | Kobolt |
| [`tonematrix`](../reference/entities/tonematrix.md) | Tonematrix |

### Drum machines

| Entity key | Device name |
|------------|-------------|
| [`beatbox8`](../reference/entities/beatbox8.md) | Beatbox 8 |
| [`beatbox9`](../reference/entities/beatbox9.md) | Beatbox 9 |
| [`rasselbock`](../reference/entities/rasselbock.md) | Rasselbock |
| [`machiniste`](../reference/entities/machiniste.md) | Machiniste |

### Filters and effects

| Entity key | Device name |
|------------|-------------|
| [`autoFilter`](../reference/entities/autoFilter.md) | Auto Filter |
| [`graphicalEQ`](../reference/entities/graphicalEQ.md) | Graphical EQ |
| [`stompboxDelay`](../reference/entities/stompboxDelay.md) | Stompbox Delay |
| [`stompboxSlope`](../reference/entities/stompboxSlope.md) | Stompbox Slope (filter) |
| [`tinyGain`](../reference/entities/tinyGain.md) | Tiny Gain |
| [`audioMerger`](../reference/entities/audioMerger.md) | Audio Merger |
| [`audioSplitter`](../reference/entities/audioSplitter.md) | Audio Splitter |
| [`crossfader`](../reference/entities/crossfader.md) | Crossfader |

## Creating a synth and connecting it to the mixer

A typical setup involves creating a synthesizer, a mixer channel, and connecting them with an audio cable. Use `createTransaction()` so you can reference the newly created entities' socket fields immediately:

```typescript
const t = await nexus.createTransaction();

// Create a synthesizer
const synth = t.create("pulverisateur", {
  positionX: 100,
  positionY: 100,
});

// Create a mixer channel
const channel = t.create("mixerChannel", {});

// Connect synth audio output → channel audio input
// Use .location on the field socket, not on the entity
t.create("desktopAudioCable", {
  fromSocket: synth.fields.audioOutput.location,
  toSocket: channel.fields.audioInput.location,
});

t.send();
```

The `desktopAudioCable` entity connects audio outputs to audio inputs. See [desktopAudioCable](../reference/entities/desktopAudioCable.md) for full field details.

## Updating a device parameter

After creating a device, update its parameters with `t.update()`:

```typescript
let gainDevice;

await nexus.modify((t) => {
  gainDevice = t.create("tinyGain", {});
});

// Later, change the gain value
await nexus.modify((t) => {
  t.update(gainDevice.fields.gain, 0.8);
});
```

## Querying existing devices

To find all currently existing devices of a particular type:

```typescript
const gains = nexus.queryEntities.ofTypes("tinyGain").get();
const synths = nexus.queryEntities.ofTypes("pulverisateur", "gakki", "bassline").get();
```

## Next step

→ [Work With Timeline Data](work-with-timeline-data.md) — add tracks, regions, and notes
