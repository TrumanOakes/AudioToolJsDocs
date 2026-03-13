# Overview

**@audiotool/nexus v0.0.12**

## What is this?

The nexus package enables programmatic creation of audiotool projects. This package gives you the ability to write audiotool projects programmatically, in their entirety.

Audiotool functions as a multiplayer DAW where multiple users can simultaneously edit projects and see real-time changes. The nexus framework allows bots to participate in collaborative sessions just like the DAW application itself.

## Core Concepts

### Entities

Entities are the fundamental building blocks of audiotool documents. These are small objects with defined fields and a unique `id`. Examples include:

- Notes on timelines (with fields like `positionTicks`, `pitch`, `velocity`)
- Devices like `tinyGain` (with properties such as `gain`, `positionX`, `positionY`)

### Pointers

Pointers create semantic relationships between entities by pointing to other entities or specific fields. For instance:

- A note's `collection` field points to a `noteCollection` entity
- Automation tracks point to the parameters they automate

### Document Modification

Three basic operations modify documents:

- Adding new entities via `t.create()`
- Updating fields via `t.update()`
- Removing entities via `t.remove()`

## Key Methods

### Transaction Builder Access

Developers must acquire a document lock before modifications:

```typescript
await nexus.modify((t) => {
  t.create("tinyGain", {})
})
```

### Event Subscriptions

Monitor document changes through event listeners:

```typescript
nexus.events.onCreate("tonematrix", (entity) => {})
nexus.events.onUpdate(entity.fields.gain, (value) => {})
```

### Queries

Inspect current document state using the query system:

```typescript
const notes = nexus.queryEntities.ofTypes("note").get()
```
