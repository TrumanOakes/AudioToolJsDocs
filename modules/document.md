# Module: document

**@audiotool/nexus v0.0.12**

Provides types and interfaces related to the nexus document structure.

## Interfaces

| Interface | Description |
|-----------|-------------|
| `ArrayField` | Represents array field structures |
| `EntityQuery` | Defines entity query operations |
| `FieldQuery` | Specifies field query parameters |
| `NexusEntity` | Core entity interface |
| `NexusEventManager` | Manages nexus events |
| `NexusField` | Field definition interface |
| `NexusLocation` | Location reference interface |
| `NexusObject` | Object structure interface |
| `PrimitiveField` | Primitive field definitions |

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
| `EntityDetails` | Details of a specific entity |
| `EntityTypes` | Map of all entity type keys to their details |
| `EntityTypeKey` | Key identifying an entity type |
| `EntityWithOverwrites` | Entity with field overwrites applied |
| `NexusEntityUnion` | Union type of all possible nexus entities |

### Query and Location Types

| Type | Description |
|------|-------------|
| `ReferenceQuery` | Query type for entity references |
| `NexusLocationPrimitive` | Primitive location reference |
| `SchemaLocation` | Location within the schema |
| `SchemaPath` | Path representation within the schema |

### Advanced Types

| Type | Description |
|------|-------------|
| `ArrayDetails` | Details for array-typed fields |
| `ObjectDetails` | Details for object-typed fields |
| `PrimitiveFieldDetails` | Details for primitive fields |
| `SafeTransactionBuilder` | Transaction builder with validation |
| `TransactionBuilder` | Builder for document transactions |

## Functions

### `getSchemaLocationDetails()`

Retrieves schema location information for a given location.

### `schemaLocationToSchemaPath()`

Converts a `SchemaLocation` to a `SchemaPath`.

### `schemaPathToSchemaLocation()`

Converts a `SchemaPath` back to a `SchemaLocation`.

## References

- `TargetType` — re-exported from the [api module](api.md)
