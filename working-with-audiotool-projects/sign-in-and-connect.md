---
title: Sign In and Connect
parent: Working With Audiotool Projects
nav_order: 1
---

# Sign In and Connect

This page shows how to sign in and create an <span class="tooltip" data-tooltip="The main object your app uses to connect to Audiotool and work with projects, documents, and APIs.">AudiotoolClient</span>. For setup instructions and a detailed explanation of the two auth methods, see [Authorization and Setup](../getting-started/authorization-and-setup.md).

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

`getLoginStatus` checks whether the user is already signed in.

> The **first call always reports logged out**, even if the user authenticated before. This is expected — <span class="tooltip" data-tooltip="A login method that lets users sign in through Audiotool and grant your app permission without sharing their password directly.">OAuth</span> works via a browser redirect, and the result is only available after the redirect completes.

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

`createAudiotoolClient` accepts the result from `getLoginStatus` or a <span class="tooltip" data-tooltip="A private token that lets your app access an Audiotool account without using a browser login flow.">Personal Access Token</span>. It returns a ready-to-use client.

## Server-side scripts — Personal Access Token

> **For browser apps, use the OAuth flow above.** PATs expose full account access and must never appear in browser-facing code.

For server-side automation only — Node.js, Bun, or Deno scripts, CI jobs, bots:

```typescript
const client = await createAudiotoolClient({
  pat: process.env.AUDIOTOOL_PAT // always load from environment — never hardcode
});
```

No browser, no redirect, no `getLoginStatus` call needed. The client is immediately ready.

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
