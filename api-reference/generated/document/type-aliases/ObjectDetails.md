---
title: "ObjectDetails"
parent: "document"
grand_parent: "API"
nav_order: 21
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: ObjectDetails

```ts
type ObjectDetails = {
  fieldName: string;
  targetTypes: TargetTypeValue[];
  type: "object";
};
```

Defined in: [document/schema/schema-details.ts:21](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L21)

If the path points to an object, this is returned.

## Properties

### fieldName

```ts
fieldName: string;
```

Defined in: [document/schema/schema-details.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L26)

the field name

***

### targetTypes

```ts
targetTypes: TargetTypeValue[];
```

Defined in: [document/schema/schema-details.ts:24](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L24)

target types of this object.

***

### type

```ts
type: "object";
```

Defined in: [document/schema/schema-details.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L22)
