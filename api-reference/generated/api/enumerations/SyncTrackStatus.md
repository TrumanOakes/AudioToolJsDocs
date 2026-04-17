---
title: "SyncTrackStatus"
parent: "api"
grand_parent: "API"
nav_order: 122
---

[**@audiotool/nexus API Reference**](../../)

***

# Enumeration: SyncTrackStatus

Defined in: [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L30)

SyncTrackMetadataStatus is the current status of the SyncTrackMetadata.

## Generated

from enum audiotool.project.v1.SyncTrackStatus

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-audio_converted"></a> `AUDIO_CONVERTED` | `6` | The audio is converted. **Generated** from enum value: SYNC_TRACK_STATUS_AUDIO_CONVERTED = 6; | [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L71) |
| <a id="enumeration-member-audio_converting"></a> `AUDIO_CONVERTING` | `5` | The audio is currently being converted. **Generated** from enum value: SYNC_TRACK_STATUS_AUDIO_CONVERTING = 5; | [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L64) |
| <a id="enumeration-member-audio_rendered"></a> `AUDIO_RENDERED` | `4` | The audio is rendered. **Generated** from enum value: SYNC_TRACK_STATUS_AUDIO_RENDERED = 4; | [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:57](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L57) |
| <a id="enumeration-member-audio_rendering"></a> `AUDIO_RENDERING` | `3` | The audio is currently being rendered. **Generated** from enum value: SYNC_TRACK_STATUS_AUDIO_RENDERING = 3; | [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L50) |
| <a id="enumeration-member-finished"></a> `FINISHED` | `7` | The sync is finished. If it was successful or not, will be in the google.rpc.Status. **Generated** from enum value: SYNC_TRACK_STATUS_FINISHED = 7; | [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L78) |
| <a id="enumeration-member-started"></a> `STARTED` | `1` | The sync track process is **Generated** from enum value: SYNC_TRACK_STATUS_STARTED = 1; | [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L43) |
| <a id="enumeration-member-unspecified"></a> `UNSPECIFIED` | `0` | Unspecified. **Generated** from enum value: SYNC_TRACK_STATUS_UNSPECIFIED = 0; | [gen/audiotool/project/v1/sync\_track\_info\_pb.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/sync_track_info_pb.ts#L36) |
