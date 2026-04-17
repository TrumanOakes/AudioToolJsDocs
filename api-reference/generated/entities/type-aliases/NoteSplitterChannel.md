---
title: "NoteSplitterChannel"
parent: "entities"
grand_parent: "API"
nav_order: 100
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NoteSplitterChannel

```ts
type NoteSplitterChannel = {
  isMuted: PrimitiveField<boolean, "mut">;
  notesOutput: NexusObject<Empty>;
  velocityModulation: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:101](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L101)

key | value
--- | ---
type | object

 data structure for the NoteSplitter's channels

## Properties

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L130)

Whether the channel sends notes to its output. If is_muted=true, no notes are forwarded.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notesOutput

```ts
notesOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L109)

Notes output for this channel.

key | value
--- | ---
is | [api.TargetType.NotesOutput](../../api/enumerations/TargetType.html#enumeration-member-notesoutput)

***

### velocityModulation

```ts
velocityModulation: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/note\_splitter/v1/note\_splitter\_nexus.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/note_splitter/v1/note_splitter_nexus.ts#L121)

Modulates the velocity of the notes:
 - range [-1, 0]: "overwrites" the velocity from 0-100% (maps to 0..127 in MIDI).
 - range [0, 1]: final velocity blends from x% to 100% based on note velocity.

key | value
--- | ---
default | 0
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
