# @audiotool/nexus v0.0.12

A JavaScript/TypeScript package enabling real-time interaction with multiplayer projects in the Audiotool DAW (Digital Audio Workstation).

## Supported Platforms

- Chrome
- Firefox
- Node.js
- Bun
- Deno

> **Note:** Auth2 login flow requires additional setup on server-side runtimes.

## Installation

```bash
npm install @audiotool/nexus
```

## Quick Start

```typescript
import { createAudiotoolClient } from "@audiotool/nexus";

const client = await createAudiotoolClient({
  pat: "at_pat_your_token_here"
});

const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});

await document.start();

const projects = await client.api.projectService.listProjects({});
```

## Key Features

- **Real-time synchronization** of multiplayer audio projects
- **Audio device creation** (effects, connections, etc.)
- **Timeline management** for note tracks and regions
- **Entity querying** to find and filter components
- **Offline mode** for testing without backend synchronization

## Documentation

### Guides

- [Overview](documents/Overview.md) — Core concepts and architecture
- [Getting Started](documents/Getting_Started.md) — Setup and initialization
- [Login](documents/Login.md) — Authentication and authorization
- [API](documents/API.md) — REST API services

### API Reference (Modules)

- [Index](modules/index.md) — Exported types and functions
- [Document](modules/document.md) — Document interfaces and types
- [Entities](modules/entities.md) — All entity types
- [Utils](modules/utils.md) — Utility functions and classes
- [API](modules/api.md) — API service types

## External Resources

- [Developer Hub](https://developer.audiotool.com)
- [GitHub Repository](https://github.com/audiotool/nexus)
- [Audiotool DAW](https://new.audiotool.com)
- [Discord Community](https://discord.gg/5Cde4Zvret)
- [Register Application](https://developer.audiotool.com/applications)
