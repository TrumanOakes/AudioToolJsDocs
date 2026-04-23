---
title: What's New
parent: Getting Started
nav_order: 2
---

# What's New

This page tracks notable changes to the **@audiotool/nexus** package and this documentation site.

---

## v0.0.15 — Current Release

### Added (0.0.15)

- **PresetUtil GM helpers** — Added `client.presets.getInstrument(...)`, `client.presets.getDrums(...)`, `client.presets.gmInstruments`, and `client.presets.gmDrums`.
- **Improved defaults** — Newly created entities now align with DAW defaults more closely.
- **Consolidation updates** — More robust behavior while modifying projects alongside other participants.

### Breaking changes introduced in 0.0.13/0.0.14

- Browser auth now uses `audiotool({ clientId, redirectUrl, scope })` instead of `getLoginStatus()`.
- Client API is now flat:
  - `client.api.projectService` → `client.projects`
  - `client.api.userService` → `client.users`
  - `client.api.sampleService` → `client.samples`
  - `client.api.projectRoleService` → `client.projectRoles`
  - `client.api.audioGraphService` → `client.audioGraph`
  - `client.api.presets` → `client.presets`
- Synced document creation was renamed:
  - `client.createSyncedDocument({ project })` → `client.open(project)`
- `createAudiotoolClient` now takes `{ auth, transport?, wasm? }` instead of `{ authorization: ... }`.
- Added server-oriented auth helpers: `createPATAuth`, `createServerAuth`.
- Added browser token handoff helper on authenticated browser result: `exportTokens()`.

### New platform support in modern versions

- `@audiotool/nexus/node` export for Node.js/Bun/Deno workflows.
- Node transport + wasm loader helpers:
  - `createNodeTransport()`
  - `createDiskWasmLoader()`

---

## v0.0.11

### Added

<!-- TODO: fill from git log -->

### Changed

- Internal API reference generation now aligns with the canonical Nexus export surface.

### Fixed

- Documentation examples and reference links were corrected to use official names and signatures.

---

## v0.0.10

### Added

<!-- TODO: fill from git log -->

### Changed

- Internal API reference generation now aligns with the canonical Nexus export surface.

### Fixed

- Documentation examples and reference links were corrected to use official names and signatures.

---

## Earlier versions

<!-- TODO: fill from git log -->

---

## Package entry points

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
