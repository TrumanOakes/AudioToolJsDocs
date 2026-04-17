---
title: "AutomationCollection"
parent: "entities"
grand_parent: "API"
nav_order: 10
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AutomationCollection

```ts
type AutomationCollection = {
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/automation\_collection\_nexus.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/automation_collection_nexus.ts#L21)

key | value
--- | ---
type | entity
key | `"automationCollection"`
is | [api.TargetType.AutomationCollection](../../api/enumerations/TargetType.html#enumeration-member-automationcollection)

 A collection of automation events. This entity is referenced by entities that need automation events
 (e.g. an AutomationRegion), and by automation events themselves.

 The reason automation events don't point to e.g. AutomationTracks directly is
 to support "linked regions" - multiple automation regions that contain the same automation events.
