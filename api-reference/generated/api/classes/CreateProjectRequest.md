---
title: "CreateProjectRequest"
parent: "api"
grand_parent: "API"
nav_order: 16
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CreateProjectRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:293](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L293)

Request for ProjectService.CreateProject.

## Generated

from message audiotool.project.v1.CreateProjectRequest

## Extends

- `Message`\<`CreateProjectRequest`\>

## Constructors

### Constructor

```ts
new CreateProjectRequest(data?: PartialMessage<CreateProjectRequest>): CreateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:301](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L301)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CreateProjectRequest`\> |

#### Returns

`CreateProjectRequest`

#### Overrides

```ts
Message<CreateProjectRequest>.constructor
```

## Properties

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:299](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L299)

The project to create.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:308](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L308)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:306](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L306)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.CreateProjectRequest" = "audiotool.project.v1.CreateProjectRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:307](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L307)

## Methods

### equals()

```ts
static equals(a: 
  | CreateProjectRequest
  | PlainMessage<CreateProjectRequest>
  | undefined, b: 
  | CreateProjectRequest
  | PlainMessage<CreateProjectRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:324](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L324)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CreateProjectRequest` \| `PlainMessage`\<`CreateProjectRequest`\> \| `undefined` |
| `b` | \| `CreateProjectRequest` \| `PlainMessage`\<`CreateProjectRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:312](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L312)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CreateProjectRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:316](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L316)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:320](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L320)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CreateProjectRequest`
