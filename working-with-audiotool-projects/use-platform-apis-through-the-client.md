---
title: Use Platform APIs Through the Client
parent: Working With Audiotool Projects
nav_order: 9
---

# Use Platform APIs Through the Client

The `AudiotoolClient` includes access to Audiotool's REST API services via `client.api`. These services let you manage projects, samples, users, and more.

## Access the API

```typescript
const client = await createAudiotoolClient({ ... });

// Access services via client.api
client.api.projectService
client.api.sampleService
client.api.projectRoleService
client.api.userService
client.api.audiographService
```

All API calls return Promises and are automatically wrapped in a retrying transport — transient network failures are retried without any extra code on your part.

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

```typescript
// List samples
const samples = await client.api.sampleService.listSamples({});

// Create sample metadata
const sample = await client.api.sampleService.createSample({ ... });

// Upload a sample file
await client.api.sampleService.uploadSample({ ... });

// Download a sample by name
const data = await client.api.sampleService.downloadSample({ ... });

// Delete a sample
await client.api.sampleService.deleteSample({ ... });
```

## ProjectRoleService — manage collaborators

```typescript
// List collaborators on a project
const roles = await client.api.projectRoleService.listProjectRoles({ ... });

// Add a collaborator
await client.api.projectRoleService.addProjectRole({ ... });

// Remove a collaborator
await client.api.projectRoleService.removeProjectRole({ ... });
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
const graph = await client.api.audiographService.getAudiograph({ ... });
```

## PresetUtil — apply device presets

Presets are saved device configurations (instrument patches or effect settings). You can apply presets to devices to configure them for a specific sound or purpose.

```typescript
const presetUtil = client.api.presetUtil;
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
