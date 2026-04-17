---
title: "MatrixArpeggiator"
parent: "entities"
grand_parent: "API"
nav_order: 76
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MatrixArpeggiator

```ts
type MatrixArpeggiator = {
  arpeggiationModeIndex: PrimitiveField<number, "mut">;
  displayName: PrimitiveField<string, "mut">;
  gateRatio: PrimitiveField<number, "mut">;
  holdNotes: PrimitiveField<boolean, "mut">;
  holdNotesUntilNote: PrimitiveField<number, "mut">;
  ignorePatternStepParameters: PrimitiveField<boolean, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  notesInput: NexusObject<Empty>;
  notesOutput: NexusObject<Empty>;
  octaves: PrimitiveField<number, "mut">;
  patternIndex: PrimitiveField<number, "mut">;
  patternIsSynced: PrimitiveField<boolean, "mut">;
  patternSlots: ArrayField<NexusObject<Empty>, 4>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  randomSeed: PrimitiveField<number, "mut">;
  repeat: PrimitiveField<number, "mut">;
  stepLengthIndex: PrimitiveField<number, "mut">;
  velocity: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L25)

key | value
--- | ---
type | entity
key | `"matrixArpeggiator"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer), [api.TargetType.PatternTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-patterntrackplayer)

 The MatrixArpeggiator is a pattern-based
 arpeggiator that generates notes based on:
 - the currently incoming notes (e.g. from a note track)
 - the arpeggiation parameters of the currently playing pattern

## Properties

### arpeggiationModeIndex

```ts
arpeggiationModeIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L130)

The mode of the arpeggio.
 - 0: invalid
 - 1: Up,
 - 2: Down,
 - 3: Up/Down,
 - 4: Zig Zack,
 - 5: Zig Zack +,
 - 6: Random

key | value
--- | ---
default | 1
range | [1, 6]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L29)

The user-assigned name of this device.

***

### gateRatio

```ts
gateRatio: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L113)

The duration of each note in relation to the current step duration. Can
 be up to two steps long, in which case the notes overlap.

key | value
--- | ---
default | 1
range | [0, 2]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### holdNotes

```ts
holdNotes: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L161)

If this flag is true, all incoming notes are assumed pressed until
 hold_notes_until_note is played, where all notes are released. This allows
 playing an arpeggiation pattern in real time while not keeping all notes pressed.

key | value
--- | ---
default | false

***

### holdNotesUntilNote

```ts
holdNotesUntilNote: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:171](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L171)

This defines the note (in MIDI index, i.e. C4=60) that will release all held notes,
 if hold_notes is set to true.

key | value
--- | ---
default | 0
range | [0, 127]

***

### ignorePatternStepParameters

```ts
ignorePatternStepParameters: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:183](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L183)

If this flag is set to true, then the matrix behaves as though the parameters
 set on the pattern itself are ignored, with the exception of the pattern's length.

 It essentially behaves as though the pattern is left to defaults.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:57](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L57)

Whether the arpeggio is active or not. If is_active=false, the notes are passed
 through as chord without any arpeggio processing.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:222](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L222)

Notes Input.

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### notesOutput

```ts
notesOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L230)

Output for the device's notes

key | value
--- | ---
is | [api.TargetType.NotesOutput](../../api/enumerations/TargetType.html#enumeration-member-notesoutput)

***

### octaves

```ts
octaves: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:151](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L151)

The arpeggiation pattern's octave range. The way this influences the arpeggiation
 pattern depends on arpeggiation_mode_index.

key | value
--- | ---
default | 1
range | [1, 4]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### patternIndex

```ts
patternIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:214](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L214)

The index of the currently selected pattern. Results in the device playing that pattern, unless
 a pattern track is connected to it.

key | value
--- | ---
default | 0
range | [0, 3]

***

### patternIsSynced

```ts
patternIsSynced: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:194](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L194)

Whether the pattern is started from the start if a note is pressed after a period of silence.
 If this is false, the matrix pattern behaves as though the pattern continues playing
 even if no notes are produced.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### patternSlots

```ts
patternSlots: ArrayField<NexusObject<Empty>, 4>;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:204](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L204)

Empty fields which MatrixPatterns can point to.
 This field has an implicit validation rule, which is that at most one MatrixPattern
 can point to a specific element in this list.

key | value
--- | ---
element is | [api.TargetType.MatrixArpeggiatorPatternSlot](../../api/enumerations/TargetType.html#enumeration-member-matrixarpeggiatorpatternslot)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L38)

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

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L47)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### randomSeed

```ts
randomSeed: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:140](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L140)

The seed used for the random mode, if selected.

key | value
--- | ---
default | 1000
range | [0, 9999]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### repeat

```ts
repeat: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L102)

A note from the arpeggiation pattern is repeated for this many times
 before the next note is emitted.

key | value
--- | ---
default | 1
range | [1, 8]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stepLengthIndex

```ts
stepLengthIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L91)

The interval with which notes are emitted.

 - 0: invalid
 - 1: 1 bar
 - 2: 1/2 bars
 - 3: 1/4 bars
 - 4: 3/16 bars
 - 5: 1/8 bars
 - 6: 3/32 bars
 - 7: 1/16 bars
 - 8: 3/64 bars
 - 9: 1/32 bars
 - 10: 1/64 bars
 - 11: 1/128 bars

key | value
--- | ---
default | 7
range | [1, 11]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### velocity

```ts
velocity: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/matrix\_arpeggiator/v1/matrix\_arpeggiator\_nexus.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/matrix_arpeggiator/v1/matrix_arpeggiator_nexus.ts#L68)

If this parameter is <0, then the absolute value of velocity overrides every incoming note's velocity.
 If this parameter is >0, then the incoming note's velocity is multiplied by this parameter.

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
