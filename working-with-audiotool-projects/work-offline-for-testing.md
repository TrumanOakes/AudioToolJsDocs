# Work Offline for Testing

Nexus supports a fully offline document mode for local development and testing. Offline documents use the same API as synced documents but require no auth, no network, and no project URL.

## Create an offline document

```typescript
import { createOfflineDocument } from "@audiotool/nexus";

const document = await createOfflineDocument();
```

No `start()` call needed. The document is immediately ready for modifications.

## What works offline

Everything works the same as in a synced document:

- `document.modify()` — create, update, remove entities
- `document.events` — subscribe to entity events
- `document.queryEntities` — query current state
- All entity types and field validation

The only difference: changes are not persisted. Everything resets when your script ends or the page reloads.

## Disable validation for rapid prototyping

When exploring the API or building new logic, you may want to temporarily disable strict schema validation:

```typescript
const document = await createOfflineDocument({ validated: false });
```

With validation disabled:

- Transactions are less likely to throw due to schema mismatches
- Invalid entity states may be allowed
- Useful for early development — not for production-like testing

Re-enable validation (`validated: true`, the default) to test that your logic produces valid documents.

## Offline development workflow

A recommended workflow:

1. **Develop with offline document** — no credentials, instant reset, fast iteration
2. **Enable validation** — make sure your transactions pass schema checks
3. **Switch to synced document** — connect to a real project and verify behavior
4. **Test with a throwaway project** — use a project you can reset if needed

```typescript
// During development:
const document = await createOfflineDocument();

// When ready to test live:
const client = await createAudiotoolClient({ pat: process.env.AUDIOTOOL_PAT });
const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=..."
});
await document.start();
```

## Offline vs synced: key differences

| Aspect | Offline | Synced |
|--------|---------|--------|
| Auth required | No | Yes |
| Network required | No | Yes |
| Changes persist | No | Yes |
| `start()` required | No | Yes |
| `stop()` needed | No | Yes (recommended) |
| Validation | Optional | Always on |
| Events from collaborators | No | Yes |

## Next step

→ [Use Platform APIs Through the Client](use-platform-apis-through-the-client.md) — call Audiotool REST APIs
