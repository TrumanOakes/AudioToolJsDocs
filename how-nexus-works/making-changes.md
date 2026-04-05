---
title: Making Changes
parent: How Nexus Works
nav_order: 4
---

# Making Changes

All modifications to a Nexus document go through a <span class="tooltip" data-tooltip="The tool used to prepare and apply changes to a document.">**transaction builder**</span>. This page explains how <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transactions</span> work and what operations are available.

## Two ways to make changes

Nexus has two transaction APIs. Both build and commit a set of changes atomically.

### `nexus.modify()` — recommended for most cases

Call `nexus.modify()` with a callback to open a transaction:

```typescript
await nexus.modify((t) => {
  // t is the transaction builder
  t.create("tinyGain", { positionX: 100, positionY: 200 });
});
```

- `modify()` waits for any in-progress changes to finish before your callback runs.
- All operations inside the callback are applied together — if any one fails, none of them go through.
- If any operation fails validation, the entire transaction is rejected.
- `modify()` returns a Promise that resolves when the transaction is committed.

### `nexus.createTransaction()` — lower-level alternative

`createTransaction()` gives you an explicit transaction object. Build your changes, then call `.send()` to commit:

```typescript
const t = await nexus.createTransaction();

const synth = t.create("pulverisateur", { positionX: 100, positionY: 100 });
const channel = t.create("mixerChannel", {});

t.create("desktopAudioCable", {
  fromSocket: synth.fields.audioOutput.location,
  toSocket: channel.fields.audioInput.location,
});

t.send(); // commits all three creates at once
```

> This is the pattern used in all official Nexus examples. It makes it easy to reference entities created earlier in the same transaction — for example, using `synth.fields.audioOutput.location` on the line after creating `synth`.

Both APIs produce identical results. Use `modify()` when you want automatic queuing, or `createTransaction()` when you prefer explicit control.

## The three operations

### Create — `t.create(type, fields)`

Creates a new entity of the given type with the specified initial fields:

```typescript
await nexus.modify((t) => {
  t.create("tonematrix", {});
  t.create("tinyGain", { positionX: 100, positionY: 200 });
  t.create("note", {
    positionTicks: 0,
    pitch: 60,
    velocity: 100
  });
});
```

Fields you omit will use their schema defaults. You can create multiple entities in a single transaction.

### Update — `t.update(field, value)`

Updates the value of a specific field on an existing entity:

```typescript
await nexus.modify((t) => {
  t.update(gainEntity.fields.gain, 0.75);
  t.update(gainEntity.fields.displayName, "Main Gain");
});
```

You reference the field via `entity.fields.fieldName`. You cannot update an entity by ID alone — you must hold a reference to the entity object.

### Remove — `t.remove(entity)`

Removes an entity from the document:

```typescript
await nexus.modify((t) => {
  t.remove(gainEntity);
});
```

Removing an entity that other entities reference (via pointers) may cause validation errors depending on the schema rules.

## How multiple modify() calls work

Only one `modify()` runs at a time. If you call `modify()` while another is already running, it waits in a queue. This means:

- Multiple calls are always executed in the order you made them.
- Each transaction sees consistent document state.

You do not need to manage this yourself — `modify()` handles it automatically.

## Validation

By default, Nexus validates each transaction against the document schema:

- Entity types must exist in the schema.
- Field values must match their declared types.
- Required fields must be provided or have defaults.

If validation fails, `modify()` throws a transaction error. See [Validation Errors](../errors-and-fixes/validation-errors.md) for common causes and fixes.

To disable validation (for rapid prototyping with an offline document):

```typescript
const nexus = await createOfflineDocument({ validated: false });
```

## Type safety

The transaction builder used in `modify()` is fully typed. TypeScript will flag incorrect field types or unknown entity keys at compile time — often before you even run your code.

→ See [Document Model](../reference/document-model.md) for the full type definitions.

## Next step

→ [Queries and Events](queries-and-events.md) — read state and react to changes
