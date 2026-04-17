---
title: "TinyGain"
parent: "entities"
grand_parent: "API"
nav_order: 155
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: TinyGain

```ts
type TinyGain = {
  audioInput: NexusObject<Empty>;
  audioOutput: NexusObject<Empty>;
  displayName: PrimitiveField<string, "mut">;
  gain: PrimitiveField<number, "mut">;
  isActive: PrimitiveField<boolean, "mut">;
  isMuted: PrimitiveField<boolean, "mut">;
  positionX: PrimitiveField<number, "mut">;
  positionY: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"tinyGain"`
is |

 The TinyGain is a simple gain device that can be used to add a gain to the signal.

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L51)

Audio Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### audioOutput

```ts
audioOutput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L59)

Audio Output

key | value
--- | ---
is | [api.TargetType.AudioOutput](../../api/enumerations/TargetType.html#enumeration-member-audiooutput)

***

### displayName

```ts
displayName: PrimitiveField<string, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L25)

The user-assigned name of this device.

***

### gain

```ts
gain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L69)

Gain to be added to the signal. Equivalent to a dB range of [-inf, 9.0].

key | value
--- | ---
default | 1
range | [0, 2.818382978439331]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isActive

```ts
isActive: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L87)

Whether the device is active or not. When is_active=false, audio signal bypasses the device

key | value
--- | ---
default | true
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### isMuted

```ts
isMuted: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:78](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L78)

Mute signal

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### positionX

```ts
positionX: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:34](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L34)

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

Defined in: [gen/audiotool/document/v1/entity/tiny\_gain/v1/tiny\_gain\_nexus.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/tiny_gain/v1/tiny_gain_nexus.ts#L43)

Y position on the desktop in the DAW.

key | value
--- | ---
default | 0
range | full
