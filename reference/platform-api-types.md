---
title: Platform API Types
parent: Reference
nav_order: 6
---

# Platform API Types

**Module:** `@audiotool/nexus/api`

Type definitions for the Audiotool REST API services. Use this page to look up service names, request/response types, and enumerations.

For practical usage examples, see [Use Platform APIs Through the Client](../working-with-audiotool-projects/use-platform-apis-through-the-client.md).

## Accessing services

All services are accessed via `client.api`:

```typescript
const client = await createAudiotoolClient({ pat: "at_pat_..." });

client.api.projectService
client.api.sampleService
client.api.projectRoleService
client.api.userService
client.api.audiographService
```

---

## Services

### `ProjectService`

Create, read, update, and delete projects. Also manages collaborative sessions on a project.

```typescript
// List all projects accessible to the authenticated account
const { projects } = await client.api.projectService.listProjects({});
for (const project of projects) {
  console.log(project.id, project.name);
}

// Create a new project
const { project } = await client.api.projectService.createProject({
  name: "My New Track",
});

// Update project metadata
await client.api.projectService.updateProject({
  id: project.id,
  name: "My New Track (Final)",
});

// Delete a project
await client.api.projectService.deleteProject({ id: project.id });

// List active collaborative sessions on a project
const { sessions } = await client.api.projectService.listSessions({
  projectId: project.id,
});
```

---

### `SampleService`

Upload, download, list, update, and delete audio sample files.

```typescript
// List all samples in the account
const { samples } = await client.api.sampleService.listSamples({});

// Create sample metadata (registers a new sample slot)
const { sample } = await client.api.sampleService.createSample({
  name: "kick-drum.wav",
});

// Upload the actual audio file
await client.api.sampleService.uploadSample({
  id: sample.id,
  data: audioBytes, // Uint8Array of audio file content
});

// Download a sample's audio data
const audio = await client.api.sampleService.downloadSample({
  id: sample.id,
});

// Delete a sample
await client.api.sampleService.deleteSample({ id: sample.id });
```

---

### `ProjectRoleService`

Manage who has access to a project and at what permission level.

```typescript
// List current collaborators
const { roles } = await client.api.projectRoleService.listProjectRoles({
  projectId: "abc123",
});

for (const role of roles) {
  console.log(role.userId, role.role); // e.g. "user456", EDITOR
}

// Add a collaborator
await client.api.projectRoleService.addProjectRole({
  projectId: "abc123",
  userId: "user456",
  role: ProjectRoleType.EDITOR,
});

// Remove a collaborator
await client.api.projectRoleService.removeProjectRole({
  projectId: "abc123",
  userId: "user456",
});
```

---

### `UserService`

Look up and manage user accounts.

```typescript
// Get a specific user's profile
const { user } = await client.api.userService.getUser({ id: "user456" });
console.log(user.name, user.email);

// List users (e.g. search for collaborators)
const { users } = await client.api.userService.listUsers({});

// Update your own user profile
await client.api.userService.updateUser({
  id: "user456",
  name: "New Display Name",
});

// Upload a profile avatar image
await client.api.userService.uploadAvatar({
  id: "user456",
  data: imageBytes, // Uint8Array of image file
});
```

---

### `AudiographService`

Retrieve audio graphs — vector graphics displayed in the Audiotool sample browser to show a waveform-like visualization.

```typescript
const { graph } = await client.api.audiographService.getAudiograph({
  sampleId: sample.id,
  channels: GetAudiographChannels.STEREO,
  resolution: GetAudiographResolution.MEDIUM,
});
// graph contains the vector path data for rendering
```

---

## Functions

### `createAudiotoolAPI()`

Factory function to instantiate the API client directly, without going through `createAudiotoolClient`. Useful when you need the REST API without opening a document.

```typescript
import { createAudiotoolAPI } from "@audiotool/nexus/api";

const api = createAudiotoolAPI({ pat: "at_pat_..." });

// Use the API directly
const { projects } = await api.projectService.listProjects({});
```

---

### `neverThrowingFetch()`

A `fetch` wrapper that never throws on network errors. Instead of throwing, it returns errors as values — useful when you want predictable error handling without try/catch.

```typescript
import { neverThrowingFetch } from "@audiotool/nexus/api";

const safeFetch = neverThrowingFetch();

const result = await safeFetch("https://example.com/api/data");

if (result.ok) {
  const data = await result.json();
} else {
  // Handle the error as a value — no exception was thrown
  console.error("Request failed:", result.status);
}
```

---

## Type Aliases

### `AudiotoolAPI`

The full type of `client.api`. Use this as a type annotation when passing the API object to helper functions.

```typescript
import type { AudiotoolAPI } from "@audiotool/nexus/api";

async function listAllProjects(api: AudiotoolAPI) {
  const { projects } = await api.projectService.listProjects({});
  return projects;
}

// Call with client.api
await listAllProjects(client.api);
```

---

### `RetryingClient` and `RetryOptions`

Nexus automatically retries transient network failures. `RetryingClient` is the interface for a client with retry logic, and `RetryOptions` configures retry behavior.

```typescript
import type { RetryOptions } from "@audiotool/nexus/api";

// RetryOptions shape — passed when configuring retry behavior:
const opts: RetryOptions = {
  maxRetries: 3,
  baseDelayMs: 500,
};
```

---

### `KeepaliveTransport`

Transport type with keepalive support. Used internally by long-running synced document connections to maintain the backend connection.

```typescript
import type { KeepaliveTransport } from "@audiotool/nexus/api";

// Appears in advanced transport configuration — most users do not need this directly
```

---

### `NexusPreset` and `PresetUtil`

`NexusPreset` is how a device preset appears within a Nexus document. `PresetUtil` wraps preset API operations and is accessed via `client.api.presetUtil`.

```typescript
// Access presets through the client
const presetUtil = client.api.presetUtil;

// Preset IDs can be copied from the preset browser in the Audiotool DAW.
// Use them to apply saved device configurations to instruments.
```

---

### `NeverThrowingFetch`

The function type returned by `neverThrowingFetch()`. Use this as a type annotation when passing a safe fetch function around your code.

```typescript
import type { NeverThrowingFetch } from "@audiotool/nexus/api";

function makeRequest(fetch: NeverThrowingFetch, url: string) {
  return fetch(url);
}
```

---

## Enumerations

Enumerations are imported from `@audiotool/nexus/api` and used as values in API requests.

### `ProjectRoleType`

Defines the permission level of a collaborator on a project.

```typescript
import { ProjectRoleType } from "@audiotool/nexus/api";

// Add a collaborator as an editor
await client.api.projectRoleService.addProjectRole({
  projectId: "abc123",
  userId: "user456",
  role: ProjectRoleType.EDITOR,
});
```

---

### `TrackLicense`

The license type applied to a project track — controls how the track can be shared and used.

```typescript
import { TrackLicense } from "@audiotool/nexus/api";

await client.api.projectService.updateProject({
  id: "abc123",
  license: TrackLicense.CC_BY,
});
```

---

### `PresetDeviceType`

The type of device a preset applies to (synthesizer, drum machine, effect, etc.).

```typescript
import { PresetDeviceType } from "@audiotool/nexus/api";

// Use when filtering presets by device type
const presets = await client.api.projectService.listPresets({
  deviceType: PresetDeviceType.SYNTHESIZER,
});
```

---

### `PresetUsage`

How a preset is used — whether it defines a sound, an effect setting, or another category.

```typescript
import { PresetUsage } from "@audiotool/nexus/api";

// Use when categorizing or filtering presets
const soundPresets = await client.api.projectService.listPresets({
  usage: PresetUsage.SOUND,
});
```

---

### `CommentMode`

Comment visibility mode — controls whether comments on a project are public or private.

```typescript
import { CommentMode } from "@audiotool/nexus/api";

await client.api.projectService.updateProject({
  id: "abc123",
  commentMode: CommentMode.PUBLIC,
});
```

---

### `GetAudiographChannels`

Channel options for retrieving an audio graph visualization (mono or stereo).

```typescript
import { GetAudiographChannels } from "@audiotool/nexus/api";

const { graph } = await client.api.audiographService.getAudiograph({
  sampleId: sample.id,
  channels: GetAudiographChannels.STEREO,
});
```

---

### `GetAudiographResolution`

Resolution options for the audio graph visualization.

```typescript
import { GetAudiographResolution } from "@audiotool/nexus/api";

const { graph } = await client.api.audiographService.getAudiograph({
  sampleId: sample.id,
  resolution: GetAudiographResolution.HIGH,
});
```

---

### `StringFormat`

String encoding format used in some API fields.

```typescript
import { StringFormat } from "@audiotool/nexus/api";

// Specify the format of a string field in a request
```

---

### `SyncTrackMode`, `SyncTrackStatus`, `SyncTrackScreenshotStatus`

Status and mode types for sync tracks — the infrastructure that records and replays collaborative session state.

```typescript
import { SyncTrackStatus } from "@audiotool/nexus/api";

// Check the status of a sync track
const track = await client.api.projectService.getSyncTrack({ id: "..." });
if (track.status === SyncTrackStatus.ACTIVE) {
  console.log("Sync track is live");
}
```

---

### `SampleConvertDoneErrorType`

Error codes returned when an audio sample conversion operation fails.

```typescript
import { SampleConvertDoneErrorType } from "@audiotool/nexus/api";

// Check conversion errors after uploading a sample
if (result.errorType === SampleConvertDoneErrorType.UNSUPPORTED_FORMAT) {
  console.error("That audio format is not supported");
}
```

---

### `TargetType`

Target entity types for certain API operations. Also re-exported from the document module.

```typescript
import { TargetType } from "@audiotool/nexus/api";

// Used when specifying what kind of entity an operation targets
```

---

## Data Model Classes

These are the request and response types for each API service. Import them when you need to annotate variables explicitly.

### Projects

```typescript
import type {
  Project,
  ListProjectsRequest,
  ListProjectsResponse,
  CreateProjectRequest,
  CreateProjectResponse,
  UpdateProjectRequest,
  UpdateProjectResponse,
  DeleteProjectRequest,
  DeleteProjectResponse,
} from "@audiotool/nexus/api";

// Example: type-annotate a helper
async function getProjects(api: AudiotoolAPI): Promise<Project[]> {
  const request: ListProjectsRequest = {};
  const response: ListProjectsResponse = await api.projectService.listProjects(request);
  return response.projects;
}
```

---

### Samples

```typescript
import type {
  CreateSampleRequest,
  CreateSampleResponse,
  GetSampleRequest,
  GetSampleResponse,
  UpdateSampleRequest,
  ListSamplesRequest,
  ListSamplesResponse,
} from "@audiotool/nexus/api";

// Example: type-annotate a function that creates a sample
async function registerSample(
  api: AudiotoolAPI,
  req: CreateSampleRequest
): Promise<CreateSampleResponse> {
  return api.sampleService.createSample(req);
}
```

---

### Users

```typescript
import type {
  User,
  GetUserRequest,
  GetUserResponse,
  UpdateUserRequest,
  ListUsersRequest,
  ListUsersResponse,
} from "@audiotool/nexus/api";

// Example: fetch and display a user's name
async function getUserName(api: AudiotoolAPI, userId: string): Promise<string> {
  const req: GetUserRequest = { id: userId };
  const { user }: GetUserResponse = await api.userService.getUser(req);
  return user.name;
}
```

---

### Sessions

```typescript
import type {
  Session,
  OpenSessionRequest,
  OpenSessionResponse,
  CloseSessionRequest,
  ListSessionsRequest,
  ListSessionsResponse,
} from "@audiotool/nexus/api";

// Example: list active collaborative sessions
async function getActiveSessions(
  api: AudiotoolAPI,
  projectId: string
): Promise<Session[]> {
  const req: ListSessionsRequest = { projectId };
  const { sessions }: ListSessionsResponse = await api.projectService.listSessions(req);
  return sessions;
}
```

---

### Presets

```typescript
import type {
  Preset,
  CreatePresetRequest,
  GetPresetRequest,
  ListPresetsRequest,
  ListPresetsResponse,
} from "@audiotool/nexus/api";

// Example: list all presets
async function getAllPresets(api: AudiotoolAPI): Promise<Preset[]> {
  const req: ListPresetsRequest = {};
  const { presets }: ListPresetsResponse = await api.projectService.listPresets(req);
  return presets;
}
```

---

### Operations

Long-running tasks (like sample conversion) are tracked as `Operation` objects.

```typescript
import type {
  Operation,
  GetOperationRequest,
  GetOperationResponse,
  CancelOperationRequest,
} from "@audiotool/nexus/api";

// Poll an operation until it completes
async function waitForOperation(api: AudiotoolAPI, opId: string) {
  let op: Operation;
  do {
    const req: GetOperationRequest = { id: opId };
    const res: GetOperationResponse = await api.operationService.getOperation(req);
    op = res.operation;
    await new Promise(r => setTimeout(r, 1000)); // wait 1s before re-polling
  } while (!op.done);
  return op;
}
```

---

### Namespaces

- `sample` — sample-related utilities and types for working with audio sample data

```typescript
import { sample } from "@audiotool/nexus/api";
// Access sample utilities and helper types via this namespace
```

---

## See also

- [Use Platform APIs Through the Client](../working-with-audiotool-projects/use-platform-apis-through-the-client.md) — practical usage guide with more complete examples
- [Package Entry Points](package-entry-points.md) — main module types
