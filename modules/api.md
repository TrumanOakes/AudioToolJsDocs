# Module: api

**@audiotool/nexus v0.0.12**

API service types and bindings for the Audiotool platform. These are auto-generated from proto files and wrapped in a `RetryingClient`.

## Services

Access all services via `AudiotoolClient.api`:

```typescript
const client = await createAudiotoolClient({ ... });
client.api.projectService
client.api.sampleService
client.api.projectRoleService
client.api.userService
client.api.audiographService
```

| Service | Description |
|---------|-------------|
| `ProjectService` | Create, read, update, delete projects; manage sessions |
| `SampleService` | Create, update, delete, upload, and download samples |
| `ProjectRoleService` | Manage project collaborators |
| `UserService` | Manage users and avatars |
| `AudiographService` | Retrieve audio graphs (vector graphics in sample browser) |

## Functions

### `createAudiotoolAPI()`

Factory function to instantiate the API client directly.

### `neverThrowingFetch()`

A `fetch` wrapper that never throws — errors are returned as values instead.

## Type Aliases

| Type | Description |
|------|-------------|
| `AudiotoolAPI` | The full API client type |
| `KeepaliveTransport` | Transport type with keepalive support |
| `NeverThrowingFetch` | Fetch function type that never throws |
| `NexusPreset` | Preset type used within nexus documents |
| `PresetUtil` | Wrapper around preset API operations |
| `RetryingClient` | Client with automatic retry logic |
| `RetryOptions` | Configuration for retry behavior |

## Enumerations

| Enum | Description |
|------|-------------|
| `CommentMode` | Comment visibility modes |
| `GetAudiographChannels` | Channel options for audiograph retrieval |
| `GetAudiographResolution` | Resolution options for audiograph retrieval |
| `PresetDeviceType` | Types of devices a preset applies to |
| `PresetUsage` | How a preset is used |
| `ProjectRoleType` | Collaborator role types (e.g., viewer, editor) |
| `SampleConvertDoneErrorType` | Error types for sample conversion |
| `StringFormat` | String encoding formats |
| `SyncTrackMode` | Synchronization track modes |
| `SyncTrackScreenshotStatus` | Status of sync track screenshot |
| `SyncTrackStatus` | Status of a sync track |
| `TargetType` | Target entity types |
| `TrackLicense` | License types for tracks |

## Namespaces

### `sample`

Sample-related utilities and types.

## Data Model Classes

### Projects
- `Project`, `CreateProjectRequest`, `CreateProjectResponse`
- `GetProjectRequest`, `GetProjectResponse`
- `UpdateProjectRequest`, `UpdateProjectResponse`
- `DeleteProjectRequest`, `DeleteProjectResponse`
- `ListProjectsRequest`, `ListProjectsResponse`

### Presets
- `Preset`, `CreatePresetRequest`, `CreatePresetResponse`
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
- `User`, `GetUserRequest`, `GetUserResponse`
- `UpdateUserRequest`, `UpdateUserResponse`
- `DeleteUserRequest`, `DeleteUserResponse`
- `ListUsersRequest`, `ListUsersResponse`

### Sessions
- `Session`, `OpenSessionRequest`, `OpenSessionResponse`
- `CloseSessionRequest`, `CloseSessionResponse`
- `ListSessionsRequest`, `ListSessionsResponse`

### Operations
- `Operation`, `GetOperationRequest`, `GetOperationResponse`
- `DeleteOperationRequest`, `DeleteOperationResponse`
- `CancelOperationRequest`, `CancelOperationResponse`
- `ListOperationsRequest`, `ListOperationsResponse`

### Other Data Models
- `Audiograph`, `Graph`, `User`, `Settings`, `Status`
- `Bool`, `Bytes`, `Float`, `String`, `Int32`, `UInt32`
- `BoolRange`, `FloatRange`, `Int32Range`, `UInt32Range`
