---
title: "AsyncLock"
parent: "utils"
grand_parent: "API"
nav_order: 1
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: AsyncLock

Defined in: [utils/async-lock.ts:18](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/async-lock.ts#L18)

A lock to lock a resource in an async environment.

Await `lock.acquire()` to wait until the lock is released before code is continued.

Note that this is not a "real" thread lock, it won't put the thread to sleep differently than
any other `await` call. This means that there's very little performance overhead incurred
simply by acquiring a lock. Tests on my machine show that acquiring a lock takes in order of
about 100 us.

## Constructors

### Constructor

```ts
new AsyncLock(props?: {
  warnAfterMs?: number;
}): AsyncLock;
```

Defined in: [utils/async-lock.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/async-lock.ts#L27)

if `warnAfterMs` is set, the lock will emit a warning if a call to `lock.acquire()
tok more than `warnAfterMs` milliseconds.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | \{ `warnAfterMs?`: `number`; \} |
| `props.warnAfterMs?` | `number` |

#### Returns

`AsyncLock`

## Accessors

### locked

#### Get Signature

```ts
get locked(): boolean;
```

Defined in: [utils/async-lock.ts:135](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/async-lock.ts#L135)

Weather the lock is currently taken. Because javascript is single-threaded, it is safe
to do e.g.:
```ts
if (!lock.locked) {
  lock.acquire()
  // do something
  lock.release()
}

```

without `await`ing the `lock.acquire()`.

##### Returns

`boolean`

## Methods

### acquire()

```ts
acquire(): Promise<Lock>;
```

Defined in: [utils/async-lock.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/async-lock.ts#L50)

Wait until no other async thread holds a lock, then returns a lock.

Once the lock is held, all other threads that call `acquire()` will have to wait until
the lock is released.

Release the lock with `lock.release()`.

Example:
```ts
const lock = new AsyncLock()
...
const l = await lock.acquire()
// do stuff
l.release()
```

#### Returns

`Promise`\<[`Lock`](../type-aliases/Lock.html)\>

***

### runAcquired()

```ts
runAcquired<T>(fn: () => T | Promise<T>): Promise<T>;
```

Defined in: [utils/async-lock.ts:109](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/async-lock.ts#L109)

Execute a function after acquiring a lock, and release the lock after the function is done.

Example:
```ts
const v = await lock.runAcquired(() => {
 // do something
 return 42
})
```

This function is **safe against exceptions**. If the function throws an exception, the lock
is released before the exception is thrown.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | () => `T` \| `Promise`\<`T`\> |

#### Returns

`Promise`\<`T`\>
