---
title: "TargetType"
parent: "api"
grand_parent: "API"
nav_order: 123
---

[**@audiotool/nexus API Reference**](../../)

***

# Enumeration: TargetType

Defined in: [gen/audiotool/document/v1/opt/opt\_pb.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L48)

Marks a location with a behaviour. A TargetType should describe what a
location "is".

Good examples:
- a message "is" a Groove
- a field "is" an AutomatableParameter
- a message "is" a PatternTrackPlayer

Bad examples:
- a device supporting pattern track "is" a PatternTrack - it is _pointed to_ by a PatterTrack,
  so it's a PatternTrack_Player_.

Pointer fields must be given a TargetType they are allowed to point to.
A pointer can only point to exactly one TargetType.

    Pointer foo = 3 [(opt.pointer).target: PatternTrackPlayer];

TargetTypes can be accepted by the following locations:

  Fields:

    float bar = 33  [(opt.field).is = [AutomatableParameter]];

  List elements:

    repeated Baz bar = 33 [(opt.list).element_is = [AutomatableParameter]];

  Entities:

     message Foo {
         option (opt.entity).is = [PatternTrackPlayer, Groove]};
         ...
     }
buf:lint:ignore ENUM_VALUE_UPPER_SNAKE_CASE

## Generated

from enum audiotool.document.v1.opt.TargetType

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-audioinput"></a> `AudioInput` | `6` | Marks an audio input of a device. Mark a field with that to make it connectable by an audio cable. **Generated** from enum value: AudioInput = 6; | [gen/audiotool/document/v1/opt/opt\_pb.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L91) |
| <a id="enumeration-member-audiooutput"></a> `AudioOutput` | `7` | Marks an audio output of a device. Mark a field with that to make it connectable by an audio cable. **Generated** from enum value: AudioOutput = 7; | [gen/audiotool/document/v1/opt/opt\_pb.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L99) |
| <a id="enumeration-member-audiotrack"></a> `AudioTrack` | `11` | Marks an audio track, used by AudioRegions to point to AudioTracks. **Generated** from enum value: AudioTrack = 11; | [gen/audiotool/document/v1/opt/opt\_pb.ts:129](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L129) |
| <a id="enumeration-member-audiotrackplayer"></a> `AudioTrackPlayer` | `12` | Marks something that can have an audio track, used by AudioTrack to point to the AudioDevice. **Generated** from enum value: AudioTrackPlayer = 12; | [gen/audiotool/document/v1/opt/opt\_pb.ts:136](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L136) |
| <a id="enumeration-member-automatableparameter"></a> `AutomatableParameter` | `4` | Makes a field automatable by e.g. an automation track. **Generated** from enum value: AutomatableParameter = 4; | [gen/audiotool/document/v1/opt/opt\_pb.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L83) |
| <a id="enumeration-member-automationcollection"></a> `AutomationCollection` | `10` | Marks an automation collection, used by AutomationRegions to point to AutomationCollections. **Generated** from enum value: AutomationCollection = 10; | [gen/audiotool/document/v1/opt/opt\_pb.ts:122](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L122) |
| <a id="enumeration-member-automationtrack"></a> `AutomationTrack` | `19` | Marks an automation track, used by AutomationRegions to point to AutomationTracks. **Generated** from enum value: AutomationTrack = 19; | [gen/audiotool/document/v1/opt/opt\_pb.ts:178](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L178) |
| <a id="enumeration-member-basslinepatternslot"></a> `BasslinePatternSlot` | `26` | Used by the Bassline pattern to point to their Bassline **Generated** from enum value: BasslinePatternSlot = 26; | [gen/audiotool/document/v1/opt/opt\_pb.ts:227](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L227) |
| <a id="enumeration-member-beatbox8patternslot"></a> `Beatbox8PatternSlot` | `24` | Used by the Beatbox8 pattern to point to their Beatbox8 **Generated** from enum value: Beatbox8PatternSlot = 24; | [gen/audiotool/document/v1/opt/opt\_pb.ts:213](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L213) |
| <a id="enumeration-member-beatbox9patternslot"></a> `Beatbox9PatternSlot` | `25` | Used by the Beatbox9 pattern to point to their Beatbox9 **Generated** from enum value: Beatbox9PatternSlot = 25; | [gen/audiotool/document/v1/opt/opt\_pb.ts:220](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L220) |
| <a id="enumeration-member-centroid"></a> `Centroid` | `21` | Used to mark the connected Centroid by a CentroidChannel. **Generated** from enum value: Centroid = 21; | [gen/audiotool/document/v1/opt/opt\_pb.ts:192](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L192) |
| <a id="enumeration-member-groove"></a> `Groove` | `0` | Marks a groove. Use to reference a Groove entity. **Generated** from enum value: Groove = 0; | [gen/audiotool/document/v1/opt/opt\_pb.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L54) |
| <a id="enumeration-member-listenable"></a> `Listenable` | `3` | Marks something that can be listened to. Use to reference an audio connection by the User object, which is used by the "cue" tool. **Generated** from enum value: Listenable = 3; | [gen/audiotool/document/v1/opt/opt\_pb.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L76) |
| <a id="enumeration-member-machinistepatternslot"></a> `MachinistePatternSlot` | `27` | Used by the Machiniste pattern to point to their Machiniste **Generated** from enum value: MachinistePatternSlot = 27; | [gen/audiotool/document/v1/opt/opt\_pb.ts:234](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L234) |
| <a id="enumeration-member-matrixarpeggiatorpatternslot"></a> `MatrixArpeggiatorPatternSlot` | `28` | Used by the Matrix pattern to point to their Matrix arpeggiator **Generated** from enum value: MatrixArpeggiatorPatternSlot = 28; | [gen/audiotool/document/v1/opt/opt\_pb.ts:241](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L241) |
| <a id="enumeration-member-microtuning"></a> `MicroTuning` | `2` | Marks a micro tuning. Use to reference a MicroTuning entity. **Generated** from enum value: MicroTuning = 2; | [gen/audiotool/document/v1/opt/opt\_pb.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L68) |
| <a id="enumeration-member-mixerauxreceive"></a> `MixerAuxReceive` | `34` | Pointed to by "AuxRoute" to connect an aux strip to a channel/group strip. **Generated** from enum value: MixerAuxReceive = 34; | [gen/audiotool/document/v1/opt/opt\_pb.ts:283](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L283) |
| <a id="enumeration-member-mixerauxsend"></a> `MixerAuxSend` | `33` | Pointed to by "AuxRoute" to connect a channel/group strip to an aux strip. **Generated** from enum value: MixerAuxSend = 33; | [gen/audiotool/document/v1/opt/opt\_pb.ts:276](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L276) |
| <a id="enumeration-member-mixersidechaininput"></a> `MixerSideChainInput` | `31` | Pointed to by "SidechainRoute" to connect the sidechin output of a strip to the sidechain input of another strip. **Generated** from enum value: MixerSideChainInput = 31; | [gen/audiotool/document/v1/opt/opt\_pb.ts:262](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L262) |
| <a id="enumeration-member-mixersidechainoutput"></a> `MixerSideChainOutput` | `32` | Pointed to by "SidechainRoute" to connect the sidechin output of a strip to the sidechain input of another strip. **Generated** from enum value: MixerSideChainOutput = 32; | [gen/audiotool/document/v1/opt/opt\_pb.ts:269](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L269) |
| <a id="enumeration-member-mixerstripgroup"></a> `MixerStripGroup` | `29` | Marks a mixer group strip. **Generated** from enum value: MixerStripGroup = 29; | [gen/audiotool/document/v1/opt/opt\_pb.ts:248](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L248) |
| <a id="enumeration-member-mixerstripgroupchild"></a> `MixerStripGroupChild` | `30` | Marks a mixer strip that can be grouped by a mixer group strip. **Generated** from enum value: MixerStripGroupChild = 30; | [gen/audiotool/document/v1/opt/opt\_pb.ts:255](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L255) |
| <a id="enumeration-member-notecollection"></a> `NoteCollection` | `16` | Marks a NoteCollection, used by Notes & NoteRegions to point to NoteCollections. **Generated** from enum value: NoteCollection = 16; | [gen/audiotool/document/v1/opt/opt\_pb.ts:157](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L157) |
| <a id="enumeration-member-notesinput"></a> `NotesInput` | `8` | Use this to mark an note input of a device. Mark a field with that to make it connectable by a note cable. **Generated** from enum value: NotesInput = 8; | [gen/audiotool/document/v1/opt/opt\_pb.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L107) |
| <a id="enumeration-member-notesoutput"></a> `NotesOutput` | `9` | Use this to mark an note output of a device. Mark a field with that to make it connectable by a note cable. **Generated** from enum value: NotesOutput = 9; | [gen/audiotool/document/v1/opt/opt\_pb.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L115) |
| <a id="enumeration-member-notetrack"></a> `NoteTrack` | `17` | Marks a note track, used by NoteRegions to point to NoteTracks. **Generated** from enum value: NoteTrack = 17; | [gen/audiotool/document/v1/opt/opt\_pb.ts:164](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L164) |
| <a id="enumeration-member-notetrackplayer"></a> `NoteTrackPlayer` | `18` | Marks something that can have a note track, used e.g. by the bassline device. **Generated** from enum value: NoteTrackPlayer = 18; | [gen/audiotool/document/v1/opt/opt\_pb.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L171) |
| <a id="enumeration-member-patterntrack"></a> `PatternTrack` | `13` | Marks a pattern track, used by PatternRegions to point to PatternTracks. **Generated** from enum value: PatternTrack = 13; | [gen/audiotool/document/v1/opt/opt\_pb.ts:143](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L143) |
| <a id="enumeration-member-patterntrackplayer"></a> `PatternTrackPlayer` | `14` | Marks something that can have a pattern track, used e.g. by the bassline device. **Generated** from enum value: PatternTrackPlayer = 14; | [gen/audiotool/document/v1/opt/opt\_pb.ts:150](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L150) |
| <a id="enumeration-member-rasselbockpatternslot"></a> `RasselbockPatternSlot` | `22` | Used by the rasselbock pattern to point to their rasselbock **Generated** from enum value: RasselbockPatternSlot = 22; | [gen/audiotool/document/v1/opt/opt\_pb.ts:199](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L199) |
| <a id="enumeration-member-sample"></a> `Sample` | `1` | Marks a sample. Use to reference a Sample entity. **Generated** from enum value: Sample = 1; | [gen/audiotool/document/v1/opt/opt\_pb.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L61) |
| <a id="enumeration-member-tonematrixpatternslot"></a> `TonematrixPatternSlot` | `23` | Used by the Tonematrix pattern to point to their tonematrix **Generated** from enum value: TonematrixPatternSlot = 23; | [gen/audiotool/document/v1/opt/opt\_pb.ts:206](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L206) |
| <a id="enumeration-member-waveshaper"></a> `Waveshaper` | `20` | Used to mark the connected Waveshaper by a WaveshaperAnchor. **Generated** from enum value: Waveshaper = 20; | [gen/audiotool/document/v1/opt/opt\_pb.ts:185](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/opt/opt_pb.ts#L185) |
