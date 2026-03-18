---
title: Document Model
parent: Reference
nav_order: 3
---

# Document Model

**Module:** `@audiotool/nexus/document`

Type definitions for the Nexus document structure, schema, and <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transaction</span> system. Use this page as a reference when working with the document API directly or when you need specific type names for TypeScript.

---

## Interfaces

### `NexusEntity`

The core interface that every entity in the document implements. Whether you are holding a `note`, a `tinyGain`, or a `mixerChannel`, you are holding a `NexusEntity`.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier assigned at creation — never changes |
| `type` | `EntityTypeKey` | The entity's type key (e.g. `"tinyGain"`, `"note"`) |
| `fields` | object | Typed fields specific to this entity type |

```typescript
const gains = document.queryEntities.ofTypes("tinyGain").get();

for (const gain of gains) {
  console.log(gain.id);              // "a1b2c3d4e5f6..."
  console.log(gain.type);            // "tinyGain"
  console.log(gain.fields.gain);     // current gain value
  console.log(gain.fields.displayName); // label
}
```

---

### `EntityQuery`

The type returned by `document.queryEntities.ofTypes(...)`. Provides a fluent API for filtering and retrieving entities from the current document state.

| Method | Description |
|--------|-------------|
| `.get()` | Returns all matching entities as an array (snapshot, not live) |
| `.where(predicate)` | Filters results by a field condition before calling `.get()` |

```typescript
// Get all notes
const allNotes = document.queryEntities.ofTypes("note").get();

// Filter by field value
const loudNotes = document.queryEntities
  .ofTypes("note")
  .where(n => n.fields.velocity > 100)
  .get();

// Query multiple types at once
const allTracks = document.queryEntities
  .ofTypes("noteTrack", "audioTrack", "automationTrack")
  .get();
```

---

### `FieldQuery`

Specifies field-level query parameters. Used when querying entities by the value of a specific field rather than just by type.

```typescript
// A FieldQuery is returned when you narrow a query to a specific field
const query = document.queryEntities
  .ofTypes("note")
  .where(note => note.fields.pitch === 60); // middle C

const middleCNotes = query.get();
```

---

### `NexusEventManager`

The interface of `document.events`. Provides methods to subscribe to entity lifecycle events: creation, field updates, and removal.

| Method | Description |
|--------|-------------|
| `.onCreate(type, handler)` | Fires when a new entity of the given type is created |
| `.onUpdate(field, handler)` | Fires when a specific field value changes |
| `.onRemove(type, handler)` | Fires when an entity of the given type is removed |

Each method returns a <span class="tooltip" data-tooltip="An object with a .terminate() method that cancels the subscription when you no longer need it.">terminable</span> you can use to unsubscribe.

```typescript
// onCreate — react to new entities
const sub = document.events.onCreate("note", (note) => {
  console.log("New note at tick:", note.fields.positionTicks);
});

// onUpdate — react to field changes
let gainEntity;
await document.modify((t) => {
  gainEntity = t.create("tinyGain", { gain: 1.0 });
});

document.events.onUpdate(gainEntity.fields.gain, (newValue) => {
  console.log("Gain changed to:", newValue);
});

// onRemove — react to deletions
document.events.onRemove("tinyGain", (entity) => {
  console.log("Removed:", entity.id);
});

// Clean up when done
sub.terminate();
```

---

### `PrimitiveField`

A field that holds a single primitive value — a number, string, boolean, or byte sequence. Every primitive field on an entity (`gain`, `displayName`, `pitch`, etc.) is a `PrimitiveField`.

The type parameter signature is `PrimitiveField<ValueType, Mutability>`, where mutability is `"mut"` for writable fields or `"immut"` for read-only fields.

```typescript
// Accessing a PrimitiveField — reading its current value
const gainField = gainEntity.fields.gain;  // PrimitiveField<number, "mut">
console.log(gainField.value);              // current number value

// Passing a PrimitiveField to t.update()
await document.modify((t) => {
  t.update(gainEntity.fields.gain, 0.75);       // writable
  t.update(gainEntity.fields.displayName, "FX"); // writable
});
```

---

### `ArrayField`

A field that holds an ordered list of sub-entities or values. Some entity types use array fields to store variable-length data — for example, the steps in a `MatrixArpeggiatorPattern`.

```typescript
// ArrayField<T, N> — T is the element type, N is the max length
// Access array elements through the field on the entity:
const pattern = document.queryEntities
  .ofTypes("matrixArpeggiatorPattern")
  .get()[0];

const steps = pattern.fields.steps; // ArrayField<..., 64>
```

---

### `NexusField`

The base interface for all field types — both `PrimitiveField` and `ArrayField` extend `NexusField`. You will most often see the more specific subtypes in practice; `NexusField` is the common base.

```typescript
// You rarely use NexusField directly — it appears in generic utilities.
// Example: a helper that accepts any field
function logField(field: NexusField) {
  console.log(field); // access field metadata
}
```

---

### `NexusObject`

Represents an object-type field — a structured group of named fields nested inside another field. Entity types that have complex sub-structures use `NexusObject` to wrap them.

```typescript
// NexusObject<T> wraps a structured type T
// Example: MatrixArpeggiatorPatternStep is accessed as a NexusObject
const step = pattern.fields.steps[0]; // NexusObject<MatrixArpeggiatorPatternStep>
```

---

### `NexusLocation`

A reference to a specific location within the document schema — used when you need to point at a particular field or entity rather than passing the entity object itself. Automation tracks use `NexusLocation` to identify the device parameter they control.

```typescript
// NexusLocation appears when working with automation and reference queries
// The automation track's `target` field holds a NexusLocation
const autoTracks = document.queryEntities.ofTypes("automationTrack").get();

for (const track of autoTracks) {
  const targetLocation = track.fields.target; // NexusLocation → the automated parameter
  console.log("Automating:", targetLocation);
}
```

---

## Type Aliases

### Primitive Types

These aliases name the four primitive value types that fields can hold. You will encounter them in TypeScript signatures and generic constraints.

| Type | Description |
|------|-------------|
| `NumberPrimitive` | A number-valued primitive field |
| `StringPrimitive` | A string-valued primitive field |
| `BooleanPrimitive` | A boolean-valued primitive field |
| `BytesPrimitive` | A byte sequence primitive field |

```typescript
import type { NumberPrimitive, StringPrimitive } from "@audiotool/nexus/document";

// Use as type annotations when writing helpers
function updateGain(field: NumberPrimitive) {
  // TypeScript knows this is a number field
}

function setLabel(field: StringPrimitive) {
  // TypeScript knows this is a string field
}
```

---

### `EntityTypeKey`

A union of all valid entity type key strings. TypeScript uses this to catch typos in `t.create("typeName")` and `queryEntities.ofTypes("typeName")` calls at compile time.

```typescript
import type { EntityTypeKey } from "@audiotool/nexus/document";

// Use as a type annotation when building generic utilities
function createByType(document: any, type: EntityTypeKey) {
  return document.modify((t: any) => t.create(type, {}));
}

// TypeScript will error on:
// createByType(document, "notAReal Type");
//                         ^^^^^^^^^^^^^^^ not assignable to EntityTypeKey
```

---

### `EntityDetails`

The complete type definition for a single entity type — its fields and their types. Used internally and in TypeScript generics when you need to work with entity schemas directly.

```typescript
import type { EntityDetails } from "@audiotool/nexus/document";

// Use in generic functions that need full entity type info
function inspectEntityFields<K extends EntityTypeKey>(
  details: EntityDetails<K>
) {
  // Work with field definitions at the type level
}
```

---

### `EntityTypes`

A map of all entity type keys to their `EntityDetails`. The complete schema map for the entire Nexus document model — useful when iterating or inspecting all known entity types.

```typescript
import type { EntityTypes } from "@audiotool/nexus/document";

// Represents: { "tinyGain": EntityDetails<"tinyGain">, "note": EntityDetails<"note">, ... }
// Used in advanced type-level programming to work with the full schema
```

---

### `EntityWithOverwrites`

An entity type that includes field overwrites applied on top of its base values. Used internally when pending transaction changes are visible before being committed.

```typescript
import type { EntityWithOverwrites } from "@audiotool/nexus/document";

// Appears in contexts where pre-commit state needs to be inspected
// Most users will not need to use this type directly
```

---

### `NexusEntityUnion`

A union type of every possible `NexusEntity` in the schema. Useful when writing code that can receive any entity type and then narrows by `.type`.

```typescript
import type { NexusEntityUnion } from "@audiotool/nexus/document";

function handleAnyEntity(entity: NexusEntityUnion) {
  if (entity.type === "note") {
    // TypeScript narrows — fields are typed for note
    console.log("pitch:", entity.fields.pitch);
  } else if (entity.type === "tinyGain") {
    // TypeScript narrows — fields are typed for tinyGain
    console.log("gain:", entity.fields.gain);
  }
}
```

---

### `ReferenceQuery`

A query type for finding entities related to another through pointer fields. Because the pointer direction is not always known, `ReferenceQuery` does not change the return type — it narrows the results to a specific relationship.

| Method | Description |
|--------|-------------|
| `.entities(...ids)` | Filter by entity IDs |
| `.entityOfType<Q>(...types)` | Filter by entity type keys |
| `.locations(...loc)` | Filter by schema locations |

```typescript
// Find all entities that are pointed to by desktopAudioCable entities
const connected = document.queryEntities
  .pointedToBy.types("desktopAudioCable")
  .get();

for (const device of connected) {
  console.log("Connected device:", device.id, device.type);
}
```

---

### `TransactionBuilder`

The `t` object passed into your `document.modify(t => ...)` callback, or the object returned by `document.createTransaction()`. Provides the three mutation operations: `create`, `update`, and `remove`.

| Method | Description |
|--------|-------------|
| `t.create(type, fields)` | Create a new entity and return a reference to it |
| `t.update(field, value)` | Set a new value on an existing entity's field |
| `t.remove(entity)` | Remove an entity from the document |

**With `document.modify()`:**

```typescript
// All three operations in one transaction
let gain;

await document.modify((t) => {
  // create
  gain = t.create("tinyGain", { displayName: "FX Gain", gain: 1.0 });
});

await document.modify((t) => {
  // update
  t.update(gain.fields.gain, 0.5);
  t.update(gain.fields.displayName, "FX Gain (quiet)");
});

await document.modify((t) => {
  // remove
  t.remove(gain);
});
```

**With `document.createTransaction()`** — lower-level alternative used in official examples:

```typescript
// createTransaction() returns the TransactionBuilder directly
// Call .send() to commit when you're done
const t = await document.createTransaction();

const synth = t.create("pulverisateur", { positionX: 100, positionY: 100 });
const channel = t.create("mixerChannel", {});

t.create("desktopAudioCable", {
  fromSocket: synth.fields.audioOutput.location,
  toSocket: channel.fields.audioInput.location,
});

t.send(); // commits all three creates at once
```

> Both APIs produce identical results. `createTransaction()` is useful when you need to reference `.location` on entities you just created in the same transaction batch.

---

### `SafeTransactionBuilder`

A stricter variant of `TransactionBuilder` with additional TypeScript-level type enforcement. Enforces that field values exactly match their declared types with no implicit coercions. Use when you want the compiler to catch more potential errors at write time.

```typescript
// SafeTransactionBuilder behaves the same as TransactionBuilder at runtime —
// the difference is compile-time strictness:
import type { SafeTransactionBuilder } from "@audiotool/nexus/document";

async function safeSetGain(
  document: any,
  entity: any,
  gain: SafeTransactionBuilder
) {
  await document.modify((t: SafeTransactionBuilder) => {
    t.update(entity.fields.gain, 0.8);
  });
}
```

---

### `ArrayDetails`, `ObjectDetails`, `PrimitiveFieldDetails`

Schema detail types for array, object, and primitive fields respectively. Used when inspecting field definitions at the type level — for example, in code that introspects the schema to build tooling.

```typescript
import type {
  ArrayDetails,
  ObjectDetails,
  PrimitiveFieldDetails
} from "@audiotool/nexus/document";

// These types appear when working with schema introspection utilities
// Most app code will not need them directly
```

---

### `NexusLocationPrimitive`, `SchemaLocation`, `SchemaPath`

Types for navigating the document schema structure. `SchemaLocation` and `SchemaPath` are two representations of the same concept — a path to a specific location in the schema.

```typescript
import type { SchemaLocation, SchemaPath } from "@audiotool/nexus/document";

// Use the utility functions to convert between representations:
import {
  schemaLocationToSchemaPath,
  schemaPathToSchemaLocation
} from "@audiotool/nexus/document";

const path: SchemaPath = schemaLocationToSchemaPath(someLocation);
const location: SchemaLocation = schemaPathToSchemaLocation(path);
```

---

## Functions

### `getSchemaLocationDetails(location)`

Returns information about a schema location — what field it refers to, its type, and related metadata.

```typescript
import { getSchemaLocationDetails } from "@audiotool/nexus/document";

// Inspect the details of a field's schema location
const details = getSchemaLocationDetails(entity.fields.gain);
console.log(details); // schema metadata for the gain field
```

---

### `schemaLocationToSchemaPath(location)`

Converts a `SchemaLocation` to a `SchemaPath`. Useful when you need a serializable or loggable representation of a schema location.

```typescript
import { schemaLocationToSchemaPath } from "@audiotool/nexus/document";

const path = schemaLocationToSchemaPath(entity.fields.gain);
console.log(path); // human-readable schema path string
```

---

### `schemaPathToSchemaLocation(path)`

Converts a `SchemaPath` back to a `SchemaLocation`. The inverse of `schemaLocationToSchemaPath`.

```typescript
import { schemaPathToSchemaLocation } from "@audiotool/nexus/document";

const location = schemaPathToSchemaLocation(path);
// Use location in queries or automation track setup
```

---

## References

- `TargetType` — re-exported from the [api module](platform-api-types.md)

## See also

- [Making Changes](../how-nexus-works/making-changes.md) — conceptual guide to `TransactionBuilder` and transactions
- [Queries and Events](../how-nexus-works/queries-and-events.md) — how to use `EntityQuery` and `NexusEventManager`
- [Entities and Fields](../how-nexus-works/entities-and-fields.md) — conceptual overview of `NexusEntity`, fields, and pointers
