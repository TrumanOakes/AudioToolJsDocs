---
title: Find and Read Entities
parent: Working With Audiotool Projects
nav_order: 5
---

# Find and Read Entities

Use <span class="tooltip" data-tooltip="A way to search for and retrieve specific entities or data from a document.">queries</span> to inspect the current state of the document — find <span class="tooltip" data-tooltip="A single item inside a project document, such as a device, note region, or other project object.">entities</span> by type, filter by field values, and read their current field data.

## Query by entity type

```typescript
// Get all entities of a specific type
const notes = document.queryEntities.ofTypes("note").get();
const gains = document.queryEntities.ofTypes("tinyGain").get();

// Get multiple types at once
const devices = document.queryEntities
  .ofTypes("pulverisateur", "gakki", "bassline")
  .get();
```

`.get()` returns the matching entities at the moment of the call. The result is not live — it won't change as the document updates.

## Filter by field value

```typescript
// Find notes with velocity above 90
const loud = document.queryEntities
  .ofTypes("note")
  .where(n => n.fields.velocity > 90)
  .get();

// Find the master mixer entity
const master = document.queryEntities
  .ofTypes("mixerMaster")
  .get()[0]; // there is always exactly one
```

## Read entity fields

Entity objects expose their fields under `.fields`:

```typescript
const notes = document.queryEntities.ofTypes("note").get();

for (const note of notes) {
  console.log(`Pitch: ${note.fields.pitch}, Tick: ${note.fields.positionTicks}`);
}
```

Field values reflect the current state of the document. To track changes over time, use events instead of repeatedly querying.

## Find a specific entity by ID

If you know an entity's ID:

```typescript
const allNotes = document.queryEntities.ofTypes("note").get();
const target = allNotes.find(n => n.id === "some-entity-id");
```

## Combining queries and events

The most robust pattern is to load initial state with a query, then subscribe to events to stay current:

```typescript
await document.start();

// Initial load
const existingNotes = document.queryEntities.ofTypes("note").get();
for (const note of existingNotes) {
  addNoteToUI(note);
}

// Track future changes
document.events.onCreate("note", addNoteToUI);
document.events.onRemove("note", removeNoteFromUI);
```

## Available entity types for queries

Any entity type key can be used in a query. Common examples:

| What you want | Entity type(s) |
|--------------|----------------|
| All notes | `"note"` |
| All audio devices | `"tinyGain"`, `"pulverisateur"`, `"gakki"`, etc. |
| All tracks | `"noteTrack"`, `"audioTrack"`, `"automationTrack"` |
| All mixer channels | `"mixerChannel"` |
| All cables | `"audioCable"`, `"noteCable"` |

See [Entity Reference](../reference/entity-reference.md) for the complete list of entity type keys.

## Next step

→ [Listen for Changes](listen-for-changes.md) — subscribe to real-time entity events
