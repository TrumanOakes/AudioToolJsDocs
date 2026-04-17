---
title: "NoteRegion"
parent: "entities"
grand_parent: "API"
nav_order: 98
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NoteRegion

```ts
type NoteRegion = {
  collection: PrimitiveField<NexusLocation, "immut">;
  region: NexusObject<Region>;
  track: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_region\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_region_nexus.ts#L25)

key | value
--- | ---
type | entity
key | `"noteRegion"`
is |

 A region containing notes. Must be attached to a NoteTrack.

## Properties

### collection

```ts
collection: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_region\_nexus.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_region_nexus.ts#L40)

Points to the NoteCollection containing the notes of this region.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.NoteCollection](../../api/enumerations/TargetType.html#enumeration-member-notecollection), meaning one of: <br />[entities.NoteCollection](NoteCollection.html)
immutable | true

***

### region

```ts
region: NexusObject<Region>;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_region\_nexus.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_region_nexus.ts#L29)

How this region maps to the underlying container.

***

### track

```ts
track: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/note/note\_region\_nexus.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/note/note_region_nexus.ts#L51)

Points to the NoteTrack this region belongs to.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.NoteTrack](../../api/enumerations/TargetType.html#enumeration-member-notetrack), meaning one of: <br />[entities.NoteTrack](NoteTrack.html)
immutable | true
