---
title: "Note"
parent: "entities"
grand_parent: "API"
nav_order: 96
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Note

```ts
type Note = {
  collection: PrimitiveField<NexusLocation, "immut">;
  doesSlide: PrimitiveField<boolean, "mut">;
  durationTicks: PrimitiveField<number, "mut">;
  pitch: PrimitiveField<number, "mut">;
  positionTicks: PrimitiveField<number, "mut">;
  velocity: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_nexus.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_nexus.ts#L20)

key | value
--- | ---
type | entity
key | `"note"`
is |

 A note on the timeline

## Properties

### collection

```ts
collection: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_nexus.ts#L31)

The collection to which this note belongs

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.NoteCollection](../../api/enumerations/TargetType.html#enumeration-member-notecollection), meaning one of: <br />[entities.NoteCollection](NoteCollection.html)
immutable | true

***

### doesSlide

```ts
doesSlide: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_nexus.ts#L78)

If does_slide is true,  there's only one note playing at a given time,
 and if two notes overlap, the pitch slides from one pitch to the other
 for the duration of the overlap.

key | value
--- | ---
default | false

***

### durationTicks

```ts
durationTicks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_nexus.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_nexus.ts#L49)

The duration of the note in ticks.

key | value
--- | ---
default | 960
range | full

***

### pitch

```ts
pitch: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_nexus.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_nexus.ts#L59)

Pitch according to MIDI standard. 60 = C4 (middle C). The actual frequency of the note depends
 on the base frequency in the config entity and potentially configs of audio producing devices.

key | value
--- | ---
default | 60
range | [0, 127]

***

### positionTicks

```ts
positionTicks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_nexus.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_nexus.ts#L40)

The position of the note in ticks.

key | value
--- | ---
default | 0
range | full

***

### velocity

```ts
velocity: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_nexus.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_nexus.ts#L68)

Velocity between 0 and 1; the meaning of this value is up to whatever is using the note.

key | value
--- | ---
default | 0.699999988079071
range | [0, 1]
