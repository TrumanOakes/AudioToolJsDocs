# Module: utils

**@audiotool/nexus v0.0.12**

Utility functions, classes, and types used across the package.

## Variables

### `Ticks`

A constant providing time measurement values. A "tick" is the finest resolution at which something can be scheduled on the timeline. Ticks are independent of tempo.

```typescript
import { utils } from "@audiotool/nexus";

const { Ticks } = utils;
```

| Property | Value | Description |
|----------|-------|-------------|
| `Ticks.Beat` | `3840` | One quarter note in 4/4 time |
| `Ticks.SemiBreve` | `15360` | One whole note (4 beats × 3840) |
| `Ticks.SemiQuaver` | `960` | One sixteenth note |

> In a 4/4 bar: 4 beats × 3840 = 15360 ticks = one complete bar = `SemiBreve`.

## Functions

### `secondsToTicks(seconds: number, bpm: number): number`

Converts a duration in seconds to ticks at the given BPM.

### `ticksToSeconds(ticks: number, bpm: number): number`

Converts a tick count to seconds at the given BPM.

### `createTypedArray()`

Creates typed arrays for use with binary data.

### `throw_(message: string): never`

An error-throwing utility function for use in expressions (e.g., as a default value).

```typescript
const value = maybeNull ?? throw_("Expected a value");
```

## Classes

### `AsyncLock`

An asynchronous mutual-exclusion lock. Use to serialize access to shared resources.

```typescript
const lock = new AsyncLock();
await lock.acquire(async () => {
  // exclusive section
});
```

### `HashMap<K extends Hashable, V>`

A hash map keyed by `Hashable` objects.

### `Notifier<T>`

A general-purpose notification/event emitter.

### `ValueNotifier<T>`

A notifier that holds and broadcasts a current value.

### `MapValueNotifier<K extends Hashable, V>`

A notifier for changes to individual map entries.

### `SetNotifier<T extends Hashable>`

A notifier for changes to a set of values.

## Interfaces

### `Observable<T>`

Interface for objects that can be observed for changes.

### `ObservableValue<T>`

Interface for observable values that expose a current value.

## Type Aliases

| Type | Description |
|------|-------------|
| `Hashable` | Objects that can be used as hash map keys |
| `Lock` | A lock instance type |
| `Terminable` | Objects that can be disposed/terminated |

## References

- `SchemaPath` — referenced from the [document module](document.md)
