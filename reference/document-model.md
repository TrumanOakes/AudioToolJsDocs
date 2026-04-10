---
title: Document Model
parent: Reference
nav_order: 3
has_children: true
---

# Document Model

**Module:** `@audiotool/nexus/document`

Type definitions for the Nexus document structure, schema, and <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transaction</span> system. Use this page as a reference when working with the document API directly or when you need specific type names for TypeScript.

---

## Interfaces

### [`NexusEntity`](../api-reference/generated/document/interfaces/NexusEntity.md)

The core interface that every entity in the document implements. Whether you are holding a `note`, a `tinyGain`, or a `mixerChannel`, you are holding a `NexusEntity`.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier assigned at creation — never changes |
| `entityType` | `EntityTypeKey` | The entity's type key (e.g. `"tinyGain"`, `"note"`) |
| `fields` | object | Typed fields specific to this entity type |

```typescript
const gains = nexus.queryEntities.ofTypes("tinyGain").get();

for (const gain of gains) {
  console.log(gain.id);              // "a1b2c3d4e5f6..."
  console.log(gain.entityType);      // "tinyGain"
  console.log(gain.fields.gain.value);     // current gain value
  console.log(gain.fields.displayName.value); // label
}
```

---

### [`EntityQuery`](../api-reference/generated/document/interfaces/EntityQuery.md)

The type returned by `nexus.queryEntities.ofTypes(...)`. Provides a fluent API for filtering and retrieving entities from the current document state.

| Method | Description |
|--------|-------------|
| `.get()` | Returns all matching entities as an array (snapshot, not live) |
| `.getOne()` | Returns the first matching entity, or `undefined` if none match |
| `.has(entity)` | Returns `true` if the given entity (or ID) is in the current query result |
| `.ofTypes(...types)` | Narrow to entities of specific type keys |
| `.withIds(...ids)` | Narrow to entities with specific IDs |
| `.fields()` | Returns a `FieldQuery` over all fields of selected entities |
| `.pointingTo.entities(...ids)` | Only keep entities that point to the given entity IDs |
| `.pointedToBy.entityOfType(...types)` | Only keep entities that are pointed to by entities of the given types |
| `nexus.queryEntities.mustGetEntity(id)` | Get a specific entity by ID — throws if not found |
| `nexus.queryEntities.mustGetEntityAs(id, ...types)` | Same as above but returns the entity typed to the given type keys |

```typescript
// Get all notes
const allNotes = nexus.queryEntities.ofTypes("note").get();

// Query multiple types at once
const allTracks = nexus.queryEntities
  .ofTypes("noteTrack", "audioTrack", "automationTrack")
  .get();

// Get ALL entities in the document (no type filter)
const everything = nexus.queryEntities.get();

// Get one entity of a type (useful for singletons like "config")
const config = nexus.queryEntities.ofTypes("config").getOne();

// Check if an entity still exists
if (nexus.queryEntities.has(someEntity)) { ... }

// Get a specific entity by ID — throws if not found
const entity = nexus.queryEntities.mustGetEntity("some-id");

// Typed version — returns the entity as the given type, throws if not found
const sampleEntity = nexus.queryEntities.mustGetEntityAs(entityId, "sample");
console.log(sampleEntity.fields.sampleName.value);

// Find all entities pointing to a given entity ID
// (e.g. find all noteRegions that reference a specific noteCollection)
const regions = nexus.queryEntities
  .pointingTo.entities(collection.id)
  .get();

// Find all audio cables connected to a specific device
const cables = nexus.queryEntities
  .ofTypes("desktopAudioCable")
  .pointingTo.entities(device.id)
  .get();
```

---

### [`FieldQuery`](../api-reference/generated/document/interfaces/FieldQuery.md)

A `FieldQuery` is returned by calling `.fields()` on an `EntityQuery`. It provides methods to filter across the fields of selected entities — for example, finding fields by pointer target type or whether they're pointed to.

```typescript
// FieldQuery is obtained via .fields() on an EntityQuery
// Example: get all fields from all desktopAudioCable entities
const cableFields = nexus.queryEntities
  .ofTypes("desktopAudioCable")
  .fields();

// Filter to fields that point to specific target types
const audioOutputFields = cableFields.ofTargetTypes("AudioOutput");

// Filter to pointer fields that are not yet connected
const unconnectedFields = cableFields.notPointedTo();

// Get primitive fields only (numbers, strings, booleans)
const primitiveFields = nexus.queryEntities.fields().primitiveFields();
```

---

### [`NexusEventManager`](../api-reference/generated/document/interfaces/NexusEventManager.md)

The interface of `nexus.events`. Provides methods to subscribe to entity lifecycle events: creation, field updates, removal, and pointer changes.

| Method | Signature | Description |
|--------|-----------|-------------|
| `.onCreate(type, handler)` | `(type, handler) => Terminable` | Fires when a new entity of the given type is created. Handler can **return a cleanup function** that fires when that specific entity is later removed |
| `.onUpdate(field, handler, callNow?)` | `(field, handler, boolean?) => Terminable` | Fires when a specific field value changes. Pass `false` as third arg to skip the immediate call with the current value |
| `.onRemove("*", handler)` | `("*", handler) => Terminable` | Fires when any entity is removed |
| `.onRemove(entity, handler)` | `(entity, handler) => Terminable` | Fires when a **specific** entity is removed |
| `.onPointingTo(location, handler)` | `(location, handler) => Terminable` | Fires when any pointer starts pointing to the given location |

Each method returns a <span class="tooltip" data-tooltip="An object with a .terminate() method that cancels the subscription when you no longer need it.">terminable</span> you can use to unsubscribe.

```typescript
// onCreate — react to new entities
const sub = nexus.events.onCreate("note", (note) => {
  console.log("New note at tick:", note.fields.positionTicks.value);
});

// onCreate with cleanup function — handler return value is called when that entity is removed
nexus.events.onCreate("noteRegion", (region) => {
  console.log("Region created:", region.id);

  // Return a cleanup function — Nexus calls this when this specific region is removed
  return () => {
    console.log("Region removed:", region.id);
  };
});

// onUpdate — react to field changes
// Third argument (default true): call handler immediately with the current value.
// Pass false to only fire on future changes, not the current value.
nexus.events.onUpdate(gainEntity.fields.gain, (newValue) => {
  console.log("Gain changed to:", newValue);
});

nexus.events.onUpdate(gainEntity.fields.gain, (newValue) => {
  console.log("Gain future change:", newValue);
}, false);  // false = don't call for current value, only future changes

// onRemove by type
nexus.events.onRemove("*", (entity) => {
  console.log("A tinyGain was removed:", entity.id);
});

// onRemove by entity — fire only when this specific entity is removed
nexus.events.onRemove(specificGainEntity, () => {
  console.log("This specific gain was removed");
});

// onPointingTo — fire when any entity gains or loses a pointer to the given entity
nexus.events.onPointingTo(synth.fields.audioOutput.location, (from) => {
  console.log("A pointer now targets synth output from:", from.toString());
});

// Clean up when done
sub.terminate();
```

---

### [`PrimitiveField`](../api-reference/generated/document/interfaces/PrimitiveField.md)

A field that holds a single primitive value — a number, string, boolean, or byte sequence. Every primitive field on an entity (`gain`, `displayName`, `pitch`, etc.) is a `PrimitiveField`.

The type parameter signature is `PrimitiveField<ValueType, Mutability>`, where mutability is `"mut"` for writable fields or `"immut"` for read-only fields.

```typescript
// Accessing a PrimitiveField — reading its current value
const gainField = gainEntity.fields.gain;  // PrimitiveField<number, "mut">
console.log(gainField.value);              // current number value

// Passing a PrimitiveField to t.update()
await nexus.modify((t) => {
  t.update(gainEntity.fields.gain, 0.75);       // writable
  t.update(gainEntity.fields.displayName, "FX"); // writable
});
```

**Pointer fields and `.value.entityId`:**

Fields that point to other entities (like `note.fields.collection`) are a special case. Their `.value` returns an object with an `entityId` property — the ID of the pointed-to entity. Use this to look up the target:

```typescript
// A pointer field's .value contains { entityId: string }
const region = nexus.queryEntities.ofTypes("audioRegion").get()[0];

// Get the entity ID that this pointer field points to
const pointedEntityId = region.fields.sample.value.entityId;

// Then look up the actual entity
const sampleEntity = nexus.queryEntities.mustGetEntityAs(pointedEntityId, "sample");
console.log(sampleEntity.fields.sampleName.value);
```

---

### [`ArrayField`](../api-reference/generated/document/interfaces/ArrayField.md)

A field that holds an ordered list of sub-entities or values. Some entity types use array fields to store variable-length data — for example, the steps in a `MatrixArpeggiatorPattern`.

```typescript
// ArrayField<T, N> — T is the element type, N is the max length
// Access array elements through the field on the entity:
const pattern = nexus.queryEntities
  .ofTypes("matrixArpeggiatorPattern")
  .get()[0];

const steps = pattern.fields.steps; // ArrayField<..., 64>
```

---

### [`NexusField`](../api-reference/generated/document/interfaces/NexusField.md)

The base interface for all field types — both `PrimitiveField` and `ArrayField` extend `NexusField`. You will most often see the more specific subtypes in practice; `NexusField` is the common base.

```typescript
// You rarely use NexusField directly — it appears in generic utilities.
// Example: a helper that accepts any field
function logField(field: NexusField) {
  console.log(field); // access field metadata
}
```

---

### [`NexusObject`](../api-reference/generated/document/interfaces/NexusObject.md)

Represents an object-type field — a structured group of named fields nested inside another field. Entity types that have complex sub-structures use `NexusObject` to wrap them.

```typescript
// NexusObject<T> wraps a structured type T
// Example: MatrixArpeggiatorPatternStep is accessed as a NexusObject
const step = pattern.fields.steps[0]; // NexusObject<MatrixArpeggiatorPatternStep>
```

---

### [`NexusLocation`](../api-reference/generated/document/interfaces/NexusLocation.md)

A reference to a specific location within the document schema — used when you need to point at a particular field or entity rather than passing the entity object itself. Automation tracks use `NexusLocation` to identify the device parameter they control.

```typescript
// NexusLocation appears when working with automation and reference queries
// The automation track's `target` field holds a NexusLocation
const autoTracks = nexus.queryEntities.ofTypes("automationTrack").get();

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

### [`EntityTypeKey`](../api-reference/generated/document/type-aliases/EntityTypeKey.md)

A union of all valid entity type key strings. TypeScript uses this to catch typos in `t.create("typeName")` and `queryEntities.ofTypes("typeName")` calls at compile time.

```typescript
import type { EntityTypeKey } from "@audiotool/nexus/document";

// Use as a type annotation when building generic utilities
function createByType(document: any, type: EntityTypeKey) {
  return nexus.modify((t: any) => t.create(type, {}));
}

// TypeScript will error on:
// createByType(document, "notAReal Type");
//                         ^^^^^^^^^^^^^^^ not assignable to EntityTypeKey
```

---

### [`EntityDetails`](../api-reference/generated/document/type-aliases/EntityDetails.md)

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

### [`EntityTypes`](../api-reference/generated/document/type-aliases/EntityTypes.md)

A map of all entity type keys to their `EntityDetails`. The complete schema map for the entire Nexus document model — useful when iterating or inspecting all known entity types.

```typescript
import type { EntityTypes } from "@audiotool/nexus/document";

// Represents: { "tinyGain": EntityDetails<"tinyGain">, "note": EntityDetails<"note">, ... }
// Used in advanced type-level programming to work with the full schema
```

---

### [`EntityWithOverwrites`](../api-reference/generated/document/type-aliases/EntityWithOverwrites.md)

An entity type that includes field overwrites applied on top of its base values. Used internally when pending transaction changes are visible before being committed.

```typescript
import type { EntityWithOverwrites } from "@audiotool/nexus/document";

// Appears in contexts where pre-commit state needs to be inspected
// Most users will not need to use this type directly
```

---

### [`NexusEntityUnion`](../api-reference/generated/document/type-aliases/NexusEntityUnion.md)

A union type of every possible `NexusEntity` in the schema. Useful when writing code that can receive any entity type and then narrows by `.entityType`.

```typescript
import type { NexusEntityUnion } from "@audiotool/nexus/document";

function handleAnyEntity(entity: NexusEntityUnion) {
  if (entity.entityType === "note") {
    // TypeScript narrows — fields are typed for note
    console.log("pitch:", entity.fields.pitch.value);
  } else if (entity.entityType === "tinyGain") {
    // TypeScript narrows — fields are typed for tinyGain
    console.log("gain:", entity.fields.gain.value);
  }
}
```

---

### [`ReferenceQuery`](../api-reference/generated/document/type-aliases/ReferenceQuery.md)

A query type for finding entities related to another through pointer fields. Because the pointer direction is not always known, `ReferenceQuery` does not change the return type — it narrows the results to a specific relationship.

| Method | Description |
|--------|-------------|
| `.entities(...ids)` | Filter by entity IDs |
| `.entityOfType<Q>(...types)` | Filter by entity type keys |
| `.locations(...loc)` | Filter by schema locations |

```typescript
// Find all entities that are pointed to by desktopAudioCable entities
const connected = nexus.queryEntities
  .pointedToBy.entityOfType("desktopAudioCable")
  .get();

for (const device of connected) {
  console.log("Connected device:", device.id, device.entityType);
}
```

---

### [`TransactionBuilder`](../api-reference/generated/document/type-aliases/TransactionBuilder.md)

The `t` object passed into your `nexus.modify(t => ...)` callback, or the object returned by `nexus.createTransaction()`. Provides the three mutation operations: `create`, `update`, and `remove`.

| Method | Description |
|--------|-------------|
| `t.create(type, fields)` | Create a new entity and return a reference to it |
| `t.update(field, value)` | Set a new value on an existing entity's field |
| `t.remove(entity)` | Remove an entity from the document |

**With `nexus.modify()`:**

```typescript
// All three operations in one transaction
let gain;

await nexus.modify((t) => {
  // create
  gain = t.create("tinyGain", { displayName: "FX Gain", gain: 1.0 });
});

await nexus.modify((t) => {
  // update
  t.update(gain.fields.gain, 0.5);
  t.update(gain.fields.displayName, "FX Gain (quiet)");
});

await nexus.modify((t) => {
  // remove
  t.remove(gain);
});
```

**With `nexus.createTransaction()`** — lower-level alternative used in official examples:

```typescript
// createTransaction() returns the TransactionBuilder directly
// Call .send() to commit when you're done
const t = await nexus.createTransaction();

const synth = t.create("pulverisateur", { positionX: 100, positionY: 100 });
const channel = t.create("mixerChannel", {});

t.create("desktopAudioCable", {
  fromSocket: synth.fields.audioOutput.location,
  toSocket: channel.fields.audioInput.location,
});

t.send(); // commits all three creates at once
```

> Both APIs produce identical results. `createTransaction()` is useful when you need to reference `.location` on entities you just created in the same transaction batch.

**`t.entities` — query within a transaction:**

The `TransactionBuilder` also exposes an `.entities` query property that works exactly like `nexus.queryEntities`, but it **includes entities you've just created in the current transaction** (uncommitted). This is useful when you need to find or inspect entities that were created earlier in the same `createTransaction()` call:

```typescript
const t = await nexus.createTransaction();

// Create several mixer channels
t.create("mixerChannel", { displayParameters: { orderAmongStrips: 1 } });
t.create("mixerChannel", { displayParameters: { orderAmongStrips: 2 } });

// Query within the transaction — sees the two channels just created above
const channels = t.entities.ofTypes("mixerChannel").get();
const maxOrder = Math.max(
  ...channels.map(c => c.fields.displayParameters.fields.orderAmongStrips.value)
);

// Can also use pointingTo within the transaction
const cables = t.entities
  .pointingTo.locations(synth.fields.audioOutput.location)
  .get();
```

---

### [`SafeTransactionBuilder`](../api-reference/generated/document/type-aliases/SafeTransactionBuilder.md)

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
  await nexus.modify((t: SafeTransactionBuilder) => {
    t.update(entity.fields.gain, 0.8);
  });
}
```

---

### [`ArrayDetails`](../api-reference/generated/document/type-aliases/ArrayDetails.md), [`ObjectDetails`](../api-reference/generated/document/type-aliases/ObjectDetails.md), [`PrimitiveFieldDetails`](../api-reference/generated/document/type-aliases/PrimitiveFieldDetails.md)

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

### [`NexusLocationPrimitive`](../api-reference/generated/document/type-aliases/NexusLocationPrimitive.md), [`SchemaLocation`](../api-reference/generated/document/type-aliases/SchemaLocation.md), [`SchemaPath`](../api-reference/generated/document/type-aliases/SchemaPath.md)

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

### [`getSchemaLocationDetails`](../api-reference/generated/document/functions/getSchemaLocationDetails.md)`(location)`

```ts
getSchemaLocationDetails(location: SchemaLocation): SchemaLocationDetails
```

Returns information about a schema location — what field it refers to, its type, and related metadata.

```typescript
import { getSchemaLocationDetails } from "@audiotool/nexus/document";

// Inspect the details of a field's schema location
const details = getSchemaLocationDetails(entity.fields.gain);
console.log(details); // schema metadata for the gain field
```

---

### [`schemaLocationToSchemaPath`](../api-reference/generated/document/functions/schemaLocationToSchemaPath.md)`(location)`

```ts
schemaLocationToSchemaPath(location: SchemaLocation): SchemaPath
```

Converts a `SchemaLocation` to a `SchemaPath`. Useful when you need a serializable or loggable representation of a schema location.

```typescript
import { schemaLocationToSchemaPath } from "@audiotool/nexus/document";

const path = schemaLocationToSchemaPath(entity.fields.gain);
console.log(path); // human-readable schema path string
```

---

### [`schemaPathToSchemaLocation`](../api-reference/generated/document/functions/schemaPathToSchemaLocation.md)`(path)`

```ts
schemaPathToSchemaLocation(path: SchemaPath): SchemaLocation
```

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
