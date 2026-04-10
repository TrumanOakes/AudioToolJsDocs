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

**Synthesizers:** [`pulverisateur`](../api-reference/generated/entities/type-aliases/Pulverisateur.html), [`gakki`](../api-reference/generated/entities/type-aliases/Gakki.html), [`bassline`](../api-reference/generated/entities/type-aliases/Bassline.html), [`kobolt`](../api-reference/generated/entities/type-aliases/Kobolt.html), [`tonematrix`](../api-reference/generated/entities/type-aliases/Tonematrix.html)

**Drum machines:** [`beatbox8`](../api-reference/generated/entities/type-aliases/Beatbox8.html), [`beatbox9`](../api-reference/generated/entities/type-aliases/Beatbox9.html), [`rasselbock`](../api-reference/generated/entities/type-aliases/Rasselbock.html), [`machiniste`](../api-reference/generated/entities/type-aliases/Machiniste.html)

**Filters and effects:** [`autoFilter`](../api-reference/generated/entities/type-aliases/AutoFilter.html), [`graphicalEQ`](../api-reference/generated/entities/type-aliases/GraphicalEQ.html), [`stompboxDelay`](../api-reference/generated/entities/type-aliases/StompboxDelay.html), [`stompboxSlope`](../api-reference/generated/entities/type-aliases/StompboxSlope.html), [`tinyGain`](../api-reference/generated/entities/type-aliases/TinyGain.html), [`audioMerger`](../api-reference/generated/entities/type-aliases/AudioMerger.html), [`audioSplitter`](../api-reference/generated/entities/type-aliases/AudioSplitter.html), [`crossfader`](../api-reference/generated/entities/type-aliases/Crossfader.html)

> The system automatically manages device positioning to prevent overlaps.

### Mixer entities

Mixer entities control signal routing and mixing. They represent the mixer section of the DAW.

| Entity | Description |
|--------|-------------|
| [`mixerMaster`](../api-reference/generated/entities/type-aliases/MixerMaster.html) | Required master output — one per document |
| [`mixerChannel`](../api-reference/generated/entities/type-aliases/MixerChannel.html) | Individual channel strip |
| [`mixerAux`](../api-reference/generated/entities/type-aliases/MixerAux.html) | Auxiliary send/return |
| [`mixerGroup`](../api-reference/generated/entities/type-aliases/MixerGroup.html) | Group channel |
| [`mixerSideChainCable`](../api-reference/generated/entities/type-aliases/MixerSideChainCable.html) | Sidechain routing |

Audio devices connect to the mixer through `desktopAudioCable` entities that link device outputs to mixer channel inputs.

### Timeline entities

Timeline entities construct the arrangement view — tracks, regions, and the notes and audio clips within them.

| Entity | Description |
|--------|-------------|
| [`noteTrack`](../api-reference/generated/entities/type-aliases/NoteTrack.html) | Track for note/MIDI data |
| [`audioTrack`](../api-reference/generated/entities/type-aliases/AudioTrack.html) | Track for audio clips |
| [`automationTrack`](../api-reference/generated/entities/type-aliases/AutomationTrack.html) | Track for parameter automation |
| [`patternTrack`](../api-reference/generated/entities/type-aliases/PatternTrack.html) | Pattern-based sequencing track |
| [`noteRegion`](../api-reference/generated/entities/type-aliases/NoteRegion.html) | A region on a note track |
| [`audioRegion`](../api-reference/generated/entities/type-aliases/AudioRegion.html) | A region on an audio track |
| [`automationRegion`](../api-reference/generated/entities/type-aliases/AutomationRegion.html) | A region on an automation track |
| [`noteCollection`](../api-reference/generated/entities/type-aliases/NoteCollection.html) | A collection of notes (referenced by noteRegions) |
| [`note`](../api-reference/generated/entities/type-aliases/Note.html) | An individual note with `positionTicks`, `pitch`, `velocity` |

### Utility entities

Utility entities handle document-level configuration and connections.

| Entity | Description |
|--------|-------------|
| [`config`](../api-reference/generated/entities/type-aliases/Config.html) | Document-level settings |
| [`desktopAudioCable`](../api-reference/generated/entities/type-aliases/DesktopAudioCable.html) | Connects audio device outputs to inputs |
| [`desktopNoteCable`](../api-reference/generated/entities/type-aliases/DesktopNoteCable.html) | Connects note/MIDI outputs to inputs |
| [`groove`](../api-reference/generated/entities/type-aliases/Groove.html) | Groove/swing quantization |
| [`microTuningOctave`](../api-reference/generated/entities/type-aliases/MicroTuningOctave.html) | Per-octave microtuning definition |
| [`sample`](../api-reference/generated/entities/type-aliases/Sample.html) | Reference to an audio sample file |
| [`spitfireLabsVst3Plugin`](../api-reference/generated/entities/type-aliases/SpitfireLabsVst3Plugin.html) | A VST3 plugin instance |

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
- An `desktopAudioCable` points to the audio output and input it connects.

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
  console.log("New note at tick:", entity.fields.positionTicks.value);
});
```

→ See the full type definitions in [Entity Reference](../reference/entity-reference.md).

→ For explanation-first pages about entity behavior, see [Reference → entities](../reference/entity-reference.html).

→ For step-by-step task guides, see [Create Devices](../working-with-audiotool-projects/create-devices.md) and [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md).
