---
title: "CloseSessionResponse"
parent: "api"
grand_parent: "API"
nav_order: 11
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: CloseSessionResponse

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:818](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L818)

Response for ProjectService.CloseSession.

## Generated

from message audiotool.project.v1.CloseSessionResponse

## Extends

- `Message`\<`CloseSessionResponse`\>

## Constructors

### Constructor

```ts
new CloseSessionResponse(data?: PartialMessage<CloseSessionResponse>): CloseSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:819](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L819)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`CloseSessionResponse`\> |

#### Returns

`CloseSessionResponse`

#### Overrides

```ts
Message<CloseSessionResponse>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:826](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L826)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:824](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L824)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.CloseSessionResponse" = "audiotool.project.v1.CloseSessionResponse";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:825](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L825)

## Methods

### equals()

```ts
static equals(a: 
  | CloseSessionResponse
  | PlainMessage<CloseSessionResponse>
  | undefined, b: 
  | CloseSessionResponse
  | PlainMessage<CloseSessionResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:841](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L841)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `CloseSessionResponse` \| `PlainMessage`\<`CloseSessionResponse`\> \| `undefined` |
| `b` | \| `CloseSessionResponse` \| `PlainMessage`\<`CloseSessionResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloseSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:829](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L829)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`CloseSessionResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloseSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:833](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L833)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CloseSessionResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloseSessionResponse;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:837](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L837)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`CloseSessionResponse`
