---
title: "MicroTuningOctave"
parent: "entities"
grand_parent: "API"
nav_order: 79
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: MicroTuningOctave

```ts
type MicroTuningOctave = {
  semitones: ArrayField<PrimitiveField<number, "mut">, 12>;
};
```

Defined in: [gen/audiotool/document/v1/entity/micro\_tuning\_octave/v1/micro\_tuning\_octave\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/micro_tuning_octave/v1/micro_tuning_octave_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"microTuningOctave"`
is | [api.TargetType.MicroTuning](../../api/enumerations/TargetType.html#enumeration-member-microtuning)

 A micro tuning allows to change the tonal scale to something
 outside the classical western scale. It allows each key in the
 12 tone scale to be detuned individually.

## Properties

### semitones

```ts
semitones: ArrayField<PrimitiveField<number, "mut">, 12>;
```

Defined in: [gen/audiotool/document/v1/entity/micro\_tuning\_octave/v1/micro\_tuning\_octave\_nexus.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/micro_tuning_octave/v1/micro_tuning_octave_nexus.ts#L38)

How much each note in every octave is detuned.

 Note start at C and end at B.

 Example: semitones[0] = 1, semitones[1..11] = 0 means we have detuned
 every C to be the same as C#, and the remainder left in place, creating
 a scale where no C can be played.

 frequency[note] * 2^(semitones[note] / 12)

key | value
--- | ---
default | 0
range | full
