#!/usr/bin/env node

import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const NEXUS_SRC_DIR = resolve(process.env.NEXUS_SRC_DIR || "/tmp/nexus-src");
const NEXUS_DOCS_DIR = join(NEXUS_SRC_DIR, "src", "docs");
const GENERATED_TYPEDOC_MEDIA_DIR = join(GENERATED_DIR, "_media");
const GENERATED_TYPEDOC_MEDIA_IMAGES_DIR = join(GENERATED_TYPEDOC_MEDIA_DIR, "images");
const SITE_ROOT_DIR = join(import.meta.dirname, "..");

const MEDIA_GUIDE_DESTINATIONS = {
  "login.html": join(SITE_ROOT_DIR, "working-with-audiotool-projects", "sign-in-and-connect.md"),
  "api.html": join(SITE_ROOT_DIR, "reference", "platform-api-types.md"),
  "overview.html": join(SITE_ROOT_DIR, "reference", "document-model.md"),
  "entities.html": join(SITE_ROOT_DIR, "reference", "entity-reference.md"),
};

function trimPipes(value) {
  return value.replace(/^\s*\|\s*/, "").replace(/\s*\|\s*$/, "");
}

/**
 * Some entity module descriptions include inline metadata tables:
 *   key | value
 *   --- | ---
 *   type | entity key
 * These rows break module index table rendering when embedded in a single
 * markdown cell. Collapse them into semicolon-separated text before Jekyll render.
 */
function collapseEntityMetadataRows(content) {
  return content.replace(/\| \[([^\]]+)\]\(([^)]+)\) \| ([^\n]+) \|/g, (match, title, href, rawDescription) => {
    if (!rawDescription.includes("key | value")) {
      return match;
    }

    const normalized = trimPipes(rawDescription)
      .replace(/\s*--- \| ---\s*/g, "; ")
      .replace(/\s*\|/g, ": ")
      .replace(/\s{2,}/g, " ")
      .replace(/;\s*:\s*/g, "; ")
      .trim();

    const safeDescription = normalized.endsWith(";")
      ? normalized.slice(0, -1).trim()
      : normalized;

    return `| [${title}](${href}) | ${safeDescription} |`;
  });
}

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

async function ensureDirectoryIndexes(files) {
  for (const file of files) {
    if (!file.endsWith("README.md")) continue;
    const indexFile = join(dirname(file), "index.md");
    const readmeContent = await readFile(file, "utf-8");
    // Keep index.md in lockstep with README.md so legacy GitHub Pages
    // branch mode can serve /dir/ routes reliably.
    await writeFile(indexFile, readmeContent, "utf-8");
  }
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

function rewriteMediaDocLinks(content, filePath) {
  return content.replace(/\]\(([^)]+)\)/g, (match, rawPath) => {
    if (rawPath.startsWith("http://") || rawPath.startsWith("https://") || rawPath.startsWith("mailto:")) {
      return match;
    }

    const [pathPart, hash = ""] = rawPath.split("#");
    const normalizedPath = pathPart.replace(/^\.\//, "");
    if (!normalizedPath.includes("_media/")) {
      return match;
    }

    const fileName = normalizedPath.slice(normalizedPath.lastIndexOf("/") + 1);
    const destination = MEDIA_GUIDE_DESTINATIONS[fileName];
    if (!destination) {
      return match;
    }

    const sourceDir = dirname(filePath);
    const relativePath = relative(sourceDir, destination)
      .replace(/\.md$/, ".html")
      .replaceAll("\\", "/");
    const hashSuffix = hash ? `#${hash}` : "";
    return `](${relativePath}${hashSuffix})`;
  });
}

async function ensureMediaAssets() {
  const sourceImagesDir = join(NEXUS_DOCS_DIR, "images");
  await mkdir(GENERATED_TYPEDOC_MEDIA_IMAGES_DIR, { recursive: true });
  await cp(sourceImagesDir, GENERATED_TYPEDOC_MEDIA_IMAGES_DIR, { recursive: true, force: true });
}

async function main() {
  await ensureMediaAssets();
  const files = await getAllMarkdownFiles(GENERATED_DIR);
  for (const file of files) {
    const content = await readFile(file, "utf-8");
    const withHtmlLinks = convertInternalMdLinksToHtml(content);
    const withDirectoryLinks = convertReadmeHtmlLinksToDirectoryLinks(withHtmlLinks);
    const withCollapsedEntityRows = collapseEntityMetadataRows(withDirectoryLinks);
    const updated = rewriteMediaDocLinks(withCollapsedEntityRows, file);
    if (updated !== content) {
      await writeFile(file, updated, "utf-8");
    }
  }
  await ensureDirectoryIndexes(files);
  console.log(`Patched internal links in ${files.length} generated markdown files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
