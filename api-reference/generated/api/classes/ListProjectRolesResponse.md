---
title: "ListProjectRolesResponse"
parent: "api"
grand_parent: "API"
nav_order: 73
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListProjectRolesResponse

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L113)

Response for ProjectRoleService.ListProjectRoles.

## Generated

from message audiotool.project.v1.ListProjectRolesResponse

## Extends

- `Message`\<`ListProjectRolesResponse`\>

## Constructors

### Constructor

```ts
new ListProjectRolesResponse(data?: PartialMessage<ListProjectRolesResponse>): ListProjectRolesResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:129](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L129)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListProjectRolesResponse`\> |

#### Returns

`ListProjectRolesResponse`

#### Overrides

```ts
Message<ListProjectRolesResponse>.constructor
```

## Properties

### nextPageToken

```ts
nextPageToken: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:127](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L127)

Token to retrieve the next page of results, or empty if there are no more results in the
list.

#### Generated

from field: string next_page_token = 2;

***

### projectRoles

```ts
projectRoles: ProjectRole[] = [];
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:119](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L119)

The project roles.

#### Generated

from field: repeated audiotool.project.v1.ProjectRole project_roles = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:136](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L136)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:134](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L134)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.ListProjectRolesResponse" = "audiotool.project.v1.ListProjectRolesResponse";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:135](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L135)

## Methods

### equals()

```ts
static equals(a: 
  | ListProjectRolesResponse
  | PlainMessage<ListProjectRolesResponse>
  | undefined, b: 
  | ListProjectRolesResponse
  | PlainMessage<ListProjectRolesResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L153)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListProjectRolesResponse` \| `PlainMessage`\<`ListProjectRolesResponse`\> \| `undefined` |
| `b` | \| `ListProjectRolesResponse` \| `PlainMessage`\<`ListProjectRolesResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectRolesResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:141](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L141)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListProjectRolesResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectRolesResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:145](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L145)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectRolesResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectRolesResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:149](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L149)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectRolesResponse`
