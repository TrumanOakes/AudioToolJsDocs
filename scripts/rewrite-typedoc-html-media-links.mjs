#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

const ROOT_DIR = join(import.meta.dirname, "..");
const GENERATED_DIR = join(ROOT_DIR, "api-reference", "generated");

const LEGACY_MEDIA_MAP = {
  "login.md": "working-with-audiotool-projects/sign-in-and-connect.html",
  "overview.md": "reference/document-model.html",
  "api.md": "reference/platform-api-types.html",
  "entities.md": "reference/entity-reference.html",
};

async function getAllHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllHtmlFiles(fullPath));
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function rewriteLegacyMediaHref(href, htmlFilePath) {
  const baseHref = href.split("#")[0];
  const hash = href.includes("#") ? `#${href.split("#").slice(1).join("#")}` : "";
  const mediaName = baseHref.replace(/^(\.\.\/)+media\//, "");
  const mapped = LEGACY_MEDIA_MAP[mediaName];
  if (!mapped) {
    return null;
  }

  const fromDir = dirname(htmlFilePath);
  const absoluteTarget = join(ROOT_DIR, mapped);
  const relativeTarget = relative(fromDir, absoluteTarget).replaceAll("\\", "/");
  return `${relativeTarget}${hash}`;
}

function rewriteContent(content, htmlFilePath) {
  return content.replace(/href="((?:\.\.\/)+media\/[^"#]+(?:#[^"]*)?)"/g, (full, href) => {
    const rewritten = rewriteLegacyMediaHref(href, htmlFilePath);
    if (!rewritten) {
      return full;
    }
    return `href="${rewritten}"`;
  });
}

async function main() {
  const htmlFiles = await getAllHtmlFiles(GENERATED_DIR);
  let changedCount = 0;

  for (const file of htmlFiles) {
    const original = await readFile(file, "utf-8");
    const updated = rewriteContent(original, file);
    if (updated !== original) {
      await writeFile(file, updated, "utf-8");
      changedCount += 1;
    }
  }

  console.log(`Rewrote legacy TypeDoc media links in ${changedCount} HTML files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
