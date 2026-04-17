---
title: "TempoAutomationTrack"
parent: "entities"
grand_parent: "API"
nav_order: 154
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: TempoAutomationTrack

```ts
type TempoAutomationTrack = {
  isEnabled: PrimitiveField<boolean, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/tempo\_automation\_track\_nexus.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/tempo_automation_track_nexus.ts#L22)

key | value
--- | ---
type | entity
key | `"tempoAutomationTrack"`
is | [api.TargetType.AutomationCollection](../../api/enumerations/TargetType.html#enumeration-member-automationcollection)

 The track automation the project's tempo. Can exist at most once per project.

 TempoAutomation tracks don't have regions, but are pointed to by automation
 events directly, which is why they're marked as an AutomationCollection.

## Properties

### isEnabled

```ts
isEnabled: PrimitiveField<boolean, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/timeline/v1/automation/tempo\_automation\_track\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/timeline/v1/automation/tempo_automation_track_nexus.ts#L30)

If the track is disabled, no automation is applied on project tempo.

key | value
--- | ---
default | true
