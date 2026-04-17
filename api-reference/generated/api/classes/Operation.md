---
title: "Operation"
parent: "api"
grand_parent: "API"
nav_order: 87
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Operation

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:33](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L33)

This resource represents a long-running operation that is the result of a
network API call.

## Generated

from message audiotool.longrunning.v1.Operation

## Extends

- `Message`\<`Operation`\>

## Constructors

### Constructor

```ts
new Operation(data?: PartialMessage<Operation>): Operation;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L108)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`Operation`\> |

#### Returns

`Operation`

#### Overrides

```ts
Message<Operation>.constructor
```

## Properties

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L106)

The time the operation was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 7;

***

### done

```ts
done: boolean = false;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L60)

If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.

#### Generated

from field: bool done = 3;

***

### metadata?

```ts
optional metadata?: Any;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L51)

Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.

#### Generated

from field: google.protobuf.Any metadata = 2;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L41)

The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should be a resource name ending with `operations/{unique_id}`.

#### Generated

from field: string name = 1;

***

### owners

```ts
owners: string[] = [];
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L99)

List of owners for this Operation

#### Generated

from field: repeated string owners = 6;

***

### result

```ts
result: 
  | {
  case: "error";
  value: Status;
}
  | {
  case: "response";
  value: Any;
}
  | {
  case: undefined;
  value?: undefined;
};
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L69)

The operation result, which can be either an `error` or a valid `response`.
If `done` == `false`, neither `error` nor `response` is set.
If `done` == `true`, exactly one of `error` or `response` is set.

#### Union Members

##### Type Literal

```ts
{
  case: "error";
  value: Status;
}
```

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `case` | `"error"` | - | [gen/audiotool/longrunning/v1/operation\_pb.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L76) |
| `value` | [`Status`](Status.html) | The error result of the operation in case of failure or cancellation. **Generated** from field: audiotool.longrunning.v1.Status error = 4; | [gen/audiotool/longrunning/v1/operation\_pb.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L75) |

***

##### Type Literal

```ts
{
  case: "response";
  value: Any;
}
```

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `case` | `"response"` | - | [gen/audiotool/longrunning/v1/operation\_pb.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L91) |
| `value` | `Any` | The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. **Generated** from field: google.protobuf.Any response = 5; | [gen/audiotool/longrunning/v1/operation\_pb.ts:90](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L90) |

***

##### Type Literal

```ts
{
  case: undefined;
  value?: undefined;
}
```

#### Generated

from oneof audiotool.longrunning.v1.Operation.result

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L115)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L113)

***

### typeName

```ts
readonly static typeName: "audiotool.longrunning.v1.Operation" = "audiotool.longrunning.v1.Operation";
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:114](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L114)

## Methods

### equals()

```ts
static equals(a: Operation | PlainMessage<Operation> | undefined, b: Operation | PlainMessage<Operation> | undefined): boolean;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:137](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L137)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `Operation` \| `PlainMessage`\<`Operation`\> \| `undefined` |
| `b` | `Operation` \| `PlainMessage`\<`Operation`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Operation;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:125](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L125)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`Operation`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Operation;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:129](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L129)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Operation`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Operation;
```

Defined in: [gen/audiotool/longrunning/v1/operation\_pb.ts:133](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/longrunning/v1/operation_pb.ts#L133)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`Operation`
