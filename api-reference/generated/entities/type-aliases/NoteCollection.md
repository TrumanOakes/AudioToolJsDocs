---
title: "NoteCollection"
parent: "entities"
grand_parent: "API"
nav_order: 97
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NoteCollection

```ts
type NoteCollection = {
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_collection\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_collection_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"noteCollection"`
is | [api.TargetType.NoteCollection](../../api/enumerations/TargetType.html#enumeration-member-notecollection)

 A collection of notes. This entity is referenced by entities that need notes
 (e.g. a NoteRegion), and by notes themselves.

 The reason notes don't point to e.g. NoteTracks directly is
 to support "linked regions" - multiple note regions that contain the same notes.
