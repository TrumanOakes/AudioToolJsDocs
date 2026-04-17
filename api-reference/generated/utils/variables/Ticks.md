---
title: "Ticks"
parent: "utils"
grand_parent: "API"
nav_order: 14
---

[**@audiotool/nexus API Reference**](../../)

***

# Variable: Ticks

```ts
const Ticks: {
  Beat: 3840;
  SemiBreve: 15360;
  SemiQuaver: 960;
};
```

Defined in: [utils/ticks.ts:19](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/ticks.ts#L19)

A few constants to work with ticks.

A "tick" is the finest resolution something can be scheduled in on the timeline.
Ticks are independent of tempo.

Example:

In a 4/4 bar, there are 4 beats, so one bar is 4 * [Beat](#property-beat) = 15360 ticks = [SemiBreve](#property-semibreve).

For conversion from/to seconds see:
* [secondsToTicks](../functions/secondsToTicks.html)
* [ticksToSeconds](../functions/ticksToSeconds.html)

## Type Declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-beat"></a> `Beat` | `3840` | `3840` | How many ticks pass in 1 quarter note in a 4/4th bar, independent of tempo. | [utils/ticks.ts:23](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/ticks.ts#L23) |
| <a id="property-semibreve"></a> `SemiBreve` | `15360` | `TICKS_PER_SEMIBREVE` | How many ticks pass in "1 whole note" or 4x1/4th notes in a 4/4th beat, independent of tempo. | [utils/ticks.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/ticks.ts#L21) |
| <a id="property-semiquaver"></a> `SemiQuaver` | `960` | `960` | How many ticks pass in 1/16th note in a 4/4th bar, independent of tempo. | [utils/ticks.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/ticks.ts#L25) |
