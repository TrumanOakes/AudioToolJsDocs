---
title: "Status"
parent: "api"
grand_parent: "API"
nav_order: 113
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Status

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:497](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L497)

The `Status` type defines a logical error model that is suitable for
different programming environments, including REST APIs and RPC APIs. It is
used by [gRPC](https://github.com/grpc). Each `Status` message contains
three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the
[API Design Guide](https://cloud.google.com/apis/design/errors).

## Generated

from message audiotool.longrunning.v1.Status

## Extends

- `Message`\<`Status`\>

## Constructors

### Constructor

```ts
new Status(data?: PartialMessage<Status>): Status;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:524](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L524)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Status`\> |

#### Returns

`Status`

#### Overrides

```ts
Message<Status>.constructor
```

## Properties

### code

```ts
code: number = 0;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:504](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L504)

The status code, which should be an enum value of
[google.rpc.Code][google.rpc.Code].

#### Generated

from field: int32 code = 1;

***

### details

```ts
details: Any[] = [];
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:522](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L522)

A list of messages that carry the error details.  There is a common set of
message types for APIs to use.

#### Generated

from field: repeated google.protobuf.Any details = 3;

***

### message

```ts
message: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:514](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L514)

A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
[google.rpc.Status.details][google.rpc.Status.details] field, or localized
by the client.

#### Generated

from field: string message = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:531](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L531)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:529](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L529)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.Status" = "audiotool.longrunning.v1.Status";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:530](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L530)

## Methods

### equals()

```ts
static equals(a: Status | PlainMessage<Status> | undefined, b: Status | PlainMessage<Status> | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:549](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L549)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Status` \| `PlainMessage`\<`Status`\> \| `undefined` |
| `b` | `Status` \| `PlainMessage`\<`Status`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Status;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:537](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L537)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Status`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Status;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:541](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L541)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Status`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Status;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:545](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L545)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Status`
