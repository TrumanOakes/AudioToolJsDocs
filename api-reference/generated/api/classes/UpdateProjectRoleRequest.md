---
title: "UpdateProjectRoleRequest"
parent: "api"
grand_parent: "API"
nav_order: 132
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateProjectRoleRequest

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:333](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L333)

Request for ProjectRoleService.UpdateProjectRole.

## Generated

from message audiotool.project.v1.UpdateProjectRoleRequest

## Extends

- `Message`\<`UpdateProjectRoleRequest`\>

## Constructors

### Constructor

```ts
new UpdateProjectRoleRequest(data?: PartialMessage<UpdateProjectRoleRequest>): UpdateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:348](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L348)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateProjectRoleRequest`\> |

#### Returns

`UpdateProjectRoleRequest`

#### Overrides

```ts
Message<UpdateProjectRoleRequest>.constructor
```

## Properties

### projectRole?

```ts
optional projectRole?: ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:339](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L339)

The ProjectRole update.

#### Generated

from field: audiotool.project.v1.ProjectRole project_role = 1;

***

### updateMask?

```ts
optional updateMask?: FieldMask;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:346](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L346)

The update mask to apply.

#### Generated

from field: google.protobuf.FieldMask update_mask = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:355](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L355)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:353](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L353)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.UpdateProjectRoleRequest" = "audiotool.project.v1.UpdateProjectRoleRequest";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:354](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L354)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateProjectRoleRequest
  | PlainMessage<UpdateProjectRoleRequest>
  | undefined, b: 
  | UpdateProjectRoleRequest
  | PlainMessage<UpdateProjectRoleRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:372](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L372)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateProjectRoleRequest` \| `PlainMessage`\<`UpdateProjectRoleRequest`\> \| `undefined` |
| `b` | \| `UpdateProjectRoleRequest` \| `PlainMessage`\<`UpdateProjectRoleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:360](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L360)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateProjectRoleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:364](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L364)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectRoleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:368](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L368)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectRoleRequest`
