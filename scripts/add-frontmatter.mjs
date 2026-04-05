#!/usr/bin/env node

/**
 * Post-processes TypeDoc-generated markdown files to add Jekyll frontmatter
 * compatible with the Just the Docs theme.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, basename, relative } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const PARENT_TITLE = "API Reference";

/** Map of filename stems to friendly display titles */
const MODULE_TITLES = {
  "README": "Overview",
  "index": "nexus (index)",
  "document": "document",
  "entities": "entities",
  "utils": "utils",
  "api/README": "api",
  "api/namespaces/sample": "api / sample namespace",
};

async function getAllMarkdownFiles(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllMarkdownFiles(fullPath, base));
    } else if (entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function processFile(filePath, navOrder) {
  const content = await readFile(filePath, "utf-8");

  // Skip if already has frontmatter
  if (content.startsWith("---\n")) return;

  const rel = relative(GENERATED_DIR, filePath).replace(/\.md$/, "");
  const title = MODULE_TITLES[rel] || basename(rel);

  // Determine parent: top-level files are children of "API Reference",
  // nested files use their directory as a grandparent chain
  const isTopLevel = !rel.includes("/");
  const depth = rel.split("/").length;

  let frontmatter;
  if (rel === "README") {
    // The generated index — redirect to our hand-written parent
    frontmatter = [
      "---",
      `title: "Generated Index"`,
      `parent: ${PARENT_TITLE}`,
      `nav_order: 1`,
      "---",
    ].join("\n");
  } else if (isTopLevel) {
    frontmatter = [
      "---",
      `title: "${title}"`,
      `parent: ${PARENT_TITLE}`,
      `nav_order: ${navOrder}`,
      `nav_exclude: false`,
      "---",
    ].join("\n");
  } else {
    // Nested pages — exclude from nav to avoid clutter
    frontmatter = [
      "---",
      `title: "${title}"`,
      `parent: ${PARENT_TITLE}`,
      `nav_exclude: true`,
      "---",
    ].join("\n");
  }

  const newContent = frontmatter + "\n\n" + content;
  await writeFile(filePath, newContent, "utf-8");
  console.log(`  Added frontmatter to: ${rel}.md`);
}

async function main() {
  const files = await getAllMarkdownFiles(GENERATED_DIR);
  console.log(`Processing ${files.length} generated markdown files...`);

  // Sort for deterministic nav_order
  files.sort((a, b) => a.localeCompare(b));

  let navOrder = 2; // Start at 2 since README gets 1
  for (const file of files) {
    await processFile(file, navOrder++);
  }

  console.log("Done.");
}

main().catch(console.error);
