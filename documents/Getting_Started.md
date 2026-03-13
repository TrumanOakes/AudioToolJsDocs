# Getting Started

**@audiotool/nexus v0.0.12**

## Initial Setup

### 1. Install Node.js and npm

Download and install [Node.js](https://nodejs.org/).

### 2. Scaffold a Vite project

```bash
npm create vite@latest my-app -- --template vanilla-ts
cd my-app
npm install
```

### 3. Add the Nexus package

```bash
npm install @audiotool/nexus
```

### 4. Configure Vite dev server

Modify `vite.config.ts` to run on `127.0.0.1:5173`:

```typescript
import { defineConfig } from "vite"
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
})
```

### 5. Launch the development server

```bash
npm run dev
```

## Authorization Process

Register your application at [developer.audiotool.com/applications](https://developer.audiotool.com/applications) with the following configuration:

- **Redirect URI:** `http://127.0.0.1:5173/`
- **Required scope:** `project:write`

Check login status and create a login/logout button interface that toggles authentication state by invoking appropriate methods from the status object.

## Client Creation & Project Setup

Initialize an `AudiotoolClient` using the authenticated status object, then establish a synced document connection to an Audiotool project URL from the web application.

## Real-Time Event Handling

Subscribe to document changes through the events system. Initialize synchronization by calling the `start()` method.

```typescript
await document.start();

document.events.onCreate("tonematrix", (entity) => {
  console.log("tonematrix created", entity);
});
```

## Document Modification

Modify project state using `nexus.modify()` with a transaction builder:

```typescript
await nexus.modify((t) => {
  t.create("tonematrix", {});
  t.update(entity.fields.someParam, newValue);
})
```

Supports creation and updating of document elements like tone matrices.

## Cleanup

Terminate synchronization by calling `stop()`, which finalizes pending changes and transitions the document to read-only mode for querying only.

```typescript
await document.stop();
```
