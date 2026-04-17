---
title: "MixerGroup"
parent: "entities"
grand_parent: "API"
nav_order: 88
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MixerGroup

```ts
type MixerGroup = {
  auxSend: NexusObject<Empty>;
  auxSendsAreActive: PrimitiveField<boolean, "mut">;
  compressor: NexusObject<MixerCompressor>;
  displayParameters: NexusObject<MixerStripDisplayParameters>;
  eq: NexusObject<MixerEq>;
  faderParameters: NexusObject<MixerStripFaderParameters>;
  insertInput: NexusObject<Empty>;
  insertOutput: NexusObject<Empty>;
  sideChainOutput: NexusObject<Empty>;
  trimFilter: NexusObject<MixerTrimFilter>;
};
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:54](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L54)

key | value
--- | ---
type | entity
key | `"mixerGroup"`
is | [api.TargetType.MixerStripGroup](../../api/enumerations/TargetType.html#enumeration-member-mixerstripgroup), [api.TargetType.MixerStripGroupChild](../../api/enumerations/TargetType.html#enumeration-member-mixerstripgroupchild)

 A mixer strip that groups other group- or channel strips.

 It doesn't have a socket on the stagebox; it only makes sound if it contains children strips that
 produce sound (or if, against convention, something producing sound is added as inserts).

 The output of a mixer group is implicitly connected to the main out strip unless a mixer cable makes it a child
 of another group strip.

 To connect a channel or group strip to a group strip, use a MixerStripGrouping message.

 The mixer group is represented on the stagebox grouping its children, and has
 the insert_output and insert_input fields represented as sockets.

 If neither the insert output or the insert input are connected, the signal bypasses the inserts automatically.

## Properties

### auxSend

```ts
auxSend: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L103)

Sends to the aux strip.

key | value
--- | ---
is | [api.TargetType.MixerAuxSend](../../api/enumerations/TargetType.html#enumeration-member-mixerauxsend)

***

### auxSendsAreActive

```ts
auxSendsAreActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L95)

whether aux sends are active or not

key | value
--- | ---
default | true

***

### compressor

```ts
compressor: NexusObject<MixerCompressor>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:66](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L66)

Compressor for the input.

***

### displayParameters

```ts
displayParameters: NexusObject<MixerStripDisplayParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L58)

Display parameters of this strip.

***

### eq

```ts
eq: NexusObject<MixerEq>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L70)

4-band strip eq.

***

### faderParameters

```ts
faderParameters: NexusObject<MixerStripFaderParameters>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L115)

Fader parameters of this strip.

***

### insertInput

```ts
insertInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L87)

The audio signal returning to this strip after inserts. Visible on the
 stagebox.

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### insertOutput

```ts
insertOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L78)

The audio signal leaving this strip for inserts. Visible on the stagebox.

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### sideChainOutput

```ts
sideChainOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:111](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L111)

Sidechain output (pre-gain).

key | value
--- | ---
is | [api.TargetType.MixerSideChainOutput](../../api/enumerations/TargetType.html#enumeration-member-mixersidechainoutput)

***

### trimFilter

```ts
trimFilter: NexusObject<MixerTrimFilter>;
```

Defined in: [gen/audiotool/document/v1/entity/mixer/v1/mixer\_group\_nexus.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/mixer/v1/mixer_group_nexus.ts#L62)

Trim filter applied to the input signal.
