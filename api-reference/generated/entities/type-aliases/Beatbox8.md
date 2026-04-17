---
title: "Beatbox8"
parent: "entities"
grand_parent: "API"
nav_order: 18
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Beatbox8

```ts
type Beatbox8 = {
  accentAmount: PrimitiveField<number, "mut">;
  audioOutput: NexusObject<Empty>;
  bassdrum: NexusObject<Beatbox8Bassdrum>;
  clapMaracas: NexusObject<Beatbox8ClapMaracas>;
  closedHihat: NexusObject<Beatbox8ClosedHihat>;
  cowbell: NexusObject<Beatbox8Cowbell>;
  cymbal: NexusObject<Beatbox8Cymbal>;
  displayName: PrimitiveField<string, "mut">;
  gain: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  notesInput: NexusObject<Empty>;
  openHihat: NexusObject<Beatbox8OpenHihat>;
  patternIndex: PrimitiveField<number, "mut">;
  patternSlots: ArrayField<NexusObject<Empty>, 28>;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  rimClaves: NexusObject<Beatbox8RimClaves>;
  snaredrum: NexusObject<Beatbox8Snaredrum>;
  tomCongaHigh: NexusObject<Beatbox8TomCongaHigh>;
  tomCongaLow: NexusObject<Beatbox8TomCongaLow>;
  tomCongaMid: NexusObject<Beatbox8TomCongaMid>;
};
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"beatbox8"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer), [api.TargetType.PatternTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-patterntrackplayer)

 Data structure for the beatbox 8 drum-machine

## Properties

### accentAmount

```ts
accentAmount: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L64)

The loudness of unaccented notes. 0 is quieter, 1 is louder. No unit.

key | value
--- | ---
default | 0.5
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:144](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L144)

Single Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### bassdrum

```ts
bassdrum: NexusObject<Beatbox8Bassdrum>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L96)

Parameters for the beatbox8 Bassdrum instrument..

***

### clapMaracas

```ts
clapMaracas: NexusObject<Beatbox8ClapMaracas>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:120](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L120)

Parameters for the beatbox8 Handclap/maracas.

***

### closedHihat

```ts
closedHihat: NexusObject<Beatbox8ClosedHihat>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:136](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L136)

Parameters for the beatbox8 Closed hihat instrument.

***

### cowbell

```ts
cowbell: NexusObject<Beatbox8Cowbell>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:124](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L124)

Parameters for the beatbox8 Cowbell instrument.

***

### cymbal

```ts
cymbal: NexusObject<Beatbox8Cymbal>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:128](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L128)

Parameters for the beatbox8 Cymbal instrument.

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L26)

The user-assigned name of this device.

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L54)

This device's output gain. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 0.7079457640647888
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L73)

Whether the device is active or not. When is_active=false, no audio is produced.

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:152](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L152)

Notes Input.

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### openHihat

```ts
openHihat: NexusObject<Beatbox8OpenHihat>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:132](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L132)

Parameters for the beatbox8 Open hihat instrument.

***

### patternIndex

```ts
patternIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L92)

The index of the currently selected pattern. Results in the device playing that pattern, unless
 a pattern track is connected.

key | value
--- | ---
default | 0
range | [0, 27]

***

### patternSlots

```ts
patternSlots: ArrayField<NexusObject<Empty>, 28>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L82)

Empty fields which Beatbox8Patterns can point to. At most one pattern
 can point to a given element in this list.

key | value
--- | ---
element is | [api.TargetType.Beatbox8PatternSlot](../../api/enumerations/TargetType.html#enumeration-member-beatbox8patternslot)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L35)

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

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L44)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### rimClaves

```ts
rimClaves: NexusObject<Beatbox8RimClaves>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:116](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L116)

Parameters for the beatbox8 Rimshot/claves.

***

### snaredrum

```ts
snaredrum: NexusObject<Beatbox8Snaredrum>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:100](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L100)

Parameters for the beatbox8 Snaredrum instrument.

***

### tomCongaHigh

```ts
tomCongaHigh: NexusObject<Beatbox8TomCongaHigh>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:112](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L112)

Parameters for the beatbox8 High tom/high conga.

***

### tomCongaLow

```ts
tomCongaLow: NexusObject<Beatbox8TomCongaLow>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:104](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L104)

Parameters for the beatbox8 Low tom/low conga.

***

### tomCongaMid

```ts
tomCongaMid: NexusObject<Beatbox8TomCongaMid>;
```

Defined in: [gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8\_nexus.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/beatbox8/v1/beatbox8_nexus.ts#L108)

Parameters for the beatbox8 Mid tom/mid conga.
