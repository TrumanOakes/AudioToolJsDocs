# Validation Errors

Transaction validation errors occur when `document.modify()` rejects an operation because it violates the document schema.

## What causes validation errors?

The Nexus schema strictly defines:

- Which entity types exist (e.g., `"tinyGain"`, `"note"`)
- What fields each entity has
- What type each field expects (number, string, boolean, pointer, etc.)
- Which fields are required vs optional

If your transaction violates any of these rules, `modify()` throws.

## How to see the error

Always catch and log the full error:

```typescript
try {
  await document.modify((t) => {
    // your changes here
  });
} catch (error) {
  console.error("Transaction failed:", error);
}
```

The error message will describe which field or entity caused the rejection.

## Common causes

### Wrong entity type key

```typescript
// WRONG — entity type does not exist
t.create("TinyGain", {}); // keys are camelCase lowercase start
t.create("tiny_gain", {});

// Correct
t.create("tinyGain", {});
```

Entity type keys are case-sensitive and always `camelCase` starting with a lowercase letter.

### Wrong field value type

```typescript
// WRONG — pitch expects a number, not a string
t.create("note", { pitch: "60", positionTicks: 0, velocity: 100 });

// Correct
t.create("note", { pitch: 60, positionTicks: 0, velocity: 100 });
```

### Missing required fields

Some entity types require certain fields to be set at creation. Check the [Entity Reference](../reference/entity-reference.md) for required fields.

### Updating a field with the wrong type

```typescript
// WRONG — gain expects a number
t.update(entity.fields.gain, "loud");

// Correct
t.update(entity.fields.gain, 0.8);
```

### Removing a referenced entity

Removing an entity that other entities reference via pointers may violate referential integrity rules. Remove dependent entities first, or consult the schema to understand the reference chain.

## Disable validation temporarily (offline only)

For rapid prototyping with an offline document, you can disable validation:

```typescript
const document = await createOfflineDocument({ validated: false });
```

This allows transactions that would otherwise fail. Use it to explore the API quickly, but re-enable validation before treating results as correct.

> Validation cannot be disabled on synced documents.

## TypeScript helps catch errors before runtime

The transaction builder types will flag incorrect field types at compile time if you use TypeScript. Pay attention to TypeScript errors — they often reflect the same constraints as runtime validation.

## Next step

→ [Query and Event Confusion](query-and-event-confusion.md) — issues with reading and reacting to document state
