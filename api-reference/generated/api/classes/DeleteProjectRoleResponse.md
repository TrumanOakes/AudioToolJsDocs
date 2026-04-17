---
title: "DeleteProjectRoleResponse"
parent: "api"
grand_parent: "API"
nav_order: 29
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteProjectRoleResponse

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:300](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L300)

Response for ProjectRoleService.DeleteProjectRole.

## Generated

from message audiotool.project.v1.DeleteProjectRoleResponse

## Extends

- `Message`\<`DeleteProjectRoleResponse`\>

## Constructors

### Constructor

```ts
new DeleteProjectRoleResponse(data?: PartialMessage<DeleteProjectRoleResponse>): DeleteProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:301](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L301)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteProjectRoleResponse`\> |

#### Returns

`DeleteProjectRoleResponse`

#### Overrides

```ts
Message<DeleteProjectRoleResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:308](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L308)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:306](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L306)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.DeleteProjectRoleResponse" = "audiotool.project.v1.DeleteProjectRoleResponse";
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:307](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L307)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteProjectRoleResponse
  | PlainMessage<DeleteProjectRoleResponse>
  | undefined, b: 
  | DeleteProjectRoleResponse
  | PlainMessage<DeleteProjectRoleResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:323](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L323)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteProjectRoleResponse` \| `PlainMessage`\<`DeleteProjectRoleResponse`\> \| `undefined` |
| `b` | \| `DeleteProjectRoleResponse` \| `PlainMessage`\<`DeleteProjectRoleResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:311](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L311)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteProjectRoleResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:315](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L315)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectRoleResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteProjectRoleResponse;
```

Defined in: [gen/audiotool/project/v1/project\_role\_service\_pb.ts:319](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_service_pb.ts#L319)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectRoleResponse`
