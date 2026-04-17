---
title: "UpdateProjectRequest"
parent: "api"
grand_parent: "API"
nav_order: 130
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateProjectRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:469](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L469)

Request for ProjectService.UpdateProject.

## Generated

from message audiotool.project.v1.UpdateProjectRequest

## Extends

- `Message`\<`UpdateProjectRequest`\>

## Constructors

### Constructor

```ts
new UpdateProjectRequest(data?: PartialMessage<UpdateProjectRequest>): UpdateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:484](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L484)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateProjectRequest`\> |

#### Returns

`UpdateProjectRequest`

#### Overrides

```ts
Message<UpdateProjectRequest>.constructor
```

## Properties

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:475](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L475)

The project to update.

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### updateMask?

```ts
optional updateMask?: FieldMask;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:482](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L482)

The update mask to apply to the project.

#### Generated

from field: google.protobuf.FieldMask update_mask = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:491](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L491)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:489](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L489)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.UpdateProjectRequest" = "audiotool.project.v1.UpdateProjectRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:490](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L490)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateProjectRequest
  | PlainMessage<UpdateProjectRequest>
  | undefined, b: 
  | UpdateProjectRequest
  | PlainMessage<UpdateProjectRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:508](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L508)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateProjectRequest` \| `PlainMessage`\<`UpdateProjectRequest`\> \| `undefined` |
| `b` | \| `UpdateProjectRequest` \| `PlainMessage`\<`UpdateProjectRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:496](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L496)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateProjectRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:500](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L500)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProjectRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:504](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L504)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateProjectRequest`
