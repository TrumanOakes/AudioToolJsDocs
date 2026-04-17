---
title: "CreateProjectRoleRequest"
parent: "api"
grand_parent: "API"
nav_order: 18
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreateProjectRoleRequest

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:163](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L163)

Request for ProjectRoleService.CreateProjectRole.

## Generated

from message audiotool.project.v1.CreateProjectRoleRequest

## Extends

- `Message`\<`CreateProjectRoleRequest`\>

## Constructors

### Constructor

```ts
new CreateProjectRoleRequest(data?: PartialMessage<CreateProjectRoleRequest>): CreateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:183](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L183)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreateProjectRoleRequest`\> |

#### Returns

`CreateProjectRoleRequest`

#### Overrides

```ts
Message<CreateProjectRoleRequest>.constructor
```

## Properties

### parent

```ts
parent: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:170](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L170)

Required. The project in which the role should be created, in the form of
`projects/{project}`.

#### Generated

from field: string parent = 1;

***

### projectRole?

```ts
optional projectRole?: ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:181](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L181)

The ProjectRole to create.

There is a maximum number of ProjectRoles that can be created for a project.

The ProjectRole is opt-out.

#### Generated

from field: audiotool.project.v1.ProjectRole project_role = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:190](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L190)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:188](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L188)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.CreateProjectRoleRequest" = "audiotool.project.v1.CreateProjectRoleRequest";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:189](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L189)

## Methods

### equals()

```ts
static equals(a: 
  | CreateProjectRoleRequest
  | PlainMessage<CreateProjectRoleRequest>
  | undefined, b: 
  | CreateProjectRoleRequest
  | PlainMessage<CreateProjectRoleRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:207](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L207)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreateProjectRoleRequest` \| `PlainMessage`\<`CreateProjectRoleRequest`\> \| `undefined` |
| `b` | \| `CreateProjectRoleRequest` \| `PlainMessage`\<`CreateProjectRoleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:195](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L195)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreateProjectRoleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:199](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L199)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectRoleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:203](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L203)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectRoleRequest`
