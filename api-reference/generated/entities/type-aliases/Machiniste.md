---
title: "Machiniste"
parent: "entities"
grand_parent: "API"
nav_order: 71
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Machiniste

```ts
type Machiniste = {
  channels: ArrayField<NexusObject<MachinisteChannel>, 9>;
  displayName: PrimitiveField<string, "mut">;
  globalModulationDepth: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  mainOutput: NexusObject<Empty>;
  mainOutputGain: PrimitiveField<number, "mut">;
  notesInput: NexusObject<Empty>;
  patternIndex: PrimitiveField<number, "mut">;
  patternSlots: ArrayField<NexusObject<Empty>, 32>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"machiniste"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer), [api.TargetType.PatternTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-patterntrackplayer)

 data structure for the Machiniste sampler

## Properties

### channels

```ts
channels: ArrayField<NexusObject<MachinisteChannel>, 9>;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L96)

Each channel's sample and modulation config.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L26)

The user-assigned name of this device.

***

### globalModulationDepth

```ts
globalModulationDepth: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L73)

Global modulation depth applied to all notes.

key | value
--- | ---
default | 1
range | [-1, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:113](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L113)

Whether the device is active or not. If is_active=false, no sound is produced.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mainOutput

```ts
mainOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L63)

The sum output of all channels, influenced by the main_output_gain.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### mainOutputGain

```ts
mainOutputGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L55)

Output gain of the main output channel. This only affects the sum signal, not
 the individual channels. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.7079399824142456
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:104](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L104)

Notes Input.

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### patternIndex

```ts
patternIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L92)

The index of the currently selected pattern. Determines which pattern the Machiniste
 currently plays back, unless a pattern track is connected to it.

key | value
--- | ---
default | 0
range | [0, 31]

***

### patternSlots

```ts
patternSlots: ArrayField<NexusObject<Empty>, 32>;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L82)

Empty fields which MachinistePatterns can point to. At most one pattern
 can point to a specific element in this list.

key | value
--- | ---
element is | [api.TargetType.MachinistePatternSlot](../../api/enumerations/TargetType.html#enumeration-member-machinistepatternslot)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L35)

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

Defined in: [gen/audiotool/document/v1/entity/machiniste/v1/machiniste\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/machiniste/v1/machiniste_nexus.ts#L44)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
