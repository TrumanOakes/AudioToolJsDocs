---
title: "SyncedDocument"
parent: "index"
grand_parent: "API"
nav_order: 9
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SyncedDocument

```ts
type SyncedDocument = {
  connected: ValueNotifier<boolean>;
  createTransaction: () => Promise<TransactionBuilder>;
  events: NexusEventManager;
  queryEntities: EntityQuery;
  start: () => Promise<void>;
  stop: () => Promise<void>;
  modify: Promise<T>;
};
```

Defined in: [synced-document.ts:67](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L67)

An Audiotool project document that synchronizes in real-time with the backend.

This is the main interface for interacting with Audiotool projects. It provides
methods for creating transactions, querying entities, and reacting to changes.

## Example

```typescript
// authorize
const status = await getLoginStatus({...})
if (!status.loggedIn){
   ...
}

// create client
const client = await createAudiotoolClient({authorization: status});

// create a document
const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});

// Listen for entity creation - executes iff there's already a tonematrix in the project
document.events.onCreate("tonematrix", (tm) => {
  console.log("New tonematrix created");
});

// Start syncing
await document.start();

// Create entities in a transaction
const delay = await document.modify((t) => {
  return t.create("stompboxDelay", {
    delayTime: 0.5,
    feedback: 0.3
  });
});

// Stop syncing
await document.stop()
```

## See

[createAudiotoolClient](../functions/createAudiotoolClient.html) for creating client instances

## Properties

### connected

```ts
connected: ValueNotifier<boolean>;
```

Defined in: [synced-document.ts:156](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L156)

Whether the document is connected to the backend and should be modified. If this becomes
false, the user became offline or the backend server is down. Will usually recover on its own.

While this is false, no syncing is happening, and all changes made since this became false will be lost on
reload; it's recommended to block the user from making changes until this becomes true again.

***

### createTransaction

```ts
createTransaction: () => Promise<TransactionBuilder>;
```

Defined in: [synced-document.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L103)

Acquire the transaction lock and receive a transaction builder to modify the document.

While a transaction builder exists, no other can be created - subsequent calls will have to `await`.
Once the transaction is complete, call `.send()` on the builder to release the lock and let
the next transaction begin.

#### Returns

`Promise`\<[`TransactionBuilder`](../../document/type-aliases/TransactionBuilder.html)\>

***

### events

```ts
events: NexusEventManager;
```

Defined in: [synced-document.ts:148](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L148)

Subscribe to changes in the document.

***

### queryEntities

```ts
queryEntities: EntityQuery;
```

Defined in: [synced-document.ts:145](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L145)

Query the current state of the document. Careful: Acquiring the transaction lock is an async process,
and has to be awaited; during that wait time, the document can change. It's thus recommended to use
[TransactionBuilder.entities](../../document/type-aliases/TransactionBuilder.html#entities) to query the document when building transactions, otherwise transaction errors can occur.

***

### start

```ts
start: () => Promise<void>;
```

Defined in: [synced-document.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L94)

Start the synchronization process with the backend.

Before this method is called:
* the document isn't in sync yet
* the document cannot be modified yet

Which gives you time to setup all `onCreate` event listeners.

While the returned promise resolves, the local state is synced up with the remote state,
and all entities currently in the document trigger `onCreate` callbacks. After the method resolves,
the document is in sync, and can be modified.

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
// Set up all event handlers first
nexus.events.onCreate("tonematrix", tm => {
  nexus.events.onUpdate(tm.fields.isActive, (a) => console.debug("tonematrix is" a ? "active" : "inactive"));
});

// Then start syncing
await nexus.start();
```

#### Throws

When connection to backend fails or authentication is invalid

***

### stop

```ts
stop: () => Promise<void>;
```

Defined in: [synced-document.ts:172](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L172)

Stop syncing to the backend, so the document can be thrown away.

Concretely, if [modify](#modify) and [createTransaction](#createtransaction) are called after this is called, they will throw an error.

The promise will resolve once already pending [modify](#modify) and [createTransaction](#createtransaction) calls have finished,
and the modifications they create have been synced with the backend.

After this is called, only [queryEntities](#queryentities) can be used. No event will ever be triggered again.

This method **must** be called before the document can be thrown away. Not doing so will result in the syncing process continuing,
and the document never being garbage collected. It will also prevent native runtimes from exiting the process.

#### Returns

`Promise`\<`void`\>

## Methods

### modify()

```ts
modify<T>(fn: (m: SafeTransactionBuilder) => T | Promise<T>): Promise<T>;
```

Defined in: [synced-document.ts:139](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/synced-document.ts#L139)

Execute a transaction with automatic cleanup.

This is the most common way to modify the document. It handles transaction
creation, execution, and cleanup automatically.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | (`m`: [`SafeTransactionBuilder`](../../document/type-aliases/SafeTransactionBuilder.html)) => `T` \| `Promise`\<`T`\> | Function that receives a transaction builder and performs modifications |

#### Returns

`Promise`\<`T`\>

Promise resolving to the return value of the transaction function

#### Example

```typescript
// Create a tonematrix and place it on the desktop
const tonematrix = await nexus.modify((t) => {
  const tm = t.create("tonematrix", {});
  const placement = t.create("desktopPlacement", {
    entity: tm.location,
    x: 100,
    y: 200
  });
  return tm;
});

// Update multiple fields in one transaction
await nexus.modify((t) => {
  t.update(delay.fields.delayTime, 0.75);
  t.update(delay.fields.feedback, 0.6);
  t.update(delay.fields.mixFactor, 0.4);
});
```

#### Throws

When transaction validation fails or connection is lost

#### See

 - [createTransaction](#createtransaction) for manual transaction management
 - [TransactionBuilder](../../document/type-aliases/TransactionBuilder.html) for available transaction operations
