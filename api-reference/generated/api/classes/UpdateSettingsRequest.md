---
title: "UpdateSettingsRequest"
parent: "api"
grand_parent: "API"
nav_order: 136
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: UpdateSettingsRequest

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:505](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L505)

Request for UserService.UpdateSettings.

## Generated

from message audiotool.user.v1.UpdateSettingsRequest

## Extends

- `Message`\<`UpdateSettingsRequest`\>

## Constructors

### Constructor

```ts
new UpdateSettingsRequest(data?: PartialMessage<UpdateSettingsRequest>): UpdateSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:527](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L527)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`UpdateSettingsRequest`\> |

#### Returns

`UpdateSettingsRequest`

#### Overrides

```ts
Message<UpdateSettingsRequest>.constructor
```

## Properties

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:511](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L511)

The name of the settings resource.

#### Generated

from field: string name = 1;

***

### settings?

```ts
optional settings?: Settings;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:518](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L518)

The settings of the user.

#### Generated

from field: audiotool.user.v1.Settings settings = 2;

***

### updateMask?

```ts
optional updateMask?: FieldMask;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:525](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L525)

The update mask to apply to the settings.

#### Generated

from field: google.protobuf.FieldMask update_mask = 3;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:534](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L534)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:532](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L532)

***

### typeName

```ts
readonly static typeName: "audiotool.user.v1.UpdateSettingsRequest" = "audiotool.user.v1.UpdateSettingsRequest";
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:533](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L533)

## Methods

### equals()

```ts
static equals(a: 
  | UpdateSettingsRequest
  | PlainMessage<UpdateSettingsRequest>
  | undefined, b: 
  | UpdateSettingsRequest
  | PlainMessage<UpdateSettingsRequest>
  | undefined): boolean;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:552](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L552)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | \| `UpdateSettingsRequest` \| `PlainMessage`\<`UpdateSettingsRequest`\> \| `undefined` |
| `b` | \| `UpdateSettingsRequest` \| `PlainMessage`\<`UpdateSettingsRequest`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:540](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L540)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`UpdateSettingsRequest`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:544](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L544)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSettingsRequest`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSettingsRequest;
```

Defined in: [gen/audiotool/user/v1/user\_service\_pb.ts:548](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_pb.ts#L548)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`UpdateSettingsRequest`
