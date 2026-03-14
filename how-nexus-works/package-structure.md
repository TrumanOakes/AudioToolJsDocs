# Package Structure

The `@audiotool/nexus` package is organized into several modules. This page explains what each module contains and when you need to import from it.

## Primary entry point

Most code only needs the main entry point:

```typescript
import { createAudiotoolClient, createOfflineDocument, getLoginStatus } from "@audiotool/nexus";
```

This gives you everything needed to authenticate, create a client, and open a document.

## Module overview

| Module | Import path | Contents |
|--------|-------------|----------|
| Main | `@audiotool/nexus` | Client factory, login helpers, document types |
| Document | `@audiotool/nexus/document` | Document types, schema types, transaction builders |
| Entities | `@audiotool/nexus/entities` | Field type definitions for all entity types |
| Utils | `@audiotool/nexus/utils` | Tick constants, time conversion, async utilities |
| API | `@audiotool/nexus/api` | REST API service types and enumerations |

## Main module exports

The primary module exports three functions and six types:

**Functions:**
- `createAudiotoolClient` — creates an authenticated client from a `LoginStatus` or PAT
- `createOfflineDocument` — creates a local-only document for testing
- `getLoginStatus` — checks current OAuth login state (browser only)

**Types:**
- `AudiotoolClient`, `LoginStatus`, `LoggedInStatus`, `LoggedOutStatus`
- `SyncedDocument`, `OfflineDocument`

## Utility module highlights

The `utils` module contains timing utilities that are frequently needed when working with timeline data:

```typescript
import { utils } from "@audiotool/nexus";

const { Ticks, secondsToTicks, ticksToSeconds } = utils;

// Tick constants
Ticks.Beat       // 3840 — one quarter note
Ticks.SemiBreve  // 15360 — one whole note / one bar in 4/4
Ticks.SemiQuaver // 960 — one sixteenth note

// Time conversion
const ticks = secondsToTicks(2.5, 120); // 2.5 seconds at 120 BPM
const secs  = ticksToSeconds(3840, 120); // one beat at 120 BPM = 0.5s
```

The utils module also includes async locking and notification primitives (`AsyncLock`, `Notifier`, `ValueNotifier`, etc.) used internally by the package and available for your own code if needed.

## API module

The `api` module contains all the REST API types — service interfaces, request/response classes, enumerations, and data models. You rarely need to import from this directly since the services are accessed through `client.api`.

However, if you need to type a request or response explicitly, import from `@audiotool/nexus/api`:

```typescript
import type { CreateProjectRequest } from "@audiotool/nexus/api";
```

## Reference

For complete type-level documentation of every export:

- [Package Entry Points](../reference/package-entry-points.md) — main module types and functions
- [Document Model](../reference/document-model.md) — document and schema types
- [Entity Reference](../reference/entity-reference.md) — all entity field types
- [Utilities](../reference/utilities.md) — utils module reference
- [Platform API Types](../reference/platform-api-types.md) — REST API types

## Next step

→ [Tips and Patterns](tips-and-patterns.md) — practical patterns for working with Nexus
