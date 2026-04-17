---
title: "SpitfireLabsVst3Plugin"
parent: "entities"
grand_parent: "API"
nav_order: 139
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SpitfireLabsVst3Plugin

```ts
type SpitfireLabsVst3Plugin = {
  adsrAttack: PrimitiveField<number, "immut">;
  adsrDecay: PrimitiveField<number, "immut">;
  adsrRelease: PrimitiveField<number, "immut">;
  adsrSustain: PrimitiveField<number, "immut">;
  amount: PrimitiveField<number, "immut">;
  audioOutput: NexusObject<Empty>;
  compression: PrimitiveField<number, "immut">;
  delay: PrimitiveField<number, "immut">;
  depth: PrimitiveField<number, "immut">;
  direction: PrimitiveField<number, "immut">;
  displayName: PrimitiveField<string, "mut">;
  distortion: PrimitiveField<number, "immut">;
  dynamics: PrimitiveField<number, "immut">;
  expression: PrimitiveField<number, "immut">;
  generalPurpose1: PrimitiveField<number, "immut">;
  generalPurpose2: PrimitiveField<number, "immut">;
  generalPurpose3: PrimitiveField<number, "immut">;
  generalPurpose4: PrimitiveField<number, "immut">;
  generalPurpose5: PrimitiveField<number, "immut">;
  generalPurpose6: PrimitiveField<number, "immut">;
  generalPurpose7: PrimitiveField<number, "immut">;
  generalPurpose8: PrimitiveField<number, "immut">;
  generalPurpose9: PrimitiveField<number, "immut">;
  globalGain: PrimitiveField<number, "immut">;
  globalPan: PrimitiveField<number, "immut">;
  globalTune: PrimitiveField<number, "immut">;
  grainSpeed: PrimitiveField<number, "immut">;
  length: PrimitiveField<number, "immut">;
  lowPassFilter: PrimitiveField<number, "immut">;
  lushVerb: PrimitiveField<number, "immut">;
  mallet: PrimitiveField<number, "immut">;
  noiseFx: PrimitiveField<number, "immut">;
  notesInput: NexusObject<Empty>;
  pedalDyn: PrimitiveField<number, "immut">;
  pedalVol: PrimitiveField<number, "immut">;
  portamento: PrimitiveField<number, "immut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
  release: PrimitiveField<number, "immut">;
  response: PrimitiveField<number, "immut">;
  reverb: PrimitiveField<number, "immut">;
  scale: PrimitiveField<number, "immut">;
  simpleMix: PrimitiveField<number, "immut">;
  softPedal: PrimitiveField<number, "immut">;
  speed: PrimitiveField<number, "immut">;
  state: PrimitiveField<boolean, "mut">;
  stereoFlip: PrimitiveField<number, "immut">;
  stereoPan: PrimitiveField<number, "immut">;
  stereoSpread: PrimitiveField<number, "immut">;
  stopMute: PrimitiveField<number, "immut">;
  stretch: PrimitiveField<number, "immut">;
  tightness: PrimitiveField<number, "immut">;
  timeMachine: PrimitiveField<number, "immut">;
  variation: PrimitiveField<number, "immut">;
  vibrato: PrimitiveField<number, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L31)

key | value
--- | ---
type | entity
key | `"spitfireLabsVst3Plugin"`
is | [api.TargetType.NoteTrackPlayer](../../api/enumerations/TargetType.html#enumeration-member-notetrackplayer)

 Data structure representing the Spitfire VST plugin. This plugin only runs
 when connected to the booster.

 All automatable parameters are added below as float values. However, they're
 set to `immutable`, because the plugin state is not actually synced through
 these parameters; they only exist to be able to connect automation tracks.

 The plugin state is instead synced through the `state` field below,
 containing an opaque binary blob. Note that the engine on its own doesn't
 read the `state` field, it has to be passed in manually (this is
 automatically managed in the DAW)

## Properties

### adsrAttack

```ts
adsrAttack: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:152](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L152)

spitfire labs parameter 1869222698

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### adsrDecay

```ts
adsrDecay: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:163](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L163)

spitfire labs parameter 1869225099

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### adsrRelease

```ts
adsrRelease: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:185](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L185)

spitfire labs parameter 1869238562

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### adsrSustain

```ts
adsrSustain: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:174](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L174)

spitfire labs parameter 1869240026

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### amount

```ts
amount: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:273](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L273)

spitfire labs parameter 1753593070

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:600](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L600)

Audio Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### compression

```ts
compression: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:548](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L548)

spitfire labs parameter 1077613272

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### delay

```ts
delay: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:262](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L262)

spitfire labs parameter 1513843245

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### depth

```ts
depth: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:570](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L570)

spitfire labs parameter 1456563165

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### direction

```ts
direction: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:405](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L405)

spitfire labs parameter 2142130985

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L35)

The user-assigned name of this device.

***

### distortion

```ts
distortion: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:284](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L284)

spitfire labs parameter 1078470069

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### dynamics

```ts
dynamics: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:75](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L75)

spitfire labs parameter 20

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### expression

```ts
expression: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L64)

spitfire labs parameter 10

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose1

```ts
generalPurpose1: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:438](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L438)

spitfire labs parameter 481116022

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose2

```ts
generalPurpose2: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:449](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L449)

spitfire labs parameter 481116053

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose3

```ts
generalPurpose3: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:460](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L460)

spitfire labs parameter 481116735

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose4

```ts
generalPurpose4: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:471](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L471)

spitfire labs parameter  481116766

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose5

```ts
generalPurpose5: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:482](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L482)

spitfire labs parameter 481116797

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose6

```ts
generalPurpose6: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:493](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L493)

spitfire labs parameter 481116828

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose7

```ts
generalPurpose7: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:504](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L504)

spitfire labs parameter 481116859

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose8

```ts
generalPurpose8: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:515](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L515)

spitfire labs parameter 481116890

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### generalPurpose9

```ts
generalPurpose9: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:526](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L526)

spitfire labs parameter 481116921

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### globalGain

```ts
globalGain: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:196](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L196)

spitfire labs parameter 892218455

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### globalPan

```ts
globalPan: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:207](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L207)

spitfire labs parameter 98063557

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### globalTune

```ts
globalTune: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:218](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L218)

spitfire labs parameter 892625104

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### grainSpeed

```ts
grainSpeed: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:592](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L592)

spitfire labs parameter 481116952

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### length

```ts
length: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:328](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L328)

spitfire labs parameter 2061082492

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowPassFilter

```ts
lowPassFilter: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:416](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L416)

spitfire labs parameter 749414706

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lushVerb

```ts
lushVerb: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:295](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L295)

spitfire labs parameter 31201011

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### mallet

```ts
mallet: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:383](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L383)

spitfire labs parameter 2085962329

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### noiseFx

```ts
noiseFx: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:581](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L581)

spitfire labs parameter 2119488876

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### notesInput

```ts
notesInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:608](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L608)

Notes Input

key | value
--- | ---
is | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput)

***

### pedalDyn

```ts
pedalDyn: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:317](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L317)

spitfire labs parameter 27784064

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### pedalVol

```ts
pedalVol: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:306](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L306)

spitfire labs parameter 27831802

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### portamento

```ts
portamento: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:427](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L427)

spitfire labs parameter 2027374695

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:44](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L44)

X position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### positionY

```ts
positionY: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:53](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L53)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full

***

### release

```ts
release: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L97)

spitfire labs parameter 40

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### response

```ts
response: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:372](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L372)

spitfire labs parameter 591113047

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### reverb

```ts
reverb: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L86)

spitfire labs parameter 30

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### scale

```ts
scale: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:559](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L559)

spitfire labs parameter 1527626228

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### simpleMix

```ts
simpleMix: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:130](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L130)

spitfire labs parameter 70

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### softPedal

```ts
softPedal: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:361](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L361)

spitfire labs parameter 1018373914

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### speed

```ts
speed: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:537](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L537)

spitfire labs parameter 1528017137

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### state

```ts
state: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:622](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L622)

The Spitifire Labs VST state, with opaque content only understandable by
 the plugin. Contains all parameters also part of this message, which is why
 those are marked as immutable.

 If the state cannot be read by the Spitfire LABS plugin, this will keep
 working with existing values. The DAW will likely overwrite it soon with
 valid values.

 If the state contains a sample pack that the user doesn't have installed,
 the user won't hear any sound (the plugin UI shows some error), otherwise
 it will continue working as expected.

***

### stereoFlip

```ts
stereoFlip: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:229](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L229)

spitfire labs parameter 1235749049

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stereoPan

```ts
stereoPan: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:141](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L141)

spitfire labs parameter 80

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stereoSpread

```ts
stereoSpread: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:240](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L240)

spitfire labs parameter 1816604410

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stopMute

```ts
stopMute: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:394](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L394)

spitfire labs parameter 444268806

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### stretch

```ts
stretch: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:350](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L350)

spitfire labs parameter 1819677999

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### tightness

```ts
tightness: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:108](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L108)

spitfire labs parameter 50

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### timeMachine

```ts
timeMachine: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:339](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L339)

spitfire labs parameter 164512228

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### variation

```ts
variation: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:251](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L251)

spitfire labs parameter 875294141

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### vibrato

```ts
vibrato: PrimitiveField<number, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/spitfire\_labs\_vst3\_plugin/v1/spitfire\_labs\_vst3\_plugin\_nexus.ts:119](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/spitfire_labs_vst3_plugin/v1/spitfire_labs_vst3_plugin_nexus.ts#L119)

spitfire labs parameter 60

key | value
--- | ---
default | 0
range | [0, 1]
immutable | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
