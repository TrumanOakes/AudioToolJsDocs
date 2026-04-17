---
title: "SampleClearance"
parent: "api"
grand_parent: "API"
nav_order: 103
---

[**@audiotool/nexus API Reference**](../../../../)

***

# Enumeration: SampleClearance

Defined in: [gen/audiotool/sample/v1/sample\_pb.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L62)

SampleClearance is the clearance of the Sample.

## Generated

from enum audiotool.sample.v1.SampleClearance

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-safe"></a> `SAFE` | `1` | The Sample is verified to be safe to use. **Generated** from enum value: SAMPLE_CLEARANCE_SAFE = 1; | [gen/audiotool/sample/v1/sample\_pb.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L75) |
| <a id="enumeration-member-unsafe"></a> `UNSAFE` | `2` | The Sample is not from a trusted source - the sample could cause copyright issues and may be removed from the platform. A track using this sample could inherit copyright issues. **Generated** from enum value: SAMPLE_CLEARANCE_UNSAFE = 2; | [gen/audiotool/sample/v1/sample\_pb.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L83) |
| <a id="enumeration-member-unspecified"></a> `UNSPECIFIED` | `0` | Unspecified Sample clearance. **Generated** from enum value: SAMPLE_CLEARANCE_UNSPECIFIED = 0; | [gen/audiotool/sample/v1/sample\_pb.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_pb.ts#L68) |
