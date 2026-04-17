---
title: "Observable"
parent: "utils"
grand_parent: "API"
nav_order: 8
---

[**@audiotool/nexus API Reference**](../../)

***

# Interface: Observable\<T\>

Defined in: [utils/observable-notifier.ts:6](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier.ts#L6)

Something that can be observed by subscribing to it. If the thing
observed represents a value that has meaning between updates, see `ObservableValue`.

## Extended by

- [`ObservableValue`](ObservableValue.html)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Methods

### subscribe()

```ts
subscribe(observer: (v: T) => void): Terminable;
```

Defined in: [utils/observable-notifier.ts:7](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `observer` | (`v`: `T`) => `void` |

#### Returns

[`Terminable`](../type-aliases/Terminable.html)
