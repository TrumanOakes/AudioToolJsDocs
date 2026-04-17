---
title: "EntityDetails"
parent: "document"
grand_parent: "API"
nav_order: 6
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: EntityDetails

```ts
type EntityDetails = {
  targetTypes: TargetTypeValue[];
  type: "entity";
  typeKey: EntityTypeKey;
};
```

Defined in: [document/schema/schema-details.ts:12](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L12)

If the path points to an entity, this is returned.

## Properties

### targetTypes

```ts
targetTypes: TargetTypeValue[];
```

Defined in: [document/schema/schema-details.ts:15](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L15)

target types of this entity.

***

### type

```ts
type: "entity";
```

Defined in: [document/schema/schema-details.ts:13](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L13)

***

### typeKey

```ts
typeKey: EntityTypeKey;
```

Defined in: [document/schema/schema-details.ts:17](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/schema/schema-details.ts#L17)

entity type key of this entity.
