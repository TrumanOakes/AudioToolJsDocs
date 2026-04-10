---
title: Authorization Problems
parent: Errors and Fixes
nav_order: 2
---

# Authorization Problems

Problems that occur during login, token handling, or client creation.

## "Redirect URI mismatch" or OAuth fails silently

**Cause:** The redirect URI in your code does not match the URI registered in the developer portal.

**Fix:** Go to [developer.audiotool.com/applications](https://developer.audiotool.com/applications) and check your registered URI. It must match character-for-character, including:

- The protocol (`http://` not `https://` for local dev)
- The hostname (`127.0.0.1` not `localhost`)
- The port (`:5173`)
- Any trailing slash (`http://127.0.0.1:5173/` — note the `/` at the end)

Your code should use the exact same string:

```typescript
const status = await getLoginStatus({
  clientId: "your_client_id",
  redirectUri: "http://127.0.0.1:5173/", // must match exactly
  scopes: ["project:write"],
});
```

## Login always shows as "logged out"

**Cause:** This is expected on the first call. `getLoginStatus` always reports the user as signed out initially — even if they authenticated before. The <span class="tooltip" data-tooltip="A login method that lets users sign in through Audiotool and grant your app permission without sharing their password directly.">OAuth</span> flow works via a browser redirect, and the signed-in state is only available after that redirect completes.

**Fix:** Implement both login and logout button states, and do not assume that `LoggedOutStatus` means there is a problem:

```typescript
if (status.type === "logged-in") {
  const client = await createAudiotoolClient({ status });
} else {
  loginButton.onclick = () => status.login();
}
```

After the user clicks login and completes the OAuth redirect, reload the page and call `getLoginStatus` again.

## "Insufficient scope" error

**Cause:** Your registered application does not have the required scope, or the user authorized with fewer scopes than requested.

**Fix:**

1. Ensure `project:write` is listed in your registered scopes at the developer portal.
2. Request the scope explicitly in your `getLoginStatus` call:
   ```typescript
   scopes: ["project:write"]
   ```
3. If you added a scope after initial authorization, the user must re-authenticate.

## PAT not working

**Cause:** The Personal Access Token is malformed, expired, or does not have access to the required resources.

**Fix:**

- Verify the PAT starts with `at_pat_`
- Regenerate the token if in doubt
- Ensure you are passing it correctly:
  ```typescript
  const client = await createAudiotoolClient({ pat: "at_pat_your_token_here" });
  ```
- Never expose a PAT in client-side browser code — PATs are for server environments only

## Production deployment: redirect URI update required

When deploying to a production domain, update the redirect URI in the developer portal to match your production URL. Users will need to re-authorize after this change.

## Still stuck?

Visit [discord.gg/5Cde4Zvret](https://discord.gg/5Cde4Zvret) for community support, or see [Setup Problems](setup-problems.md) if the issue is with your dev server configuration.
