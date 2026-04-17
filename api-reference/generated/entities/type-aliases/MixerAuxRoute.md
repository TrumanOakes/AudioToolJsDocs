---
title: "MixerAuxRoute"
parent: "entities"
grand_parent: "API"
nav_order: 83
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerAuxRoute

```ts
type MixerAuxRoute = {
  auxReceive: PrimitiveField<NexusLocation, "immut">;
  auxSend: PrimitiveField<NexusLocation, "immut">;
  gain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_route\_nexus.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_route_nexus.ts#L23)

key | value
--- | ---
type | entity
key | `"mixerAuxRoute"`
is |

 Connects a group or channel strip to an aux strip. There can be at most one aux route
 connecting a given pair of entities. Even though the DAW shows connections
 of all channels to all aux strips, the document structure doesn't need them all -
 missing routes are shown as having gain of 0 in the DAW.

## Properties

### auxReceive

```ts
auxReceive: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_route\_nexus.ts:55](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_route_nexus.ts#L55)

Points to the aux strip that receives the signal from the mixer channel/group.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MixerAuxReceive](../../api/enumerations/TargetType.html#enumeration-member-mixerauxreceive), meaning one of: <br />[entities.MixerAux](MixerAux.html), <br />[entities.MixerDelayAux](MixerDelayAux.html), <br />[entities.MixerReverbAux](MixerReverbAux.html)
immutable | true

***

### auxSend

```ts
auxSend: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_route\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_route_nexus.ts#L44)

Points to the mixer channel/group that sends the signal to the aux strip.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.MixerAuxSend](../../api/enumerations/TargetType.html#enumeration-member-mixerauxsend), meaning one of: <br />[entities.MixerChannel.auxSend](MixerChannel.html#auxsend), <br />[entities.MixerGroup.auxSend](MixerGroup.html#auxsend)
immutable | true

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_aux\_route\_nexus.ts:33](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_aux_route_nexus.ts#L33)

A gain applied to this route. Equivalent to a dB range of [-inf, 0.0].

key | value
--- | ---
default | 1
range | [0, 1]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
