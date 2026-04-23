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
    var existingTabs = toolbar.querySelector(".typedoc-top-tabs");
    if (existingTabs) return;

    var legacyTabs = toolbar.querySelector(".docs-api-tabs");
    if (legacyTabs) {
      legacyTabs.remove();
    }

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

    var title = toolbar.querySelector("a.title");
    if (title && title.nextSibling) {
      toolbar.insertBefore(tabs, title.nextSibling);
    } else if (title) {
      toolbar.appendChild(tabs);
    } else {
      toolbar.prepend(tabs);
    }

    var searchTrigger = toolbar.querySelector("#tsd-search-trigger");
    if (searchTrigger) {
      searchTrigger.classList.add("typedoc-search-trigger");
      if (!searchTrigger.querySelector(".typedoc-search-trigger-label")) {
        var searchLabel = document.createElement("span");
        searchLabel.className = "typedoc-search-trigger-label";
        searchLabel.textContent = "Search @audiotool/nexus Documentation";
        searchTrigger.appendChild(searchLabel);
      }

      if (tabs.nextSibling !== searchTrigger) {
        toolbar.insertBefore(searchTrigger, tabs.nextSibling);
      }
    }

    var toolbarLinks = toolbar.querySelector("#tsd-toolbar-links");
    if (toolbarLinks) {
      toolbar.appendChild(toolbarLinks);
    }
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

  .tsd-toolbar-contents {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .tsd-toolbar-contents > .title {
    margin-right: 0;
    flex: 0 0 auto;
  }

  #tsd-toolbar-links {
    margin-left: auto;
    margin-right: 0;
    gap: 1rem;
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
    margin-left: 0;
    flex: 0 0 auto;
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

  #tsd-search-trigger.typedoc-search-trigger {
    width: clamp(15rem, 34vw, 26rem);
    height: 2rem;
    border: 1px solid var(--typedoc-border);
    border-radius: 6px;
    background: #0d1117;
    color: var(--typedoc-muted);
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0 0.625rem;
    box-sizing: border-box;
    flex: 0 1 auto;
  }

  #tsd-search-trigger.typedoc-search-trigger:hover {
    border-color: var(--typedoc-link);
    color: var(--typedoc-text);
    background: #161b22;
  }

  #tsd-search-trigger .typedoc-search-trigger-label {
    font-size: 0.85rem;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #tsd-search-trigger svg {
    flex: 0 0 auto;
  }

  @media (max-width: 50rem) {
    #tsd-search-trigger.typedoc-search-trigger {
      width: 2.5rem;
      justify-content: center;
      padding: 0;
      flex: 0 0 auto;
    }

    #tsd-search-trigger .typedoc-search-trigger-label {
      display: none;
    }
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
