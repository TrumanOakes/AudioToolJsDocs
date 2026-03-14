# Examples and Next Steps

This page shows small, complete examples to help you get oriented quickly after setup. Each example links to the relevant deep-dive page.

## Minimal working example (PAT auth)

The fastest way to try Nexus — no browser login required:

```typescript
import { createAudiotoolClient } from "@audiotool/nexus";

// 1. Create an authenticated client using a Personal Access Token
const client = await createAudiotoolClient({
  pat: "at_pat_your_token_here"
});

// 2. Open a synced document for a specific Audiotool project
const document = await client.createSyncedDocument({
  mode: "online",
  project: "https://beta.audiotool.com/studio?project=abc123"
});

// 3. Start syncing
await document.start();

// 4. List all projects accessible to this token
const projects = await client.api.projectService.listProjects({});
console.log(projects);

// 5. Stop when done
await document.stop();
```

## Listen for entity creation events

```typescript
await document.start();

document.events.onCreate("tonematrix", (entity) => {
  console.log("A tonematrix was created:", entity);
});
```

→ See [Listen for Changes](../working-with-audiotool-projects/listen-for-changes.md) for a full explanation.

## Create a device and update its gain

```typescript
let gainEntity;

await document.modify((t) => {
  gainEntity = t.create("tinyGain", {
    positionX: 100,
    positionY: 200,
  });
});

// Later, update the gain value
await document.modify((t) => {
  t.update(gainEntity.fields.gain, 0.75);
});
```

→ See [Create Devices](../working-with-audiotool-projects/create-devices.md) and [Make Safe Changes](../working-with-audiotool-projects/make-safe-changes.md).

## Query the current state of the document

```typescript
const notes = document.queryEntities.ofTypes("note").get();
console.log(`There are ${notes.length} notes in the project.`);
```

→ See [Find and Read Entities](../working-with-audiotool-projects/find-and-read-entities.md).

## Work offline (no backend needed)

```typescript
import { createOfflineDocument } from "@audiotool/nexus";

// No auth or network required
const document = await createOfflineDocument();

await document.modify((t) => {
  t.create("tinyGain", {});
});
```

→ See [Work Offline for Testing](../working-with-audiotool-projects/work-offline-for-testing.md).

---

## Where to go from here

| I want to… | Go to… |
|-----------|--------|
| Understand how the system is structured | [System Overview](../how-nexus-works/system-overview.md) |
| Learn about entities and fields | [Entities and Fields](../how-nexus-works/entities-and-fields.md) |
| Connect and open a project | [Sign In and Connect](../working-with-audiotool-projects/sign-in-and-connect.md) |
| Build with the REST API | [Use Platform APIs Through the Client](../working-with-audiotool-projects/use-platform-apis-through-the-client.md) |
| Look up a specific entity or type | [Entity Reference](../reference/entity-reference.md) |
| Fix an error | [Before You Debug](../errors-and-fixes/before-you-debug.md) |
