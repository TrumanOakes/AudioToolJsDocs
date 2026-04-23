---
title: Platform API Types
parent: Reference
nav_order: 6
has_children: true
---

# Platform API Types

**Module:** `@audiotool/nexus/api`

Type definitions for the Audiotool REST API services. Use this page to look up service names, request/response types, and enumerations.

For practical usage examples, see [Use Platform APIs Through the Client](../working-with-audiotool-projects/use-platform-apis-through-the-client.html).

## Accessing services

All services are exposed directly on `AudiotoolClient`:

```typescript
const client = await createAudiotoolClient({ auth: "at_pat_..." });

client.projects
client.samples
client.projectRoles
client.users
client.audioGraph
client.presets
```

---

## Services

### [`ProjectService`](../api-reference/generated/variables/api.ProjectService.html)

Create, read, update, and delete projects. Also manages collaborative sessions on a project.

```typescript
// List all projects accessible to the authenticated account
const { projects } = await client.projects.listProjects({});
for (const project of projects) {
  console.log(project.id, project.name);
}

// Create a new project
const { project } = await client.projects.createProject({
  name: "My New Track",
});

// Update project metadata
await client.projects.updateProject({
  id: project.id,
  name: "My New Track (Final)",
});

// Delete a project
await client.projects.deleteProject({ id: project.id });

// List active collaborative sessions on a project
const { sessions } = await client.projects.listSessions({
  projectId: project.id,
});
```

---

### [`SampleService`](../api-reference/generated/variables/api.SampleService.html)

List, register, and delete audio sample files. Uploading is a three-step process handled partly outside the SDK — `createSample` returns an upload URL, you upload the file to it directly, then call `uploadSampleFinished` to notify the server. To get a download URL for an existing sample, use `getSample`.

```typescript
// List all samples in the account
const { samples } = await client.samples.listSamples({});

// Step 1: Register a new sample — returns metadata including an upload URL
const { sample } = await client.samples.createSample({
  name: "kick-drum.wav",
});
// sample.uploadUrl is a signed URL — PUT your audio bytes there directly

// Step 2: Upload your audio file to the signed URL (outside the SDK)
// await fetch(sample.uploadUrl, { method: "PUT", body: audioBytes });

// Step 3: Notify the server that your upload is complete
await client.samples.uploadSampleFinished({ id: sample.id });

// Get a sample (returns metadata including a download URL)
const { sample: fetched } = await client.samples.getSample({ id: sample.id });
// fetched.downloadUrl is a signed URL to download the audio data

// Delete a sample
await client.samples.deleteSample({ id: sample.id });
```

---

### [`ProjectRoleService`](../api-reference/generated/variables/api.ProjectRoleService.html)

Manage who has access to a project and at what permission level.

```typescript
// List current collaborators
const { roles } = await client.projectRoles.listProjectRoles({
  projectId: "abc123",
});

for (const role of roles) {
  console.log(role.userId, role.role); // e.g. "user456", EDITOR
}

// Add a collaborator
await client.projectRoles.createProjectRole({
  projectId: "abc123",
  userId: "user456",
  role: ProjectRoleType.EDITOR,
});

// Remove a collaborator
await client.projectRoles.deleteProjectRole({
  projectId: "abc123",
  userId: "user456",
});
```

---

### [`UserService`](../api-reference/generated/variables/api.UserService.html)

Look up and manage user accounts.

```typescript
// Get a specific user's profile
const { user } = await client.users.getUser({ id: "user456" });
console.log(user.name, user.email);

// List users (e.g. search for collaborators)
const { users } = await client.users.listUsers({});

// Update your own user profile
await client.users.updateUser({
  id: "user456",
  name: "New Display Name",
});

// Upload a profile avatar image
await client.users.uploadAvatar({
  id: "user456",
  data: imageBytes, // Uint8Array of image file
});
```

---

### [`AudiographService`](../api-reference/generated/variables/api.AudiographService.html)

Retrieve audio graphs — vector graphics displayed in the Audiotool sample browser to show a waveform-like visualization.

```typescript
const { graph } = await client.audioGraph.getAudiograph({
  sampleId: sample.id,
  channels: GetAudiographChannels.STEREO,
  resolution: GetAudiographResolution.MEDIUM,
});
// graph contains the vector path data for rendering
```

---

## Functions

### [`neverThrowingFetch()`](../api-reference/generated/functions/api.neverThrowingFetch.html)

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

### [`AudiotoolClient`](../api-reference/generated/types/index.AudiotoolClient.html)

The main authenticated client type. Use this when passing service access to helpers.

```typescript
import type { AudiotoolClient } from "@audiotool/nexus";

async function listAllProjects(client: AudiotoolClient) {
  const { projects } = await client.projects.listProjects({});
  return projects;
}
```

---

### [`RetryingClient`](../api-reference/generated/types/api.RetryingClient.html) and [`RetryOptions`](../api-reference/generated/types/api.RetryOptions.html)

Nexus automatically retries transient network failures. [`RetryingClient`](../api-reference/generated/types/api.RetryingClient.html) is the interface for a client with retry logic, and [`RetryOptions`](../api-reference/generated/types/api.RetryOptions.html) configures retry behavior.

```typescript
import type { RetryOptions } from "@audiotool/nexus/api";

// RetryOptions shape — passed when configuring retry behavior:
const opts: RetryOptions = {
  maxRetries: 3,
  baseDelayMs: 500,
};
```

---

### [`KeepaliveTransport`](../api-reference/generated/types/api.KeepaliveTransport.html)

Transport type with keepalive support. Used internally by long-running synced document connections to maintain the backend connection.

```typescript
import type { KeepaliveTransport } from "@audiotool/nexus/api";

// Appears in advanced transport configuration — most users do not need this directly
```

---

### [`NexusPreset`](../api-reference/generated/types/api.NexusPreset.html) and [`PresetUtil`](../api-reference/generated/types/api.PresetUtil.html)

[`NexusPreset`](../api-reference/generated/types/api.NexusPreset.html) is how a device preset appears within a Nexus document. [`PresetUtil`](../api-reference/generated/types/api.PresetUtil.html) wraps preset API operations and is accessed via `client.presets`.

```typescript
// Access presets through the client
const presetUtil = client.presets;

// Preset IDs can be copied from the preset browser in the Audiotool DAW.
// Use them to apply saved device configurations to instruments.
```

---

### [`NeverThrowingFetch`](../api-reference/generated/types/api.NeverThrowingFetch.html)

The function type returned by [`neverThrowingFetch()`](../api-reference/generated/functions/api.neverThrowingFetch.html). Use this as a type annotation when passing a safe fetch function around your code.

```typescript
import type { NeverThrowingFetch } from "@audiotool/nexus/api";

function makeRequest(fetch: NeverThrowingFetch, url: string) {
  return fetch(url);
}
```

---

## Enumerations

Enumerations are imported from `@audiotool/nexus/api` and used as values in API requests.

### [`ProjectRoleType`](../api-reference/generated/enums/api.ProjectRoleType.html)

Defines the permission level of a collaborator on a project.

```typescript
import { ProjectRoleType } from "@audiotool/nexus/api";

// Add a collaborator as an editor
await client.projectRoles.createProjectRole({
  projectId: "abc123",
  userId: "user456",
  role: ProjectRoleType.EDITOR,
});
```

---

### [`TrackLicense`](../api-reference/generated/enums/api.TrackLicense.html)

The license type applied to a project track — controls how the track can be shared and used.

```typescript
import { TrackLicense } from "@audiotool/nexus/api";

await client.projects.updateProject({
  id: "abc123",
  license: TrackLicense.CC_BY,
});
```

---

### [`PresetDeviceType`](../api-reference/generated/enums/api.PresetDeviceType.html)

The type of device a preset applies to (synthesizer, drum machine, effect, etc.).

```typescript
import { PresetDeviceType } from "@audiotool/nexus/api";

// Use when filtering presets by device type
const presets = await client.presets.list(PresetDeviceType.SYNTHESIZER);
```

---

### [`PresetUsage`](../api-reference/generated/enums/api.PresetUsage.html)

How a preset is used — whether it defines a sound, an effect setting, or another category.

```typescript
import { PresetDeviceType, PresetUsage } from "@audiotool/nexus/api";

// Use when categorizing or filtering presets
const allSynthPresets = await client.presets.list(PresetDeviceType.PULVERISATEUR);
const soundPresets = allSynthPresets.filter(
  (preset) => preset.usage === PresetUsage.PUBLIC,
);
```

---

### [`CommentMode`](../api-reference/generated/enums/api.CommentMode.html)

Comment visibility mode — controls whether comments on a project are public or private.

```typescript
import { CommentMode } from "@audiotool/nexus/api";

await client.projects.updateProject({
  id: "abc123",
  commentMode: CommentMode.PUBLIC,
});
```

---

### [`GetAudiographChannels`](../api-reference/generated/enums/api.GetAudiographChannels.html)

Channel options for retrieving an audio graph visualization (mono or stereo).

```typescript
import { GetAudiographChannels } from "@audiotool/nexus/api";

const { graph } = await client.audioGraph.getAudiograph({
  sampleId: sample.id,
  channels: GetAudiographChannels.STEREO,
});
```

---

### [`GetAudiographResolution`](../api-reference/generated/enums/api.GetAudiographResolution.html)

Resolution options for the audio graph visualization.

```typescript
import { GetAudiographResolution } from "@audiotool/nexus/api";

const { graph } = await client.audioGraph.getAudiograph({
  sampleId: sample.id,
  resolution: GetAudiographResolution.HIGH,
});
```

---

### [`StringFormat`](../api-reference/generated/enums/api.StringFormat.html)

String encoding format used in some API fields.

```typescript
import { StringFormat } from "@audiotool/nexus/api";

// Specify the format of a string field in a request
```

---

### [`SyncTrackMode`](../api-reference/generated/enums/api.SyncTrackMode.html), [`SyncTrackStatus`](../api-reference/generated/enums/api.SyncTrackStatus.html), [`SyncTrackScreenshotStatus`](../api-reference/generated/enums/api.SyncTrackScreenshotStatus.html)

Status and mode types for sync tracks — the infrastructure that records and replays collaborative session state.

```typescript
import { SyncTrackStatus } from "@audiotool/nexus/api";

// Check the status of a sync track
const track = await client.projects.getProject({ id: "..." });
if (track.status === SyncTrackStatus.ACTIVE) {
  console.log("Sync track is live");
}
```

---

### [`SampleConvertDoneErrorType`](../api-reference/generated/enums/api.SampleConvertDoneErrorType.html)

Error codes returned when an audio sample conversion operation fails.

```typescript
import { SampleConvertDoneErrorType } from "@audiotool/nexus/api";

// Check conversion errors after uploading a sample
if (result.errorType === SampleConvertDoneErrorType.UNSUPPORTED_FORMAT) {
  console.error("That audio format is not supported");
}
```

---

### [`TargetType`](../api-reference/generated/enums/api.TargetType.html)

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
async function getProjects(client: AudiotoolClient): Promise<Project[]> {
  const request: ListProjectsRequest = {};
  const response: ListProjectsResponse = await client.projects.listProjects(request);
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
  client: AudiotoolClient,
  req: CreateSampleRequest
): Promise<CreateSampleResponse> {
  return client.samples.createSample(req);
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
async function getUserName(client: AudiotoolClient, userId: string): Promise<string> {
  const req: GetUserRequest = { id: userId };
  const { user }: GetUserResponse = await client.users.getUser(req);
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
  client: AudiotoolClient,
  projectId: string
): Promise<Session[]> {
  const req: ListSessionsRequest = { projectId };
  const { sessions }: ListSessionsResponse = await client.projects.listSessions(req);
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
async function getAllPresets(client: AudiotoolClient): Promise<Preset[]> {
  return client.presets.list(PresetDeviceType.SYNTHESIZER);
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
async function waitForOperation(client: AudiotoolClient, opId: string) {
  let op: Operation;
  do {
    const req: GetOperationRequest = { id: opId };
    const res = await client.fetch(`/operations/${req.id}`);
    if (!res.ok) throw new Error("Failed to fetch operation status");
    const data = await res.json() as GetOperationResponse;
    op = data.operation!;
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

- [Use Platform APIs Through the Client](../working-with-audiotool-projects/use-platform-apis-through-the-client.html) — practical usage guide with more complete examples
- [Package Entry Points](package-entry-points.html) — main module types
