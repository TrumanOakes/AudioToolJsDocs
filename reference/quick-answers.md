# Quick Answers

Short answers to common questions about Nexus.

---

**Q: What platforms does Nexus support?**

Chrome, Firefox, Node.js, Bun, and Deno. The OAuth browser login flow requires additional setup on server-side runtimes — use Personal Access Tokens instead.

---

**Q: Do I need to call `document.start()` every time?**

Yes — for synced documents. `start()` initiates the backend connection. Without it, events will not fire and the document state will not be populated. Offline documents (`createOfflineDocument()`) do not require `start()`.

---

**Q: Why does `getLoginStatus` always report logged out on first call?**

This is expected. OAuth authentication happens via a browser redirect. The first call runs before any redirect has occurred, so there is no session yet. Implement a login button that calls `status.login()`, wait for the redirect, then call `getLoginStatus` again on page reload.

---

**Q: Can I run Nexus on `localhost` instead of `127.0.0.1`?**

No. The OAuth redirect URI registered for local development must be `http://127.0.0.1:5173/`. The OAuth system treats `localhost` and `127.0.0.1` as different origins.

---

**Q: What is the difference between an offline and a synced document?**

An offline document (`createOfflineDocument()`) runs locally with no network or auth. Changes are lost on reload. A synced document (`client.createSyncedDocument()`) connects to a real Audiotool project, persists changes, and broadcasts them to collaborators in real time. Both expose the same `modify()`, `events`, and `queryEntities` API.

---

**Q: How do ticks relate to musical time?**

Ticks are tempo-independent. The fixed constants are:
- `Ticks.Beat` = 3840 (one quarter note)
- `Ticks.SemiBreve` = 15360 (one whole note / one bar in 4/4)
- `Ticks.SemiQuaver` = 960 (one sixteenth note)

Use `secondsToTicks(seconds, bpm)` and `ticksToSeconds(ticks, bpm)` from the `utils` module to convert.

---

**Q: Can I modify a document from inside an event handler?**

No. The document lock is held during event dispatch. Calling `modify()` inside an event handler will deadlock. Schedule modifications with `setTimeout` or similar to run after the event handler returns.

---

**Q: What scopes do I need to register?**

At minimum, `project:write`. This allows reading and modifying projects. Check the developer portal for additional scopes if you need access to other resources.

---

**Q: Are Personal Access Tokens safe to use in browser apps?**

No. PATs grant full account access and must not be exposed in browser code. Use the OAuth flow for browser apps and PATs only for server-side scripts and bots.

---

**Q: How do I find an entity I just created?**

The return value of `t.create()` inside `modify()` is the new entity object:

```typescript
let newGain;
await document.modify((t) => {
  newGain = t.create("tinyGain", {});
});
// newGain is now available
```

---

**Q: Can I have multiple documents open at once?**

Yes. Each call to `createSyncedDocument()` or `createOfflineDocument()` creates an independent document object. You can work with multiple documents simultaneously.

---

**Q: Where do I report bugs or request features?**

[GitHub Repository](https://github.com/audiotool/nexus) — open an issue there. For questions and discussion, use [Discord](https://discord.gg/5Cde4Zvret).
