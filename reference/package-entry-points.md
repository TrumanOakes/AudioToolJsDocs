---
title: Package Entry Points
parent: Reference
nav_order: 2
---

{: .note }
> For exact type signatures, see the auto-generated [index module reference](../api-reference/generated/index/).

# Package Entry Points

**Module:** `@audiotool/nexus`

The main entry point for the <span class="tooltip" data-tooltip="The JavaScript package used to interact with Audiotool projects and data from your own app.">Nexus</span> package. Import from here to create a client, check login status, or open an offline document.

## Quick start

```typescript
import { createAudiotoolClient } from "@audiotool/nexus";

const client = await createAudiotoolClient({
  pat: "at_pat_your_token_here"
});

const nexus = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});

await nexus.start();

const projects = await client.api.projectService.listProjects({});
```

## Functions

### [`createAudiotoolClient`](../api-reference/generated/index/functions/createAudiotoolClient.md)

```ts
createAudiotoolClient(opts: { status: LoginStatus } | { pat: string }): Promise<AudiotoolClient>
```

Creates an authenticated Audiotool client.

**Accepts:**
- `{ status: LoginStatus }` — a login status object from `getLoginStatus()`
- `{ pat: string }` — a Personal Access Token

**Returns:** `Promise<AudiotoolClient>`

### [`createOfflineDocument`](../api-reference/generated/index/functions/createOfflineDocument.md)

```typescript
createOfflineDocument(opts?: { validated?: boolean }): Promise<OfflineDocument>
```

Creates a nexus document that operates without backend synchronization. All changes are discarded on reload or shutdown.

**Parameters:**
- `opts.validated` *(optional, boolean, default: true)*: When `false`, disables schema validation, which reduces transaction errors at the cost of allowing invalid document states.

**Returns:** `Promise<OfflineDocument>`

The returned document is immediately ready — no `start()` call required. Use this for development and testing.

### [`getLoginStatus`](../api-reference/generated/index/functions/getLoginStatus.md)

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

### [`AudiotoolClient`](../api-reference/generated/index/type-aliases/AudiotoolClient.md)

The authenticated client object returned by `createAudiotoolClient()`. Use this to open documents and call REST API services.

```typescript
import type { AudiotoolClient } from "@audiotool/nexus";

// Pass the client to helper functions with a typed annotation
async function openProject(client: AudiotoolClient, url: string) {
  const nexus = await client.createSyncedDocument({
    mode: "online",
    project: url,
  });
  await nexus.start();
  return document;
}
```

---

### [`LoginStatus`](../api-reference/generated/index/type-aliases/LoginStatus.md)

The union type returned by `getLoginStatus()` — either a `LoggedInStatus` or a `LoggedOutStatus`. Check which one you have before taking action.

```typescript
import type { LoginStatus } from "@audiotool/nexus";

function handleLogin(status: LoginStatus) {
  if ("logout" in status) {
    // It's a LoggedInStatus — user is authenticated
    console.log("Logged in");
  } else {
    // It's a LoggedOutStatus — show a login button
    status.login(); // redirect to the OAuth login page
  }
}
```

---

### [`LoggedInStatus`](../api-reference/generated/index/type-aliases/LoggedInStatus.md)

The user is authenticated. Has a `.logout()` method to end the session.

```typescript
import type { LoggedInStatus } from "@audiotool/nexus";

function showUserMenu(status: LoggedInStatus) {
  // User is signed in — show account options
  document.getElementById("logout-btn")?.addEventListener("click", () => {
    status.logout();
  });
}
```

---

### [`LoggedOutStatus`](../api-reference/generated/index/type-aliases/LoggedOutStatus.md)

The user is not authenticated. Has a `.login()` method to start the OAuth login flow.

```typescript
import type { LoggedOutStatus } from "@audiotool/nexus";

function showLoginPrompt(status: LoggedOutStatus) {
  document.getElementById("login-btn")?.addEventListener("click", () => {
    status.login(); // redirects the browser to the OAuth consent page
  });
}
```

---

### [`OfflineDocument`](../api-reference/generated/index/type-aliases/OfflineDocument.md)

A local-only document with no backend connection. Changes are discarded on reload. Returned by `createOfflineDocument()`. Exposes the same `modify()`, `events`, and `queryEntities` API as a synced document.

```typescript
import type { OfflineDocument } from "@audiotool/nexus";

async function buildTestDocument(): Promise<OfflineDocument> {
  const doc = await createOfflineDocument();

  await doc.modify((t) => {
    t.create("tinyGain", { gain: 0.8, displayName: "Test Gain" });
  });

  return doc;
}
```

---

### [`SyncedDocument`](../api-reference/generated/index/type-aliases/SyncedDocument.md)

A document connected to a real Audiotool project in real time. Changes are persisted and broadcast to all collaborators. Returned by `client.createSyncedDocument()` after calling `.start()`.

```typescript
import type { SyncedDocument } from "@audiotool/nexus";

async function watchNotes(doc: SyncedDocument) {
  await doc.start(); // begin receiving updates

  doc.events.onCreate("note", (note) => {
    console.log("Collaborator added a note:", note.fields.pitch);
  });
}
```

---

## See also

- [Document Model](document-model.md) — document and schema types
- [Entity Reference](entity-reference.md) — all entity field types
- [Platform API Types](platform-api-types.md) — REST API types
