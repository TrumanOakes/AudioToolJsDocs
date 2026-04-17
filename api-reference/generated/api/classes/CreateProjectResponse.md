---
title: "CreateProjectResponse"
parent: "api"
grand_parent: "API"
nav_order: 17
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreateProjectResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:334](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L334)

Response for ProjectService.CreateProject.

## Generated

from message audiotool.project.v1.CreateProjectResponse

## Extends

- `Message`\<`CreateProjectResponse`\>

## Constructors

### Constructor

```ts
new CreateProjectResponse(data?: PartialMessage<CreateProjectResponse>): CreateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:342](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L342)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreateProjectResponse`\> |

#### Returns

`CreateProjectResponse`

#### Overrides

```ts
Message<CreateProjectResponse>.constructor
```

## Properties

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:340](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L340)

The created project.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:349](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L349)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:347](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L347)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.CreateProjectResponse" = "audiotool.project.v1.CreateProjectResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:348](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L348)

## Methods

### equals()

```ts
static equals(a: 
  | CreateProjectResponse
  | PlainMessage<CreateProjectResponse>
  | undefined, b: 
  | CreateProjectResponse
  | PlainMessage<CreateProjectResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:365](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L365)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreateProjectResponse` \| `PlainMessage`\<`CreateProjectResponse`\> \| `undefined` |
| `b` | \| `CreateProjectResponse` \| `PlainMessage`\<`CreateProjectResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:353](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L353)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreateProjectResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:357](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L357)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:361](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L361)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectResponse`
