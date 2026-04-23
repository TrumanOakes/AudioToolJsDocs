---
title: Authorization and Setup
parent: Getting Started
nav_order: 3
---

# Authorization and Setup

This page walks through how to set up a Nexus app, connect it to Audiotool, and use Nexus to access projects from your app.

<span class="tooltip" data-tooltip="If a step says to run a command inside your project, make sure your terminal is opened in that project folder first. You can usually do this by opening the folder in your code editor and using its built-in terminal, or by navigating to the folder in Command Prompt, PowerShell, or Terminal before running the command.">Note: Run these commands in a terminal or command prompt.</span>

## Step 1 — Install Node.js and npm

Download and install [Node.js](https://nodejs.org/) (which includes npm). Any current LTS version works.

- Node.js is the runtime used to run JavaScript tools outside the browser.
- npm is the package manager used to install dependencies for your project.

## Step 2 — Create a project

Use <span class="tooltip" data-tooltip="A frontend development tool used to create and run your app while you work on it. In these docs, it is used as the starting point for building a web app that uses Nexus.">Vite</span> to create a starter project preconfigured for <span class="tooltip" data-tooltip="A version of JavaScript that adds type checking to help catch mistakes and make code easier to understand.">TypeScript</span>:

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

For local development, the Audiotool <span class="tooltip" data-tooltip="The step-by-step process of checking whether a user is signed in and, if not, starting the sign-in process.">login flow</span> requires your app to run on `127.0.0.1:5173`, not `localhost`. Update your `vite.config.ts` file to specify this change.

```typescript
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
})
```

> **Why this matters:** The <span class="tooltip" data-tooltip="The URL the user is sent back to after signing in.">redirect URI</span> you register in the developer portal must exactly match the URL your app runs on, including the hostname. `localhost` and `127.0.0.1` are treated as different origins.

## Step 5 — Register your application

Go to [developer.audiotool.com/applications](https://developer.audiotool.com/applications) and create a new application. You will need to provide:

| Field | Value for local dev |
|-------|---------------------|
| Application name | Any name |
| Description | Any description |
| Project URL | Your project or GitHub URL |
| Redirect URI | `http://127.0.0.1:5173/` |
| Scopes | `project:write` |

After registering, you will receive a <span class="tooltip" data-tooltip="A unique identifier for your app used during the login process.">client ID</span> to use in your app.

## Step 6 — <span class="tooltip" data-tooltip="The process of confirming who the user is, usually by signing in.">Authentication</span>

### Browser apps (<span class="tooltip" data-tooltip="A login method that lets users sign in through Audiotool and grant your app permission without sharing their password directly.">OAuth</span>)

<span class="tooltip" data-tooltip="This code initializes Audiotool browser auth. If the user is authenticated, the returned object is already a ready-to-use client. Otherwise it exposes login helpers.">The following example shows the current browser auth flow.</span>

```typescript
import { audiotool } from "@audiotool/nexus";

const at = await audiotool({
  clientId: "your_client_id",
  redirectUrl: "http://127.0.0.1:5173/",
  scope: "project:write",
});

if (at.status === "authenticated") {
  // at is already an AudiotoolClient
  const projects = await at.projects.listProjects({});
  console.log(`Signed in as ${at.userName}`, projects.projects.length);
} else {
  // Show a login button
  loginButton.onclick = () => at.login();
}
```

> **Note:** On first load, before the OAuth redirect completes, `audiotool(...)` commonly returns `status === "unauthenticated"`. Trigger `at.login()`, complete the redirect, then initialize again.

### <span class="tooltip" data-tooltip="An app or script that runs outside the browser, such as in Node.js, Bun, or Deno.">Server-side scripts only</span> (<span class="tooltip" data-tooltip="A private token that lets your app access an Audiotool account without using a browser login flow.">Personal Access Token</span>)

> **For browser apps, always use the OAuth flow above.** PATs are not suitable for browser apps — exposing a PAT in client-side code gives anyone who reads your source full access to the account.

PATs are intended for server-side automation: Node.js scripts, CI/CD jobs, bots, or other non-browser environments where no user login flow is available.

```typescript
import { createAudiotoolClient } from "@audiotool/nexus";

// Load from an environment variable — never hardcode a PAT
const client = await createAudiotoolClient({
  auth: process.env.AUDIOTOOL_PAT
});
```

> **Security:** A PAT gives full access to the associated account. Store it in environment variables, never in source code or version control.

### Server-side with browser OAuth tokens

If your browser app signs users in with `audiotool(...)`, you can pass exported tokens to your server and create a server-side client:

```typescript
import { createAudiotoolClient, createServerAuth } from "@audiotool/nexus";
import { createNodeTransport, createDiskWasmLoader } from "@audiotool/nexus/node";

const client = await createAudiotoolClient({
  auth: createServerAuth({ accessToken, refreshToken, expiresAt, clientId }),
  transport: createNodeTransport(),
  wasm: createDiskWasmLoader(),
});
```

## Step 7 — Start the dev server

Start the local development server:

```bash
npm run dev
```

Open `http://127.0.0.1:5173/` in your browser. Your app should now be running locally and ready to connect to Audiotool.

## Deploying to production

When you deploy your app to a live web URL:

1. Update the <span class="tooltip" data-tooltip="The URL the user is sent back to after signing in.">redirect URI</span> in the developer portal to match your production URL exactly (including any trailing slashes).
2. Users may need to re-authenticate if you add new <span class="tooltip" data-tooltip="The specific permissions your app is requesting, such as permission to read or modify a project.">scopes</span>.

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
