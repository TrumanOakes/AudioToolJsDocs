#!/usr/bin/env node

import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const NEXUS_SRC_DIR = resolve(process.env.NEXUS_SRC_DIR || "/tmp/nexus-src");
const NEXUS_DOCS_DIR = join(NEXUS_SRC_DIR, "src", "docs");
const GENERATED_MEDIA_DIR = join(GENERATED_DIR, "_media");
const GENERATED_MEDIA_IMAGES_DIR = join(GENERATED_MEDIA_DIR, "images");

async function getAllMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllMarkdownFiles(fullPath));
    } else if (entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function convertInternalMdLinksToHtml(content) {
  return content.replace(/\]\(([^)]+\.md)(#[^)]+)?\)/g, (match, path, hash = "") => {
    if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:")) {
      return match;
    }
    const htmlPath = path.slice(0, -3) + ".html";
    return `](${htmlPath}${hash})`;
  });
}

function convertReadmeHtmlLinksToDirectoryLinks(content) {
  return content.replace(/\]\(([^)]+README\.html)(#[^)]+)?\)/g, (match, path, hash = "") => {
    if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:")) {
      return match;
    }

    let directoryPath;
    if (path === "README.html") {
      directoryPath = "./";
    } else {
      directoryPath = path.slice(0, -"README.html".length);
    }

    return `](${directoryPath}${hash})`;
  });
}

function rewriteMediaDocLinks(content) {
  return content.replace(
    /\]\(([^)]+)_media\/(login|api|overview|entities)\.html(#[^)]+)?\)/g,
    (match, prefix = "", name, hash = "") => {
      if (prefix.startsWith("http://") || prefix.startsWith("https://") || prefix.startsWith("mailto:")) {
        return match;
      }
      return `](${prefix}_media/${name}/${hash ? hash.slice(1) : ""})`;
    },
  );
}

async function ensureMediaAssets() {
  const sourceImagesDir = join(NEXUS_DOCS_DIR, "images");
  const sourceEntitiesDoc = join(NEXUS_DOCS_DIR, "entities.md");
  await mkdir(GENERATED_MEDIA_IMAGES_DIR, { recursive: true });
  await cp(sourceImagesDir, GENERATED_MEDIA_IMAGES_DIR, { recursive: true, force: true });
  const entitiesContent = await readFile(sourceEntitiesDoc, "utf-8");
  await writeFile(join(GENERATED_MEDIA_DIR, "entities.md"), entitiesContent, "utf-8");
}

async function main() {
  await ensureMediaAssets();
  const files = await getAllMarkdownFiles(GENERATED_DIR);
  for (const file of files) {
    const content = await readFile(file, "utf-8");
    const withHtmlLinks = convertInternalMdLinksToHtml(content);
    const withDirectoryLinks = convertReadmeHtmlLinksToDirectoryLinks(withHtmlLinks);
    const updated = rewriteMediaDocLinks(withDirectoryLinks);
    if (updated !== content) {
      await writeFile(file, updated, "utf-8");
    }
  }
  console.log(`Patched internal links in ${files.length} generated markdown files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
