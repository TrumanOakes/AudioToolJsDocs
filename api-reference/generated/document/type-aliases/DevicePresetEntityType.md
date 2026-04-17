---
title: "DevicePresetEntityType"
parent: "document"
grand_parent: "API"
nav_order: 5
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: DevicePresetEntityType

```ts
type DevicePresetEntityType = { [K in keyof AllDeviceEntities]: AllDeviceEntities[K] extends undefined ? never : K }[keyof AllDeviceEntities];
```

Defined in: [document/transaction-builder/prepare-preset.ts:172](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/prepare-preset.ts#L172)
