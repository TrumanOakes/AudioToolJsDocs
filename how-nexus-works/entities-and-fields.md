---
title: Entities and Fields
parent: How Nexus Works
nav_order: 3
---

# Entities and Fields

This page explains what <span class="tooltip" data-tooltip="A single item inside a project document, such as a device, note region, or other project object.">entities</span> are, how their fields work, and how they relate to each other.

## What is an entity?

An entity is a single item inside a project. Every piece of a project — a synthesizer, a note, a mixer channel, a cable — is an entity.

Each entity has:

- A unique **id** assigned when it is created
- A fixed **type key** (like `"tinyGain"`, `"note"`, `"noteTrack"`)
- A set of **typed fields** defined by that entity type's schema

You interact with entities by reading their fields, updating them through <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transactions</span>, and listening for changes through <span class="tooltip" data-tooltip="A signal that something changed, such as an entity being created, updated, or removed.">events</span>.

## Entity categories

Nexus entities are organized into four broad categories:

### Device entities

Audio devices represent processing units on the Audiotool desktop. They are the synthesizers, drum machines, effects, and utility devices that make up the audio processing graph.

All device entities share these common fields:
- `positionX` — horizontal position on the desktop
- `positionY` — vertical position on the desktop
- `displayName` — label shown in the DAW UI

**Synthesizers:** [`pulverisateur`](../reference/entities/pulverisateur.md), [`gakki`](../reference/entities/gakki.md), [`bassline`](../reference/entities/bassline.md), [`kobolt`](../reference/entities/kobolt.md), [`tonematrix`](../reference/entities/tonematrix.md)

**Drum machines:** [`beatbox8`](../reference/entities/beatbox8.md), [`beatbox9`](../reference/entities/beatbox9.md), [`rasselbock`](../reference/entities/rasselbock.md), [`machiniste`](../reference/entities/machiniste.md)

**Filters and effects:** [`autoFilter`](../reference/entities/autoFilter.md), [`graphicalEQ`](../reference/entities/graphicalEQ.md), [`stompboxDelay`](../reference/entities/stompboxDelay.md), [`stompboxSlope`](../reference/entities/stompboxSlope.md), [`tinyGain`](../reference/entities/tinyGain.md), [`audioMerger`](../reference/entities/audioMerger.md), [`audioSplitter`](../reference/entities/audioSplitter.md), [`crossfader`](../reference/entities/crossfader.md)

> The system automatically manages device positioning to prevent overlaps.

### Mixer entities

Mixer entities control signal routing and mixing. They represent the mixer section of the DAW.

| Entity | Description |
|--------|-------------|
| [`mixerMaster`](../reference/entities/mixerMaster.md) | Required master output — one per document |
| [`mixerChannel`](../reference/entities/mixerChannel.md) | Individual channel strip |
| [`mixerAux`](../reference/entities/mixerAux.md) | Auxiliary send/return |
| [`mixerGroup`](../reference/entities/mixerGroup.md) | Group channel |
| [`mixerSidechain`](../reference/entities/mixerSidechain.md) | Sidechain routing |

Audio devices connect to the mixer through `audioCable` entities that link device outputs to mixer channel inputs.

### Timeline entities

Timeline entities construct the arrangement view — tracks, regions, and the notes and audio clips within them.

| Entity | Description |
|--------|-------------|
| [`noteTrack`](../reference/entities/noteTrack.md) | Track for note/MIDI data |
| [`audioTrack`](../reference/entities/audioTrack.md) | Track for audio clips |
| [`automationTrack`](../reference/entities/automationTrack.md) | Track for parameter automation |
| [`patternTrack`](../reference/entities/patternTrack.md) | Pattern-based sequencing track |
| [`noteRegion`](../reference/entities/noteRegion.md) | A region on a note track |
| [`audioRegion`](../reference/entities/audioRegion.md) | A region on an audio track |
| [`automationRegion`](../reference/entities/automationRegion.md) | A region on an automation track |
| [`noteCollection`](../reference/entities/noteCollection.md) | A collection of notes (referenced by noteRegions) |
| [`note`](../reference/entities/note.md) | An individual note with `positionTicks`, `pitch`, `velocity` |

### Utility entities

Utility entities handle document-level configuration and connections.

| Entity | Description |
|--------|-------------|
| [`configuration`](../reference/entities/configuration.md) | Document-level settings |
| [`desktopAudioCable`](../reference/entities/desktopAudioCable.md) | Connects audio device outputs to inputs |
| [`noteCable`](../reference/entities/noteCable.md) | Connects note/MIDI outputs to inputs |
| [`groove`](../reference/entities/groove.md) | Groove/swing quantization |
| [`microtuningOctave`](../reference/entities/microtuningOctave.md) | Per-octave microtuning definition |
| [`sample`](../reference/entities/sample.md) | Reference to an audio sample file |
| [`vst3Plugin`](../reference/entities/vst3Plugin.md) | A VST3 plugin instance |

## Fields and field types

Each entity type defines a fixed set of fields. Fields are typed — they can hold:

- **Primitives**: numbers, strings, booleans, or bytes
- **Arrays**: ordered lists of values or sub-entities
- **Objects**: structured groups of fields
- **Pointers**: references to other entities or fields

You access fields through the entity object:

```typescript
entity.fields.gain        // a number field
entity.fields.displayName // a string field
entity.fields.collection  // a pointer field (references another entity)
```

## Pointers

Some fields hold a reference to another entity instead of a plain value. These are called **pointers** — they define the relationships between entities in the document.

For example:
- A `note` has a `collection` field that points to the `noteCollection` it belongs to.
- An `automationTrack` points to the device parameter it controls.
- An `audioCable` points to the audio output and input it connects.

When you create an entity that needs to reference another, you pass the referenced entity as part of the creation fields.

## Working with entities in practice

Creating an entity:

```typescript
await nexus.modify((t) => {
  t.create("tinyGain", {
    positionX: 100,
    positionY: 200,
    displayName: "My Gain"
  });
});
```

Querying existing entities:

```typescript
const gains = nexus.queryEntities.ofTypes("tinyGain").get();
```

Listening for new entities:

```typescript
nexus.events.onCreate("note", (entity) => {
  console.log("New note at tick:", entity.fields.positionTicks);
});
```

→ See the full type definitions in [Entity Reference](../reference/entity-reference.md).

→ For step-by-step task guides, see [Create Devices](../working-with-audiotool-projects/create-devices.md) and [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md).
