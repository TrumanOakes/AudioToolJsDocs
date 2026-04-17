---
title: "DeleteProjectRoleRequest"
parent: "api"
grand_parent: "API"
nav_order: 28
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteProjectRoleRequest

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:258](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L258)

Request for ProjectRoleService.DeleteProjectRole.

## Generated

from message audiotool.project.v1.DeleteProjectRoleRequest

## Extends

- `Message`\<`DeleteProjectRoleRequest`\>

## Constructors

### Constructor

```ts
new DeleteProjectRoleRequest(data?: PartialMessage<DeleteProjectRoleRequest>): DeleteProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:267](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L267)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteProjectRoleRequest`\> |

#### Returns

`DeleteProjectRoleRequest`

#### Overrides

```ts
Message<DeleteProjectRoleRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:265](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L265)

Required. The ProjectRole to delete, in the form of
`projects/{project}/role/user/{user}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:274](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L274)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:272](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L272)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.DeleteProjectRoleRequest" = "audiotool.project.v1.DeleteProjectRoleRequest";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:273](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L273)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteProjectRoleRequest
  | PlainMessage<DeleteProjectRoleRequest>
  | undefined, b: 
  | DeleteProjectRoleRequest
  | PlainMessage<DeleteProjectRoleRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:290](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L290)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteProjectRoleRequest` \| `PlainMessage`\<`DeleteProjectRoleRequest`\> \| `undefined` |
| `b` | \| `DeleteProjectRoleRequest` \| `PlainMessage`\<`DeleteProjectRoleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:278](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L278)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteProjectRoleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:282](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L282)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectRoleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteProjectRoleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:286](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L286)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectRoleRequest`
