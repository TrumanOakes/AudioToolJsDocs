#!/usr/bin/env node

import { access, readdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { join } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");

const REQUIRED_PATHS = [
  "index.html",
  "modules/index.html",
  "modules/entities.html",
  "modules/document.html",
  "modules/utils.html",
  "modules/api.html",
  "interfaces/document.NexusEntity.html",
  "interfaces/document.FieldQuery.html",
  "types/index.AudiotoolClient.html",
  "types/entities.TinyGain.html",
];

const REQUIRED_CONTENT_CHECKS = [
  {
    path: "interfaces/document.NexusEntity.html",
    mustInclude: ["tsd-page-toolbar", "tsd-page-title", "On This Page"],
  },
  {
    path: "modules/document.html",
    mustInclude: ["Interface", "FieldQuery", "NexusEntity"],
  },
];

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const missing = [];

  for (const rel of REQUIRED_PATHS) {
    const abs = join(GENERATED_DIR, rel);
    if (!await exists(abs)) {
      missing.push(rel);
    }
  }

  const files = await readdir(GENERATED_DIR);
  if (!files.includes(".nojekyll")) {
    missing.push(".nojekyll");
  }

  // Legacy markdown artifacts must not be present in native TypeDoc HTML output.
  if (files.includes("media")) {
    const mediaEntries = await readdir(join(GENERATED_DIR, "media"));
    if (mediaEntries.some((entry) => entry.endsWith(".md"))) {
      missing.push("media/*.md (legacy artifact detected)");
    }
  }

  for (const check of REQUIRED_CONTENT_CHECKS) {
    const abs = join(GENERATED_DIR, check.path);
    if (!await exists(abs)) continue;
    const content = await readFile(abs, "utf-8");
    for (const marker of check.mustInclude) {
      if (!content.includes(marker)) {
        missing.push(`${check.path} missing marker "${marker}"`);
      }
    }

    if (content.includes("../media/") && content.includes(".md")) {
      missing.push(`${check.path} still contains legacy ../media/*.md links`);
    }
  }

  if (missing.length > 0) {
    console.error("Generated TypeDoc HTML validation failed.");
    for (const rel of missing) {
      console.error(`  - missing: ${rel}`);
    }
    process.exit(1);
  }

  console.log("Generated TypeDoc HTML validation passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
