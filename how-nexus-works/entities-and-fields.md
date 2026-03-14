---
title: Entities and Fields
parent: How Nexus Works
nav_order: 3
---

# Entities and Fields

Entities are the building blocks of every Audiotool project. This page explains what they are, how their fields work, and how they relate to each other.

## What is an entity?

An entity is a small, typed object that lives inside a document. Every piece of a project — a synthesizer, a note, a mixer channel, a cable — is an entity.

Each entity has:

- A unique **id** assigned when it is created
- A fixed **type key** (like `"tinyGain"`, `"note"`, `"noteTrack"`)
- A set of **typed fields** defined by that entity type's schema

You interact with entities by reading their fields, updating their fields via transactions, and listening for changes via events.

## Entity categories

Nexus entities are organized into four broad categories:

### Device entities

Audio devices represent processing units on the Audiotool desktop. They are the synthesizers, drum machines, effects, and utility devices that make up the audio processing graph.

All device entities share these common fields:
- `positionX` — horizontal position on the desktop
- `positionY` — vertical position on the desktop
- `displayName` — label shown in the DAW UI

**Synthesizers:** `pulverisateur`, `gakki`, `bassline`

**Drum machines:** `beatbox8`, `beatbox9`, `rasselbock`, `machiniste`

**Filters and effects:** `autoFilter`, `graphicalEQ`, `stompbox*`, `tinyGain`, `audioMerger`, `audioSplitter`, `crossfader`

> The system automatically manages device positioning to prevent overlaps.

### Mixer entities

Mixer entities control signal routing and mixing. They represent the mixer section of the DAW.

| Entity | Description |
|--------|-------------|
| `mixerMaster` | Required master output — one per document |
| `mixerChannel` | Individual channel strip |
| `mixerAux*` | Auxiliary send/return |
| `mixerGroup*` | Group channel |
| `mixerSidechain*` | Sidechain routing |

Audio devices connect to the mixer through `audioCable` entities that link device outputs to mixer channel inputs.

### Timeline entities

Timeline entities construct the arrangement view — tracks, regions, and the notes and audio clips within them.

| Entity | Description |
|--------|-------------|
| `noteTrack` | Track for note/MIDI data |
| `audioTrack` | Track for audio clips |
| `automationTrack` | Track for parameter automation |
| `patternTrack` | Pattern-based sequencing track |
| `noteRegion` | A region on a note track |
| `audioRegion` | A region on an audio track |
| `automationRegion` | A region on an automation track |
| `noteCollection` | A collection of notes (referenced by noteRegions) |
| `note` | An individual note with `positionTicks`, `pitch`, `velocity` |

### Utility entities

Utility entities handle document-level configuration and connections.

| Entity | Description |
|--------|-------------|
| `configuration` | Document-level settings |
| `audioCable` | Connects audio device outputs to inputs |
| `noteCable` | Connects note/MIDI outputs to inputs |
| `groove` | Groove/swing quantization |
| `microtuningOctave` | Per-octave microtuning definition |
| `sample` | Reference to an audio sample file |
| `vst3Plugin` | A VST3 plugin instance |

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

Some fields are **pointers** — they reference another entity or a field on another entity. Pointers define the relationships in the document graph.

Examples:
- A `note` has a `collection` field that points to the `noteCollection` it belongs to.
- An `automationTrack` points to the device parameter it controls.
- An `audioCable` points to the output and input it connects.

When you create entities that need to reference others, you pass pointer values as part of the creation call.

## Working with entities in practice

Creating an entity:

```typescript
await document.modify((t) => {
  t.create("tinyGain", {
    positionX: 100,
    positionY: 200,
    displayName: "My Gain"
  });
});
```

Querying existing entities:

```typescript
const gains = document.queryEntities.ofTypes("tinyGain").get();
```

Listening for new entities:

```typescript
document.events.onCreate("note", (entity) => {
  console.log("New note at tick:", entity.fields.positionTicks);
});
```

→ See the full type definitions in [Entity Reference](../reference/entity-reference.md).

→ For step-by-step task guides, see [Create Devices](../working-with-audiotool-projects/create-devices.md) and [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md).
