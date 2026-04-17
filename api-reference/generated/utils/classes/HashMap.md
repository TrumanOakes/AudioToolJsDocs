---
title: "HashMap"
parent: "utils"
grand_parent: "API"
nav_order: 4
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: HashMap\<K, V\>

Defined in: [utils/hash-map.ts:14](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L14)

The map we've all been waiting for: a proper hash map.

But, it's js, so you have to implement the hashing yourself.

Make an object [Hashable](../type-aliases/Hashable.html) to use as a key.

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`Hashable`](../type-aliases/Hashable.html) |
| `V` |

## Implements

- `Map`\<`K`, `V`\>

## Constructors

### Constructor

```ts
new HashMap<K, V>(): HashMap<K, V>;
```

#### Returns

`HashMap`\<`K`, `V`\>

## Accessors

### \[toStringTag\]

#### Get Signature

```ts
get toStringTag: string;
```

Defined in: [utils/hash-map.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L72)

##### Returns

`string`

#### Implementation of

```ts
Map.[toStringTag]
```

***

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: [utils/hash-map.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L64)

##### Returns

`number`

the number of elements in the Map.

#### Implementation of

```ts
Map.size
```

## Methods

### \[iterator\]()

```ts
iterator: MapIterator<[K, V]>;
```

Defined in: [utils/hash-map.ts:68](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L68)

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Implementation of

```ts
Map.[iterator]
```

***

### clear()

```ts
clear(): void;
```

Defined in: [utils/hash-map.ts:18](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L18)

Removes all elements from the Map.

#### Returns

`void`

#### Implementation of

```ts
Map.clear
```

***

### delete()

```ts
delete(key: K): boolean;
```

Defined in: [utils/hash-map.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Implementation of

```ts
Map.delete
```

***

### entries()

```ts
entries(): MapIterator<[K, V]>;
```

Defined in: [utils/hash-map.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L36)

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Implementation of

```ts
Map.entries
```

***

### forEach()

```ts
forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: unknown): void;
```

Defined in: [utils/hash-map.ts:27](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L27)

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`\<`K`, `V`\>) => `void` |
| `thisArg?` | `unknown` |

#### Returns

`void`

#### Implementation of

```ts
Map.forEach
```

***

### get()

```ts
get(key: K): V | undefined;
```

Defined in: [utils/hash-map.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L42)

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`V` \| `undefined`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Implementation of

```ts
Map.get
```

***

### has()

```ts
has(key: K): boolean;
```

Defined in: [utils/hash-map.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L46)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Implementation of

```ts
Map.has
```

***

### keys()

```ts
keys(): MapIterator<K>;
```

Defined in: [utils/hash-map.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L50)

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Implementation of

```ts
Map.keys
```

***

### set()

```ts
set(key: K, value: V): this;
```

Defined in: [utils/hash-map.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L54)

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

#### Implementation of

```ts
Map.set
```

***

### values()

```ts
values(): MapIterator<V>;
```

Defined in: [utils/hash-map.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/hash-map.ts#L60)

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Implementation of

```ts
Map.values
```
