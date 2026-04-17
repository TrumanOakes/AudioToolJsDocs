---
title: "EntityQuery"
parent: "document"
grand_parent: "API"
nav_order: 7
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: EntityQuery\<T\>

Defined in: [document/query/entity.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L86)

Provides facilities to query the nexus document.

Once the query is built, execute it by calling `get()`.

There are two ways to get access to an entity query.
* by creating a transaction and accessing the field `{@link TransactionBuilder.entities}`
* by accessing the field `{@link NexusDocument.queryEntitiesWithoutLock}`

Example usage:
```
const nexus = new NexusDocument()
await nexus.modify(t => {
  // all entities of the nexus document
  const allEntities = t.entities.get()

  // all connections pointing to a tb303
  const tb303Entity = ...
  const connections = t.entities
       .ofTypes("desktopAudioCable", "desktopNoteCable")
       .pointingToEntity(tbt303Entity.id)
       .get()
})

// the returned values are typed; `connections` is of type
// NexusEntity<'desktopAudioCable' | 'desktopNoteCable'>[]
// so we can access shared fields of the entity:
const fromSocket = connections[0]?.fields.fromSocket
```

If the results of a query are used to create a transaction, the `entities` of the
`TransactionBuilder` should be used. Transactions are created asynchronously, so
the result of the query can become out of date once the transaction lock is acquired,
and transaction errors can occur.

Entity queries can technically be "recycled", meaning that
you can type:
```
const t = await nexus.createTransaction()
const query = t.entities.pointingTo.entities(bassline3)
const audioConnsToBassline3 = query.ofTypes("desktopAudioCable").get()
const noteConnsToBassline3 = query.ofTypes("desktopNoteCable").get()
t.send()
```

However, note that queries created this way will throw if they're used outside of a transaction.

To query the document without awaiting the transaction lock, you can use
```
nexus.queryEntitiesWithoutLock.ofTypes("desktopAudioCable").get()
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`EntityTypeKey`](../type-aliases/EntityTypeKey.html) | [`EntityTypeKey`](../type-aliases/EntityTypeKey.html) |

## Accessors

### pointedToBy

#### Get Signature

```ts
get pointedToBy(): ReferenceQuery<T>;
```

Defined in: [document/query/entity.ts:314](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L314)

Only keep entities that are themselves, or have fields that are, pointed to by:
* `entityOfType`: some field of entities of a set of types
* `locations`: specific locations
* `entities`: some field of specific entities

Passing an empty list to any of these methods will result in an empty query result.

Use e.g. as:
```
nexus.entities.pointedToBy.entitiesOfType("tb303").get()
```

##### Returns

[`ReferenceQuery`](../type-aliases/ReferenceQuery.html)\<`T`\>

***

### pointingTo

#### Get Signature

```ts
get pointingTo(): ReferenceQuery<T>;
```

Defined in: [document/query/entity.ts:272](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L272)

Only keep entities that have some fields that point to:
* `entityOfType`: some field of entities of a set of types
* `locations`: specific locations
* `entities`: some field of specific entities

Passing an empty list to any of these methods will result in an empty query result.

Use e.g. like:
```
nexus.entities.pointingTo.entitiesOfType("tb303").get()
```

##### Returns

[`ReferenceQuery`](../type-aliases/ReferenceQuery.html)\<`T`\>

## Methods

### fields()

```ts
fields(): FieldQuery<NexusField>;
```

Defined in: [document/query/entity.ts:209](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L209)

Return the `FieldQuery<NexusField>` that starts with all fields of all
currently selected entities.

#### Returns

[`FieldQuery`](FieldQuery.html)\<[`NexusField`](NexusField.html)\>

***

### get()

```ts
get(): NexusEntityUnion<T>[];
```

Defined in: [document/query/entity.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L121)

Returns all entities selected by this query, in undefined order.

#### Returns

[`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`T`\>[]

***

### getEntity()

```ts
getEntity(uuid: string): 
  | NexusEntityUnion<T>
  | undefined;
```

Defined in: [document/query/entity.ts:138](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L138)

Of all selected entities, return the one with id `id`, if it exists.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |

#### Returns

  \| [`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`T`\>
  \| `undefined`

***

### getEntityAs()

```ts
getEntityAs<E>(uuid: string, ...types: E[]): 
  | NexusEntityUnion<E>
  | undefined;
```

Defined in: [document/query/entity.ts:155](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L155)

Get an entity as a specific type, if it exists and has the type matching one
of the provided types.

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* keyof [`EntityTypes`](../type-aliases/EntityTypes.html) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| ...`types` | `E`[] |

#### Returns

  \| [`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`E`\>
  \| `undefined`

***

### getOne()

```ts
getOne(): 
  | NexusEntityUnion<T>
  | undefined;
```

Defined in: [document/query/entity.ts:132](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L132)

Returns the first entity returned by `get()`, if any.

 Since the order of entities in `get()` is undefined, which of the selected
entity this method returns is also undefined. This method is intended to be used
if it's known that the query will return at most one entity.

#### Returns

  \| [`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`T`\>
  \| `undefined`

***

### has()

```ts
has(uuidOrEntity: 
  | string
  | NexusEntity<keyof EntityTypes>): boolean;
```

Defined in: [document/query/entity.ts:241](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L241)

Check if a specific entity is contained in the current query.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuidOrEntity` | \| `string` \| [`NexusEntity`](NexusEntity.html)\<keyof [`EntityTypes`](../type-aliases/EntityTypes.html)\> |

#### Returns

`boolean`

***

### mustGetEntity()

```ts
mustGetEntity(uuid: string): NexusEntityUnion<T>;
```

Defined in: [document/query/entity.ts:147](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L147)

Of all selected entities, return the one with id `id`. Throw if it doesn't
exist.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |

#### Returns

[`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`T`\>

***

### mustGetEntityAs()

```ts
mustGetEntityAs<E>(uuid: string, ...types: E[]): NexusEntityUnion<E>;
```

Defined in: [document/query/entity.ts:180](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L180)

Get an entity as a specific type, if it has the type matching one of the
provided types. Throw if it doesn't exist.

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* keyof [`EntityTypes`](../type-aliases/EntityTypes.html) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| ...`types` | `E`[] |

#### Returns

[`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`E`\>

***

### notOfTypes()

```ts
notOfTypes<Q>(...types: Q): EntityQuery<Exclude<T, Q[number]>>;
```

Defined in: [document/query/entity.ts:254](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L254)

Omit entities whose type string appears in `types`.

#### Type Parameters

| Type Parameter |
| ------ |
| `Q` *extends* keyof [`EntityTypes`](../type-aliases/EntityTypes.html)[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`types` | `Q` |

#### Returns

`EntityQuery`\<`Exclude`\<`T`, `Q`\[`number`\]\>\>

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
| "MixerAuxReceive")[]): EntityQuery<T>;
```

Defined in: [document/query/entity.ts:224](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L224)

Only keep entities whose messages are marked with a target type appearing
in `targetTypes`. Target types of fields of entities are ignored.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`targetTypes` | ( \| `"Groove"` \| `"Sample"` \| `"MicroTuning"` \| `"Listenable"` \| `"AutomatableParameter"` \| `"AudioInput"` \| `"AudioOutput"` \| `"NotesInput"` \| `"NotesOutput"` \| `"AutomationCollection"` \| `"AudioTrack"` \| `"AudioTrackPlayer"` \| `"PatternTrack"` \| `"PatternTrackPlayer"` \| `"NoteCollection"` \| `"NoteTrack"` \| `"NoteTrackPlayer"` \| `"AutomationTrack"` \| `"Waveshaper"` \| `"Centroid"` \| `"RasselbockPatternSlot"` \| `"TonematrixPatternSlot"` \| `"Beatbox8PatternSlot"` \| `"Beatbox9PatternSlot"` \| `"BasslinePatternSlot"` \| `"MachinistePatternSlot"` \| `"MatrixArpeggiatorPatternSlot"` \| `"MixerStripGroup"` \| `"MixerStripGroupChild"` \| `"MixerSideChainInput"` \| `"MixerSideChainOutput"` \| `"MixerAuxSend"` \| `"MixerAuxReceive"`)[] |

#### Returns

`EntityQuery`\<`T`\>

***

### ofTypes()

```ts
ofTypes<Q>(...types: Q): EntityQuery<Q[number] & T>;
```

Defined in: [document/query/entity.ts:249](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L249)

Only keep entities whose type string appears in `types`.

#### Type Parameters

| Type Parameter |
| ------ |
| `Q` *extends* keyof [`EntityTypes`](../type-aliases/EntityTypes.html)[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`types` | `Q` |

#### Returns

`EntityQuery`\<`Q`\[`number`\] & `T`\>

***

### withIds()

```ts
withIds(...uuids: string[]): EntityQuery<T>;
```

Defined in: [document/query/entity.ts:200](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/query/entity.ts#L200)

Only keep entities whose id appears in `ids`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`uuids` | `string`[] |

#### Returns

`EntityQuery`\<`T`\>
