#!/usr/bin/env node

import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const NEXUS_SRC_DIR = resolve(process.env.NEXUS_SRC_DIR || "/tmp/nexus-src");
const NEXUS_DOCS_DIR = join(NEXUS_SRC_DIR, "src", "docs");
const GENERATED_TYPEDOC_MEDIA_DIR = join(GENERATED_DIR, "_media");
const GENERATED_PUBLIC_MEDIA_DIR = join(GENERATED_DIR, "media");
const GENERATED_PUBLIC_MEDIA_IMAGES_DIR = join(GENERATED_PUBLIC_MEDIA_DIR, "images");

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
    /\]\(([^)]*?)_media\/(login|api|overview|entities)\.html(#[^)]+)?\)/g,
    (match, prefix = "", name, hash = "") => {
      if (prefix.startsWith("http://") || prefix.startsWith("https://") || prefix.startsWith("mailto:")) {
        return match;
      }
      return `](${prefix}media/${name}.html${hash})`;
    },
  );
}

async function ensureMediaAssets() {
  const sourceImagesDir = join(NEXUS_DOCS_DIR, "images");
  const sourceEntitiesDoc = join(NEXUS_DOCS_DIR, "entities.md");
  await cp(GENERATED_TYPEDOC_MEDIA_DIR, GENERATED_PUBLIC_MEDIA_DIR, { recursive: true, force: true });
  await mkdir(GENERATED_PUBLIC_MEDIA_IMAGES_DIR, { recursive: true });
  await cp(sourceImagesDir, GENERATED_PUBLIC_MEDIA_IMAGES_DIR, { recursive: true, force: true });
  const entitiesContent = await readFile(sourceEntitiesDoc, "utf-8");
  const withFrontmatter = entitiesContent.startsWith("---\n")
    ? entitiesContent
    : `---\nnav_exclude: true\n---\n\n${entitiesContent}`;
  await writeFile(join(GENERATED_PUBLIC_MEDIA_DIR, "entities.md"), withFrontmatter, "utf-8");

  const overviewPath = join(GENERATED_PUBLIC_MEDIA_DIR, "overview.md");
  const overviewContent = await readFile(overviewPath, "utf-8");
  const normalizedOverview = overviewContent.replace(/\]\(\.\/entities\.html\)/g, "](./entities.md)");
  if (normalizedOverview !== overviewContent) {
    await writeFile(overviewPath, normalizedOverview, "utf-8");
  }
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
