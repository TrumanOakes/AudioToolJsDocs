---
title: Sign In and Connect
parent: Working With Audiotool Projects
nav_order: 1
---

# Sign In and Connect

This page covers the full authentication flow for browser apps and the Personal Access Token alternative for server environments — and how to go from a login to a connected client.

## Browser apps — OAuth flow

### 1. Check login status

```typescript
import { getLoginStatus, createAudiotoolClient } from "@audiotool/nexus";

const status = await getLoginStatus({
  clientId: "your_client_id",
  redirectUri: "http://127.0.0.1:5173/",
  scopes: ["project:write"],
});
```

`getLoginStatus` returns a `LoginStatus` — either `LoggedInStatus` or `LoggedOutStatus`.

> The **first call always returns `LoggedOutStatus`**, even if the user authenticated before. This is expected — OAuth works via a redirect, and the result is only available after the redirect completes.

### 2. Handle both states

```typescript
if (status.type === "logged-in") {
  // User is authenticated — create a client
  const client = await createAudiotoolClient({ status });
  // ...use client
} else {
  // Show a login button
  loginButton.onclick = () => status.login();
  logoutButton.onclick = () => status.logout();
}
```

When `status.login()` is called, the browser redirects to Audiotool's OAuth page. After the user authorizes, it redirects back to your `redirectUri`. Call `getLoginStatus` again on page load — this time it will return `LoggedInStatus`.

### 3. Create the client

```typescript
const client = await createAudiotoolClient({ status });
```

`createAudiotoolClient` accepts a `LoginStatus` (from `getLoginStatus`) or a PAT. It returns a fully initialized `AudiotoolClient`.

## Server apps — Personal Access Token

For Node.js, Bun, or Deno scripts and bots:

```typescript
const client = await createAudiotoolClient({
  pat: process.env.AUDIOTOOL_PAT
});
```

No browser, no redirect, no `getLoginStatus` call needed. The client is immediately ready.

PATs grant full access to the account. Store them in environment variables — never in code or version control.

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
