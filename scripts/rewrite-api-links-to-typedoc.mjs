#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const DOC_DIRS = [
  join(ROOT, "reference"),
  join(ROOT, "how-nexus-works"),
  join(ROOT, "working-with-audiotool-projects"),
  join(ROOT, "getting-started"),
  join(ROOT, "errors-and-fixes"),
  join(ROOT, "README.md"),
];

const KIND_MAP = {
  index: { functions: "functions", "type-aliases": "types" },
  document: { interfaces: "interfaces", "type-aliases": "types", functions: "functions" },
  entities: { "type-aliases": "types" },
  api: {
    classes: "classes",
    enumerations: "enums",
    functions: "functions",
    "type-aliases": "types",
    variables: "variables",
  },
  utils: {
    classes: "classes",
    interfaces: "interfaces",
    "type-aliases": "types",
    functions: "functions",
    variables: "variables",
  },
};

const MODULE_ENTRY_URLS = {
  index: "modules/index.html",
  entities: "modules/entities.html",
  document: "modules/document.html",
  utils: "modules/utils.html",
  api: "modules/api.html",
};

function normalizeName(name) {
  return name.replace(/\.html$/i, "");
}

function rewriteLegacyApiPath(pathPart) {
  const cleaned = pathPart.replace(/^\.\//, "");
  const moduleIndexMatch = cleaned.match(
    /api-reference\/generated\/(index|entities|document|utils|api)\/?$/,
  );
  if (moduleIndexMatch) {
    return `api-reference/generated/${MODULE_ENTRY_URLS[moduleIndexMatch[1]]}`;
  }

  const legacyMatch = cleaned.match(
    /api-reference\/generated\/(index|document|entities|api|utils)\/(functions|interfaces|type-aliases|classes|enumerations|variables)\/([^/#?]+\.html)$/i,
  );
  if (!legacyMatch) return null;

  const [, moduleName, kind, fileName] = legacyMatch;
  const typedocKind = KIND_MAP[moduleName]?.[kind];
  if (!typedocKind) return null;

  const cleanName = normalizeName(fileName);
  return `api-reference/generated/${typedocKind}/${moduleName}.${cleanName}.html`;
}

function rewriteAllLinks(content) {
  return content.replace(/\]\(([^)]+)\)/g, (match, rawPath) => {
    if (
      rawPath.startsWith("http://")
      || rawPath.startsWith("https://")
      || rawPath.startsWith("mailto:")
      || rawPath.startsWith("#")
    ) {
      return match;
    }

    const [pathPart, hash = ""] = rawPath.split("#");
    const rewritten = rewriteLegacyApiPath(pathPart);
    if (!rewritten) return match;

    const prefixMatch = pathPart.match(/^(\.\.\/)+/);
    const prefix = prefixMatch ? prefixMatch[0] : "";
    return `](${prefix}${rewritten}${hash ? `#${hash}` : ""})`;
  });
}

async function walkMarkdownFiles(target) {
  const files = [];
  if (target.endsWith(".md")) return [target];

  const entries = await readdir(target, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(target, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkMarkdownFiles(full));
    } else if (entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const targets = [];
  for (const dir of DOC_DIRS) {
    if (dir.endsWith(".md")) {
      targets.push(dir);
    } else {
      targets.push(...await walkMarkdownFiles(dir));
    }
  }

  let changed = 0;
  for (const file of targets) {
    const original = await readFile(file, "utf-8");
    const updated = rewriteAllLinks(original);
    if (updated !== original) {
      await writeFile(file, updated, "utf-8");
      changed += 1;
      console.log(`rewrote API links: ${relative(ROOT, file)}`);
    }
  }

  console.log(`Done. Updated ${changed} markdown files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
