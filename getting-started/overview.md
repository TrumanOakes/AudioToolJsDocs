---
title: Overview
parent: Getting Started
nav_order: 1
---

# Overview

**@audiotool/nexus** is a JavaScript/TypeScript package that lets you read and modify [Audiotool](https://new.audiotool.com) projects programmatically.

## What is Nexus?

Audiotool is a browser-based DAW (Digital Audio Workstation) where multiple users can collaborate on music projects in real time — think of it like Google Docs but for making music. Projects contain audio devices, mixer channels, timeline tracks, notes, samples, and more.

Nexus gives you programmatic access to those projects. Using Nexus you can:

- **Create and connect audio devices** (synthesizers, effects, mixers)
- **Build and edit timeline content** (tracks, regions, notes)
- **React to changes in real time** via an event system
- **Query the current state** of any project document
- **Manage projects** via the Audiotool REST API (list, create, update, delete)

## Who is this for?

Nexus is for developers who want to build tools, bots, or automated workflows on top of Audiotool — for example:

- A bot that generates musical content and writes it into a project
- A tool that converts MIDI or other formats into Audiotool project data
- An integration that reads project state and reports analytics
- Automated testing or seeding of Audiotool project templates

## Supported Platforms

| Platform | Notes |
|----------|-------|
| Chrome | Fully supported including OAuth login flow |
| Firefox | Fully supported including OAuth login flow |
| Node.js | Supported; OAuth requires additional server-side setup |
| Bun | Supported |
| Deno | Supported |

## Package Version

This documentation covers **@audiotool/nexus v0.0.12**.

```bash
npm install @audiotool/nexus
```

## Where to go next

- [What's New](whats-new.md) — recent changes to the package
- [Authorization and Setup](authorization-and-setup.md) — get your environment ready and connect to Audiotool
- [System Overview](../how-nexus-works/system-overview.md) — understand how the document model and entity system work

## External Resources

- [Developer Hub](https://developer.audiotool.com)
- [GitHub Repository](https://github.com/audiotool/nexus)
- [Audiotool DAW](https://new.audiotool.com)
- [Discord Community](https://discord.gg/5Cde4Zvret)
