# Before You Debug

When something is not working in Nexus, this page helps you quickly narrow down where the problem is.

## Quick diagnostic checklist

Work through these before diving into specific error pages:

### 1. Are you running on `127.0.0.1:5173`?

The OAuth login flow **requires** your dev server to run on `127.0.0.1` port `5173` — not `localhost`, not a different port. Check your `vite.config.ts`:

```typescript
export default defineConfig({
  server: { host: "127.0.0.1", port: 5173 }
})
```

→ [Setup Problems](setup-problems.md)

### 2. Does your registered redirect URI match exactly?

The redirect URI in your code must match the URI registered at [developer.audiotool.com/applications](https://developer.audiotool.com/applications) exactly — including trailing slashes.

→ [Authorization Problems](authorization-problems.md)

### 3. Did you call `document.start()` before using the document?

A synced document is not connected until `start()` is called. Events will not fire and some operations will fail if you skip this step.

```typescript
await document.start(); // required before events/changes
```

### 4. Are you calling `modify()` inside an event handler?

This causes a deadlock. The document lock is already held when events fire. Schedule modifications outside the callback.

→ [Query and Event Confusion](query-and-event-confusion.md)

### 5. Is the transaction failing validation?

`modify()` throws on validation errors. Wrap it in try/catch and log the error message:

```typescript
try {
  await document.modify((t) => { ... });
} catch (e) {
  console.error(e);
}
```

→ [Validation Errors](validation-errors.md)

### 6. Are you testing with a synced document when you should use an offline one?

For early development, use `createOfflineDocument()`. It is faster to iterate and does not risk corrupting real projects.

→ [Offline vs Synced Behavior](offline-vs-synced-behavior.md)

## Which error page to visit

| Symptom | Page |
|---------|------|
| Login fails or redirects wrong | [Authorization Problems](authorization-problems.md) |
| Dev server won't start, OAuth won't trigger | [Setup Problems](setup-problems.md) |
| `modify()` throws or transactions rejected | [Validation Errors](validation-errors.md) |
| Events not firing, queries returning wrong results | [Query and Event Confusion](query-and-event-confusion.md) |
| Offline document behaving differently from synced | [Offline vs Synced Behavior](offline-vs-synced-behavior.md) |

## General tips

- **Read the error message carefully.** Nexus error messages are specific — they usually tell you exactly which field or type failed.
- **Use `console.error` with the full error object**, not just `error.message`.
- **Test with an offline document first.** Removes auth and network from the picture.
- **Check the Discord** at [discord.gg/5Cde4Zvret](https://discord.gg/5Cde4Zvret) if you are stuck.
