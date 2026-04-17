---
title: "Session"
parent: "api"
grand_parent: "API"
nav_order: 111
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Session

Defined in: [gen/audiotool/project/v1/session\_pb.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L29)

Session represents a running session for a project.

## Generated

from message audiotool.project.v1.Session

## Extends

- `Message`\<`Session`\>

## Constructors

### Constructor

```ts
new Session(data?: PartialMessage<Session>): Session;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:67](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L67)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Session`\> |

#### Returns

`Session`

#### Overrides

```ts
Message<Session>.constructor
```

## Properties

### audioEnginePrefixUrl

```ts
audioEnginePrefixUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L65)

The prefix URL for the audio engine (location of assets in the CDN).

#### Generated

from field: string audio_engine_prefix_url = 5;

***

### documentServicePrefixUrl

```ts
documentServicePrefixUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L58)

The prefix URL for document_service (location of assets in the CDN).

Within this location is the document_validator.wasm

#### Generated

from field: string document_service_prefix_url = 4;

***

### documentServiceUrl

```ts
documentServiceUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L42)

The DocumentService URL for the session where the studio connects to.

#### Generated

from field: string document_service_url = 2;

***

### project?

```ts
optional project?: Project;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L35)

Project

#### Generated

from field: audiotool.project.v1.Project project = 1;

***

### studioPrefixUrl

```ts
studioPrefixUrl: string = "";
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L49)

The prefix URL for studio (location of assets in the CDN).

#### Generated

from field: string studio_prefix_url = 3;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L74)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L72)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.Session" = "audiotool.project.v1.Session";
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L73)

## Methods

### equals()

```ts
static equals(a: Session | PlainMessage<Session> | undefined, b: Session | PlainMessage<Session> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L94)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Session` \| `PlainMessage`\<`Session`\> \| `undefined` |
| `b` | `Session` \| `PlainMessage`\<`Session`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Session;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L82)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Session`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Session;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L86)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Session`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Session;
```

Defined in: [gen/audiotool/project/v1/session\_pb.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/session_pb.ts#L90)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Session`
