---
title: "NexusEventManager"
parent: "document"
grand_parent: "API"
nav_order: 15
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: NexusEventManager

Defined in: [document/event-manager.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/event-manager.ts#L64)

Can be used to subscribe to changes in the document.

Events for all existing entities are dispatched after [index.SyncedDocument.start](../../index/type-aliases/SyncedDocument.html#start) is called;
after this, they are dispatched either:
* as a result of remote changes, which happens while the transaction lock isn't taken by your code
* as a result of local changes made using a [document.TransactionBuilder](../type-aliases/TransactionBuilder.html)

## Examples

```ts
nexus.events.onCreate("tonematrix", (tm) => {
  console.debug("tonematrix created")
  return () => console.debug("tonematrix removed")
})
await nexus.modify(t => t.create("tonematrix", {}))
```

When modifying the document using the [document.TransactionBuilder](../type-aliases/TransactionBuilder.html), the event callbacks are
executed _immediately_ during the callback that creates the modification(s).

```ts
const tm = await nexus.modify((t) => t.create("tonematrix", {}))

// attach onUpdate callback
nexus.events.onUpdate(tm.fields.isActive, (isActive) =>
  console.debug("(2) updating", isActive === tm.fields.isActive.value),
)

await nexus.modify((t) => {
  console.debug("(1) will update")
  // update the field - callback above is executed before this method returns
  t.update(tm.fields.isActive, true)
 console.debug("(3) have updated")
})
```

## Methods

### onCreate()

```ts
onCreate<T>(entityType: T, callback: (entity: NexusEntityUnion<T extends "*" ? keyof EntityTypes : T>) => void | (() => void)): Terminable;
```

Defined in: [document/event-manager.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/event-manager.ts#L96)

Subscribe to the event that an entity of a specific type is created.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof EntityTypes \| `"*"` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entityType` | `T` | The entity type to subscribe to, or `*` to subscribe to the creation of all entity types. |
| `callback` | (`entity`: [`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`T` *extends* `"*"` ? keyof [`EntityTypes`](../type-aliases/EntityTypes.html) : `T`\>) => `void` \| (() => `void`) | The callback called right after the entity is created. **Example** `nexus.events.onCreate("tonematrix", (tm) => { console.debug("tonematrix", tm.id, "created") return () => console.debug("tonematrix", tm.id, "removed") })` |

#### Returns

[`Terminable`](../../utils/type-aliases/Terminable.html)

A terminable that when terminated will stop dispatching new onCreate events. Cleanup functions that were returned
during entity creation will still be called on removal of the entity.

***

### onPointingTo()

```ts
onPointingTo(
   to: NexusLocation, 
   callback: (from: NexusLocation) => void, 
   initialTrigger?: boolean): Terminable;
```

Defined in: [document/event-manager.ts:270](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/event-manager.ts#L270)

Subscribe to the event that some pointer in the document starts pointing to a given location.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `to` | [`NexusLocation`](NexusLocation.html) | `undefined` | The location that is being pointed to |
| `callback` | (`from`: [`NexusLocation`](NexusLocation.html)) => `void` | `undefined` | Called right after `from` starts pointing to `to`. |
| `initialTrigger` | `boolean` | `true` | Whether the callback should be executed immediately with all pointers pointing to `to`. |

#### Returns

[`Terminable`](../../utils/type-aliases/Terminable.html)

A terminable that when terminated will stop dispatching new onPointingTo events.

#### Example

```ts
const tm = await nexus.modify(t => t.create("tonematrix", {}))
nexus.events.onPointingTo(tm.fields.audioOutput, (from) =>
 console.debug(
   "pointing from field",
   from.toString(),
   "which is entity",
   nexus.queryEntities.getEntity(from.entityId)?.id
))
```

If the pointer is the result of an entity being created, then `onCreate` is called before this callback.

***

### onRemove()

```ts
onRemove<F>(entity: "*" | NexusEntity<F>, callback: (entity: NexusEntityUnion<F>) => void): Terminable;
```

Defined in: [document/event-manager.ts:196](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/event-manager.ts#L196)

Subscribe to an event where an entity is removed.

#### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* keyof [`EntityTypes`](../type-aliases/EntityTypes.html) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `"*"` \| [`NexusEntity`](NexusEntity.html)\<`F`\> | The entity whose removal triggers the callback, or `*` to subscribe to the removal of all entities. |
| `callback` | (`entity`: [`NexusEntityUnion`](../type-aliases/NexusEntityUnion.html)\<`F`\>) => `void` | The callback called right after the entity is removed. |

#### Returns

[`Terminable`](../../utils/type-aliases/Terminable.html)

A terminable that when terminated will stop dispatching new onRemove events.

#### Example

```ts
const tm = await nexus.modify(t => t.create("tonematrix", {}))
nexus.events.onRemove(tm, (tm) => console.debug("tonematrix", tm.id, "removed"))
```

***

### onStopPointingTo()

```ts
onStopPointingTo(to: NexusLocation, callback: (from: NexusLocation) => void): Terminable;
```

Defined in: [document/event-manager.ts:315](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/event-manager.ts#L315)

Subscribe to the event that some pointer in the document stops pointing to a given location.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `to` | [`NexusLocation`](NexusLocation.html) | The location that is being stopped pointing to. |
| `callback` | (`from`: [`NexusLocation`](NexusLocation.html)) => `void` | Called right after `from` stops pointing to `to`. |

#### Returns

[`Terminable`](../../utils/type-aliases/Terminable.html)

A terminable that when terminated will stop dispatching new onStopPointingTo events.

#### Example

```ts
const tm = await nexus.modify(t => t.create("tonematrix", {}))
nexus.events.onStopPointingTo(tm.fields.audioOutput, (from) =>
 console.debug("pointing from field", from.toString(), "which is entity", nexus.queryEntities.getEntity(from.entityId)?.id
))
```

If the pointer is the result of an entity being removed, then `onRemove` is called after this callback.

***

### onUpdate()

```ts
onUpdate<P>(
   field: PrimitiveField<P, "mut">, 
   callback: (value: P) => void, 
   initialTrigger?: boolean): Terminable;
```

Defined in: [document/event-manager.ts:151](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/event-manager.ts#L151)

Subscribe to updates of a mutable primitive field in the nexus document.

#### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* [`PrimitiveType`](../type-aliases/PrimitiveType.html) |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `field` | [`PrimitiveField`](PrimitiveField.html)\<`P`, `"mut"`\> | `undefined` | primitive field whose updates are subscribed to |
| `callback` | (`value`: `P`) => `void` | `undefined` | The callback called right after the update. |
| `initialTrigger` | `boolean` | `true` | Whether the callback should be triggered immediately with the current value of the field |

#### Returns

[`Terminable`](../../utils/type-aliases/Terminable.html)

A terminable that when terminated will stop dispatching new onUpdate events.
