---
title: "AutomationRegion"
parent: "entities"
grand_parent: "API"
nav_order: 12
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AutomationRegion

```ts
type AutomationRegion = {
  collection: PrimitiveField<NexusLocation, "immut">;
  region: NexusObject<Region>;
  track: PrimitiveField<NexusLocation, "immut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_region\_nexus.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_region_nexus.ts#L25)

key | value
--- | ---
type | entity
key | `"automationRegion"`
is |

 A region on an automation track

## Properties

### collection

```ts
collection: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_region\_nexus.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_region_nexus.ts#L40)

The automation event collection containing the automation event underlying this region.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AutomationCollection](../../api/enumerations/TargetType.html#enumeration-member-automationcollection), meaning one of: <br />[entities.AutomationCollection](AutomationCollection.html), <br />[entities.TempoAutomationTrack](TempoAutomationTrack.html)
immutable | true

***

### region

```ts
region: NexusObject<Region>;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_region\_nexus.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_region_nexus.ts#L29)

How this region maps to the underlying container.

***

### track

```ts
track: PrimitiveField<NexusLocation, "immut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_region\_nexus.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_region_nexus.ts#L51)

The track this region belongs to.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.AutomationTrack](../../api/enumerations/TargetType.html#enumeration-member-automationtrack), meaning one of: <br />[entities.AutomationTrack](AutomationTrack.html)
immutable | true
