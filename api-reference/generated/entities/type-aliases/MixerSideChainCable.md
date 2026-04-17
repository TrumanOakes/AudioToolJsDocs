---
title: "MixerSideChainCable"
parent: "entities"
grand_parent: "API"
nav_order: 91
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerSideChainCable

```ts
type MixerSideChainCable = {
  from: PrimitiveField<NexusLocation, "immut">;
  to: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_side\_chain\_cable\_nexus.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_side_chain_cable_nexus.ts#L20)

key | value
--- | ---
type | entity
key | `"mixerSideChainCable"`
is |

 This cable can be used to connect a channel or group strip side_chain_output to a mixer compressor's side_chain_input.

## Properties

### from

```ts
from: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_side\_chain\_cable\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_side_chain_cable_nexus.ts#L31)

Points to the location from which the sidechain signal is taken.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MixerSideChainOutput](../../api/enumerations/TargetType.html#enumeration-member-mixersidechainoutput), meaning one of: <br />[entities.MixerChannel.sideChainOutput](MixerChannel.html#sidechainoutput), <br />[entities.MixerGroup.sideChainOutput](MixerGroup.html#sidechainoutput)
immutable | true

***

### to

```ts
to: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_side\_chain\_cable\_nexus.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_side_chain_cable_nexus.ts#L42)

Points to the location to which the sidechain signal is sent.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MixerSideChainInput](../../api/enumerations/TargetType.html#enumeration-member-mixersidechaininput), meaning one of: <br />[entities.MixerCompressor.sideChainInput](MixerCompressor.html#sidechaininput)
immutable | true
