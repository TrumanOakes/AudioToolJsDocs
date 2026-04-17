---
title: "Gakki"
parent: "entities"
grand_parent: "API"
nav_order: 57
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Gakki

```ts
type Gakki = {
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  gain: PrimitiveField<number, "mut">;
  notesInput: NexusObject<Empty>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  soundfontId: PrimitiveField<string, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"gakki"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer)

 data structure for the Gakki soundfont player device

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L73)

Audio Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L25)

The user-assigned name of this device.

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:57](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L57)

Gain factor that is applied to the output of the soundfont player. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.6000000238418579
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L65)

Notes Input

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### soundfontId

```ts
soundfontId: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/gakki/v1/gakki\_nexus.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/gakki/v1/gakki_nexus.ts#L47)

ID of the soundfont used by this Gakki device.
