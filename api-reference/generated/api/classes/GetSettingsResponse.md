---
title: "GetSettingsResponse"
parent: "api"
grand_parent: "API"
nav_order: 56
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetSettingsResponse

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:464](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L464)

Response for UserService.GetSettings.

## Generated

from message audiotool.user.v1.GetSettingsResponse

## Extends

- `Message`\<`GetSettingsResponse`\>

## Constructors

### Constructor

```ts
new GetSettingsResponse(data?: PartialMessage<GetSettingsResponse>): GetSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:472](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L472)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetSettingsResponse`\> |

#### Returns

`GetSettingsResponse`

#### Overrides

```ts
Message<GetSettingsResponse>.constructor
```

## Properties

### settings?

```ts
optional settings?: Settings;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:470](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L470)

The settings of the user.

#### Generated

from field: audiotool.user.v1.Settings settings = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:479](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L479)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:477](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L477)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.GetSettingsResponse" = "audiotool.user.v1.GetSettingsResponse";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:478](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L478)

## Methods

### equals()

```ts
static equals(a: 
  | GetSettingsResponse
  | PlainMessage<GetSettingsResponse>
  | undefined, b: 
  | GetSettingsResponse
  | PlainMessage<GetSettingsResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:495](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L495)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `GetSettingsResponse` \| `PlainMessage`\<`GetSettingsResponse`\> \| `undefined` |
| `b` | \| `GetSettingsResponse` \| `PlainMessage`\<`GetSettingsResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:483](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L483)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetSettingsResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:487](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L487)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSettingsResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:491](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L491)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSettingsResponse`
