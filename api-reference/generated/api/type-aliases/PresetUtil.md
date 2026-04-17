---
title: "PresetUtil"
parent: "api"
grand_parent: "API"
nav_order: 94
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: PresetUtil

```ts
type PresetUtil = {
  get: (nameOrId: string) => Promise<NexusPreset>;
  list: <T>(deviceType: T, textSearch?: string) => Promise<NexusPreset<T>[]>;
};
```

Defined in: [api/preset-utils.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/preset-utils.ts#L29)

A wrapper for the presets API that's more convenient to use than the raw presets API.

## Example

To get a preset id, you can right click the preset in the preset browser
in the DAW and select "Copy Preset ID". Apply the preset as follows:
```ts
// assuming we copied a gakki preset id
const gakkiPreset = await client.api.presets.get("presets/e7cbee0e-1499-4356-a3e5-f788e58ef910")
await nexus.modify(t => {
  const gakki = t.create("gakki", {})
  t.applyPresetTo(gakki, gakkiPreset)
})
```

See [API](../../../../reference/platform-api-types.html) for more information.

## Properties

### get

```ts
get: (nameOrId: string) => Promise<NexusPreset>;
```

Defined in: [api/preset-utils.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/preset-utils.ts#L46)

Retrieves a specific preset by its name or id. Pass in a uuid or `presets/{uuid}`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nameOrId` | `string` | The identifier of the preset, either an uuid or `presets/{uuid}` |

#### Returns

`Promise`\<[`NexusPreset`](NexusPreset.html)\>

Promise resolving to the requested preset

***

### list

```ts
list: <T>(deviceType: T, textSearch?: string) => Promise<NexusPreset<T>[]>;
```

Defined in: [api/preset-utils.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/preset-utils.ts#L36)

Lists presets with optional filtering by device type and text search

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DevicePresetEntityType`](../../document/type-aliases/DevicePresetEntityType.html) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `deviceType` | `T` | The entity type of the device for which to list presets |
| `textSearch?` | `string` | Optional text to filter presets by name or description |

#### Returns

`Promise`\<[`NexusPreset`](NexusPreset.html)\<`T`\>[]\>

Promise resolving to an array of matching presets
