---
title: "CrossfaderChannel"
parent: "entities"
grand_parent: "API"
nav_order: 48
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: CrossfaderChannel

```ts
type CrossfaderChannel = {
  audioInput: NexusObject<Empty>;
  eqHighFrequencyHz: PrimitiveField<number, "mut">;
  eqHighGainDb: PrimitiveField<number, "mut">;
  eqLowFrequencyHz: PrimitiveField<number, "mut">;
  eqLowGainDb: PrimitiveField<number, "mut">;
  eqMidFrequencyHz: PrimitiveField<number, "mut">;
  eqMidGainDb: PrimitiveField<number, "mut">;
  highKillEnabled: PrimitiveField<boolean, "mut">;
  lowKillEnabled: PrimitiveField<boolean, "mut">;
  midKillEnabled: PrimitiveField<boolean, "mut">;
  preGain: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:191](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L191)

key | value
--- | ---
type | object

 data structure for a crossfader channel

## Properties

### audioInput

```ts
audioInput: NexusObject<Empty>;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:296](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L296)

Signal Input

key | value
--- | ---
is | [api.TargetType.AudioInput](../../api/enumerations/TargetType.html#enumeration-member-audioinput)

***

### eqHighFrequencyHz

```ts
eqHighFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:269](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L269)

The cutoff frequency of the high EQ band of the channel.

key | value
--- | ---
default | 4200
range | [4200, 14000]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqHighGainDb

```ts
eqHighGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:279](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L279)

The gain of the high EQ band of the channel.

key | value
--- | ---
default | 0
range | [-24, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqLowFrequencyHz

```ts
eqLowFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:211](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L211)

The cutoff frequency of the low EQ band of the channel.

key | value
--- | ---
default | 260
range | [20, 260]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqLowGainDb

```ts
eqLowGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:221](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L221)

The gain of the low EQ band of the channel.

key | value
--- | ---
default | 0
range | [-24, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqMidFrequencyHz

```ts
eqMidFrequencyHz: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:240](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L240)

The center frequency of the mid EQ band of the channel.

key | value
--- | ---
default | 1500
range | [260, 4200]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### eqMidGainDb

```ts
eqMidGainDb: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:250](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L250)

The gain of the mid EQ band of the channel.

key | value
--- | ---
default | 0
range | [-24, 12]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### highKillEnabled

```ts
highKillEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:288](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L288)

Kill switch for high gain. If high_kill_enabled=true, the high gain is set to -24 dB.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### lowKillEnabled

```ts
lowKillEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:230](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L230)

Kill switch for low gain. If low_kill_enabled=true, the low gain is set to -24 dB.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### midKillEnabled

```ts
midKillEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:259](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L259)

Kill switch for mid gain. If mid_kill_enabled=true, the mid gain is set to -24 dB.

key | value
--- | ---
default | false
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)

***

### preGain

```ts
preGain: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/crossfader/v1/crossfader\_nexus.ts:201](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/crossfader/v1/crossfader_nexus.ts#L201)

Pre-Gain of this input channel. Equivalent to a dB range of [-inf, 3.0].

key | value
--- | ---
default | 1
range | [0, 1.4125380516052246]
is | [api.TargetType.AutomatableParameter](../../api/enumerations/TargetType.html#enumeration-member-automatableparameter)
