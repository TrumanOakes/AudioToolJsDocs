---
title: Use Platform APIs Through the Client
parent: Working With Audiotool Projects
nav_order: 9
---

# Use Platform APIs Through the Client

Your <span class="tooltip" data-tooltip="The main object your app uses to connect to Audiotool and work with projects, documents, and APIs.">AudiotoolClient</span> includes access to Audiotool's REST API services via `client.api`. These services let you manage projects, samples, users, and more.

## Access the API

```typescript
const client = await createAudiotoolClient({ ... });

// Access services via client.api
client.api.projectService
client.api.sampleService
client.api.projectRoleService
client.api.userService
client.api.audioGraphService
client.api.presets
```

All API calls return Promises. Transient network failures are automatically retried — you don't need to add any retry logic yourself.

## ProjectService — manage projects

```typescript
// List all accessible projects
const response = await client.api.projectService.listProjects({});
console.log(response.projects);

// Create a new project
const created = await client.api.projectService.createProject({
  // CreateProjectRequest fields
});

// Update a project
await client.api.projectService.updateProject({
  // UpdateProjectRequest fields
});

// Delete a project
await client.api.projectService.deleteProject({
  // DeleteProjectRequest fields
});

// View active collaborative sessions on a project
const sessions = await client.api.projectService.listSessions({
  // ListSessionsRequest fields
});
```

## SampleService — manage audio samples

Uploading a sample is a two-step process: first register the sample to get an upload URL, upload the file yourself to that URL, then notify the server the upload is complete.

```typescript
// List samples
const { samples } = await client.api.sampleService.listSamples({});

// Step 1: Register the sample — returns an upload URL
const { sample } = await client.api.sampleService.createSample({ name: "kick.wav" });
// sample.uploadUrl contains the URL to PUT/POST your audio file to

// Step 2: Upload the file to the URL returned by createSample (outside the SDK)
// await fetch(sample.uploadUrl, { method: "PUT", body: audioBytes });

// Step 3: Notify the server the upload is complete
await client.api.sampleService.uploadSampleFinished({ id: sample.id });

// Get a sample's metadata (includes a download URL)
const { sample: fetched } = await client.api.sampleService.getSample({ id: sample.id });
// fetched.downloadUrl contains the URL to fetch the audio data from

// Delete a sample
await client.api.sampleService.deleteSample({ id: sample.id });
```

## ProjectRoleService — manage collaborators

```typescript
// List collaborators on a project
const roles = await client.api.projectRoleService.listProjectRoles({ ... });

// Add a collaborator
await client.api.projectRoleService.createProjectRole({ ... });

// Remove a collaborator
await client.api.projectRoleService.deleteProjectRole({ ... });
```

## UserService — manage users

```typescript
// Get user information
const user = await client.api.userService.getUser({ ... });

// List users
const users = await client.api.userService.listUsers({});

// Update a user
await client.api.userService.updateUser({ ... });

// Upload a user avatar
await client.api.userService.uploadAvatar({ ... });
```

## AudiographService — audio graphs

Audio graphs are vector graphics displayed in the Audiotool sample browser.

```typescript
const graph = await client.api.audioGraphService.getAudiograph({ ... });
```

## PresetUtil — apply device presets

Presets are saved device configurations (instrument patches or effect settings). You can apply presets to devices to configure them for a specific sound or purpose.

```typescript
const presetUtil = client.api.presets;
// Preset IDs can be copied from the preset browser in the Audiotool DAW
```

## Type safety

All request and response types are fully typed. IDE autocomplete shows available fields for each request. You can also import types explicitly:

```typescript
import type {
  CreateProjectRequest,
  CreateProjectResponse,
  ListProjectsRequest
} from "@audiotool/nexus/api";
```

## Full API type reference

For all services, request/response types, enumerations, and data model classes, see:

→ [Platform API Types](../reference/platform-api-types.md)
