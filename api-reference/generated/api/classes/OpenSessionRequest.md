---
title: "OpenSessionRequest"
parent: "api"
grand_parent: "API"
nav_order: 85
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: OpenSessionRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:695](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L695)

Request for ProjectService.OpenSession.

## Generated

from message audiotool.project.v1.OpenSessionRequest

## Extends

- `Message`\<`OpenSessionRequest`\>

## Constructors

### Constructor

```ts
new OpenSessionRequest(data?: PartialMessage<OpenSessionRequest>): OpenSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:703](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L703)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`OpenSessionRequest`\> |

#### Returns

`OpenSessionRequest`

#### Overrides

```ts
Message<OpenSessionRequest>.constructor
```

## Properties

### projectName

```ts
projectName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:701](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L701)

Required. The name of the project to open a session for, in the form of `projects/{project_id}`.

#### Generated

from field: string project_name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:710](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L710)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:708](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L708)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.OpenSessionRequest" = "audiotool.project.v1.OpenSessionRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:709](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L709)

## Methods

### equals()

```ts
static equals(a: OpenSessionRequest | PlainMessage<OpenSessionRequest> | undefined, b: OpenSessionRequest | PlainMessage<OpenSessionRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:726](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L726)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `OpenSessionRequest` \| `PlainMessage`\<`OpenSessionRequest`\> \| `undefined` |
| `b` | `OpenSessionRequest` \| `PlainMessage`\<`OpenSessionRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpenSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:714](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L714)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`OpenSessionRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpenSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:718](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L718)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`OpenSessionRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpenSessionRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:722](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L722)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`OpenSessionRequest`
