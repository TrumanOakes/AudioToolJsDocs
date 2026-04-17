const nexusSrcDir = process.env.NEXUS_SRC_DIR || "/tmp/nexus-src";

/** @type {Partial<import("typedoc").TypeDocOptions>} */
const config = {
  entryPoints: [
    `${nexusSrcDir}/src/exports/api.ts`,
    `${nexusSrcDir}/src/exports/index.ts`,
    `${nexusSrcDir}/src/exports/document.ts`,
    `${nexusSrcDir}/src/exports/entities.ts`,
    `${nexusSrcDir}/src/exports/utils.ts`,
  ],
  tsconfig: `${nexusSrcDir}/tsconfig.json`,
  entryPointStrategy: "resolve",
  out: "api-reference/generated",
  skipErrorChecking: true,
  excludePrivate: true,
  excludeInternal: true,
  excludeExternals: true,
  exclude: ["**/*.test.ts", "**/_*.ts"],
  readme: "none",
  name: "@audiotool/nexus",
  includeVersion: true,
  disableSources: false,
  sortEntryPoints: false,
  searchInComments: true,
  navigation: {
    includeCategories: false,
  },
  navigationLinks: {
    "Developer Hub": "https://developer.audiotool.com",
    "GitHub": "https://github.com/audiotool/nexus",
  },
  customCss: `${import.meta.dirname}/assets/css/typedoc-overrides.css`,
  customFooterHtml: `<script>
(() => {
  const marker = "/api-reference/generated";
  const path = window.location.pathname;
  const idx = path.indexOf(marker);
  const root = idx >= 0 ? (path.slice(0, idx) || "") + "/" : "/";
  const docsHref = root;
  const apiHref = root + "api-reference/generated/";
  const toolbar = document.querySelector(".tsd-page-toolbar .tsd-toolbar-contents");
  if (!toolbar) return;

  const tabs = document.createElement("nav");
  tabs.className = "docs-api-tabs";
  tabs.setAttribute("aria-label", "Documentation sections");

  const docsTab = document.createElement("a");
  docsTab.href = docsHref;
  docsTab.className = "docs-api-tab";
  docsTab.textContent = "Docs";

  const apiTab = document.createElement("a");
  apiTab.href = apiHref;
  apiTab.className = "docs-api-tab is-active";
  apiTab.textContent = "API";

  tabs.appendChild(docsTab);
  tabs.appendChild(apiTab);

  const titleLink = toolbar.querySelector("a.title");
  if (titleLink && titleLink.nextSibling) {
    toolbar.insertBefore(tabs, titleLink.nextSibling);
  } else {
    toolbar.prepend(tabs);
  }
})();
</script>`,
  customFooterHtmlDisableWrapper: true,
};

export default config;
