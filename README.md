---
title: Home
nav_order: 0
description: "@audiotool/nexus — JavaScript/TypeScript package for reading and modifying Audiotool projects programmatically."
permalink: /
---

# @audiotool/nexus Documentation

**@audiotool/nexus** is a JavaScript/TypeScript package for reading and modifying [Audiotool](https://new.audiotool.com) projects programmatically — in real time, with full multiplayer support.

```bash
npm install @audiotool/nexus
```

**Supported platforms:** Chrome · Firefox · Node.js · Bun · Deno

---

## Documentation

### 1. Getting Started

| Page | Description |
|------|-------------|
| [Overview](getting-started/overview.md) | What Nexus is, what it does, who it's for |
| [What's New](getting-started/whats-new.md) | Recent changes and package highlights |
| [Authorization and Setup](getting-started/authorization-and-setup.md) | Install, register your app, authenticate, and run |
| [Examples and Next Steps](getting-started/examples-and-next-steps.md) | Small working examples and a map of where to go next |

---

### 2. How Nexus Works

| Page | Description |
|------|-------------|
| [System Overview](how-nexus-works/system-overview.md) | Architecture: documents, entities, events, transactions |
| [Documents](how-nexus-works/documents.md) | Synced vs offline documents and their lifecycle |
| [Entities and Fields](how-nexus-works/entities-and-fields.md) | Entity types, field types, and pointers explained |
| [Making Changes](how-nexus-works/making-changes.md) | How transactions and the document lock work |
| [Queries and Events](how-nexus-works/queries-and-events.md) | Reading state and reacting to changes |
| [Package Structure](how-nexus-works/package-structure.md) | Module layout and what to import from where |
| [Tips and Patterns](how-nexus-works/tips-and-patterns.md) | Practical patterns for building with Nexus |

---

### 3. Working With Audiotool Projects

| Page | Description |
|------|-------------|
| [Sign In and Connect](working-with-audiotool-projects/sign-in-and-connect.md) | OAuth flow and Personal Access Token auth |
| [Open or Create a Project Context](working-with-audiotool-projects/open-or-create-a-project-context.md) | open and createOfflineDocument |
| [Create Devices](working-with-audiotool-projects/create-devices.md) | Add synthesizers, drum machines, and effects |
| [Work With Timeline Data](working-with-audiotool-projects/work-with-timeline-data.md) | Tracks, regions, notes, and timing |
| [Find and Read Entities](working-with-audiotool-projects/find-and-read-entities.md) | Query the document for current state |
| [Listen for Changes](working-with-audiotool-projects/listen-for-changes.md) | Subscribe to entity events in real time |
| [Make Safe Changes](working-with-audiotool-projects/make-safe-changes.md) | Transaction best practices |
| [Work Offline for Testing](working-with-audiotool-projects/work-offline-for-testing.md) | Develop without a live backend |
| [Use Platform APIs Through the Client](working-with-audiotool-projects/use-platform-apis-through-the-client.md) | Manage projects, samples, and users via REST |

---

### 4. Errors and Fixes

| Page | Description |
|------|-------------|
| [Before You Debug](errors-and-fixes/before-you-debug.md) | Quick diagnostic checklist |
| [Authorization Problems](errors-and-fixes/authorization-problems.md) | Login, OAuth, and token issues |
| [Setup Problems](errors-and-fixes/setup-problems.md) | Dev server, install, and configuration issues |
| [Validation Errors](errors-and-fixes/validation-errors.md) | Transaction schema errors and how to fix them |
| [Query and Event Confusion](errors-and-fixes/query-and-event-confusion.md) | Common mistakes with events and queries |
| [Offline vs Synced Behavior](errors-and-fixes/offline-vs-synced-behavior.md) | Differences that cause bugs when switching modes |

---

### 5. Reference

| Page | Description |
|------|-------------|
| [Quick Answers](reference/quick-answers.md) | Short answers to common questions |
| [Package Entry Points](reference/package-entry-points.md) | Main module functions and types |
| [Document Model](reference/document-model.md) | Document types, schema types, transaction builders |
| [Entity Reference](reference/entity-reference.md) | All entity types and their fields |
| [Utilities](reference/utilities.md) | Tick constants, time conversion, async utilities |
| [Platform API Types](reference/platform-api-types.md) | REST API services, enumerations, data model classes |

---

## External Resources

- [Developer Hub](https://developer.audiotool.com)
- [GitHub Repository](https://github.com/audiotool/nexus)
- [Audiotool DAW](https://new.audiotool.com)
- [Discord Community](https://discord.gg/5Cde4Zvret)
- [Register Application](https://developer.audiotool.com/applications)
