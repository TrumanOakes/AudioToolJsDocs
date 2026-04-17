#!/usr/bin/env node

import { readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const MEDIA_DIR = join(import.meta.dirname, "..", "api-reference", "generated", "media");

async function main() {
  let removed = 0;

  try {
    const entries = await readdir(MEDIA_DIR);
    for (const entry of entries) {
      if (entry.endsWith(".md")) {
        await rm(join(MEDIA_DIR, entry), { force: true });
        removed += 1;
      }
    }
  } catch {
    // No media directory is also valid for this pipeline.
  }

  console.log(`Removed ${removed} legacy TypeDoc media markdown files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
