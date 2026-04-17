---
title: "OpenSessionResponse"
parent: "api"
grand_parent: "API"
nav_order: 86
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: OpenSessionResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:736](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L736)

Response for ProjectService.OpenSession.

## Generated

from message audiotool.project.v1.OpenSessionResponse

## Extends

- `Message`\<`OpenSessionResponse`\>

## Constructors

### Constructor

```ts
new OpenSessionResponse(data?: PartialMessage<OpenSessionResponse>): OpenSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:744](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L744)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`OpenSessionResponse`\> |

#### Returns

`OpenSessionResponse`

#### Overrides

```ts
Message<OpenSessionResponse>.constructor
```

## Properties

### session?

```ts
optional session?: Session;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:742](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L742)

The session.

#### Generated

from field: audiotool.project.v1.Session session = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:751](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L751)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:749](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L749)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.OpenSessionResponse" = "audiotool.project.v1.OpenSessionResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:750](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L750)

## Methods

### equals()

```ts
static equals(a: 
  | OpenSessionResponse
  | PlainMessage<OpenSessionResponse>
  | undefined, b: 
  | OpenSessionResponse
  | PlainMessage<OpenSessionResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:767](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L767)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `OpenSessionResponse` \| `PlainMessage`\<`OpenSessionResponse`\> \| `undefined` |
| `b` | \| `OpenSessionResponse` \| `PlainMessage`\<`OpenSessionResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpenSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:755](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L755)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`OpenSessionResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpenSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:759](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L759)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`OpenSessionResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpenSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:763](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L763)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`OpenSessionResponse`
