# API

**@audiotool/nexus v0.0.12**

## Overview

The package provides bindings to a subset of APIs from the Audiotool platform. These are auto-generated from proto files and wrapped in a `RetryingClient`, accessible via the `AudiotoolClient.api` field of type `AudiotoolAPI`.

## Basic Usage

```typescript
const client = await createAudiotoolClient({ ... })
const projects = await client.api.projectService.listProjects({})
```

## API Services

### ProjectService

Manage projects including:
- Listing projects
- Creating projects
- Updating projects
- Deleting projects
- Viewing collaborative DAW client sessions connected to projects

### SampleService

Handle sample metadata operations:
- Create, update, delete samples
- Download samples by name
- Upload new samples to backend

### ProjectRoleService

Manage project collaborators:
- Listing collaborators
- Adding users
- Removing users

### UserService

Manage users through:
- Listing users
- Deleting users
- Updating user information
- Uploading avatars

### AudiographService

Retrieve audio graphs — vector graphics displayed in the sample browser.

### PresetUtil

A wrapper around preset APIs. Presets are device configurations applicable to existing devices for creating specific sounds or effects. Preset IDs can be copied from the DAW's preset browser.

## Type System

Method types use a specific notation indicating input/output types. For example:

```
projectService.createProject(request: CreateProjectRequest): Promise<CreateProjectResponse>
```

IDE support provides type hints for all request and response types.
