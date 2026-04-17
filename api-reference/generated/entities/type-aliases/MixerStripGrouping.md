---
title: "MixerStripGrouping"
parent: "entities"
grand_parent: "API"
nav_order: 94
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerStripGrouping

```ts
type MixerStripGrouping = {
  childStrip: PrimitiveField<NexusLocation, "immut">;
  groupStrip: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_grouping\_nexus.ts:24](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_grouping_nexus.ts#L24)

key | value
--- | ---
type | entity
key | `"mixerStripGrouping"`
is |

 Groups a channel or group strip under another group strip. The audio of grouped strips passed
 through the group strip instead of going directly to the main out. Strips that aren't grouped
 are implicitly connected to the main out.

 The graph created with nodes connected by strip groupings must be a tree.

## Properties

### childStrip

```ts
childStrip: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_grouping\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_grouping_nexus.ts#L35)

The child strip that is grouped by the group strip. Can be either a channel or group strip.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MixerStripGroupChild](../../api/enumerations/TargetType.html#enumeration-member-mixerstripgroupchild), meaning one of: <br />[entities.MixerChannel](MixerChannel.html), <br />[entities.MixerGroup](MixerGroup.html)
immutable | true

***

### groupStrip

```ts
groupStrip: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_strip\_grouping\_nexus.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_strip_grouping_nexus.ts#L46)

The group strip under which the child strip is grouped. Can only be a group strip.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MixerStripGroup](../../api/enumerations/TargetType.html#enumeration-member-mixerstripgroup), meaning one of: <br />[entities.MixerGroup](MixerGroup.html)
immutable | true
