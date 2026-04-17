---
title: "DeleteProjectRequest"
parent: "api"
grand_parent: "API"
nav_order: 26
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: DeleteProjectRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:564](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L564)

Request for ProjectService.DeleteProject.

If a track is associated with the project, the project can't be deleted. The track has to be
deleted first.

If another project was remixed of this project

## Generated

from message audiotool.project.v1.DeleteProjectRequest

## Extends

- `Message`\<`DeleteProjectRequest`\>

## Constructors

### Constructor

```ts
new DeleteProjectRequest(data?: PartialMessage<DeleteProjectRequest>): DeleteProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:572](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L572)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`DeleteProjectRequest`\> |

#### Returns

`DeleteProjectRequest`

#### Overrides

```ts
Message<DeleteProjectRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:570](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L570)

Required. The name of the project to be deleted, in the form of `projects/{project_id}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:579](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L579)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:577](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L577)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.DeleteProjectRequest" = "audiotool.project.v1.DeleteProjectRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:578](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L578)

## Methods

### equals()

```ts
static equals(a: 
  | DeleteProjectRequest
  | PlainMessage<DeleteProjectRequest>
  | undefined, b: 
  | DeleteProjectRequest
  | PlainMessage<DeleteProjectRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:595](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L595)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `DeleteProjectRequest` \| `PlainMessage`\<`DeleteProjectRequest`\> \| `undefined` |
| `b` | \| `DeleteProjectRequest` \| `PlainMessage`\<`DeleteProjectRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:583](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L583)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`DeleteProjectRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:587](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L587)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:591](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L591)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`DeleteProjectRequest`
