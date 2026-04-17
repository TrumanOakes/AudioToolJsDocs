---
title: "ProjectRoleType"
parent: "api"
grand_parent: "API"
nav_order: 98
---

[**@audiotool/nexus API Reference**](../../)

***

# Enumeration: ProjectRoleType

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L28)

ProjectRoleType defines the role of a collaborator.

## Generated

from enum audiotool.project.v1.ProjectRoleType

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-editor"></a> `EDITOR` | `3` | Editor can edit the project. **Generated** from enum value: PROJECT_ROLE_TYPE_EDITOR = 3; | [gen/audiotool/project/v1/project\_role\_pb.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L55) |
| <a id="enumeration-member-editor_unpublished"></a> `EDITOR_UNPUBLISHED` | `4` | Will not be synced as a contributor to a track. **Generated** from enum value: PROJECT_ROLE_TYPE_EDITOR_UNPUBLISHED = 4; | [gen/audiotool/project/v1/project\_role\_pb.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L62) |
| <a id="enumeration-member-owner"></a> `OWNER` | `1` | Owner can edit the project and has full control over it. **Generated** from enum value: PROJECT_ROLE_TYPE_OWNER = 1; | [gen/audiotool/project/v1/project\_role\_pb.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L41) |
| <a id="enumeration-member-owner_unpublished"></a> `OWNER_UNPUBLISHED` | `2` | Will not be synced as a contributor to a track. **Generated** from enum value: PROJECT_ROLE_TYPE_OWNER_UNPUBLISHED = 2; | [gen/audiotool/project/v1/project\_role\_pb.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L48) |
| <a id="enumeration-member-unspecified"></a> `UNSPECIFIED` | `0` | Unspecified role. **Generated** from enum value: PROJECT_ROLE_TYPE_UNSPECIFIED = 0; | [gen/audiotool/project/v1/project\_role\_pb.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L34) |
| <a id="enumeration-member-viewer"></a> `VIEWER` | `5` | Viewer can view the project. Will not be synced as a contributor to a track. **Generated** from enum value: PROJECT_ROLE_TYPE_VIEWER = 5; | [gen/audiotool/project/v1/project\_role\_pb.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L71) |
