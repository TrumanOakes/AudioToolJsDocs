---
title: "GetLatestVersionBundleRequest"
parent: "api"
grand_parent: "API"
nav_order: 45
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetLatestVersionBundleRequest

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:965](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L965)

Request for ProjectService.GetLatestVersionBundle

## Generated

from message audiotool.project.v1.GetLatestVersionBundleRequest

## Extends

- `Message`\<`GetLatestVersionBundleRequest`\>

## Constructors

### Constructor

```ts
new GetLatestVersionBundleRequest(data?: PartialMessage<GetLatestVersionBundleRequest>): GetLatestVersionBundleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:966](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L966)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetLatestVersionBundleRequest`\> |

#### Returns

`GetLatestVersionBundleRequest`

#### Overrides

```ts
Message<GetLatestVersionBundleRequest>.constructor
```

## Properties

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:973](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L973)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:971](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L971)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.GetLatestVersionBundleRequest" = "audiotool.project.v1.GetLatestVersionBundleRequest";
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:972](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L972)

## Methods

### equals()

```ts
static equals(a: 
  | GetLatestVersionBundleRequest
  | PlainMessage<GetLatestVersionBundleRequest>
  | undefined, b: 
  | GetLatestVersionBundleRequest
  | PlainMessage<GetLatestVersionBundleRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:988](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L988)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `GetLatestVersionBundleRequest` \| `PlainMessage`\<`GetLatestVersionBundleRequest`\> \| `undefined` |
| `b` | \| `GetLatestVersionBundleRequest` \| `PlainMessage`\<`GetLatestVersionBundleRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestVersionBundleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:976](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L976)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetLatestVersionBundleRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestVersionBundleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:980](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L980)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetLatestVersionBundleRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestVersionBundleRequest;
```

Defined in: [gen/audiotool/project/v1/project\_service\_pb.ts:984](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_service_pb.ts#L984)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetLatestVersionBundleRequest`
