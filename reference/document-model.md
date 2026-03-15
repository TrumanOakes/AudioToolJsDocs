---
title: Document Model
parent: Reference
nav_order: 3
---

# Document Model

**Module:** `@audiotool/nexus/document`

Type definitions for the Nexus document structure, schema, and <span class="tooltip" data-tooltip="A grouped set of changes made to a document as one operation.">transaction</span> system. Use this page as a reference when working with the document API directly or when you need specific type names for TypeScript.

## Interfaces

| Interface | Description |
|-----------|-------------|
| `ArrayField` | Represents an array-typed field in the schema |
| `EntityQuery` | Defines entity query operations on the document |
| `FieldQuery` | Specifies field-level query parameters |
| `NexusEntity` | Core entity interface — all entities implement this |
| `NexusEventManager` | Manages event subscriptions on the document |
| `NexusField` | Field definition interface |
| `NexusLocation` | A reference to a location within the document schema |
| `NexusObject` | Object structure interface |
| `PrimitiveField` | Primitive field definition (number, string, boolean, bytes) |

## Type Aliases

### Primitive Types

| Type | Description |
|------|-------------|
| `BooleanPrimitive` | Boolean field primitive |
| `BytesPrimitive` | Bytes field primitive |
| `NumberPrimitive` | Number field primitive |
| `StringPrimitive` | String field primitive |

### Entity and Schema Definitions

| Type | Description |
|------|-------------|
| `EntityDetails` | Complete details of a specific entity type |
| `EntityTypes` | Map of all entity type keys to their details |
| `EntityTypeKey` | Union of all valid entity type key strings |
| `EntityWithOverwrites` | An entity with field overwrites applied |
| `NexusEntityUnion` | Union type of all possible Nexus entities |

### Query and Location Types

| Type | Description |
|------|-------------|
| `ReferenceQuery` | Query type for entity references (pointer fields) |
| `NexusLocationPrimitive` | Primitive location reference |
| `SchemaLocation` | A location within the schema |
| `SchemaPath` | A path representation within the schema |

### Transaction Builder Types

| Type | Description |
|------|-------------|
| `TransactionBuilder` | Builder for document transactions — provides `create`, `update`, `remove` |
| `SafeTransactionBuilder` | Stricter variant with additional TypeScript-level type enforcement |
| `ArrayDetails` | Details for array-typed fields |
| `ObjectDetails` | Details for object-typed fields |
| `PrimitiveFieldDetails` | Details for primitive fields |

## Functions

### `getSchemaLocationDetails(location)`

Retrieves schema location information for a given `SchemaLocation`.

### `schemaLocationToSchemaPath(location)`

Converts a `SchemaLocation` to a `SchemaPath`.

### `schemaPathToSchemaLocation(path)`

Converts a `SchemaPath` back to a `SchemaLocation`.

## References

- `TargetType` — re-exported from the [api module](platform-api-types.md)

## See also

- [Making Changes](../how-nexus-works/making-changes.md) — conceptual guide to transactions
- [Queries and Events](../how-nexus-works/queries-and-events.md) — how to use `EntityQuery` and `NexusEventManager`
