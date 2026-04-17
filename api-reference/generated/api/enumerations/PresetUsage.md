---
title: "PresetUsage"
parent: "api"
grand_parent: "API"
nav_order: 93
---

[**@audiotool/nexus API Reference**](../../)

***

# Enumeration: PresetUsage

Defined in: [gen/audiotool/preset/v1/preset\_pb.ts:358](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L358)

PresetUsage controls the visibility of the Preset and how the uploader allows the usage.

## Generated

from enum audiotool.preset.v1.PresetUsage

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-private"></a> `PRIVATE` | `3` | The Preset is private and only visible to the owner. **Generated** from enum value: PRESET_USAGE_PRIVATE = 3; | [gen/audiotool/preset/v1/preset\_pb.ts:387](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L387) |
| <a id="enumeration-member-public"></a> `PUBLIC` | `1` | The Preset is public. **Generated** from enum value: PRESET_USAGE_PUBLIC = 1; | [gen/audiotool/preset/v1/preset\_pb.ts:371](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L371) |
| <a id="enumeration-member-unlisted"></a> `UNLISTED` | `2` | The Preset is allowed to be used (e.g. for remixes) but hidden from listing/searching. You can retrieve the presets by a GET request; they are exposed via the tracks API. **Generated** from enum value: PRESET_USAGE_UNLISTED = 2; | [gen/audiotool/preset/v1/preset\_pb.ts:380](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L380) |
| <a id="enumeration-member-unspecified"></a> `UNSPECIFIED` | `0` | Unspecified Preset usage. **Generated** from enum value: PRESET_USAGE_UNSPECIFIED = 0; | [gen/audiotool/preset/v1/preset\_pb.ts:364](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_pb.ts#L364) |
