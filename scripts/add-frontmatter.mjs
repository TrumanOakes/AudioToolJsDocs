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

import { readdir, readFile, writeFile, rm } from "node:fs/promises";
import { join, basename, relative } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");
const PARENT_TITLE = "API Reference";

/** Map of directory names to sidebar-friendly module titles */
const MODULE_TITLES = {
  "index": "nexus (index)",
  "document": "document",
  "entities": "entities",
  "utils": "utils",
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

  if (parts.length === 1 && parts[0] === "README") {
    return { type: "top-readme" };
  }
  if (parts.length === 2 && parts[1] === "README") {
    return { type: "module-readme", module: parts[0] };
  }
  if (parts.length === 3) {
    return { type: "member", module: parts[0], memberName: parts[2] };
  }

  // Unexpected depth — warn and exclude from nav
  return { type: "unknown", relPath };
}

function buildFrontmatter(file, navOrder) {
  const lines = ["---"];

  switch (file.type) {
    case "top-readme":
      lines.push(`title: "Overview"`);
      lines.push(`parent: "${PARENT_TITLE}"`);
      lines.push(`nav_order: 0`);
      break;

    case "module-readme": {
      const title = MODULE_TITLES[file.module] || file.module;
      lines.push(`title: "${title}"`);
      lines.push(`parent: "${PARENT_TITLE}"`);
      lines.push(`has_children: true`);
      lines.push(`nav_order: ${navOrder}`);
      break;
    }

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

async function processFile(filePath, frontmatter) {
  const content = await readFile(filePath, "utf-8");
  if (content.startsWith("---\n")) return;

  const newContent = frontmatter + "\n\n" + content;
  await writeFile(filePath, newContent, "utf-8");
  console.log(`  ${relative(GENERATED_DIR, filePath)}`);
}

async function main() {
  // Remove _media directory (nexus project docs that conflict with our guides)
  await rm(join(GENERATED_DIR, "_media"), { recursive: true, force: true });

  const allFiles = await getAllMarkdownFiles(GENERATED_DIR);
  const classified = allFiles.map(f => {
    const rel = relative(GENERATED_DIR, f);
    return { path: f, rel, ...classifyFile(rel) };
  });

  // Warn about unexpected files
  const unknown = classified.filter(f => f.type === "unknown");
  for (const f of unknown) {
    console.warn(`  WARNING: unexpected path depth, excluding from nav: ${f.rel}`);
  }

  // Top-level README
  const topReadmes = classified.filter(f => f.type === "top-readme");

  // Module READMEs — sorted alphabetically for deterministic nav_order
  const moduleReadmes = classified.filter(f => f.type === "module-readme")
    .sort((a, b) => a.module.localeCompare(b.module));

  // Member files — grouped by module, sorted alphabetically within each
  const members = classified.filter(f => f.type === "member");
  const membersByModule = Object.groupBy(members, m => m.module);

  const total = topReadmes.length + moduleReadmes.length + members.length + unknown.length;
  console.log(`Processing ${total} generated markdown files...`);

  // Process top-level README
  for (const f of topReadmes) {
    await processFile(f.path, buildFrontmatter(f, 0));
  }

  // Process module READMEs
  let moduleOrder = 1;
  for (const f of moduleReadmes) {
    await processFile(f.path, buildFrontmatter(f, moduleOrder++));
  }

  // Process members
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

  console.log("Done.");
}

main().catch(console.error);
