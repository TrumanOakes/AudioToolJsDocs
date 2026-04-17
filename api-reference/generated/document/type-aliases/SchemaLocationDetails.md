---
title: "SchemaLocationDetails"
parent: "document"
grand_parent: "API"
nav_order: 29
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SchemaLocationDetails

```ts
type SchemaLocationDetails = 
  | EntityDetails
  | ArrayDetails
  | PrimitiveFieldDetails & {
  index?: number;
}
  | ObjectDetails & {
  index?: number;
};
```

Defined in: [document/schema/schema-location-details.ts:11](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-location-details.ts#L11)

Schema location details are the same as schema path details, except they indicate for arrays what index
they're pointing on.
