---
title: "ObservableValue"
parent: "utils"
grand_parent: "API"
nav_order: 9
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: ObservableValue\<T\>

Defined in: [utils/observable-notifier-value.ts:8](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L8)

A value who can be observed by attaching a callback that is called
whenever the value changes. Shouldn't be used for things that don't
have meaning outside of updates, look at `Observable` for that.

## Extends

- [`Observable`](Observable.html)\<`T`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Methods

### getValue()

```ts
getValue(): T;
```

Defined in: [utils/observable-notifier-value.ts:10](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L10)

#### Returns

`T`

***

### subscribe()

```ts
subscribe(callback: (v: T) => void, initialTrigger?: boolean): Terminable;
```

Defined in: [utils/observable-notifier-value.ts:9](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`v`: `T`) => `void` |
| `initialTrigger?` | `boolean` |

#### Returns

[`Terminable`](../type-aliases/Terminable.html)

#### Overrides

[`Observable`](Observable.html).[`subscribe`](Observable.html#subscribe)
