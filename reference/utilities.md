---
title: Utilities
parent: Reference
nav_order: 5
---

# Utilities

**Module:** `@audiotool/nexus/utils`

Utility functions, classes, and types used across the package. Includes timing helpers, async primitives, and observable/notification patterns.

## Import

```typescript
import { utils } from "@audiotool/nexus";

const { Ticks, secondsToTicks, ticksToSeconds, AsyncLock } = utils;
```

---

## Variables

### `Ticks`

A constant object providing timeline time measurement values. A "tick" is the finest resolution at which events can be scheduled on the timeline. Tick values are independent of tempo.

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks } = utils;
```

| Property | Value | Description |
|----------|-------|-------------|
| `Ticks.Beat` | `3840` | One quarter note in 4/4 time |
| `Ticks.SemiBreve` | `15360` | One whole note (4 beats × 3840 = 1 bar in 4/4) |
| `Ticks.SemiQuaver` | `960` | One sixteenth note |

> In 4/4 time: 4 × `Ticks.Beat` = `Ticks.SemiBreve` = one complete bar.

---

## Functions

### `secondsToTicks(seconds: number, bpm: number): number`

Converts a duration in seconds to ticks at the given BPM.

```typescript
const ticks = secondsToTicks(2.0, 120); // 2 seconds at 120 BPM
```

### `ticksToSeconds(ticks: number, bpm: number): number`

Converts a tick count to a duration in seconds at the given BPM.

```typescript
const secs = ticksToSeconds(3840, 120); // one beat at 120 BPM = 0.5s
```

### `createTypedArray()`

Creates typed arrays for use with binary data fields.

### `throw_(message: string): never`

An error-throwing utility for use in expressions where `throw` statements are not syntactically valid (e.g., as a default value in a nullish coalescing expression).

```typescript
const value = maybeNull ?? throw_("Expected a value here");
```

---

## Classes

### `AsyncLock`

An asynchronous mutual-exclusion lock. Ensures that only one piece of code runs in the critical section at a time.

```typescript
const lock = new AsyncLock();

await lock.acquire(async () => {
  // Only one caller runs here at a time
  await doExclusiveWork();
});
```

### `HashMap<K extends Hashable, V>`

A hash map keyed by `Hashable` objects (objects that implement a hash function). Used internally for efficient entity storage.

### `Notifier<T>`

A general-purpose event emitter. Subscribers receive a value of type `T` when the notifier fires.

### `ValueNotifier<T>`

A notifier that holds and broadcasts a current value. Subscribers receive the new value whenever it changes.

### `MapValueNotifier<K extends Hashable, V>`

A notifier for changes to individual entries in a map.

### `SetNotifier<T extends Hashable>`

A notifier for changes to a set of values (additions and removals).

---

## Interfaces

### `Observable<T>`

Interface for objects that can be observed for changes. Implement this to make your own observable values.

### `ObservableValue<T>`

Extends `Observable<T>` with a `.value` property exposing the current value.

---

## Type Aliases

| Type | Description |
|------|-------------|
| `Hashable` | Objects that can be used as hash map keys (must implement `.hashCode()`) |
| `Lock` | Type of a lock instance |
| `Terminable` | Objects that can be disposed — have a `.terminate()` method |

---

## References

- `SchemaPath` — referenced from the [document module](document-model.md)

## See also

- [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md) — practical use of `Ticks` and time conversion
- [Tips and Patterns](../how-nexus-works/tips-and-patterns.md) — patterns using `Terminable` subscriptions
