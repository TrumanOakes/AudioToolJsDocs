---
title: "CloseSessionRequest"
parent: "api"
grand_parent: "API"
nav_order: 10
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CloseSessionRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:777](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L777)

Request for ProjectService.CloseSession.

## Generated

from message audiotool.project.v1.CloseSessionRequest

## Extends

- `Message`\<`CloseSessionRequest`\>

## Constructors

### Constructor

```ts
new CloseSessionRequest(data?: PartialMessage<CloseSessionRequest>): CloseSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:785](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L785)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CloseSessionRequest`\> |

#### Returns

`CloseSessionRequest`

#### Overrides

```ts
Message<CloseSessionRequest>.constructor
```

## Properties

### projectName

```ts
projectName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:783](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L783)

Required. The name of the project to close the session for, in the form of `projects/{project_id}`.

#### Generated

from field: string project_name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:792](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L792)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:790](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L790)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.CloseSessionRequest" = "audiotool.project.v1.CloseSessionRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:791](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L791)

## Methods

### equals()

```ts
static equals(a: 
  | CloseSessionRequest
  | PlainMessage<CloseSessionRequest>
  | undefined, b: 
  | CloseSessionRequest
  | PlainMessage<CloseSessionRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:808](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L808)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CloseSessionRequest` \| `PlainMessage`\<`CloseSessionRequest`\> \| `undefined` |
| `b` | \| `CloseSessionRequest` \| `PlainMessage`\<`CloseSessionRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloseSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:796](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L796)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CloseSessionRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloseSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:800](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L800)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CloseSessionRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloseSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:804](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L804)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CloseSessionRequest`
