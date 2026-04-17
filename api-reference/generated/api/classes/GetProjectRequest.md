---
title: "GetProjectRequest"
parent: "api"
grand_parent: "API"
nav_order: 51
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetProjectRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:211](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L211)

Request for ProjectService.GetProject.

## Generated

from message audiotool.project.v1.GetProjectRequest

## Extends

- `Message`\<`GetProjectRequest`\>

## Constructors

### Constructor

```ts
new GetProjectRequest(data?: PartialMessage<GetProjectRequest>): GetProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:219](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L219)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetProjectRequest`\> |

#### Returns

`GetProjectRequest`

#### Overrides

```ts
Message<GetProjectRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:217](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L217)

Required. The name of the project to get, in the form of `projects/{project_id}`.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:226](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L226)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:224](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L224)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.GetProjectRequest" = "audiotool.project.v1.GetProjectRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:225](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L225)

## Methods

### equals()

```ts
static equals(a: GetProjectRequest | PlainMessage<GetProjectRequest> | undefined, b: GetProjectRequest | PlainMessage<GetProjectRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:242](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L242)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetProjectRequest` \| `PlainMessage`\<`GetProjectRequest`\> \| `undefined` |
| `b` | `GetProjectRequest` \| `PlainMessage`\<`GetProjectRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L230)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetProjectRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:234](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L234)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetProjectRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:238](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L238)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetProjectRequest`
