# Making Changes

All modifications to a Nexus document go through a **transaction builder**. This page explains how transactions work, what operations are available, and how the document lock fits in.

## The modify() method

Call `document.modify()` with a callback to open a transaction:

```typescript
await document.modify((t) => {
  // t is the transaction builder
  t.create("tinyGain", { positionX: 100, positionY: 200 });
});
```

- `modify()` acquires the document lock before your callback runs.
- All operations inside the callback are collected and applied atomically.
- If any operation fails validation, the entire transaction is rejected.
- `modify()` returns a Promise that resolves when the transaction is committed.

## The three operations

### Create — `t.create(type, fields)`

Creates a new entity of the given type with the specified initial fields:

```typescript
await document.modify((t) => {
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
await document.modify((t) => {
  t.update(gainEntity.fields.gain, 0.75);
  t.update(gainEntity.fields.displayName, "Main Gain");
});
```

You reference the field via `entity.fields.fieldName`. You cannot update an entity by ID alone — you must hold a reference to the entity object.

### Remove — `t.remove(entity)`

Removes an entity from the document:

```typescript
await document.modify((t) => {
  t.remove(gainEntity);
});
```

Removing an entity that other entities reference (via pointers) may cause validation errors depending on the schema rules.

## The document lock

`modify()` acquires an internal **async lock** before the transaction runs. This guarantees:

- No two transactions run concurrently.
- The transaction sees a consistent snapshot of the document state.
- Concurrent `modify()` calls are queued and executed in order.

You do not need to manage the lock manually — `modify()` handles it.

## Validation

By default, Nexus validates each transaction against the document schema:

- Entity types must exist in the schema.
- Field values must match their declared types.
- Required fields must be provided or have defaults.

If validation fails, `modify()` throws a transaction error. See [Validation Errors](../errors-and-fixes/validation-errors.md) for common causes and fixes.

To disable validation (for rapid prototyping with an offline document):

```typescript
const document = await createOfflineDocument({ validated: false });
```

## The SafeTransactionBuilder

The `SafeTransactionBuilder` type is a stricter variant of the transaction builder that enforces additional constraints at the TypeScript type level. This helps catch mistakes before they become runtime errors. It is the type used in the `modify()` callback by default.

→ See [Document Model](../reference/document-model.md) for the full type definitions.

## Next step

→ [Queries and Events](queries-and-events.md) — read state and react to changes
