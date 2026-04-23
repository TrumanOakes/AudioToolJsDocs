---
title: Sign In and Connect
parent: Working With Audiotool Projects
nav_order: 1
---

# Sign In and Connect

This page shows how to authenticate and work with an <span class="tooltip" data-tooltip="The main object your app uses to connect to Audiotool and work with projects, documents, and APIs.">AudiotoolClient</span>. For setup instructions and a detailed explanation of browser and server auth methods, see [Authorization and Setup](../getting-started/authorization-and-setup.md).

## Browser apps — OAuth flow

### 1. Initialize browser auth

```typescript
import { audiotool } from "@audiotool/nexus";

const at = await audiotool({
  clientId: "your_client_id",
  redirectUrl: "http://127.0.0.1:5173/",
  scope: "project:write",
});
```

`audiotool(...)` returns an auth result object with a `status` field:
- `"authenticated"` — the object is already a full client
- `"unauthenticated"` — call `login()` to begin OAuth

> The first call may return unauthenticated until the OAuth redirect completes. This is expected.

### 2. Handle both states

```typescript
if (at.status === "authenticated") {
  // at IS the client
  const projects = await at.projects.listProjects({});
  console.log("Logged in as:", at.userName, projects.projects.length);
} else {
  // Show a login button
  loginButton.onclick = () => at.login();
}
```

When `at.login()` is called, the browser redirects to Audiotool's OAuth page. After the user authorizes, it redirects back to your `redirectUrl`; then `audiotool(...)` resolves with `status === "authenticated"`.

### 3. Use the authenticated client

In browser OAuth flows, you do not call `createAudiotoolClient(...)` after auth. The authenticated `audiotool(...)` result is already the client.

## Server-side scripts — Personal Access Token

> **For browser apps, use the OAuth flow above.** PATs expose full account access and must never appear in browser-facing code.

For server-side automation only — Node.js, Bun, or Deno scripts, CI jobs, bots:

```typescript
import { createAudiotoolClient, createPATAuth } from "@audiotool/nexus";
import { createNodeTransport, createDiskWasmLoader } from "@audiotool/nexus/node";

const client = await createAudiotoolClient({
  auth: createPATAuth(process.env.AUDIOTOOL_PAT!),
  transport: createNodeTransport(),
  wasm: createDiskWasmLoader(),
});
```

No browser redirect is needed in this mode.

PATs grant full access to the account. Store them in environment variables and rotate them if compromised.

## After connecting

With a client in hand, you can:

- Open or create a project document
- Call REST API services
- List projects and other resources

→ [Open or Create a Project Context](open-or-create-a-project-context.md)

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Redirect URI mismatch | Registered URI and code URI must match exactly — including trailing slash |
| Login always fails | Check that your `clientId` is correct and your app is registered at [developer.audiotool.com/applications](https://developer.audiotool.com/applications) |
| Server-side OAuth not working | Use a PAT for server environments instead of the OAuth flow |

→ [Authorization Problems](../errors-and-fixes/authorization-problems.md) for more detail
