---
title: "UpdateProjectResponse"
parent: "api"
grand_parent: "API"
nav_order: 131
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateProjectResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:518](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L518)

Response for ProjectService.UpdateProject.

## Generated

from message audiotool.project.v1.UpdateProjectResponse

## Extends

- `Message`\<`UpdateProjectResponse`\>

## Constructors

### Constructor

```ts
new UpdateProjectResponse(data?: PartialMessage<UpdateProjectResponse>): UpdateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:526](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L526)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateProjectResponse`\> |

#### Returns

`UpdateProjectResponse`

#### Overrides

```ts
Message<UpdateProjectResponse>.constructor
```

## Properties

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:524](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L524)

The updated project.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:533](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L533)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:531](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L531)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.UpdateProjectResponse" = "audiotool.project.v1.UpdateProjectResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:532](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L532)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateProjectResponse
  | PlainMessage<UpdateProjectResponse>
  | undefined, b: 
  | UpdateProjectResponse
  | PlainMessage<UpdateProjectResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:549](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L549)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateProjectResponse` \| `PlainMessage`\<`UpdateProjectResponse`\> \| `undefined` |
| `b` | \| `UpdateProjectResponse` \| `PlainMessage`\<`UpdateProjectResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:537](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L537)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateProjectResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:541](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L541)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:545](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L545)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectResponse`
