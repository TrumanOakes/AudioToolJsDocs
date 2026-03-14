# Platform API Types

**Module:** `@audiotool/nexus/api`

API service types and bindings for the Audiotool platform. These types are auto-generated from proto files and wrapped in a `RetryingClient`.

For practical usage of these services, see [Use Platform APIs Through the Client](../working-with-audiotool-projects/use-platform-apis-through-the-client.md).

## Accessing services

All services are accessed via `client.api`:

```typescript
const client = await createAudiotoolClient({ ... });

client.api.projectService
client.api.sampleService
client.api.projectRoleService
client.api.userService
client.api.audiographService
```

## Services

| Service | Description |
|---------|-------------|
| `ProjectService` | Create, read, update, delete projects; manage collaborative sessions |
| `SampleService` | Create, update, delete, upload, and download audio samples |
| `ProjectRoleService` | Manage project collaborators (add, remove, list) |
| `UserService` | Manage users: list, update, delete, upload avatars |
| `AudiographService` | Retrieve audio graphs — vector graphics in the sample browser |

---

## Functions

### `createAudiotoolAPI()`

Factory function to instantiate the API client directly, without going through `createAudiotoolClient`.

### `neverThrowingFetch()`

A `fetch` wrapper that never throws. Errors are returned as values rather than thrown exceptions, making error handling more predictable in certain contexts.

---

## Type Aliases

| Type | Description |
|------|-------------|
| `AudiotoolAPI` | The full API client type — the type of `client.api` |
| `KeepaliveTransport` | Transport type with keepalive support for long-running connections |
| `NeverThrowingFetch` | The function type returned by `neverThrowingFetch()` |
| `NexusPreset` | Preset type as it appears within nexus documents |
| `PresetUtil` | Wrapper around preset API operations |
| `RetryingClient` | Client with automatic retry logic for transient failures |
| `RetryOptions` | Configuration object for retry behavior |

---

## Enumerations

| Enum | Description |
|------|-------------|
| `CommentMode` | Comment visibility modes |
| `GetAudiographChannels` | Channel options for audiograph retrieval |
| `GetAudiographResolution` | Resolution options for audiograph retrieval |
| `PresetDeviceType` | Device types a preset applies to |
| `PresetUsage` | How a preset is used (sound, effect, etc.) |
| `ProjectRoleType` | Collaborator role types (viewer, editor, etc.) |
| `SampleConvertDoneErrorType` | Error types for sample conversion operations |
| `StringFormat` | String encoding formats |
| `SyncTrackMode` | Synchronization track modes |
| `SyncTrackScreenshotStatus` | Status of a sync track screenshot |
| `SyncTrackStatus` | Status of a sync track |
| `TargetType` | Target entity types (also re-exported from the document module) |
| `TrackLicense` | License types for tracks |

---

## Data Model Classes

### Projects

- `Project`
- `CreateProjectRequest`, `CreateProjectResponse`
- `GetProjectRequest`, `GetProjectResponse`
- `UpdateProjectRequest`, `UpdateProjectResponse`
- `DeleteProjectRequest`, `DeleteProjectResponse`
- `ListProjectsRequest`, `ListProjectsResponse`

### Presets

- `Preset`
- `CreatePresetRequest`, `CreatePresetResponse`
- `GetPresetRequest`, `GetPresetResponse`
- `UpdatePresetRequest`, `UpdatePresetResponse`
- `DeletePresetRequest`, `DeletePresetResponse`
- `ListPresetsRequest`, `ListPresetsResponse`

### Samples

- `CreateSampleRequest`, `CreateSampleResponse`
- `GetSampleRequest`, `GetSampleResponse`
- `UpdateSampleRequest`, `UpdateSampleResponse`
- `DeleteSampleRequest`, `DeleteSampleResponse`
- `ListSamplesRequest`, `ListSamplesResponse`

### Users

- `User`
- `GetUserRequest`, `GetUserResponse`
- `UpdateUserRequest`, `UpdateUserResponse`
- `DeleteUserRequest`, `DeleteUserResponse`
- `ListUsersRequest`, `ListUsersResponse`

### Sessions

- `Session`
- `OpenSessionRequest`, `OpenSessionResponse`
- `CloseSessionRequest`, `CloseSessionResponse`
- `ListSessionsRequest`, `ListSessionsResponse`

### Operations

- `Operation`
- `GetOperationRequest`, `GetOperationResponse`
- `DeleteOperationRequest`, `DeleteOperationResponse`
- `CancelOperationRequest`, `CancelOperationResponse`
- `ListOperationsRequest`, `ListOperationsResponse`

### Other Data Models

- `Audiograph`, `Graph`
- `User`, `Settings`, `Status`
- `Bool`, `Bytes`, `Float`, `String`, `Int32`, `UInt32`
- `BoolRange`, `FloatRange`, `Int32Range`, `UInt32Range`

### Namespaces

- `sample` — sample-related utilities and types

---

## See also

- [Use Platform APIs Through the Client](../working-with-audiotool-projects/use-platform-apis-through-the-client.md) — practical usage guide
- [Package Entry Points](package-entry-points.md) — main module types
