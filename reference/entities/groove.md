---
title: groove
parent: Entity Reference
grand_parent: Reference
nav_exclude: true
---

# groove

**Module:** `@audiotool/nexus/entities`

A groove entity defines a groove or swing quantization pattern. Applying a groove to notes subtly shifts their timing off the strict grid to give the music a more human, rhythmically "loose" feel. Note collections and patterns reference a groove entity to apply the effect.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `displayName` | `string` | Label for this groove preset |

> For groove pattern data (timing offsets per step, velocity adjustments, etc.), refer to the official TypeDoc at [developer.audiotool.com/js-package-documentation](https://developer.audiotool.com/js-package-documentation/).

## Example

```typescript
await nexus.modify((t) => {
  t.create("groove", {
    displayName: "Swing 16ths",
  });
});
```

## See also

- [Entity Reference](../entity-reference.md) — full list of all entity types
- [noteCollection](noteCollection.md) — note containers that can reference a groove
