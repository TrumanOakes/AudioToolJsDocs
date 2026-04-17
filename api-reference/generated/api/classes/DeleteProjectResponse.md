---
title: "DeleteProjectResponse"
parent: "api"
grand_parent: "API"
nav_order: 27
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteProjectResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:605](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L605)

Response for ProjectService.DeleteProject.

## Generated

from message audiotool.project.v1.DeleteProjectResponse

## Extends

- `Message`\<`DeleteProjectResponse`\>

## Constructors

### Constructor

```ts
new DeleteProjectResponse(data?: PartialMessage<DeleteProjectResponse>): DeleteProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:606](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L606)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteProjectResponse`\> |

#### Returns

`DeleteProjectResponse`

#### Overrides

```ts
Message<DeleteProjectResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:613](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L613)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:611](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L611)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.DeleteProjectResponse" = "audiotool.project.v1.DeleteProjectResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:612](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L612)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteProjectResponse
  | PlainMessage<DeleteProjectResponse>
  | undefined, b: 
  | DeleteProjectResponse
  | PlainMessage<DeleteProjectResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:628](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L628)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteProjectResponse` \| `PlainMessage`\<`DeleteProjectResponse`\> \| `undefined` |
| `b` | \| `DeleteProjectResponse` \| `PlainMessage`\<`DeleteProjectResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:616](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L616)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteProjectResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:620](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L620)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:624](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L624)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectResponse`
