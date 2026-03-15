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

const document = await createOfflineDocument();

// Develop and test all your logic here
await document.modify((t) => {
  t.create("tinyGain", {});
});

const gains = document.queryEntities.ofTypes("tinyGain").get();
console.log(gains.length); // 1
```

## Batch changes in one transaction

Multiple operations in a single `modify()` call are applied together — all succeed or none do. Prefer batching related changes rather than calling `modify()` many times in sequence:

```typescript
// Preferred: one transaction for related changes
await document.modify((t) => {
  const gain = t.create("tinyGain", { positionX: 100, positionY: 0 });
  t.update(gain.fields.displayName, "Master Bus");
});

// Avoid: separate transactions for tightly coupled changes
await document.modify((t) => { t.create("tinyGain", {}); });
await document.modify((t) => { t.update(gain.fields.displayName, "..."); });
```

## Hold references to created entities

The return value of `t.create()` is the new entity object. Capture it if you need to reference it immediately:

```typescript
await document.modify((t) => {
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

Set up your event listeners before calling `document.start()`. Events can fire immediately after start, and you do not want to miss them:

```typescript
// Set up listeners first
document.events.onCreate("note", handleNote);
document.events.onCreate("tinyGain", handleGain);

// Then start syncing
await document.start();
```

## Clean up subscriptions when done

If your code mounts and unmounts components or runs event-driven workflows, terminate subscriptions to avoid memory leaks and stale handlers:

```typescript
const sub = document.events.onCreate("note", handler);

// When no longer needed
sub.terminate();
```

## Use PATs for scripts and automation

For scripts, CI jobs, or server-side bots, Personal Access Tokens are simpler than OAuth. Store them in environment variables:

```typescript
const client = await createAudiotoolClient({
  pat: process.env.AUDIOTOOL_PAT
});
```

Never commit PATs to version control.

## Query to check state, events to react to changes

Use queries for initial state when the document opens. Use events to stay in sync with ongoing changes. Mixing both gives you a consistent starting point plus continuous updates:

```typescript
await document.start();

const initial = document.queryEntities.ofTypes("note").get();
renderNotes(initial);

document.events.onCreate("note", addNote);
document.events.onRemove("note", removeNote);
document.events.onUpdate(/* specific field */, updateNote);
```

## Troubleshooting

If something is not working as expected, see [Before You Debug](../errors-and-fixes/before-you-debug.md) for a systematic approach.
