---
title: "NexusPreset"
parent: "api"
grand_parent: "API"
nav_order: 84
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: NexusPreset\<T\>

```ts
type NexusPreset<T> = {
  data: docpreset.Preset;
  entityType: T;
  meta: Preset;
};
```

Defined in: [api/preset-utils.ts:138](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/preset-utils.ts#L138)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`DevicePresetEntityType`](../../document/type-aliases/DevicePresetEntityType.html) | [`DevicePresetEntityType`](../../document/type-aliases/DevicePresetEntityType.html) |

## Properties

### data

```ts
data: docpreset.Preset;
```

Defined in: [api/preset-utils.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/preset-utils.ts#L142)

***

### entityType

```ts
entityType: T;
```

Defined in: [api/preset-utils.ts:143](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/preset-utils.ts#L143)

***

### meta

```ts
meta: Preset;
```

Defined in: [api/preset-utils.ts:141](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/preset-utils.ts#L141)
