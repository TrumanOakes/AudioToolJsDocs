---
title: Package Entry Points
parent: Reference
nav_order: 2
---

# Package Entry Points

**Module:** `@audiotool/nexus`

The primary entry point for the Audiotool Nexus SDK. Import from here for the client factory, login helpers, and offline document creation.

## Quick start

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

Creates an authenticated Audiotool client.

**Accepts:**
- `{ status: LoginStatus }` — a login status object from `getLoginStatus()`
- `{ pat: string }` — a Personal Access Token

**Returns:** `Promise<AudiotoolClient>`

### `createOfflineDocument`

```typescript
createOfflineDocument(opts?: { validated?: boolean }): Promise<OfflineDocument>
```

Creates a nexus document that operates without backend synchronization. All changes are discarded on reload or shutdown.

**Parameters:**
- `opts.validated` *(optional, boolean, default: true)*: When `false`, disables schema validation, which reduces transaction errors at the cost of allowing invalid document states.

**Returns:** `Promise<OfflineDocument>`

The returned document is immediately ready — no `start()` call required. Use this for development and testing.

### `getLoginStatus`

```typescript
getLoginStatus(opts: {
  clientId: string;
  redirectUri: string;
  scopes: string[];
}): Promise<LoginStatus>
```

Returns the current OAuth login status. Used to implement login/logout UI in browser applications.

> The very first call always returns `LoggedOutStatus`, even if the user was previously authenticated. This is expected — implement a login button that calls `status.login()`.

**Returns:** `Promise<LoginStatus>` — resolves to either `LoggedInStatus` or `LoggedOutStatus`

## Exported Type Aliases

| Type | Description |
|------|-------------|
| `AudiotoolClient` | The main authenticated client instance |
| `LoggedInStatus` | Login status when a user is authenticated — has `.logout()` method |
| `LoggedOutStatus` | Login status when no user is authenticated — has `.login()` method |
| `LoginStatus` | Union of `LoggedInStatus \| LoggedOutStatus` |
| `OfflineDocument` | Document type for offline/no-backend use |
| `SyncedDocument` | Document type with real-time backend synchronization |

## See also

- [Document Model](document-model.md) — document and schema types
- [Entity Reference](entity-reference.md) — all entity field types
- [Platform API Types](platform-api-types.md) — REST API types
