---
title: "ProjectRoleService"
parent: "api"
grand_parent: "API"
nav_order: 97
---

[**@audiotool/nexus API Reference**](../../)

***

# Variable: ProjectRoleService

```ts
const ProjectRoleService: {
  methods: {
     createProjectRole: {
        I: typeof CreateProjectRoleRequest;
        kind: Unary;
        name: "CreateProjectRole";
        O: typeof CreateProjectRoleResponse;
     };
     deleteProjectRole: {
        I: typeof DeleteProjectRoleRequest;
        kind: Unary;
        name: "DeleteProjectRole";
        O: typeof DeleteProjectRoleResponse;
     };
     listProjectRoles: {
        I: typeof ListProjectRolesRequest;
        kind: Unary;
        name: "ListProjectRoles";
        O: typeof ListProjectRolesResponse;
     };
     updateProjectRole: {
        I: typeof UpdateProjectRoleRequest;
        kind: Unary;
        name: "UpdateProjectRole";
        O: typeof UpdateProjectRoleResponse;
     };
  };
  typeName: "audiotool.project.v1.ProjectRoleService";
};
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_connect.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L28)

The ProjectRoleService manages ProjectRoles.

## Type Declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-methods"></a> `methods` | \{ `createProjectRole`: \{ `I`: *typeof* [`CreateProjectRoleRequest`](../classes/CreateProjectRoleRequest.html); `kind`: `Unary`; `name`: `"CreateProjectRole"`; `O`: *typeof* [`CreateProjectRoleResponse`](../classes/CreateProjectRoleResponse.html); \}; `deleteProjectRole`: \{ `I`: *typeof* [`DeleteProjectRoleRequest`](../classes/DeleteProjectRoleRequest.html); `kind`: `Unary`; `name`: `"DeleteProjectRole"`; `O`: *typeof* [`DeleteProjectRoleResponse`](../classes/DeleteProjectRoleResponse.html); \}; `listProjectRoles`: \{ `I`: *typeof* [`ListProjectRolesRequest`](../classes/ListProjectRolesRequest.html); `kind`: `Unary`; `name`: `"ListProjectRoles"`; `O`: *typeof* [`ListProjectRolesResponse`](../classes/ListProjectRolesResponse.html); \}; `updateProjectRole`: \{ `I`: *typeof* [`UpdateProjectRoleRequest`](../classes/UpdateProjectRoleRequest.html); `kind`: `Unary`; `name`: `"UpdateProjectRole"`; `O`: *typeof* [`UpdateProjectRoleResponse`](../classes/UpdateProjectRoleResponse.html); \}; \} | - | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L30) |
| `methods.createProjectRole` | \{ `I`: *typeof* [`CreateProjectRoleRequest`](../classes/CreateProjectRoleRequest.html); `kind`: `Unary`; `name`: `"CreateProjectRole"`; `O`: *typeof* [`CreateProjectRoleResponse`](../classes/CreateProjectRoleResponse.html); \} | - | Creates a ProjectRole. **Generated** from rpc audiotool.project.v1.ProjectRoleService.CreateProjectRole | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L47) |
| `methods.createProjectRole.I` | *typeof* [`CreateProjectRoleRequest`](../classes/CreateProjectRoleRequest.html) | `CreateProjectRoleRequest` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L49) |
| `methods.createProjectRole.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L51) |
| `methods.createProjectRole.name` | `"CreateProjectRole"` | `"CreateProjectRole"` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L48) |
| `methods.createProjectRole.O` | *typeof* [`CreateProjectRoleResponse`](../classes/CreateProjectRoleResponse.html) | `CreateProjectRoleResponse` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L50) |
| `methods.deleteProjectRole` | \{ `I`: *typeof* [`DeleteProjectRoleRequest`](../classes/DeleteProjectRoleRequest.html); `kind`: `Unary`; `name`: `"DeleteProjectRole"`; `O`: *typeof* [`DeleteProjectRoleResponse`](../classes/DeleteProjectRoleResponse.html); \} | - | Deletes a ProjectRole. **Generated** from rpc audiotool.project.v1.ProjectRoleService.DeleteProjectRole | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L58) |
| `methods.deleteProjectRole.I` | *typeof* [`DeleteProjectRoleRequest`](../classes/DeleteProjectRoleRequest.html) | `DeleteProjectRoleRequest` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L60) |
| `methods.deleteProjectRole.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L62) |
| `methods.deleteProjectRole.name` | `"DeleteProjectRole"` | `"DeleteProjectRole"` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L59) |
| `methods.deleteProjectRole.O` | *typeof* [`DeleteProjectRoleResponse`](../classes/DeleteProjectRoleResponse.html) | `DeleteProjectRoleResponse` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L61) |
| `methods.listProjectRoles` | \{ `I`: *typeof* [`ListProjectRolesRequest`](../classes/ListProjectRolesRequest.html); `kind`: `Unary`; `name`: `"ListProjectRoles"`; `O`: *typeof* [`ListProjectRolesResponse`](../classes/ListProjectRolesResponse.html); \} | - | Lists all ProjectRoles for a project. **Generated** from rpc audiotool.project.v1.ProjectRoleService.ListProjectRoles | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L36) |
| `methods.listProjectRoles.I` | *typeof* [`ListProjectRolesRequest`](../classes/ListProjectRolesRequest.html) | `ListProjectRolesRequest` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L38) |
| `methods.listProjectRoles.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L40) |
| `methods.listProjectRoles.name` | `"ListProjectRoles"` | `"ListProjectRoles"` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L37) |
| `methods.listProjectRoles.O` | *typeof* [`ListProjectRolesResponse`](../classes/ListProjectRolesResponse.html) | `ListProjectRolesResponse` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L39) |
| `methods.updateProjectRole` | \{ `I`: *typeof* [`UpdateProjectRoleRequest`](../classes/UpdateProjectRoleRequest.html); `kind`: `Unary`; `name`: `"UpdateProjectRole"`; `O`: *typeof* [`UpdateProjectRoleResponse`](../classes/UpdateProjectRoleResponse.html); \} | - | Updates a ProjectRole. **Generated** from rpc audiotool.project.v1.ProjectRoleService.UpdateProjectRole | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L69) |
| `methods.updateProjectRole.I` | *typeof* [`UpdateProjectRoleRequest`](../classes/UpdateProjectRoleRequest.html) | `UpdateProjectRoleRequest` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L71) |
| `methods.updateProjectRole.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L73) |
| `methods.updateProjectRole.name` | `"UpdateProjectRole"` | `"UpdateProjectRole"` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L70) |
| `methods.updateProjectRole.O` | *typeof* [`UpdateProjectRoleResponse`](../classes/UpdateProjectRoleResponse.html) | `UpdateProjectRoleResponse` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L72) |
| <a id="property-typename"></a> `typeName` | `"audiotool.project.v1.ProjectRoleService"` | `"audiotool.project.v1.ProjectRoleService"` | - | [gen/audiotool/project/v1/project\_role\_service\_connect.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_connect.ts#L29) |

## Generated

from service audiotool.project.v1.ProjectRoleService
