---
title: "ProjectService"
parent: "api"
grand_parent: "API"
nav_order: 99
---

[**@audiotool/nexus API Reference**](../../)

***

# Variable: ProjectService

```ts
const ProjectService: {
  methods: {
     createProject: {
        I: typeof CreateProjectRequest;
        kind: Unary;
        name: "CreateProject";
        O: typeof CreateProjectResponse;
     };
     deleteProject: {
        I: typeof DeleteProjectRequest;
        kind: Unary;
        name: "DeleteProject";
        O: typeof DeleteProjectResponse;
     };
     getLatestVersionBundle: {
        I: typeof GetLatestVersionBundleRequest;
        kind: Unary;
        name: "GetLatestVersionBundle";
        O: typeof GetLatestVersionBundleResponse;
     };
     getProject: {
        I: typeof GetProjectRequest;
        kind: Unary;
        name: "GetProject";
        O: typeof GetProjectResponse;
     };
     listProjects: {
        I: typeof ListProjectsRequest;
        kind: Unary;
        name: "ListProjects";
        O: typeof ListProjectsResponse;
     };
     listSessions: {
        I: typeof ListSessionsRequest;
        kind: Unary;
        name: "ListSessions";
        O: typeof ListSessionsResponse;
     };
     openSession: {
        I: typeof OpenSessionRequest;
        kind: Unary;
        name: "OpenSession";
        O: typeof OpenSessionResponse;
     };
     syncTrack: {
        I: typeof SyncTrackRequest;
        kind: Unary;
        name: "SyncTrack";
        O: typeof Operation;
     };
     updateProject: {
        I: typeof UpdateProjectRequest;
        kind: Unary;
        name: "UpdateProject";
        O: typeof UpdateProjectResponse;
     };
     uploadCover: {
        I: typeof UploadCoverRequest;
        kind: Unary;
        name: "UploadCover";
        O: typeof UploadCoverResponse;
     };
  };
  typeName: "audiotool.project.v1.ProjectService";
};
```

Defined in: [gen/audiotool/project/v1/project\_service\_connect.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L29)

The ProjectService provides methods to manage studio projects.

## Type Declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-methods"></a> `methods` | \{ `createProject`: \{ `I`: *typeof* [`CreateProjectRequest`](../classes/CreateProjectRequest.html); `kind`: `Unary`; `name`: `"CreateProject"`; `O`: *typeof* [`CreateProjectResponse`](../classes/CreateProjectResponse.html); \}; `deleteProject`: \{ `I`: *typeof* [`DeleteProjectRequest`](../classes/DeleteProjectRequest.html); `kind`: `Unary`; `name`: `"DeleteProject"`; `O`: *typeof* [`DeleteProjectResponse`](../classes/DeleteProjectResponse.html); \}; `getLatestVersionBundle`: \{ `I`: *typeof* [`GetLatestVersionBundleRequest`](../classes/GetLatestVersionBundleRequest.html); `kind`: `Unary`; `name`: `"GetLatestVersionBundle"`; `O`: *typeof* [`GetLatestVersionBundleResponse`](../classes/GetLatestVersionBundleResponse.html); \}; `getProject`: \{ `I`: *typeof* [`GetProjectRequest`](../classes/GetProjectRequest.html); `kind`: `Unary`; `name`: `"GetProject"`; `O`: *typeof* [`GetProjectResponse`](../classes/GetProjectResponse.html); \}; `listProjects`: \{ `I`: *typeof* [`ListProjectsRequest`](../classes/ListProjectsRequest.html); `kind`: `Unary`; `name`: `"ListProjects"`; `O`: *typeof* [`ListProjectsResponse`](../classes/ListProjectsResponse.html); \}; `listSessions`: \{ `I`: *typeof* [`ListSessionsRequest`](../classes/ListSessionsRequest.html); `kind`: `Unary`; `name`: `"ListSessions"`; `O`: *typeof* [`ListSessionsResponse`](../classes/ListSessionsResponse.html); \}; `openSession`: \{ `I`: *typeof* [`OpenSessionRequest`](../classes/OpenSessionRequest.html); `kind`: `Unary`; `name`: `"OpenSession"`; `O`: *typeof* [`OpenSessionResponse`](../classes/OpenSessionResponse.html); \}; `syncTrack`: \{ `I`: *typeof* [`SyncTrackRequest`](../classes/SyncTrackRequest.html); `kind`: `Unary`; `name`: `"SyncTrack"`; `O`: *typeof* [`Operation`](../classes/Operation.html); \}; `updateProject`: \{ `I`: *typeof* [`UpdateProjectRequest`](../classes/UpdateProjectRequest.html); `kind`: `Unary`; `name`: `"UpdateProject"`; `O`: *typeof* [`UpdateProjectResponse`](../classes/UpdateProjectResponse.html); \}; `uploadCover`: \{ `I`: *typeof* [`UploadCoverRequest`](../classes/UploadCoverRequest.html); `kind`: `Unary`; `name`: `"UploadCover"`; `O`: *typeof* [`UploadCoverResponse`](../classes/UploadCoverResponse.html); \}; \} | - | - | [gen/audiotool/project/v1/project\_service\_connect.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L31) |
| `methods.createProject` | \{ `I`: *typeof* [`CreateProjectRequest`](../classes/CreateProjectRequest.html); `kind`: `Unary`; `name`: `"CreateProject"`; `O`: *typeof* [`CreateProjectResponse`](../classes/CreateProjectResponse.html); \} | - | Create a project. **Generated** from rpc audiotool.project.v1.ProjectService.CreateProject | [gen/audiotool/project/v1/project\_service\_connect.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L59) |
| `methods.createProject.I` | *typeof* [`CreateProjectRequest`](../classes/CreateProjectRequest.html) | `CreateProjectRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L61) |
| `methods.createProject.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L63) |
| `methods.createProject.name` | `"CreateProject"` | `"CreateProject"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L60) |
| `methods.createProject.O` | *typeof* [`CreateProjectResponse`](../classes/CreateProjectResponse.html) | `CreateProjectResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L62) |
| `methods.deleteProject` | \{ `I`: *typeof* [`DeleteProjectRequest`](../classes/DeleteProjectRequest.html); `kind`: `Unary`; `name`: `"DeleteProject"`; `O`: *typeof* [`DeleteProjectResponse`](../classes/DeleteProjectResponse.html); \} | - | Delete a project. **Generated** from rpc audiotool.project.v1.ProjectService.DeleteProject | [gen/audiotool/project/v1/project\_service\_connect.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L92) |
| `methods.deleteProject.I` | *typeof* [`DeleteProjectRequest`](../classes/DeleteProjectRequest.html) | `DeleteProjectRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L94) |
| `methods.deleteProject.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L96) |
| `methods.deleteProject.name` | `"DeleteProject"` | `"DeleteProject"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L93) |
| `methods.deleteProject.O` | *typeof* [`DeleteProjectResponse`](../classes/DeleteProjectResponse.html) | `DeleteProjectResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L95) |
| `methods.getLatestVersionBundle` | \{ `I`: *typeof* [`GetLatestVersionBundleRequest`](../classes/GetLatestVersionBundleRequest.html); `kind`: `Unary`; `name`: `"GetLatestVersionBundle"`; `O`: *typeof* [`GetLatestVersionBundleResponse`](../classes/GetLatestVersionBundleResponse.html); \} | - | Get Latest Version Bundle This returns the latest bundle version required for session to allow potential quicker pre-loading **Generated** from rpc audiotool.project.v1.ProjectService.GetLatestVersionBundle | [gen/audiotool/project/v1/project\_service\_connect.ts:149](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L149) |
| `methods.getLatestVersionBundle.I` | *typeof* [`GetLatestVersionBundleRequest`](../classes/GetLatestVersionBundleRequest.html) | `GetLatestVersionBundleRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:151](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L151) |
| `methods.getLatestVersionBundle.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L153) |
| `methods.getLatestVersionBundle.name` | `"GetLatestVersionBundle"` | `"GetLatestVersionBundle"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:150](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L150) |
| `methods.getLatestVersionBundle.O` | *typeof* [`GetLatestVersionBundleResponse`](../classes/GetLatestVersionBundleResponse.html) | `GetLatestVersionBundleResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:152](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L152) |
| `methods.getProject` | \{ `I`: *typeof* [`GetProjectRequest`](../classes/GetProjectRequest.html); `kind`: `Unary`; `name`: `"GetProject"`; `O`: *typeof* [`GetProjectResponse`](../classes/GetProjectResponse.html); \} | - | Get a project. **Generated** from rpc audiotool.project.v1.ProjectService.GetProject | [gen/audiotool/project/v1/project\_service\_connect.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L48) |
| `methods.getProject.I` | *typeof* [`GetProjectRequest`](../classes/GetProjectRequest.html) | `GetProjectRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L50) |
| `methods.getProject.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L52) |
| `methods.getProject.name` | `"GetProject"` | `"GetProject"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L49) |
| `methods.getProject.O` | *typeof* [`GetProjectResponse`](../classes/GetProjectResponse.html) | `GetProjectResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L51) |
| `methods.listProjects` | \{ `I`: *typeof* [`ListProjectsRequest`](../classes/ListProjectsRequest.html); `kind`: `Unary`; `name`: `"ListProjects"`; `O`: *typeof* [`ListProjectsResponse`](../classes/ListProjectsResponse.html); \} | - | List the projects.option **Generated** from rpc audiotool.project.v1.ProjectService.ListProjects | [gen/audiotool/project/v1/project\_service\_connect.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L37) |
| `methods.listProjects.I` | *typeof* [`ListProjectsRequest`](../classes/ListProjectsRequest.html) | `ListProjectsRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L39) |
| `methods.listProjects.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L41) |
| `methods.listProjects.name` | `"ListProjects"` | `"ListProjects"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L38) |
| `methods.listProjects.O` | *typeof* [`ListProjectsResponse`](../classes/ListProjectsResponse.html) | `ListProjectsResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L40) |
| `methods.listSessions` | \{ `I`: *typeof* [`ListSessionsRequest`](../classes/ListSessionsRequest.html); `kind`: `Unary`; `name`: `"ListSessions"`; `O`: *typeof* [`ListSessionsResponse`](../classes/ListSessionsResponse.html); \} | - | List sessions. This gives all the sessions where a user can join and are active at the request time. **Generated** from rpc audiotool.project.v1.ProjectService.ListSessions | [gen/audiotool/project/v1/project\_service\_connect.ts:136](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L136) |
| `methods.listSessions.I` | *typeof* [`ListSessionsRequest`](../classes/ListSessionsRequest.html) | `ListSessionsRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:138](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L138) |
| `methods.listSessions.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:140](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L140) |
| `methods.listSessions.name` | `"ListSessions"` | `"ListSessions"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:137](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L137) |
| `methods.listSessions.O` | *typeof* [`ListSessionsResponse`](../classes/ListSessionsResponse.html) | `ListSessionsResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L139) |
| `methods.openSession` | \{ `I`: *typeof* [`OpenSessionRequest`](../classes/OpenSessionRequest.html); `kind`: `Unary`; `name`: `"OpenSession"`; `O`: *typeof* [`OpenSessionResponse`](../classes/OpenSessionResponse.html); \} | - | Open a session. This will create a new session if one does not exist. This is used to allow multiple users to work on a project at the same time and opens the Document. The returned session contains the URLs to connect to the DocumentService which uses his own proto for communication. (audiotool.document.v1.DocumentService) **Generated** from rpc audiotool.project.v1.ProjectService.OpenSession | [gen/audiotool/project/v1/project\_service\_connect.ts:123](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L123) |
| `methods.openSession.I` | *typeof* [`OpenSessionRequest`](../classes/OpenSessionRequest.html) | `OpenSessionRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L125) |
| `methods.openSession.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:127](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L127) |
| `methods.openSession.name` | `"OpenSession"` | `"OpenSession"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:124](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L124) |
| `methods.openSession.O` | *typeof* [`OpenSessionResponse`](../classes/OpenSessionResponse.html) | `OpenSessionResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:126](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L126) |
| `methods.syncTrack` | \{ `I`: *typeof* [`SyncTrackRequest`](../classes/SyncTrackRequest.html); `kind`: `Unary`; `name`: `"SyncTrack"`; `O`: *typeof* [`Operation`](../classes/Operation.html); \} | - | SyncTrack a will create or update a track. The project will be used as leading source for the track. This RPC kicks off a process where user can listen to via the events api. Another optimistic approach is to trigger GetTrack with the returned track_name. **Generated** from rpc audiotool.project.v1.ProjectService.SyncTrack | [gen/audiotool/project/v1/project\_service\_connect.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L108) |
| `methods.syncTrack.I` | *typeof* [`SyncTrackRequest`](../classes/SyncTrackRequest.html) | `SyncTrackRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L110) |
| `methods.syncTrack.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:112](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L112) |
| `methods.syncTrack.name` | `"SyncTrack"` | `"SyncTrack"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L109) |
| `methods.syncTrack.O` | *typeof* [`Operation`](../classes/Operation.html) | `Operation` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L111) |
| `methods.updateProject` | \{ `I`: *typeof* [`UpdateProjectRequest`](../classes/UpdateProjectRequest.html); `kind`: `Unary`; `name`: `"UpdateProject"`; `O`: *typeof* [`UpdateProjectResponse`](../classes/UpdateProjectResponse.html); \} | - | Update a project. **Generated** from rpc audiotool.project.v1.ProjectService.UpdateProject | [gen/audiotool/project/v1/project\_service\_connect.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L81) |
| `methods.updateProject.I` | *typeof* [`UpdateProjectRequest`](../classes/UpdateProjectRequest.html) | `UpdateProjectRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L83) |
| `methods.updateProject.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L85) |
| `methods.updateProject.name` | `"UpdateProject"` | `"UpdateProject"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L82) |
| `methods.updateProject.O` | *typeof* [`UpdateProjectResponse`](../classes/UpdateProjectResponse.html) | `UpdateProjectResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L84) |
| `methods.uploadCover` | \{ `I`: *typeof* [`UploadCoverRequest`](../classes/UploadCoverRequest.html); `kind`: `Unary`; `name`: `"UploadCover"`; `O`: *typeof* [`UploadCoverResponse`](../classes/UploadCoverResponse.html); \} | - | Upload a cover. **Generated** from rpc audiotool.project.v1.ProjectService.UploadCover | [gen/audiotool/project/v1/project\_service\_connect.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L70) |
| `methods.uploadCover.I` | *typeof* [`UploadCoverRequest`](../classes/UploadCoverRequest.html) | `UploadCoverRequest` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L72) |
| `methods.uploadCover.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L74) |
| `methods.uploadCover.name` | `"UploadCover"` | `"UploadCover"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L71) |
| `methods.uploadCover.O` | *typeof* [`UploadCoverResponse`](../classes/UploadCoverResponse.html) | `UploadCoverResponse` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L73) |
| <a id="property-typename"></a> `typeName` | `"audiotool.project.v1.ProjectService"` | `"audiotool.project.v1.ProjectService"` | - | [gen/audiotool/project/v1/project\_service\_connect.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_connect.ts#L30) |

## Generated

from service audiotool.project.v1.ProjectService
