# Authorization and Setup

This page walks through everything you need to go from zero to a running Nexus app: installing dependencies, registering your application, authenticating, and making your first API call.

## Step 1 — Install Node.js and npm

Download and install [Node.js](https://nodejs.org/) (which includes npm). Any current LTS version works.

## Step 2 — Create a project

Use Vite to scaffold a TypeScript project:

```bash
npm create vite@latest my-app -- --template vanilla-ts
cd my-app
npm install
```

## Step 3 — Install Nexus

```bash
npm install @audiotool/nexus
```

## Step 4 — Configure the dev server

The Audiotool OAuth flow requires your app to run on `127.0.0.1:5173` — not `localhost`. Update `vite.config.ts`:

```typescript
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
})
```

> **Why this matters:** The redirect URI you register in the developer portal must exactly match the URL your app runs on, including the hostname. `localhost` and `127.0.0.1` are treated as different origins.

## Step 5 — Register your application

Go to [developer.audiotool.com/applications](https://developer.audiotool.com/applications) and create a new application. You will need to provide:

| Field | Value for local dev |
|-------|---------------------|
| Application name | Any name |
| Description | Any description |
| Project URL | Your project or GitHub URL |
| Redirect URI | `http://127.0.0.1:5173/` |
| Scopes | `project:write` |

After registering, you will receive a **client ID** to use in your app.

## Step 6 — Authenticate

### Browser apps (OAuth)

Use `getLoginStatus` to check whether the user is logged in and expose a login/logout UI:

```typescript
import { getLoginStatus, createAudiotoolClient } from "@audiotool/nexus";

const status = await getLoginStatus({
  clientId: "your_client_id",
  redirectUri: "http://127.0.0.1:5173/",
  scopes: ["project:write"],
});

if (status.type === "logged-in") {
  const client = await createAudiotoolClient({ status });
  // proceed with client
} else {
  // Show a login button
  loginButton.onclick = () => status.login();
}
```

> **Note:** The very first call to `getLoginStatus` always reports the user as logged out, even if they authenticated previously. This is expected behavior — the OAuth redirect happens asynchronously.

### Server apps (Personal Access Token)

For Node.js, Bun, or Deno apps that don't need a browser login flow, use a Personal Access Token:

```typescript
import { createAudiotoolClient } from "@audiotool/nexus";

const client = await createAudiotoolClient({
  pat: "at_pat_your_token_here"
});
```

> **Warning:** PATs grant full account access. Never commit them to version control or share them publicly. Use environment variables.

## Step 7 — Start the dev server

```bash
npm run dev
```

Open `http://127.0.0.1:5173/` in your browser. Your app is running and ready to connect to Audiotool.

## Deploying to production

When you deploy your app to a production domain:

1. Update the **redirect URI** in the developer portal to match your production URL exactly (including any trailing slashes).
2. Users may need to re-authenticate if you add new scopes.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Redirect URI mismatch error | Make sure the URI in code matches the URI registered in the portal exactly, including trailing slash |
| "Insufficient scope" error | Add `project:write` to your registered scopes and re-authenticate |
| Login always reports logged out | Expected on first load — implement the login button flow and let the OAuth redirect complete |

For more help, visit the [Discord Community](https://discord.gg/5Cde4Zvret) or see [Authorization Problems](../errors-and-fixes/authorization-problems.md).

## Next step

Once you have a client, connect it to a project:
→ [Sign In and Connect](../working-with-audiotool-projects/sign-in-and-connect.md)
