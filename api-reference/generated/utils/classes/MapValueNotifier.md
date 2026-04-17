---
title: "MapValueNotifier"
parent: "utils"
grand_parent: "API"
nav_order: 6
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: MapValueNotifier\<K, V\>

Defined in: [utils/observable-notifier-value.ts:166](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L166)

Implements `ObservableValue<ReadonlyMap<K, V>>`, which is notified
whenever set(), delete() or clear() is called.

## Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `V` |

## Implements

- [`ObservableValue`](../interfaces/ObservableValue.html)\<`ReadonlyMap`\<`K`, `V`\>\>

## Constructors

### Constructor

```ts
new MapValueNotifier<K, V>(init?: Map<K, V>): MapValueNotifier<K, V>;
```

Defined in: [utils/observable-notifier-value.ts:172](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L172)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `init?` | `Map`\<`K`, `V`\> |

#### Returns

`MapValueNotifier`\<`K`, `V`\>

## Methods

### clear()

```ts
clear(): void;
```

Defined in: [utils/observable-notifier-value.ts:207](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L207)

#### Returns

`void`

***

### delete()

```ts
delete(key: K): boolean;
```

Defined in: [utils/observable-notifier-value.ts:199](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L199)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

***

### getValue()

```ts
getValue(): ReadonlyMap<K, V>;
```

Defined in: [utils/observable-notifier-value.ts:188](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L188)

Get the underlying map. Readonly because changing it won't trigger updates.

#### Returns

`ReadonlyMap`\<`K`, `V`\>

#### Implementation of

[`ObservableValue`](../interfaces/ObservableValue.html).[`getValue`](../interfaces/ObservableValue.html#getvalue)

***

### set()

```ts
set(key: K, value: V): this;
```

Defined in: [utils/observable-notifier-value.ts:193](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L193)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

***

### subscribe()

```ts
subscribe(callback: (v: ReadonlyMap<K, V>) => void, initialTrigger?: boolean): Terminable;
```

Defined in: [utils/observable-notifier-value.ts:177](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-value.ts#L177)

Subscribe to updates of the set

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | (`v`: `ReadonlyMap`\<`K`, `V`\>) => `void` | `undefined` |
| `initialTrigger` | `boolean` | `false` |

#### Returns

[`Terminable`](../type-aliases/Terminable.html)

#### Implementation of

[`ObservableValue`](../interfaces/ObservableValue.html).[`subscribe`](../interfaces/ObservableValue.html#subscribe)
