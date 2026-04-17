---
title: "Sample"
parent: "entities"
grand_parent: "API"
nav_order: 135
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Sample

```ts
type Sample = {
  sampleName: PrimitiveField<string, "immut">;
  uploadStartTime: PrimitiveField<bigint, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/sample/v1/sample\_nexus.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/sample/v1/sample_nexus.ts#L20)

key | value
--- | ---
type | entity
key | `"sample"`
is | [api.TargetType.Sample](../../api/enumerations/TargetType.html#enumeration-member-sample)

 The sample entity represents a single audio file. It contains a sample backend
 "name" with which the Audiotool API can be queried to get a download URL for the sample.

## Properties

### sampleName

```ts
sampleName: PrimitiveField<string, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/sample/v1/sample\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/sample/v1/sample_nexus.ts#L28)

The sample backend name, usually samples/{uuid}.

key | value
--- | ---
immutable | true

***

### uploadStartTime

```ts
uploadStartTime: PrimitiveField<bigint, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/sample/v1/sample\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/sample/v1/sample_nexus.ts#L39)

The approximate number of seconds passed since the Unix epoch for the hermes server at the time the upload
 of this sample was started. The hermes server can be queried for its current time.
 This can be used to estimate whether a sample might still become available or is missing forever
 if the API returns 404 for a sample. If the sample is already available, this can be set to 0.

key | value
--- | ---
immutable | true
