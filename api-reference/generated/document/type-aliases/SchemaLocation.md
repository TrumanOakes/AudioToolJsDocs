---
title: "SchemaLocation"
parent: "document"
grand_parent: "API"
nav_order: 28
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SchemaLocation

```ts
type SchemaLocation = Pick<NexusLocation, "entityType" | "fieldIndex">;
```

Defined in: [document/schema/schema-location.ts:12](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-location.ts#L12)

Schema locations point to a specific field's schema in the document.

This is useful when relevant schema info is needed but the array index is also relevant. Labels of fields,
for example, require the array index to be specified. [NexusLocation](../interfaces/NexusLocation.html) satisfies SchemaLocation.

They contain the same information as [SchemaPath](SchemaPath.html), in a less human-readable format.
