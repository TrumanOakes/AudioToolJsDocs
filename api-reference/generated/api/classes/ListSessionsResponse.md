---
title: "ListSessionsResponse"
parent: "api"
grand_parent: "API"
nav_order: 79
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ListSessionsResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:924](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L924)

Response for ProjectService.ListSessions.

## Generated

from message audiotool.project.v1.ListSessionsResponse

## Extends

- `Message`\<`ListSessionsResponse`\>

## Constructors

### Constructor

```ts
new ListSessionsResponse(data?: PartialMessage<ListSessionsResponse>): ListSessionsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:932](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L932)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ListSessionsResponse`\> |

#### Returns

`ListSessionsResponse`

#### Overrides

```ts
Message<ListSessionsResponse>.constructor
```

## Properties

### sessions

```ts
sessions: Session[] = [];
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:930](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L930)

The list of sessions.

#### Generated

from field: repeated audiotool.project.v1.Session sessions = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:939](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L939)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:937](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L937)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.ListSessionsResponse" = "audiotool.project.v1.ListSessionsResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:938](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L938)

## Methods

### equals()

```ts
static equals(a: 
  | ListSessionsResponse
  | PlainMessage<ListSessionsResponse>
  | undefined, b: 
  | ListSessionsResponse
  | PlainMessage<ListSessionsResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:955](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L955)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `ListSessionsResponse` \| `PlainMessage`\<`ListSessionsResponse`\> \| `undefined` |
| `b` | \| `ListSessionsResponse` \| `PlainMessage`\<`ListSessionsResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:943](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L943)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ListSessionsResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:947](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L947)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSessionsResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:951](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L951)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ListSessionsResponse`
