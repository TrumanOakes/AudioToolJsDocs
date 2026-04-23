---
title: Package Entry Points
parent: Reference
nav_order: 2
has_children: true
---

# Package Entry Points

**Module:** `@audiotool/nexus`

The main entry point for the <span class="tooltip" data-tooltip="The JavaScript package used to interact with Audiotool projects and data from your own app.">Nexus</span> package. Import from here for browser auth (`audiotool`), explicit client creation (`createAudiotoolClient`), auth providers, and offline documents.

## Quick start

```typescript
import { audiotool } from "@audiotool/nexus";

const at = await audiotool({
  clientId: "your_client_id",
  redirectUrl: "http://127.0.0.1:5173/",
  scope: "project:write",
});

if (at.status === "authenticated") {
  const nexus = await at.open("https://beta.audiotool.com/studio?project=abc123");
  await nexus.start();
  const projects = await at.projects.listProjects({});
}
```

## Functions

### [`createAudiotoolClient`](../api-reference/generated/functions/index.createAudiotoolClient.html)

```ts
createAudiotoolClient(opts: {
  auth: string | AuthProvider;
  transport?: TransportFactory;
  wasm?: WasmLoader;
}): Promise<AudiotoolClient>
```

Creates an authenticated Audiotool client.

**Accepts:**
- `{ auth: string }` — a Personal Access Token
- `{ auth: createPATAuth(...) }` or `{ auth: createServerAuth(...) }` — explicit auth providers
- Optional Node/Bun/Deno runtime helpers:
  - `transport: createNodeTransport()` from `@audiotool/nexus/node` (Node.js)
  - `wasm: createDiskWasmLoader()` from `@audiotool/nexus/node` (server runtimes)

**Returns:** `Promise<AudiotoolClient>`

### [`audiotool`](../api-reference/generated/functions/index.audiotool.html)

```ts
audiotool(opts: {
  clientId: string;
  redirectUrl: string;
  scope: string;
}): Promise<BrowserAuthResult>
```

Browser-first OAuth entry point. This replaces legacy `getLoginStatus` usage.

When authenticated, the returned value is an `AuthenticatedClient` with `status: "authenticated"` and the full flat client API (`projects`, `samples`, `users`, `projectRoles`, `presets`, `audioGraph`, `open`).

When unauthenticated, it returns `status: "unauthenticated"` with `.login()` to trigger OAuth.

### [`createPATAuth`](../api-reference/generated/functions/index.createPATAuth.html) and [`createServerAuth`](../api-reference/generated/functions/index.createServerAuth.html)

Helpers to create `AuthProvider` objects for explicit client creation.

- `createPATAuth(pat)` — PAT-based auth
- `createServerAuth(tokens)` — use OAuth tokens server-side

### [`createOfflineDocument`](../api-reference/generated/functions/index.createOfflineDocument.html)

```typescript
createOfflineDocument(opts?: { validated?: boolean }): Promise<OfflineDocument>
```

Creates a nexus document that operates without backend synchronization. All changes are discarded on reload or shutdown.

**Parameters:**
- `opts.validated` *(optional, boolean, default: true)*: When `false`, disables schema validation, which reduces transaction errors at the cost of allowing invalid document states.

**Returns:** `Promise<OfflineDocument>`

The returned document is immediately ready — no `start()` call required. Use this for development and testing.

## Exported Type Aliases

### [`AudiotoolClient`](../api-reference/generated/types/index.AudiotoolClient.html)

The authenticated client object returned by `createAudiotoolClient()` and (in browser apps) by `audiotool()` when `status === "authenticated"`.

```typescript
import type { AudiotoolClient } from "@audiotool/nexus";

// Pass the client to helper functions with a typed annotation
async function openProject(client: AudiotoolClient, url: string) {
  const nexus = await client.open(url);
  await nexus.start();
  return nexus;
}
```

---

### [`BrowserAuthResult`](../api-reference/generated/types/index.BrowserAuthResult.html)

```typescript
import type { BrowserAuthResult } from "@audiotool/nexus";

function handleAuth(at: BrowserAuthResult) {
  if (at.status === "authenticated") {
    console.log("Logged in as", at.userName);
  } else {
    at.login(); // redirect to OAuth consent
  }
}
```

---

### [`AuthenticatedClient`](../api-reference/generated/types/index.AuthenticatedClient.html) and [`UnauthenticatedResult`](../api-reference/generated/types/index.UnauthenticatedResult.html)

Refined browser auth result types:

- `AuthenticatedClient`: full `AudiotoolClient` + `status`, `userName`, `logout()`, `exportTokens()`
- `UnauthenticatedResult`: `status` + `login()` (+ optional `error`)

---

### [`OfflineDocument`](../api-reference/generated/types/index.OfflineDocument.html)

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

### [`SyncedDocument`](../api-reference/generated/types/index.SyncedDocument.html)

A document connected to a real Audiotool project in real time. Changes are persisted and broadcast to all collaborators. Returned by `client.open(project)` after calling `.start()`.

```typescript
import type { SyncedDocument } from "@audiotool/nexus";

async function watchNotes(doc: SyncedDocument) {
  await doc.start(); // begin receiving updates

  doc.events.onCreate("note", (note) => {
    console.log("Collaborator added a note:", note.fields.pitch.value);
  });
}
```

---

## See also

- [Document Model](document-model.html) — document and schema types
- [Entity Reference](entity-reference.html) — all entity field types
- [Platform API Types](platform-api-types.html) — REST API types
