---
title: "Tonematrix"
parent: "entities"
grand_parent: "API"
nav_order: 156
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Tonematrix

```ts
type Tonematrix = {
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  microTuning: PrimitiveField<NexusLocation, "mut">;
  noteOutput: NexusObject<Empty>;
  patternIndex: PrimitiveField<number, "mut">;
  patternSlots: ArrayField<NexusObject<Empty>, 8>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L26)

key | value
--- | ---
type | entity
key | `"tonematrix"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer), [api.TargetType.PatternTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-patterntrackplayer)

 The tonematrix is a simple pattern based synth that has a grid ("matrix")
 with 16x16 steps on which notes can be turned on or off. The notes of
 the 16 pitches are pentatonic starting from C4 (C4, D4, F4, G4, A4; C5, D5, etc)

 The sound each step produces is a simple sine with a random panning.

## Properties

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L93)

Device main audio out

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L30)

The user-assigned name of this device.

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L102)

Whether the tonematrix is active or not. When is_active=false, no audio or notes are produced by the tonematrix.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### microTuning

```ts
microTuning: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:77](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L77)

Reference to the microtuning.

key | value
--- | ---
default | empty location
required | false
targets | [api.TargetType.MicroTuning](../../api/enumerations/TargetType.html#enumeration-member-microtuning), meaning one of: <br />[entities.MicroTuningOctave](MicroTuningOctave.html)

***

### noteOutput

```ts
noteOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L85)

Output for the device's notes

key | value
--- | ---
is | [api.TargetType.NotesOutput](../../api/enumerations/TargetType.html#enumeration-member-notesoutput)

***

### patternIndex

```ts
patternIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L58)

The currently selected and displayed pattern index. Results in the device playing that pattern, unless
 a pattern track is connected to it.

key | value
--- | ---
default | 0
range | [0, 7]

***

### patternSlots

```ts
patternSlots: ArrayField<NexusObject<Empty>, 8>;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:67](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L67)

Empty fields which TonematrixPatterns can point to. At most one TonematrixPattern
 can point to a specific element in this list.

key | value
--- | ---
element is | [api.TargetType.TonematrixPatternSlot](../../api/enumerations/TargetType.html#enumeration-member-tonematrixpatternslot)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L39)

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

Defined in: [gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix\_nexus.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tonematrix/v1/tonematrix_nexus.ts#L48)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
