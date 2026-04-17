---
title: "FieldQuery"
parent: "document"
grand_parent: "API"
nav_order: 11
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: FieldQuery\<T\>

Defined in: [document/query/field.ts:9](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L9)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \| [`NexusField`](NexusField.html) \| [`PrimitiveField`](PrimitiveField.html)\<[`PrimitiveType`](../type-aliases/PrimitiveType.html)\> |

## Methods

### get()

```ts
get(): T[];
```

Defined in: [document/query/field.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L63)

Returns all primitive fields selected using this query

#### Returns

`T`[]

***

### getByEntity()

```ts
getByEntity(): Map<string, T[]>;
```

Defined in: [document/query/field.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L76)

Returns all primitive fields selected using this query, as
part of a ComparableMap that maps entity ids to fields for that entity.

#### Returns

`Map`\<`string`, `T`[]\>

***

### getOne()

```ts
getOne(): T | undefined;
```

Defined in: [document/query/field.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L69)

Returns the first primitive field of the result, or undefined if the query is empty.

#### Returns

`T` \| `undefined`

***

### notPointedTo()

```ts
notPointedTo(): FieldQuery<T>;
```

Defined in: [document/query/field.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L42)

Only keep fields that aren't pointed to by any other field in the nexus document.

#### Returns

`FieldQuery`\<`T`\>

***

### ofTargetTypes()

```ts
ofTargetTypes(...targetTypes: (
  | "Groove"
  | "Sample"
  | "MicroTuning"
  | "Listenable"
  | "AutomatableParameter"
  | "AudioInput"
  | "AudioOutput"
  | "NotesInput"
  | "NotesOutput"
  | "AutomationCollection"
  | "AudioTrack"
  | "AudioTrackPlayer"
  | "PatternTrack"
  | "PatternTrackPlayer"
  | "NoteCollection"
  | "NoteTrack"
  | "NoteTrackPlayer"
  | "AutomationTrack"
  | "Waveshaper"
  | "Centroid"
  | "RasselbockPatternSlot"
  | "TonematrixPatternSlot"
  | "Beatbox8PatternSlot"
  | "Beatbox9PatternSlot"
  | "BasslinePatternSlot"
  | "MachinistePatternSlot"
  | "MatrixArpeggiatorPatternSlot"
  | "MixerStripGroup"
  | "MixerStripGroupChild"
  | "MixerSideChainInput"
  | "MixerSideChainOutput"
  | "MixerAuxSend"
| "MixerAuxReceive")[]): FieldQuery<T>;
```

Defined in: [document/query/field.ts:33](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L33)

Only keep fields that are marked with target type appearing in `targetTypes`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`targetTypes` | ( \| `"Groove"` \| `"Sample"` \| `"MicroTuning"` \| `"Listenable"` \| `"AutomatableParameter"` \| `"AudioInput"` \| `"AudioOutput"` \| `"NotesInput"` \| `"NotesOutput"` \| `"AutomationCollection"` \| `"AudioTrack"` \| `"AudioTrackPlayer"` \| `"PatternTrack"` \| `"PatternTrackPlayer"` \| `"NoteCollection"` \| `"NoteTrack"` \| `"NoteTrackPlayer"` \| `"AutomationTrack"` \| `"Waveshaper"` \| `"Centroid"` \| `"RasselbockPatternSlot"` \| `"TonematrixPatternSlot"` \| `"Beatbox8PatternSlot"` \| `"Beatbox9PatternSlot"` \| `"BasslinePatternSlot"` \| `"MachinistePatternSlot"` \| `"MatrixArpeggiatorPatternSlot"` \| `"MixerStripGroup"` \| `"MixerStripGroupChild"` \| `"MixerSideChainInput"` \| `"MixerSideChainOutput"` \| `"MixerAuxSend"` \| `"MixerAuxReceive"`)[] |

#### Returns

`FieldQuery`\<`T`\>

***

### pointedToBy()

```ts
pointedToBy(location: NexusLocation): FieldQuery<T>;
```

Defined in: [document/query/field.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L49)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `location` | [`NexusLocation`](NexusLocation.html) |

#### Returns

`FieldQuery`\<`T`\>

***

### primitiveFields()

```ts
primitiveFields(): FieldQuery<PrimitiveField<PrimitiveType, "mut" | "immut">>;
```

Defined in: [document/query/field.ts:56](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/field.ts#L56)

#### Returns

`FieldQuery`\<[`PrimitiveField`](PrimitiveField.html)\<[`PrimitiveType`](../type-aliases/PrimitiveType.html), `"mut"` \| `"immut"`\>\>
