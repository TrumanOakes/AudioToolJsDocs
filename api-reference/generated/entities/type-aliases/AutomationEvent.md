---
title: "AutomationEvent"
parent: "entities"
grand_parent: "API"
nav_order: 11
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AutomationEvent

```ts
type AutomationEvent = {
  collection: PrimitiveField<NexusLocation, "immut">;
  interpolation: PrimitiveField<number, "mut">;
  positionTicks: PrimitiveField<number, "mut">;
  slope: PrimitiveField<number, "mut">;
  value: PrimitiveField<number, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_event\_nexus.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_event_nexus.ts#L20)

key | value
--- | ---
type | entity
key | `"automationEvent"`
is |

 A point created when clicking on an automation region

## Properties

### collection

```ts
collection: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_event\_nexus.ts:31](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_event_nexus.ts#L31)

The collection to which this event belongs

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AutomationCollection](../../api/enumerations/TargetType.html#enumeration-member-automationcollection), meaning one of: <br />[entities.AutomationCollection](AutomationCollection.html), <br />[entities.TempoAutomationTrack](TempoAutomationTrack.html)
immutable | true

***

### interpolation

```ts
interpolation: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_event\_nexus.ts:76](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_event_nexus.ts#L76)

Interpolation mode
 - 0: invalid
 - 1: stepped   value stays constant until next event
 - 2: sloped    value travels to next event depending on slope parameter

key | value
--- | ---
default | 1
range | [1, 2]

***

### positionTicks

```ts
positionTicks: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_event\_nexus.ts:42](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_event_nexus.ts#L42)

The position of this event in ticks in the collection.

 position_ticks must be unique among all automation events pointing to the same automation collection.

key | value
--- | ---
default | 0
range | full

***

### slope

```ts
slope: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_event\_nexus.ts:64](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_event_nexus.ts#L64)

If interpolation is set to "sloped", then this value controls how much the value
 is sloped in on or the other direction:
 - -1 sloped "up"
 - 0 linear, a straight line to the next event
 - 1 sloped "down"

key | value
--- | ---
default | 0
range | [-1, 1]

***

### value

```ts
value: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_event\_nexus.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_event_nexus.ts#L51)

The value of the automation event.

key | value
--- | ---
default | 0
range | [0, 1]
