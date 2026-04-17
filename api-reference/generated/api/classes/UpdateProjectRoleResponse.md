---
title: "UpdateProjectRoleResponse"
parent: "api"
grand_parent: "API"
nav_order: 133
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateProjectRoleResponse

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:382](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L382)

Response for ProjectRoleService.UpdateProjectRole.

## Generated

from message audiotool.project.v1.UpdateProjectRoleResponse

## Extends

- `Message`\<`UpdateProjectRoleResponse`\>

## Constructors

### Constructor

```ts
new UpdateProjectRoleResponse(data?: PartialMessage<UpdateProjectRoleResponse>): UpdateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:390](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L390)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateProjectRoleResponse`\> |

#### Returns

`UpdateProjectRoleResponse`

#### Overrides

```ts
Message<UpdateProjectRoleResponse>.constructor
```

## Properties

### projectRole?

```ts
optional projectRole?: ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:388](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L388)

The updated ProjectRole.

#### Generated

from field: audiotool.project.v1.ProjectRole project_role = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:397](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L397)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:395](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L395)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.UpdateProjectRoleResponse" = "audiotool.project.v1.UpdateProjectRoleResponse";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:396](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L396)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateProjectRoleResponse
  | PlainMessage<UpdateProjectRoleResponse>
  | undefined, b: 
  | UpdateProjectRoleResponse
  | PlainMessage<UpdateProjectRoleResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:413](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L413)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateProjectRoleResponse` \| `PlainMessage`\<`UpdateProjectRoleResponse`\> \| `undefined` |
| `b` | \| `UpdateProjectRoleResponse` \| `PlainMessage`\<`UpdateProjectRoleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:401](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L401)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateProjectRoleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:405](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L405)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectRoleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:409](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L409)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectRoleResponse`
