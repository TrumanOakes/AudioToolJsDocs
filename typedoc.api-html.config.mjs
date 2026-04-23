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
};

export default config;
