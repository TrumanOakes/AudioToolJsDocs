# Module: index

**@audiotool/nexus v0.0.12**

The primary entry point for the Audiotool Nexus SDK, providing real-time collaboration and document manipulation for Audiotool projects.

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

## Functions

### `createAudiotoolClient`

Creates an authenticated Audiotool client. Accepts either a `LoginStatus` (from `getLoginStatus()`) or a Personal Access Token (`pat`).

### `createOfflineDocument`

```typescript
createOfflineDocument(opts?: { validated?: boolean }): Promise<OfflineDocument>
```

Creates a nexus document that operates independently without backend synchronization. All changes are discarded on reload/shutdown.

**Parameters:**

- `opts` *(optional)*: Configuration object
  - `validated` *(optional, boolean)*: Controls validation behavior. When disabled, reduces transaction errors but may allow invalid states.

**Returns:** `Promise<OfflineDocument>`

The returned document is immediately ready for modifications and can be disposed of without requiring start/stop lifecycle methods. For documents requiring backend synchronization, use `AudiotoolClient.createSyncedDocument` instead.

### `getLoginStatus`

Returns the current login status. Used to implement login/logout UI flows in browser applications.

> **Note:** The very first call always reports that no user is logged in.

## Exported Type Aliases

| Type | Description |
|------|-------------|
| `AudiotoolClient` | The main client instance type |
| `LoggedInStatus` | Status type when a user is authenticated |
| `LoggedOutStatus` | Status type when no user is authenticated |
| `LoginStatus` | Union of `LoggedInStatus` and `LoggedOutStatus` |
| `OfflineDocument` | Document type for offline/no-backend use |
| `SyncedDocument` | Document type with real-time backend sync |
