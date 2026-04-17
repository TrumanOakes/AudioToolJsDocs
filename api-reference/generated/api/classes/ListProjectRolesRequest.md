---
title: "ListProjectRolesRequest"
parent: "api"
grand_parent: "API"
nav_order: 72
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListProjectRolesRequest

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L29)

Request for ProjectRoleService.ListProjectRoles.

## Generated

from message audiotool.project.v1.ListProjectRolesRequest

## Extends

- `Message`\<`ListProjectRolesRequest`\>

## Constructors

### Constructor

```ts
new ListProjectRolesRequest(data?: PartialMessage<ListProjectRolesRequest>): ListProjectRolesRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L76)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListProjectRolesRequest`\> |

#### Returns

`ListProjectRolesRequest`

#### Overrides

```ts
Message<ListProjectRolesRequest>.constructor
```

## Properties

### filter

```ts
filter: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L62)

The standard CEL filter.

Supported fields:
- project_role.name
- project_role.project_name
- project_role.user_name

#### Generated

from field: string filter = 4;

***

### orderBy

```ts
orderBy: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L74)

The order to sort the results by.

Supported fields:
- project_role.name
- project_role.project_name
- project_role.user_name

#### Generated

from field: string order_by = 5;

***

### pageSize

```ts
pageSize: number = 0;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L43)

The maximum number of items to return.

#### Generated

from field: int32 page_size = 2;

***

### pageToken

```ts
pageToken: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L50)

The next_page_token value returned from a previous List request, if any.

#### Generated

from field: string page_token = 3;

***

### parent

```ts
parent: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L36)

Required. The project that contains the ProjectRoles, in the form of
`projects/{project}`.

#### Generated

from field: string parent = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L83)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L81)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.ListProjectRolesRequest" = "audiotool.project.v1.ListProjectRolesRequest";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L82)

## Methods

### equals()

```ts
static equals(a: 
  | ListProjectRolesRequest
  | PlainMessage<ListProjectRolesRequest>
  | undefined, b: 
  | ListProjectRolesRequest
  | PlainMessage<ListProjectRolesRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L103)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListProjectRolesRequest` \| `PlainMessage`\<`ListProjectRolesRequest`\> \| `undefined` |
| `b` | \| `ListProjectRolesRequest` \| `PlainMessage`\<`ListProjectRolesRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectRolesRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L91)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListProjectRolesRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectRolesRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L95)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectRolesRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectRolesRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L99)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectRolesRequest`
