---
title: "SampleUsage"
parent: "api"
grand_parent: "API"
nav_order: 110
---

[**@audiotool/nexus API Reference**](../../../../)

***

# Enumeration: SampleUsage

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L97)

SampleUsage controls the visibility of the Sample and how the uploader allows the usage.

## Generated

from enum audiotool.sample.v1.SampleUsage

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-private"></a> `PRIVATE` | `3` | The Sample is private and only visible to the owner. **Generated** from enum value: SAMPLE_USAGE_PRIVATE = 3; | [gen/audiotool/sample/v1/sample\_pb.ts:126](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L126) |
| <a id="enumeration-member-public"></a> `PUBLIC` | `1` | The Sample is used in a public. **Generated** from enum value: SAMPLE_USAGE_PUBLIC = 1; | [gen/audiotool/sample/v1/sample\_pb.ts:110](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L110) |
| <a id="enumeration-member-unlisted"></a> `UNLISTED` | `2` | The Sample is allowed to be used (e.g. for remixes) but hidden from listing/searching. You can retrieve the samples by a get requests and they will be exposed by the tracks API. **Generated** from enum value: SAMPLE_USAGE_UNLISTED = 2; | [gen/audiotool/sample/v1/sample\_pb.ts:119](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L119) |
| <a id="enumeration-member-unspecified"></a> `UNSPECIFIED` | `0` | Unspecified Sample usage. **Generated** from enum value: SAMPLE_USAGE_UNSPECIFIED = 0; | [gen/audiotool/sample/v1/sample\_pb.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L103) |
