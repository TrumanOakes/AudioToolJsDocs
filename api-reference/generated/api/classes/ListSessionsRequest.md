---
title: "ListSessionsRequest"
parent: "api"
grand_parent: "API"
nav_order: 78
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListSessionsRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:853](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L853)

Request for ProjectService.ListSession.

List sessions of where a user can join.

## Generated

from message audiotool.project.v1.ListSessionsRequest

## Extends

- `Message`\<`ListSessionsRequest`\>

## Constructors

### Constructor

```ts
new ListSessionsRequest(data?: PartialMessage<ListSessionsRequest>): ListSessionsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:888](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L888)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListSessionsRequest`\> |

#### Returns

`ListSessionsRequest`

#### Overrides

```ts
Message<ListSessionsRequest>.constructor
```

## Properties

### filter

```ts
filter: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:862](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L862)

The standard CEL filter.

Supported fields:
- session.project_name

#### Generated

from field: string filter = 1;

***

### orderBy

```ts
orderBy: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:886](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L886)

The order to sort the results by.

Supported fields:
- session.project_name

#### Generated

from field: string order_by = 4;

***

### pageSize

```ts
pageSize: number = 0;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:869](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L869)

The maximum number of items to return.

#### Generated

from field: int32 page_size = 2;

***

### pageToken

```ts
pageToken: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:876](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L876)

The next_page_token value returned from a previous List request, if any.

#### Generated

from field: string page_token = 3;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:895](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L895)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:893](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L893)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.ListSessionsRequest" = "audiotool.project.v1.ListSessionsRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:894](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L894)

## Methods

### equals()

```ts
static equals(a: 
  | ListSessionsRequest
  | PlainMessage<ListSessionsRequest>
  | undefined, b: 
  | ListSessionsRequest
  | PlainMessage<ListSessionsRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:914](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L914)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListSessionsRequest` \| `PlainMessage`\<`ListSessionsRequest`\> \| `undefined` |
| `b` | \| `ListSessionsRequest` \| `PlainMessage`\<`ListSessionsRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:902](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L902)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListSessionsRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:906](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L906)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSessionsRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:910](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L910)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSessionsRequest`
