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
| [`pulverisateur`](../api-reference/generated/types/entities.Pulverisateur.html) | Pulverisateur |
| [`gakki`](../api-reference/generated/types/entities.Gakki.html) | Gakki |
| [`bassline`](../api-reference/generated/types/entities.Bassline.html) | Bassline |
| [`kobolt`](../api-reference/generated/types/entities.Kobolt.html) | Kobolt |
| [`tonematrix`](../api-reference/generated/types/entities.Tonematrix.html) | Tonematrix |

### Drum machines

| Entity key | Device name |
|------------|-------------|
| [`beatbox8`](../api-reference/generated/types/entities.Beatbox8.html) | Beatbox 8 |
| [`beatbox9`](../api-reference/generated/types/entities.Beatbox9.html) | Beatbox 9 |
| [`rasselbock`](../api-reference/generated/types/entities.Rasselbock.html) | Rasselbock |
| [`machiniste`](../api-reference/generated/types/entities.Machiniste.html) | Machiniste |

### Filters and effects

| Entity key | Device name |
|------------|-------------|
| [`autoFilter`](../api-reference/generated/types/entities.AutoFilter.html) | Auto Filter |
| [`graphicalEQ`](../api-reference/generated/types/entities.GraphicalEQ.html) | Graphical EQ |
| [`stompboxDelay`](../api-reference/generated/types/entities.StompboxDelay.html) | Stompbox Delay |
| [`stompboxSlope`](../api-reference/generated/types/entities.StompboxSlope.html) | Stompbox Slope (filter) |
| [`tinyGain`](../api-reference/generated/types/entities.TinyGain.html) | Tiny Gain |
| [`audioMerger`](../api-reference/generated/types/entities.AudioMerger.html) | Audio Merger |
| [`audioSplitter`](../api-reference/generated/types/entities.AudioSplitter.html) | Audio Splitter |
| [`crossfader`](../api-reference/generated/types/entities.Crossfader.html) | Crossfader |

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

The `desktopAudioCable` entity connects audio outputs to audio inputs. See [desktopAudioCable](../api-reference/generated/types/entities.DesktopAudioCable.html) for full field details.

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
