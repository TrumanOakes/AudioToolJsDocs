# Setup Problems

Problems that occur during project setup, dev server configuration, or package installation.

## OAuth does not trigger / login button does nothing

**Most likely cause:** Your dev server is not running on `127.0.0.1:5173`.

The Audiotool OAuth flow requires this exact host and port for local development. Running on `localhost:5173` or `127.0.0.1:3000` or any other address will not work.

**Fix:** Update `vite.config.ts`:

```typescript
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
```

Then access your app at `http://127.0.0.1:5173/` — not `localhost`.

## `npm install @audiotool/nexus` fails

**Common causes and fixes:**

- **Outdated Node.js:** Ensure you are using a current LTS version from [nodejs.org](https://nodejs.org).
- **Private registry issues:** If your environment uses a private npm registry, check that it proxies the public npm registry correctly.
- **Network restriction:** The package is published on the public npm registry. Ensure your network allows access to `registry.npmjs.org`.

## TypeScript errors after installation

If TypeScript cannot find types for `@audiotool/nexus`:

1. Ensure `"moduleResolution"` in your `tsconfig.json` is set to `"bundler"`, `"node16"`, or `"nodenext"`.
2. If you are using Vite, the default `vanilla-ts` template configures TypeScript correctly.
3. Restart your IDE after installation — some editors cache type information.

## Vite dev server starts on the wrong port

If port 5173 is taken by another process, Vite will try the next available port. Check the terminal output — it will say which URL it is using. If it is not `127.0.0.1:5173`, kill the conflicting process or explicitly force the port in the config.

## App served over HTTPS locally

The registered redirect URI is `http://` (not `https://`) for local development. If your local dev setup uses HTTPS, you will need to:

1. Register an additional redirect URI with `https://` and `127.0.0.1` in the developer portal.
2. Update your code to use the matching URI.

## Still stuck?

→ [Authorization Problems](authorization-problems.md) if the issue is specifically about login/OAuth
→ [Discord](https://discord.gg/5Cde4Zvret) for community support
