---
title: "UpdateSettingsResponse"
parent: "api"
grand_parent: "API"
nav_order: 137
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateSettingsResponse

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:562](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L562)

Response for UserService.UpdateSettings.

## Generated

from message audiotool.user.v1.UpdateSettingsResponse

## Extends

- `Message`\<`UpdateSettingsResponse`\>

## Constructors

### Constructor

```ts
new UpdateSettingsResponse(data?: PartialMessage<UpdateSettingsResponse>): UpdateSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:570](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L570)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateSettingsResponse`\> |

#### Returns

`UpdateSettingsResponse`

#### Overrides

```ts
Message<UpdateSettingsResponse>.constructor
```

## Properties

### settings?

```ts
optional settings?: Settings;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:568](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L568)

The settings of the user.

#### Generated

from field: audiotool.user.v1.Settings settings = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:577](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L577)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:575](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L575)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.UpdateSettingsResponse" = "audiotool.user.v1.UpdateSettingsResponse";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:576](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L576)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateSettingsResponse
  | PlainMessage<UpdateSettingsResponse>
  | undefined, b: 
  | UpdateSettingsResponse
  | PlainMessage<UpdateSettingsResponse>
  | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:593](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L593)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateSettingsResponse` \| `PlainMessage`\<`UpdateSettingsResponse`\> \| `undefined` |
| `b` | \| `UpdateSettingsResponse` \| `PlainMessage`\<`UpdateSettingsResponse`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:581](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L581)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateSettingsResponse`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:585](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L585)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSettingsResponse`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSettingsResponse;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:589](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L589)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSettingsResponse`
