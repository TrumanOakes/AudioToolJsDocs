---
title: "ListProjectsResponse"
parent: "api"
grand_parent: "API"
nav_order: 75
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListProjectsResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L161)

Response for ProjectService.ListProjects.

## Generated

from message audiotool.project.v1.ListProjectsResponse

## Extends

- `Message`\<`ListProjectsResponse`\>

## Constructors

### Constructor

```ts
new ListProjectsResponse(data?: PartialMessage<ListProjectsResponse>): ListProjectsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:177](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L177)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListProjectsResponse`\> |

#### Returns

`ListProjectsResponse`

#### Overrides

```ts
Message<ListProjectsResponse>.constructor
```

## Properties

### nextPageToken

```ts
nextPageToken: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:175](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L175)

Token to retrieve the next page of results, or empty if there are no more results in the
list.

#### Generated

from field: string next_page_token = 2;

***

### projects

```ts
projects: Project[] = [];
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:167](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L167)

The list of projects.

#### Generated

from field: repeated audiotool.project.v1.Project projects = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:184](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L184)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:182](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L182)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.ListProjectsResponse" = "audiotool.project.v1.ListProjectsResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:183](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L183)

## Methods

### equals()

```ts
static equals(a: 
  | ListProjectsResponse
  | PlainMessage<ListProjectsResponse>
  | undefined, b: 
  | ListProjectsResponse
  | PlainMessage<ListProjectsResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:201](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L201)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListProjectsResponse` \| `PlainMessage`\<`ListProjectsResponse`\> \| `undefined` |
| `b` | \| `ListProjectsResponse` \| `PlainMessage`\<`ListProjectsResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:189](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L189)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListProjectsResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:193](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L193)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectsResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:197](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L197)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectsResponse`
