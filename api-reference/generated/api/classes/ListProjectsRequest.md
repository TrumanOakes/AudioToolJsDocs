---
title: "ListProjectsRequest"
parent: "api"
grand_parent: "API"
nav_order: 74
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListProjectsRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L72)

Request for ProjectService.ListProjects.

## Generated

from message audiotool.project.v1.ListProjectsRequest

## Extends

- `Message`\<`ListProjectsRequest`\>

## Constructors

### Constructor

```ts
new ListProjectsRequest(data?: PartialMessage<ListProjectsRequest>): ListProjectsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L125)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListProjectsRequest`\> |

#### Returns

`ListProjectsRequest`

#### Overrides

```ts
Message<ListProjectsRequest>.constructor
```

## Properties

### filter

```ts
filter: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L90)

The standard CEL filter.

Supported fields:
- project.name
- project.user_names
- project.creator_name
- project.track_name
- project.display_name
- project.description
- project.create_time
- project.update_time
- project.tags
- project.genre_name

#### Generated

from field: string filter = 1;

***

### orderBy

```ts
orderBy: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:123](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L123)

The order to sort the results by.

Supported fields:
- project.name
- project.user_names
- project.creator_name
- project.track_name
- project.display_name
- project.description
- project.create_time
- project.update_time
- project.tags
- project.genre_name

#### Generated

from field: string order_by = 4;

***

### pageSize

```ts
pageSize: number = 0;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L97)

The maximum number of items to return.

#### Generated

from field: int32 page_size = 2;

***

### pageToken

```ts
pageToken: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:104](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L104)

The next_page_token value returned from a previous List request, if any.

#### Generated

from field: string page_token = 3;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:132](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L132)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L130)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.ListProjectsRequest" = "audiotool.project.v1.ListProjectsRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:131](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L131)

## Methods

### equals()

```ts
static equals(a: 
  | ListProjectsRequest
  | PlainMessage<ListProjectsRequest>
  | undefined, b: 
  | ListProjectsRequest
  | PlainMessage<ListProjectsRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:151](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L151)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListProjectsRequest` \| `PlainMessage`\<`ListProjectsRequest`\> \| `undefined` |
| `b` | \| `ListProjectsRequest` \| `PlainMessage`\<`ListProjectsRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L139)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListProjectsRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:143](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L143)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectsRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:147](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L147)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListProjectsRequest`
