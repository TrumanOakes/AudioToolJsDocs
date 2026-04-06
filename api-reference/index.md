---
title: API Reference
nav_order: 6
has_children: true
---

# API Reference

Auto-generated API documentation for the [`@audiotool/nexus`](https://www.npmjs.com/package/@audiotool/nexus) package.

These pages are generated directly from TypeScript declarations using [TypeDoc](https://typedoc.org/) and show exact type signatures, properties, and parameters. For curated guides with usage examples and practical context, see the [Reference](../reference/) section.

## Modules

### [nexus (index)](generated/index/)

Core exports for creating clients and documents. Contains `createAudiotoolClient`, `createOfflineDocument`, `getLoginStatus`, and the `AudiotoolClient`, `SyncedDocument`, and `OfflineDocument` types.

See also: [Package Entry Points guide](../reference/package-entry-points.md)

### [document](generated/document/)

The document model: entity interfaces, field types, query builders, and transaction types. Includes `NexusEntity`, `EntityQuery`, `NexusEventManager`, `TransactionBuilder`, and schema location utilities.

See also: [Document Model guide](../reference/document-model.md)

### [entities](generated/entities/)

Field definitions for all 80+ entity types in the Nexus schema — device entities (synthesizers, drum machines, effects), mixer entities (channels, groups, aux sends), timeline entities (tracks, regions, notes), and utility entities (cables, configuration).

See also: [Entity Reference guide](../reference/entity-reference.md)

### [api](generated/api/)

Platform REST API types: 5 service definitions (`ProjectService`, `SampleService`, `ProjectRoleService`, `UserService`, `AudiographService`), 12 enumerations, 70+ request/response classes, and utility functions like `createAudiotoolAPI`.

See also: [Platform API Types guide](../reference/platform-api-types.md)

### [utils](generated/utils/)

Utility classes and functions: timing helpers (`Ticks`, `secondsToTicks`, `ticksToSeconds`), async primitives (`AsyncLock`), and observable patterns (`Notifier`, `ValueNotifier`, `SetNotifier`, `MapValueNotifier`).

See also: [Utilities guide](../reference/utilities.md)
