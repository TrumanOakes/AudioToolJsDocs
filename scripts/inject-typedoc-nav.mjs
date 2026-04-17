#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const DOCS_BASE = "/AudioToolJsDocs/";
const API_BASE = "/AudioToolJsDocs/api-reference/generated/";

const SECTION_PATTERNS = [
  { title: "index", test: /\/modules\/index\.html$|\/(types|interfaces|classes|enums|variables|functions)\/index\./i },
  { title: "entities", test: /\/modules\/entities\.html$|\/(types|interfaces|classes|enums|variables|functions)\/entities\./i },
  { title: "document", test: /\/modules\/document\.html$|\/(types|interfaces|classes|enums|variables|functions)\/document\./i },
  { title: "utils", test: /\/modules\/utils\.html$|\/(types|interfaces|classes|enums|variables|functions)\/utils\./i },
  { title: "api", test: /\/modules\/api(\.sample)?\.html$|\/(types|interfaces|classes|enums|variables|functions)\/api\./i },
];

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

  function inferActiveSection(pathname) {
    var path = pathname.toLowerCase();
    var patterns = ${JSON.stringify(SECTION_PATTERNS.map((s) => ({ title: s.title, source: s.test.source, flags: s.test.flags })))};
    for (var i = 0; i < patterns.length; i++) {
      var pattern = patterns[i];
      var re = new RegExp(pattern.source, pattern.flags);
      if (re.test(path)) {
        return pattern.title;
      }
    }
    return "index";
  }

  function replaceSiteMenuWithApiSections() {
    var nav = document.querySelector(".site-menu nav.tsd-navigation:not(#tsd-sidebar-links)");
    if (!nav) return;

    var list = document.createElement("ul");
    list.className = "tsd-small-nested-navigation";

    var sections = [
      { title: "index", href: "${API_BASE}modules/index.html" },
      { title: "entities", href: "${API_BASE}modules/entities.html" },
      { title: "document", href: "${API_BASE}modules/document.html" },
      { title: "utils", href: "${API_BASE}modules/utils.html" },
      { title: "api", href: "${API_BASE}modules/api.html" }
    ];

    var active = inferActiveSection(window.location.pathname);

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = section.href;
      a.textContent = section.title;
      if (section.title === active) {
        a.className = "current";
      }
      li.appendChild(a);
      list.appendChild(li);
    }

    var heading = nav.querySelector("a");
    nav.innerHTML = "";
    if (heading) {
      nav.appendChild(heading);
    }
    nav.appendChild(list);
  }

  function run() {
    addTopTabs();
    replaceSiteMenuWithApiSections();
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
  if (content.includes("typedoc-top-tabs")) {
    return content;
  }
  return content.replace("</head>", `${injection}\n</head>`);
}

async function main() {
  const files = await getAllHtmlFiles(GENERATED_DIR);
  const injection = `${buildThemeOverrides()}\n${buildTabsAndSidebarScript()}`;

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
