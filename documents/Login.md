# Login

**@audiotool/nexus v0.0.12**

## Overview

This package enables reading and modifying user projects after proper authorization. Authorization is based on an OAuth flow for browser applications.

## Registration Process

Register your application at [developer.audiotool.com/applications](https://developer.audiotool.com/applications) by providing:

- Application name, description, and project URL
- Redirect URI (e.g., `http://127.0.0.1:5173/` for local development)
- Required scopes (e.g., `project:write`)

## Local Development Setup

Development servers must run on `127.0.0.1:5173` rather than `localhost`. Configure Vite accordingly:

```typescript
import { defineConfig } from "vite"
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
})
```

## Authentication Flow

1. Call `getLoginStatus()` to check current login state
2. Display login or logout buttons based on status
3. Create an `AudiotoolClient` instance once authorized

> **Note:** The very first time that `getLoginStatus` is called, it will always report that no user is logged in.

```typescript
import { getLoginStatus, createAudiotoolClient } from "@audiotool/nexus";

const status = await getLoginStatus({
  clientId: "your_client_id",
  redirectUri: "http://127.0.0.1:5173/",
  scopes: ["project:write"],
});

if (status.type === "logged-in") {
  const client = await createAudiotoolClient({ status });
} else {
  // Show login button
  loginButton.onclick = () => status.login();
}
```

## Server-Side Alternative: Personal Access Tokens

For server applications, you can use Personal Access Tokens (PATs) instead of OAuth:

```typescript
const client = await createAudiotoolClient({
  pat: "at_pat_your_token_here"
});
```

> **Warning:** PATs grant full account access and should **never** be shared or committed to version control.

## Deployment Considerations

When deploying to production:

- Update the redirect URI to match the production domain exactly, including any trailing slashes
- Users may need to re-authenticate when new scopes are added

## Troubleshooting

Common issues:

- **Mismatched redirect URIs** — ensure the URI registered in the developer portal exactly matches the one used in code
- **Insufficient permission scopes** — verify that required scopes are listed and approved

For support, visit the [Discord community](https://discord.gg/5Cde4Zvret).
