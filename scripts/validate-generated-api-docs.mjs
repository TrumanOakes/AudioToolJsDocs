#!/usr/bin/env node

import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");

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

const REQUIRED_INDEX_PATHS = [
  "README.md",
  "index.md",
  "api/README.md",
  "api/index.md",
  "index/README.md",
  "index/index.md",
  "document/README.md",
  "document/index.md",
  "entities/README.md",
  "entities/index.md",
  "utils/README.md",
  "utils/index.md",
];

async function ensureRequiredIndexes() {
  const missing = [];
  for (const relPath of REQUIRED_INDEX_PATHS) {
    const abs = join(GENERATED_DIR, relPath);
    try {
      const s = await stat(abs);
      if (!s.isFile()) {
        missing.push(relPath);
      }
    } catch {
      missing.push(relPath);
    }
  }
  return missing;
}

function findMalformedModuleRows(content) {
  const findings = [];
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // When module index descriptions accidentally inline nested tables,
    // rows look like: "| [X](...) | key | value --- | --- ..."
    if (/^\|\s*\[[^\]]+\]\([^)]+\)\s*\|\s*key\s*\|\s*value/.test(line)) {
      findings.push({
        line: i + 1,
        reason: "module row contains nested key/value table content",
      });
    }
  }
  return findings;
}

async function main() {
  const missingIndexes = await ensureRequiredIndexes();
  if (missingIndexes.length > 0) {
    console.error("Missing required generated index files:");
    for (const rel of missingIndexes) {
      console.error(`  - ${rel}`);
    }
    process.exit(1);
  }

  const files = await getAllMarkdownFiles(GENERATED_DIR);
  const problems = [];

  for (const file of files) {
    const rel = relative(GENERATED_DIR, file);
    if (!rel.endsWith("README.md")) continue;

    const content = await readFile(file, "utf-8");
    const malformedRows = findMalformedModuleRows(content);
    if (malformedRows.length > 0) {
      for (const finding of malformedRows) {
        problems.push(`${rel}:${finding.line} ${finding.reason}`);
      }
    }
  }

  if (problems.length > 0) {
    console.error("Malformed generated API docs detected:");
    for (const problem of problems) {
      console.error(`  - ${problem}`);
    }
    process.exit(1);
  }

  console.log("Generated API docs validation passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
