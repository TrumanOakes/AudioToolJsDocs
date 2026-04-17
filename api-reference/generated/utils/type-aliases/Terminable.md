---
title: "Terminable"
parent: "utils"
grand_parent: "API"
nav_order: 12
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: Terminable

```ts
type Terminable = {
  terminate: void;
};
```

Defined in: [utils/terminable.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/terminable.ts#L22)

The `Terminable` interface provides a mechanism for lifecycle management
of certain operations or entities.
It offers a means to terminate or invalidate an action, essentially acting as a cleanup or undo mechanism.

This interface is especially useful in scenarios where dynamic adjustments,
resource releases, or reversions of temporary settings are needed.

Typical usage:
```typescript
const action: Terminable = subscribeToAProgress()
// ... some code ...
action.terminate() // This will undo or clean up the action.
```

Implementing classes should ensure that the `terminate` method safely
handles the necessary cleanup or invalidation actions required for
the context in which it's used.

## Methods

### terminate()

```ts
terminate(): void;
```

Defined in: [utils/terminable.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/terminable.ts#L23)

#### Returns

`void`
