---
title: "SetNotifier"
parent: "utils"
grand_parent: "API"
nav_order: 11
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: SetNotifier\<T\>

Defined in: [utils/observable-notifier-set.ts:5](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L5)

A value who can be observed by attaching a callback that is called
whenever the value changes. Shouldn't be used for things that don't
have meaning outside of updates, look at `Observable` for that.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`ObservableValue`](../interfaces/ObservableValue.html)\<`T`[]\>

## Constructors

### Constructor

```ts
new SetNotifier<T>(values: T[]): SetNotifier<T>;
```

Defined in: [utils/observable-notifier-set.ts:9](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `T`[] |

#### Returns

`SetNotifier`\<`T`\>

## Methods

### add()

```ts
add(value: T): void;
```

Defined in: [utils/observable-notifier-set.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

`void`

***

### clear()

```ts
clear(): void;
```

Defined in: [utils/observable-notifier-set.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L43)

#### Returns

`void`

***

### delete()

```ts
delete(value: T): void;
```

Defined in: [utils/observable-notifier-set.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

`void`

***

### getValue()

```ts
getValue(): T[];
```

Defined in: [utils/observable-notifier-set.ts:13](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L13)

#### Returns

`T`[]

#### Implementation of

[`ObservableValue`](../interfaces/ObservableValue.html).[`getValue`](../interfaces/ObservableValue.html#getvalue)

***

### has()

```ts
has(value: T): boolean;
```

Defined in: [utils/observable-notifier-set.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L39)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

`boolean`

***

### replace()

```ts
replace(values: T[]): void;
```

Defined in: [utils/observable-notifier-set.ts:17](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `T`[] |

#### Returns

`void`

***

### subscribe()

```ts
subscribe(callback: (v: T[]) => void, initialTrigger?: boolean): Terminable;
```

Defined in: [utils/observable-notifier-set.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L48)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | (`v`: `T`[]) => `void` | `undefined` |
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

Defined in: [utils/observable-notifier-set.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/observable-notifier-set.ts#L58)

#### Returns

`void`
