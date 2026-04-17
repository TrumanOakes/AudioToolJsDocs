---
title: "GetAudiographChannels"
parent: "api"
grand_parent: "API"
nav_order: 41
---

[**@audiotool/nexus API Reference**](../../)

***

# Enumeration: GetAudiographChannels

Defined in: [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L95)

Channels of the audiograph the client is interested in (to safe on bandwidth).

## Generated

from enum audiotool.audiograph.v1.GetAudiographChannels

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-mono"></a> `MONO` | `1` | Mono channel audiograph. Stereo channels will be calculated of the two channels. **Generated** from enum value: GET_AUDIOGRAPH_CHANNELS_MONO = 1; | [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L108) |
| <a id="enumeration-member-stereo"></a> `STEREO` | `2` | Stereo channel output. **Generated** from enum value: GET_AUDIOGRAPH_CHANNELS_STEREO = 2; | [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L115) |
| <a id="enumeration-member-unspecified"></a> `UNSPECIFIED` | `0` | Unspecified channels. **Generated** from enum value: GET_AUDIOGRAPH_CHANNELS_UNSPECIFIED = 0; | [gen/audiotool/audiograph/v1/audiograph\_service\_pb.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/audiograph/v1/audiograph_service_pb.ts#L101) |
