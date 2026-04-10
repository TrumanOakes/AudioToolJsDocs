---
title: Utilities
parent: Reference
nav_order: 5
---

{: .note }
> For exact type signatures, see the auto-generated [utils module reference](../api-reference/generated/utils/).

# Utilities

**Module:** `@audiotool/nexus/utils`

Utility functions, classes, and types from `@audiotool/nexus/utils`. Includes timing helpers for timeline work, async coordination utilities, and observable value patterns.

## Import

```typescript
import { utils } from "@audiotool/nexus";

const { Ticks, secondsToTicks, ticksToSeconds, AsyncLock } = utils;
```

---

## Variables

### [`Ticks`](../api-reference/generated/utils/variables/Ticks.md)

A constant object with timeline time values. Ticks are the unit used for all timeline positions and durations in Nexus — they are independent of tempo, so the same tick values work at any BPM.

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

### [`secondsToTicks`](../api-reference/generated/utils/functions/secondsToTicks.md)`(seconds: number, bpm: number): number`

Converts a duration in seconds to ticks at the given BPM.

```typescript
const ticks = secondsToTicks(2.0, 120); // 2 seconds at 120 BPM
```

### [`ticksToSeconds`](../api-reference/generated/utils/functions/ticksToSeconds.md)`(ticks: number, bpm: number): number`

Converts a tick count to a duration in seconds at the given BPM.

```typescript
const secs = ticksToSeconds(3840, 120); // one beat at 120 BPM = 0.5s
```

### [`createTypedArray()`](../api-reference/generated/utils/functions/createTypedArray.md)

Creates typed arrays for use with binary data fields.

```typescript
import { utils } from "@audiotool/nexus";
const { createTypedArray } = utils;

// Create a typed byte array for a binary field (e.g. sample data, preset bytes)
const bytes = createTypedArray(128); // typed array of 128 bytes
```

### [`throw_`](../api-reference/generated/utils/functions/throw.md)`(message: string): never`

An error-throwing utility for use in expressions where `throw` statements are not syntactically valid (e.g., as a default value in a nullish coalescing expression).

```typescript
const value = maybeNull ?? throw_("Expected a value here");
```

---

## Classes

### [`AsyncLock`](../api-reference/generated/utils/classes/AsyncLock.md)

An async lock that ensures only one block of code runs at a time. Useful if you need to serialize async operations in your own code.

```typescript
const lock = new AsyncLock();

await lock.acquire(async () => {
  // Only one caller runs here at a time
  await doExclusiveWork();
});
```

### [`HashMap`](../api-reference/generated/utils/classes/HashMap.md)`<K extends Hashable, V>`

A hash map used internally by Nexus for efficient entity storage. Available for use in your own code if needed. Keys must be `Hashable` (i.e. implement `.hashCode()`).

```typescript
import { utils } from "@audiotool/nexus";
const { HashMap } = utils;

// Create a map to track entities by a key
const map = new HashMap<SomeHashableKey, string>();
map.set(key, "value");
const val = map.get(key); // "value"
```

---

### [`Notifier`](../api-reference/generated/utils/classes/Notifier.md)`<T>`

A general-purpose event emitter. Subscribers receive a value of type `T` when the notifier fires. Useful when you want to emit custom events in your own code.

```typescript
import { utils } from "@audiotool/nexus";
const { Notifier } = utils;

const notifier = new Notifier<string>();

// Subscribe — returns a Terminable you can use to unsubscribe
const sub = notifier.subscribe((message) => {
  console.log("Received:", message);
});

notifier.notify("hello"); // logs: "Received: hello"

// Clean up when done
sub.terminate();
```

---

### [`ValueNotifier`](../api-reference/generated/utils/classes/ValueNotifier.md)`<T>`

A notifier that holds and broadcasts a current value. Subscribers receive the new value whenever it changes. Similar to a reactive variable.

```typescript
import { utils } from "@audiotool/nexus";
const { ValueNotifier } = utils;

const volume = new ValueNotifier<number>(1.0);

// Subscribe to changes
volume.subscribe((newValue) => {
  console.log("Volume changed to:", newValue);
});

volume.value = 0.5; // logs: "Volume changed to: 0.5"
console.log(volume.value); // 0.5
```

---

### [`MapValueNotifier`](../api-reference/generated/utils/classes/MapValueNotifier.md)`<K extends Hashable, V>`

A notifier that fires when individual entries in a map are added, updated, or removed. Use it when you need to react to changes in a specific map key rather than the whole map.

```typescript
import { utils } from "@audiotool/nexus";
const { MapValueNotifier } = utils;

const entityStates = new MapValueNotifier<string, string>();

// Subscribe to changes for a specific key
entityStates.subscribe("entity-id-1", (newState) => {
  console.log("Entity state changed:", newState);
});

entityStates.set("entity-id-1", "active"); // triggers subscriber
```

---

### [`SetNotifier`](../api-reference/generated/utils/classes/SetNotifier.md)`<T extends Hashable>`

A notifier for changes to a set — fires when items are added or removed. Use it when you need to track membership in a dynamic collection.

```typescript
import { utils } from "@audiotool/nexus";
const { SetNotifier } = utils;

const activeIds = new SetNotifier<string>();

activeIds.subscribe({
  onAdd: (id) => console.log("Added:", id),
  onRemove: (id) => console.log("Removed:", id),
});

activeIds.add("entity-abc");    // logs: "Added: entity-abc"
activeIds.delete("entity-abc"); // logs: "Removed: entity-abc"
```

---

## Interfaces

### [`Observable`](../api-reference/generated/utils/interfaces/Observable.md)`<T>`

Interface for objects that can be observed for changes. Implement this interface to make your own observable values that can be subscribed to by other code.

```typescript
import type { Observable } from "@audiotool/nexus/utils";

class MyObservable implements Observable<number> {
  subscribe(handler: (value: number) => void) {
    // Store the handler and call it when the value changes
    // Return a Terminable to allow unsubscribing
    return { terminate: () => { /* remove handler */ } };
  }
}
```

---

### [`ObservableValue`](../api-reference/generated/utils/interfaces/ObservableValue.md)`<T>`

Extends `Observable<T>` with a `.value` property that exposes the current value synchronously. Use this when subscribers need to both read the current state and react to future changes.

```typescript
import type { ObservableValue } from "@audiotool/nexus/utils";

// ValueNotifier implements ObservableValue<T>
function connectToInput(observable: ObservableValue<number>) {
  // Read the current value immediately
  console.log("Current:", observable.value);

  // Subscribe to future changes
  observable.subscribe((newValue) => {
    console.log("Changed to:", newValue);
  });
}
```

---

## Type Aliases

### [`Terminable`](../api-reference/generated/utils/type-aliases/Terminable.md)

Any object with a `.terminate()` method. Event subscriptions from `nexus.events` and from Nexus utilities all return a `Terminable` — call `.terminate()` when you no longer need the subscription to avoid memory leaks.

```typescript
import type { Terminable } from "@audiotool/nexus/utils";

// Store subscriptions as Terminable and clean them up together
const subscriptions: Terminable[] = [];

subscriptions.push(
  nexus.events.onCreate("note", handleNote)
);
subscriptions.push(
  nexus.events.onRemove("note", handleNoteRemoved)
);

// Later — remove all subscriptions at once
subscriptions.forEach(s => s.terminate());
```

---

### [`Hashable`](../api-reference/generated/utils/type-aliases/Hashable.md)

Objects that can be used as hash map keys. Must implement a `.hashCode()` method that returns a consistent number. Nexus uses this internally for its `HashMap`, `SetNotifier`, and `MapValueNotifier` structures.

```typescript
import type { Hashable } from "@audiotool/nexus/utils";

class EntityKey implements Hashable {
  constructor(private id: string) {}

  hashCode(): number {
    // Simple hash — use a better algorithm for production code
    return this.id.split("").reduce((h, c) => h + c.charCodeAt(0), 0);
  }
}
```

---

### [`Lock`](../api-reference/generated/utils/type-aliases/Lock.md)

The type of a lock instance — the return type of `new AsyncLock()`. Use this as a type annotation when passing locks between functions.

```typescript
import type { Lock } from "@audiotool/nexus/utils";
import { utils } from "@audiotool/nexus";
const { AsyncLock } = utils;

async function serializedOperation(lock: Lock, work: () => Promise<void>) {
  await lock.acquire(work);
}

const lock: Lock = new AsyncLock();
await serializedOperation(lock, async () => {
  await doExclusiveWork();
});
```

---

## References

- `SchemaPath` — referenced from the [document module](document-model.md)

## See also

- [Work With Timeline Data](../working-with-audiotool-projects/work-with-timeline-data.md) — practical use of `Ticks` and time conversion
- [Tips and Patterns](../how-nexus-works/tips-and-patterns.md) — patterns using `Terminable` subscriptions
