---
title: "NoteSplitter"
parent: "entities"
grand_parent: "API"
nav_order: 99
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NoteSplitter

```ts
type NoteSplitter = {
  channels: ArrayField<NexusObject<NoteSplitterChannel>, 3>;
  displayName: PrimitiveField<string, "mut">;
  notesInput: NexusObject<Empty>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:24](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L24)

key | value
--- | ---
type | entity
key | `"noteSplitter"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer)

 The NoteSplitter device.

 Sends all incoming notes to all of it's channels which have a note output.
 Each note output can have different note velocity modulation.

## Properties

### channels

```ts
channels: ArrayField<NexusObject<NoteSplitterChannel>, 3>;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L58)

Three channels into which notes are split.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L28)

The user-assigned name of this device.

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L54)

Notes Input

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L37)

X position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### positionY

```ts
positionY: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L46)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
