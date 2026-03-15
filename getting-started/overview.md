---
title: Overview
parent: Getting Started
nav_order: 1
---

# Overview

Audiotool is a browser-based DAW (Digital Audio Workstation) where multiple users can collaborate on music projects in real time — similar to Google Docs, but for making music. Projects can contain audio devices, mixer channels, timeline tracks, notes, samples, and more.

<span class="tooltip" data-tooltip="The JavaScript package used to interact with Audiotool projects and data from your own app.">Nexus</span> is the JavaScript package that gives your app programmatic access to those Audiotool projects.

## What is Nexus?

<span class="tooltip" data-tooltip="The JavaScript package used to interact with Audiotool projects and data from your own app.">Nexus</span> is the JavaScript package used to interact with Audiotool projects from your own app. It allows you to read project data, respond to changes, and make updates in a structured way.

It works as the connection layer between your code and the contents of an Audiotool project.

### Using Nexus you can:

- **Create and connect audio devices** (synthesizers, effects, mixers)
- **Build and edit timeline content** (tracks, regions, notes)
- **React to changes in real time** via an event system
- **Query the current state** of any project document
- **Manage projects** via the Audiotool REST API (list, create, update, delete)

[Nexus Examples](https://github.com/audiotool/nexus-sdk-examples/)

## Who is this for?

This package is for developers who want to build apps or tools that work with Audiotool projects.

You might use <span class="tooltip" data-tooltip="The JavaScript package used to interact with Audiotool projects and data from your own app.">Nexus</span> if you want to:

- build a <span class="tooltip" data-tooltip="An app that runs in a web browser and is used directly by the person visiting it.">browser app</span> that connects to Audiotool
- create scripts or backend tools that work with project data
- read, organize, or modify project content
- build custom workflows around Audiotool projects

## Supported Platforms

| Platform | Notes |
|----------|-------|
| Chrome | Fully supported, including the browser-based login flow |
| Firefox | Fully supported, including the browser-based login flow |
| Node.js | Supported. Browser-based login requires additional setup, so a Personal Access Token is usually the simpler option |
| Bun | Supported |
| Deno | Supported |

## Supported Languages

<span class="tooltip" data-tooltip="The JavaScript package used to interact with Audiotool projects and data from your own app.">Nexus</span> is designed for JavaScript and <span class="tooltip" data-tooltip="A version of JavaScript that adds type checking to help catch mistakes and make code easier to understand.">TypeScript</span>, but you can also work with Audiotool data in other languages by binding against the API using our Protocol Buffers.

This makes it possible to build tools in languages such as Python, Go, Rust, and others.

If you want to use another language:

- use the API to read project data
- browse the available [Protocol Buffers](https://developer.audiotool.com/explore-protobufs)
- start from the [Protobuf Starter](https://developer.audiotool.com/assets/starter-templates/protobuf-starter.zipexample), which includes a Python example and instructions for switching to other languages

## Package Version

This documentation covers @audiotool/nexus version 0.0.12.

```bash
npm install @audiotool/nexus
```

## Where to go next

- [What's New](whats-new.md) — recent changes to the package
- [Authorization and Setup](authorization-and-setup.md) — get your environment ready and connect to Audiotool
- [System Overview](../how-nexus-works/system-overview.md) — learn how documents, entities, and project changes work in Nexus

## More Resources

- [Developer Hub](https://developer.audiotool.com)
- [GitHub Repository](https://github.com/audiotool/nexus)
- [Audiotool DAW](https://new.audiotool.com)
- [Discord Community](https://discord.gg/5Cde4Zvret)
