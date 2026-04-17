---
title: "EntityTypeKey"
parent: "document"
grand_parent: "API"
nav_order: 8
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: EntityTypeKey

```ts
type EntityTypeKey = keyof EntityTypes;
```

Defined in: [document/entity-utils.ts:19](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/entity-utils.ts#L19)

The main EntityTypeKeys type that is a "shortcut" to describe an entity
type. For example:
```ts
t.create("tonematrix" satisfies EntityTypeKeys, {})
```
