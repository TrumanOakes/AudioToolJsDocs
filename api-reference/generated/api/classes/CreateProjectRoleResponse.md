---
title: "CreateProjectRoleResponse"
parent: "api"
grand_parent: "API"
nav_order: 19
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreateProjectRoleResponse

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:217](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L217)

Response for ProjectRoleService.CreateProjectRole.

## Generated

from message audiotool.project.v1.CreateProjectRoleResponse

## Extends

- `Message`\<`CreateProjectRoleResponse`\>

## Constructors

### Constructor

```ts
new CreateProjectRoleResponse(data?: PartialMessage<CreateProjectRoleResponse>): CreateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:225](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L225)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreateProjectRoleResponse`\> |

#### Returns

`CreateProjectRoleResponse`

#### Overrides

```ts
Message<CreateProjectRoleResponse>.constructor
```

## Properties

### projectRole?

```ts
optional projectRole?: ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:223](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L223)

The created project_role.

#### Generated

from field: audiotool.project.v1.ProjectRole project_role = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:232](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L232)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L230)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.CreateProjectRoleResponse" = "audiotool.project.v1.CreateProjectRoleResponse";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:231](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L231)

## Methods

### equals()

```ts
static equals(a: 
  | CreateProjectRoleResponse
  | PlainMessage<CreateProjectRoleResponse>
  | undefined, b: 
  | CreateProjectRoleResponse
  | PlainMessage<CreateProjectRoleResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:248](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L248)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreateProjectRoleResponse` \| `PlainMessage`\<`CreateProjectRoleResponse`\> \| `undefined` |
| `b` | \| `CreateProjectRoleResponse` \| `PlainMessage`\<`CreateProjectRoleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:236](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L236)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreateProjectRoleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:240](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L240)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectRoleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:244](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L244)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectRoleResponse`
