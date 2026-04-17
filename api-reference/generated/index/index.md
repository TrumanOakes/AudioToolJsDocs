---
title: "index"
parent: "API"
nav_order: 1
has_children: true
---

[**@audiotool/nexus API Reference**](../)

***

# index

# Audiotool Nexus SDK

The main entry point for the Audiotool Nexus SDK. This package enables real-time
collaboration and document manipulation for Audiotool projects.

## Quick Start

```typescript
import { createAudiotoolClient } from "@audiotool/nexus";

// Create client and set authentication
const client = await createAudiotoolClient({pat: "at_pat_your_token_here"});

// Connect to a project
const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});

await document.start();

// Access API services
const projects = await client.api.projectService.listProjects({});
```

## Type Aliases

- [AudiotoolClient](type-aliases/AudiotoolClient.html)
- [LoggedInStatus](type-aliases/LoggedInStatus.html)
- [LoggedOutStatus](type-aliases/LoggedOutStatus.html)
- [LoginStatus](type-aliases/LoginStatus.html)
- [OfflineDocument](type-aliases/OfflineDocument.html)
- [SyncedDocument](type-aliases/SyncedDocument.html)

## Functions

- [createAudiotoolClient](functions/createAudiotoolClient.html)
- [createOfflineDocument](functions/createOfflineDocument.html)
- [getLoginStatus](functions/getLoginStatus.html)
