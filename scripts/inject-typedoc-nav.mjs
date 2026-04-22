#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const DOCS_BASE = "/AudioToolJsDocs/";
const API_BASE = "/AudioToolJsDocs/api-reference/generated/";
const INJECTION_START = "<!-- AUTIOTOOL_TYPEDOC_NAV_INJECTION_START -->";
const INJECTION_END = "<!-- AUTIOTOOL_TYPEDOC_NAV_INJECTION_END -->";

async function getAllHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllHtmlFiles(full));
    } else if (entry.name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

function buildTabsAndSidebarScript() {
  return `
<script>
(function () {
  function addTopTabs() {
    var toolbar = document.querySelector(".tsd-toolbar-contents");
    if (!toolbar) return;
    if (toolbar.querySelector(".typedoc-top-tabs")) return;

    var tabs = document.createElement("nav");
    tabs.className = "typedoc-top-tabs";
    tabs.setAttribute("aria-label", "Documentation sections");

    var path = window.location.pathname;
    var isApi = path.indexOf("/api-reference/generated/") !== -1;

    var docs = document.createElement("a");
    docs.href = "${DOCS_BASE}";
    docs.className = "typedoc-top-tab" + (isApi ? "" : " is-active");
    docs.textContent = "Docs";

    var api = document.createElement("a");
    api.href = "${API_BASE}";
    api.className = "typedoc-top-tab" + (isApi ? " is-active" : "");
    api.textContent = "API";

    tabs.appendChild(docs);
    tabs.appendChild(api);
    toolbar.appendChild(tabs);
  }

  function run() {
    addTopTabs();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
</script>
`;
}

function buildThemeOverrides() {
  return `
<style>
  :root {
    --typedoc-bg: #0f1117;
    --typedoc-panel: #161b22;
    --typedoc-border: #30363d;
    --typedoc-text: #e6edf3;
    --typedoc-muted: #9da7b3;
    --typedoc-link: #58a6ff;
    --typedoc-link-hover: #79c0ff;
  }

  body {
    background: var(--typedoc-bg);
    color: var(--typedoc-text);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }

  .container {
    max-width: 100%;
  }

  .tsd-page-toolbar {
    background: var(--typedoc-panel);
    border-bottom: 1px solid var(--typedoc-border);
  }

  .tsd-navigation a,
  .tsd-page-toolbar a,
  a {
    color: var(--typedoc-link);
  }

  a:hover {
    color: var(--typedoc-link-hover);
  }

  .tsd-panel {
    border: 1px solid var(--typedoc-border);
    background: var(--typedoc-panel);
    border-radius: 8px;
  }

  .tsd-page-title h1,
  .tsd-page-title h2,
  .tsd-page-title h3,
  h1, h2, h3 {
    color: var(--typedoc-text);
  }

  .col-sidebar {
    border-left: 1px solid var(--typedoc-border);
  }

  .typedoc-top-tabs {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 1rem;
  }

  .typedoc-top-tab {
    display: inline-flex;
    align-items: center;
    height: 2rem;
    padding: 0 0.75rem;
    border-radius: 6px;
    border: 1px solid transparent;
    color: var(--typedoc-text);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .typedoc-top-tab:hover {
    border-color: var(--typedoc-border);
    background: #21262d;
    color: var(--typedoc-text);
    text-decoration: none;
  }

  .typedoc-top-tab.is-active {
    border-color: var(--typedoc-link);
    color: var(--typedoc-link);
    font-weight: 600;
  }
</style>
`;
}

function replaceHead(content, injection) {
  if (content.includes(INJECTION_START) && content.includes(INJECTION_END)) {
    return content.replace(
      new RegExp(`${INJECTION_START}[\\s\\S]*?${INJECTION_END}`, "m"),
      injection,
    );
  }

  // Backward compatibility for previously injected head block that rewrote
  // the TypeDoc sidebar into module-list-only links.
  const legacyInjectedBlockRegex =
    /<style>[\s\S]*?\.typedoc-top-tabs[\s\S]*?<\/style>\s*<script>[\s\S]*?replaceSiteMenuWithApiSections[\s\S]*?<\/script>\s*/m;
  if (legacyInjectedBlockRegex.test(content)) {
    return content.replace(legacyInjectedBlockRegex, `${injection}\n`);
  }

  return content.replace("</head>", `${injection}\n</head>`);
}

async function main() {
  const files = await getAllHtmlFiles(GENERATED_DIR);
  const injection = `${INJECTION_START}\n${buildThemeOverrides()}\n${buildTabsAndSidebarScript()}\n${INJECTION_END}`;

  for (const file of files) {
    const original = await readFile(file, "utf-8");
    const updated = replaceHead(original, injection);
    if (updated !== original) {
      await writeFile(file, updated, "utf-8");
    }
  }

  console.log(`Injected API nav/theme into ${files.length} TypeDoc HTML files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
