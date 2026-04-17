---
title: "Lock"
parent: "utils"
grand_parent: "API"
nav_order: 5
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Lock

```ts
type Lock = {
  release: () => void;
};
```

Defined in: [utils/async-lock.ts:3](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/async-lock.ts#L3)

Lock returned by [AsyncLock.acquire](../classes/AsyncLock.html#acquire).

## Properties

### release

```ts
release: () => void;
```

Defined in: [utils/async-lock.ts:5](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/async-lock.ts#L5)

Release the lock. Can be called at most once per lock.

#### Returns

`void`
