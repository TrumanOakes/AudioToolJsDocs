---
title: "GetProjectResponse"
parent: "api"
grand_parent: "API"
nav_order: 52
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetProjectResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:252](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L252)

Response for ProjectService.GetProject.

## Generated

from message audiotool.project.v1.GetProjectResponse

## Extends

- `Message`\<`GetProjectResponse`\>

## Constructors

### Constructor

```ts
new GetProjectResponse(data?: PartialMessage<GetProjectResponse>): GetProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:260](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L260)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetProjectResponse`\> |

#### Returns

`GetProjectResponse`

#### Overrides

```ts
Message<GetProjectResponse>.constructor
```

## Properties

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:258](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L258)

The project.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:267](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L267)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:265](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L265)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.GetProjectResponse" = "audiotool.project.v1.GetProjectResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:266](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L266)

## Methods

### equals()

```ts
static equals(a: GetProjectResponse | PlainMessage<GetProjectResponse> | undefined, b: GetProjectResponse | PlainMessage<GetProjectResponse> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:283](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L283)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetProjectResponse` \| `PlainMessage`\<`GetProjectResponse`\> \| `undefined` |
| `b` | `GetProjectResponse` \| `PlainMessage`\<`GetProjectResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:271](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L271)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetProjectResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:275](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L275)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetProjectResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProjectResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:279](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L279)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetProjectResponse`
