#!/usr/bin/env node

/**
 * Post-processes TypeDoc-generated markdown files to add Jekyll frontmatter
 * compatible with the Just the Docs theme (3-level nesting).
 *
 * With outputFileStrategy: "members", TypeDoc produces:
 *   generated/README.md                         ← top-level index
 *   generated/<module>/README.md                ← module index
 *   generated/<module>/<kind>/<MemberName>.md   ← per-symbol page
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const PARENT_TITLE = "Reference";

/**
 * Map module directory names to the hand-written guide page titles.
 * Auto-generated member pages appear as children of these guides in the sidebar.
 */
const MODULE_TITLES = {
  api: "Platform API Types",
  index: "Package Entry Points",
  document: "Document Model",
  entities: "Entity Reference",
  utils: "Utilities",
};

/** Supplementary descriptions for pages where TypeDoc extracted no JSDoc */
const SUPPLEMENTARY_DESCRIPTIONS = {
  "api/functions/createAudiotoolAPI.md":
    "Factory function that creates an `AudiotoolAPI` instance for direct REST API access without opening a document.",
  "api/type-aliases/NeverThrowingFetch.md":
    "The function type returned by `neverThrowingFetch()`. A `fetch` wrapper that returns errors as values instead of throwing.",
  "api/type-aliases/NexusPreset.md":
    "Represents a device preset within a Nexus document — contains preset metadata and the entity type it applies to.",
  "api/type-aliases/RetryOptions.md":
    "Configuration options for retry behavior on transient network failures.",
};

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

function classifyFile(relPath) {
  const parts = relPath.replace(/\.md$/, "").split("/");

  // generated/README.md — TypeDoc artifact, not useful in nav
  if (parts.length === 1 && parts[0] === "README") {
    return { type: "nav-exclude" };
  }
  // generated/_media/*.md — nexus repo docs, keep as link targets but exclude from nav
  if (parts[0] === "_media") {
    return { type: "nav-exclude" };
  }
  // generated/<module>/README.md — nav-excluded (hand-written guides are the parents)
  if (parts.length === 2 && parts[1] === "README") {
    return { type: "nav-exclude" };
  }
  // generated/<module>/<kind>/<Name>.md — direct member
  if (parts.length === 3) {
    return { type: "member", module: parts[0], memberName: parts[2] };
  }
  // generated/<module>/namespaces/<ns>/README.md — namespace index, exclude from nav
  if (parts.length === 4 && parts[1] === "namespaces" && parts[3] === "README") {
    return { type: "nav-exclude" };
  }
  // generated/<module>/namespaces/<ns>/<kind>/<Name>.md — flatten into parent module
  if (parts.length === 5 && parts[1] === "namespaces") {
    return { type: "member", module: parts[0], memberName: parts[4] };
  }

  // Truly unexpected depth — warn and exclude from nav
  console.warn(`  WARNING: unexpected path depth, excluding from nav: ${relPath}`);
  return { type: "unknown", relPath };
}

function buildFrontmatter(file, navOrder) {
  const lines = ["---"];

  switch (file.type) {
    case "nav-exclude":
      lines.push(`nav_exclude: true`);
      break;

    case "member": {
      const parentTitle = MODULE_TITLES[file.module] || file.module;
      lines.push(`title: "${file.memberName}"`);
      lines.push(`parent: "${parentTitle}"`);
      lines.push(`grand_parent: "${PARENT_TITLE}"`);
      lines.push(`nav_order: ${navOrder}`);
      break;
    }

    default:
      lines.push(`title: "${file.relPath}"`);
      lines.push(`nav_exclude: true`);
      break;
  }

  lines.push("---");
  return lines.join("\n");
}

async function processFile(filePath, frontmatter, { injectNavExclude = false } = {}) {
  const content = await readFile(filePath, "utf-8");

  if (content.startsWith("---\n")) {
    // File already has frontmatter — optionally inject nav_exclude into it
    if (injectNavExclude && !content.includes("nav_exclude:")) {
      const endIdx = content.indexOf("\n---", 4);
      if (endIdx !== -1) {
        const patched = content.slice(0, endIdx) + "\nnav_exclude: true" + content.slice(endIdx);
        await writeFile(filePath, patched, "utf-8");
        console.log(`  + nav_exclude: ${relative(GENERATED_DIR, filePath)}`);
      }
    }
    return;
  }

  const newContent = frontmatter + "\n\n" + content;
  await writeFile(filePath, newContent, "utf-8");
  console.log(`  ${relative(GENERATED_DIR, filePath)}`);
}

/** Inject descriptions into pages where TypeDoc extracted none */
async function patchEmptyDescriptions() {
  for (const [relPath, description] of Object.entries(SUPPLEMENTARY_DESCRIPTIONS)) {
    const filePath = join(GENERATED_DIR, relPath);
    let content;
    try {
      content = await readFile(filePath, "utf-8");
    } catch {
      continue; // file doesn't exist in this build
    }

    // Check if there's already a description between the heading and "Defined in:"
    // Pattern: # heading\n\n> signature\n\nDefined in: ...
    // If "Defined in:" immediately follows the signature with no paragraph between, inject.
    const definedInIdx = content.indexOf("\nDefined in:");
    if (definedInIdx === -1) continue;

    // Look for existing description: a non-empty line between "> **..." signature and "Defined in:"
    const beforeDefined = content.slice(0, definedInIdx);
    const lines = beforeDefined.split("\n");

    // Find the signature line (starts with ">")
    let sigLineIdx = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].startsWith("> ")) {
        sigLineIdx = i;
        break;
      }
    }
    if (sigLineIdx === -1) continue;

    // Check if there's any non-empty content between signature and "Defined in:"
    const between = lines.slice(sigLineIdx + 1).filter(l => l.trim().length > 0);
    if (between.length > 0) continue; // already has content

    // Insert description after the "Defined in:" line
    const afterDefined = content.slice(definedInIdx);
    const definedLineEnd = afterDefined.indexOf("\n", 1);
    const definedLine = afterDefined.slice(0, definedLineEnd + 1);
    const rest = afterDefined.slice(definedLineEnd + 1);

    const patched = beforeDefined + definedLine + "\n" + description + "\n" + rest;
    await writeFile(filePath, patched, "utf-8");
    console.log(`  + description: ${relPath}`);
  }
}

async function ensureGeneratedDirExists() {
  try {
    await readdir(GENERATED_DIR);
  } catch {
    throw new Error(
      `Missing generated API directory at "${GENERATED_DIR}". Run "npm run docs:typedoc" first.`,
    );
  }
}

async function main() {
  await ensureGeneratedDirExists();
  const allFiles = await getAllMarkdownFiles(GENERATED_DIR);
  const classified = allFiles.map(f => {
    const rel = relative(GENERATED_DIR, f);
    return { path: f, rel, ...classifyFile(rel) };
  });

  const unknown = classified.filter(f => f.type === "unknown");

  // Nav-excluded files (top-level README, module READMEs, _media/, namespace READMEs)
  const navExcluded = classified.filter(f => f.type === "nav-exclude");

  // Member files — grouped by module, sorted alphabetically within each
  const members = classified.filter(f => f.type === "member");
  const membersByModule = Object.groupBy(members, m => m.module);

  const total = navExcluded.length + members.length + unknown.length;
  console.log(`Processing ${total} generated markdown files...`);

  // Process nav-excluded files (inject nav_exclude into pre-existing frontmatter too)
  for (const f of navExcluded) {
    await processFile(f.path, buildFrontmatter(f, 0), { injectNavExclude: true });
  }

  // Process members — they appear as children of hand-written guide pages
  for (const [, moduleMembers] of Object.entries(membersByModule || {})) {
    moduleMembers.sort((a, b) => a.memberName.localeCompare(b.memberName));
    let memberOrder = 1;
    for (const f of moduleMembers) {
      await processFile(f.path, buildFrontmatter(f, memberOrder++));
    }
  }

  // Process unknown files (nav_exclude)
  for (const f of unknown) {
    await processFile(f.path, buildFrontmatter(f, 0));
  }

  // Post-processing: patch empty descriptions
  await patchEmptyDescriptions();

  console.log("Done.");
}

main().catch(console.error);
