# What's New

This page tracks notable changes to the **@audiotool/nexus** package.

## v0.0.12 — Current Release

**@audiotool/nexus v0.0.12** is the current documented version.

### Highlights

- **Offline document support** — Use `createOfflineDocument()` to work without a live backend connection. Useful for local testing and development workflows.
- **Validation control** — `createOfflineDocument({ validated: false })` disables strict validation, which reduces transaction errors during rapid prototyping.
- **Personal Access Tokens (PATs)** — In addition to the OAuth browser flow, you can authenticate using a PAT for server-side use cases:
  ```typescript
  const client = await createAudiotoolClient({ pat: "at_pat_your_token_here" });
  ```
- **RetryingClient wrapper** — All API calls are automatically wrapped in a retrying transport, so transient network failures are handled without extra code.
- **Full entity coverage** — The document schema includes synthesizers, drum machines, effects, mixer entities, timeline tracks, regions, notes, and utility entities.

### Package entry points

The package exports from these modules:

| Module | Contents |
|--------|----------|
| `@audiotool/nexus` | Main client, login helpers, offline document factory |
| `@audiotool/nexus/document` | Document types and schema utilities |
| `@audiotool/nexus/entities` | All entity field types |
| `@audiotool/nexus/utils` | Utility classes (locks, notifiers, tick helpers) |
| `@audiotool/nexus/api` | REST API service types |

See [Package Entry Points](../reference/package-entry-points.md) for the full reference.

## Staying Up to Date

Check the [GitHub Repository](https://github.com/audiotool/nexus) and the [Developer Hub](https://developer.audiotool.com) for the latest release notes and announcements.

Join the [Discord Community](https://discord.gg/5Cde4Zvret) for discussion and support.
