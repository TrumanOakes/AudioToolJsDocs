---
title: "Notifier"
parent: "utils"
grand_parent: "API"
nav_order: 7
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: Notifier\<T\>

Defined in: [utils/observable-notifier.ts:32](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier.ts#L32)

A Notifier is something that can notify subscribed parties of a change.
 If the notifier represents a value that has meaning outside of updates, look
 at `ValueNotifier`.

If relevant, the following pattern can be used to only expose the `subscribe` function:
```
class Foo {
  #notifier: Notifier<number> = new Notifier()
   get notifier(): Observable<number> {
       return this.#notifier
   }
}
```

or
```
class Test {
   readonly #notifier: Notifier<number> = new Notifier()
   readonly observer = this.#notifier as Observable<number>
}
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`Observable`](../interfaces/Observable.html)\<`T`\>
- [`Terminable`](../type-aliases/Terminable.html)

## Constructors

### Constructor

```ts
new Notifier<T>(): Notifier<T>;
```

#### Returns

`Notifier`\<`T`\>

## Methods

### notify()

```ts
notify(value: T): void;
```

Defined in: [utils/observable-notifier.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier.ts#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

`void`

***

### subscribe()

```ts
subscribe(observer: (v: T) => void): Terminable;
```

Defined in: [utils/observable-notifier.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier.ts#L35)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `observer` | (`v`: `T`) => `void` |

#### Returns

[`Terminable`](../type-aliases/Terminable.html)

#### Implementation of

[`Observable`](../interfaces/Observable.html).[`subscribe`](../interfaces/Observable.html#subscribe)

***

### terminate()

```ts
terminate(): void;
```

Defined in: [utils/observable-notifier.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier.ts#L44)

#### Returns

`void`

#### Implementation of

```ts
Terminable.terminate
```
