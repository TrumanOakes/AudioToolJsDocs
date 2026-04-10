---
title: Tips and Patterns
parent: How Nexus Works
nav_order: 7
---

# Tips and Patterns

Practical patterns that come up often when building with Nexus.

## Start with an offline document

When building new features, start with `createOfflineDocument()`. It requires no auth, no network, and resets cleanly every run. Switch to a synced document once your logic is working.

```typescript
import { createOfflineDocument } from "@audiotool/nexus";

const nexus = await createOfflineDocument();

// Develop and test all your logic here
await nexus.modify((t) => {
  t.create("tinyGain", {});
});

const gains = nexus.queryEntities.ofTypes("tinyGain").get();
console.log(gains.length); // 1
```

## Batch changes in one transaction

Multiple operations in a single `modify()` call are applied together — all succeed or none do. Prefer batching related changes rather than calling `modify()` many times in sequence:

```typescript
// Preferred: one transaction for related changes
await nexus.modify((t) => {
  const gain = t.create("tinyGain", { positionX: 100, positionY: 0 });
  t.update(gain.fields.displayName, "Master Bus");
});

// Avoid: separate transactions for tightly coupled changes
await nexus.modify((t) => { t.create("tinyGain", {}); });
await nexus.modify((t) => { t.update(gain.fields.displayName, "..."); });
```

## Hold references to created entities

The return value of `t.create()` is the new entity object. Capture it if you need to reference it immediately:

```typescript
await nexus.modify((t) => {
  const gain = t.create("tinyGain", {});
  const cable = t.create("audioCable", {
    // point the cable at the gain device
  });
});
```

## Use Ticks for timeline positioning

All timeline positions are measured in **ticks**, not seconds. Use the tick constants and conversion utilities to avoid hard-coding magic numbers:

```typescript
import { utils } from "@audiotool/nexus";
const { Ticks, secondsToTicks } = utils;

// Place a note at beat 3 of the first bar (0-indexed beats)
const beat3 = Ticks.Beat * 2; // two beats from start = beat 3

// Convert a duration from seconds at a given BPM
const duration = secondsToTicks(1.0, 120); // 1 second at 120 BPM
```

## Subscribe before calling start()

Set up your event listeners before calling `nexus.start()`. Events can fire immediately after start, and you do not want to miss them:

```typescript
// Set up listeners first
nexus.events.onCreate("note", handleNote);
nexus.events.onCreate("tinyGain", handleGain);

// Then start syncing
await nexus.start();
```

## Clean up subscriptions when done

If your code mounts and unmounts components or runs event-driven workflows, terminate subscriptions to avoid memory leaks and stale handlers:

```typescript
const sub = nexus.events.onCreate("note", handler);

// When no longer needed
sub.terminate();
```

## Authentication notes

For browser apps, use the OAuth flow — see [Authorization and Setup](../getting-started/authorization-and-setup.md).

For server-side scripts or automation (Node.js, CI jobs, bots), Personal Access Tokens are simpler than OAuth:

```typescript
const client = await createAudiotoolClient({
  pat: process.env.AUDIOTOOL_PAT // load from env — never hardcode
});
```

> **Do not use PATs in browser apps.** A PAT exposes full account access to anyone who can read your source code. PATs are for non-browser environments only.

## Query to check state, events to react to changes

Use queries for initial state when the document opens. Use events to stay in sync with ongoing changes. Mixing both gives you a consistent starting point plus continuous updates:

```typescript
await nexus.start();

const initial = nexus.queryEntities.ofTypes("note").get();
renderNotes(initial);

nexus.events.onCreate("note", addNote);
nexus.events.onRemove("note", removeNote);
nexus.events.onUpdate(/* specific field */, updateNote);
```

## Troubleshooting

If something is not working as expected, see [Before You Debug](../errors-and-fixes/before-you-debug.md) for a systematic approach.
