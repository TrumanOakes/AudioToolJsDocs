---
title: "GetSettingsRequest"
parent: "api"
grand_parent: "API"
nav_order: 55
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: GetSettingsRequest

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:423](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L423)

Request for UserService.GetSettings.

## Generated

from message audiotool.user.v1.GetSettingsRequest

## Extends

- `Message`\<`GetSettingsRequest`\>

## Constructors

### Constructor

```ts
new GetSettingsRequest(data?: PartialMessage<GetSettingsRequest>): GetSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:431](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L431)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`GetSettingsRequest`\> |

#### Returns

`GetSettingsRequest`

#### Overrides

```ts
Message<GetSettingsRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:429](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L429)

The name of the settings resource.

#### Generated

from field: string name = 1;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:438](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L438)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:436](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L436)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.GetSettingsRequest" = "audiotool.user.v1.GetSettingsRequest";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:437](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L437)

## Methods

### equals()

```ts
static equals(a: GetSettingsRequest | PlainMessage<GetSettingsRequest> | undefined, b: GetSettingsRequest | PlainMessage<GetSettingsRequest> | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:454](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L454)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `GetSettingsRequest` \| `PlainMessage`\<`GetSettingsRequest`\> \| `undefined` |
| `b` | `GetSettingsRequest` \| `PlainMessage`\<`GetSettingsRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:442](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L442)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`GetSettingsRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:446](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L446)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSettingsRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:450](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L450)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`GetSettingsRequest`
