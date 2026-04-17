---
title: "ValueNotifier"
parent: "utils"
grand_parent: "API"
nav_order: 16
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ValueNotifier\<T\>

Defined in: [utils/observable-notifier-value.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L34)

A value to which observers can subscribe to, which will then
be notified whenever the value changes.
If relevant, the following pattern can be used to only expose the `subscribe` function:
```
class Foo {
  #notifier: ValueNotifier<number> = new ValueNotifier(0)
   get notifier(): ObservableValue<number> {
       return this.#notifier
   }
}
```

or
```
class Test {
   readonly #notifier: ValueNotifier<number> = new ValueNotifier(0)
   readonly observer = this.#notifier as ObservableValue<number>
}
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`ObservableValue`](../interfaces/ObservableValue.html)\<`T`\>

## Constructors

### Constructor

```ts
new ValueNotifier<T>(value: T): ValueNotifier<T>;
```

Defined in: [utils/observable-notifier-value.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L38)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

`ValueNotifier`\<`T`\>

## Methods

### getValue()

```ts
getValue(): T;
```

Defined in: [utils/observable-notifier-value.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L42)

#### Returns

`T`

#### Implementation of

[`ObservableValue`](../interfaces/ObservableValue.html).[`getValue`](../interfaces/ObservableValue.html#getvalue)

***

### setValue()

```ts
setValue(value: T): void;
```

Defined in: [utils/observable-notifier-value.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L47)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

`void`

***

### subscribe()

```ts
subscribe(callback: (v: T) => void, initialTrigger?: boolean): Terminable;
```

Defined in: [utils/observable-notifier-value.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L55)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | (`v`: `T`) => `void` | `undefined` |
| `initialTrigger` | `boolean` | `false` |

#### Returns

[`Terminable`](../type-aliases/Terminable.html)

#### Implementation of

[`ObservableValue`](../interfaces/ObservableValue.html).[`subscribe`](../interfaces/ObservableValue.html#subscribe)

***

### terminate()

```ts
terminate(): void;
```

Defined in: [utils/observable-notifier-value.ts:65](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L65)

#### Returns

`void`
