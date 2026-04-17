#!/usr/bin/env node

import { execSync } from "node:child_process";
import { rm } from "node:fs/promises";
import { join } from "node:path";

const GENERATED_DIR = join(import.meta.dirname, "..", "api-reference", "generated");

function run(command, options = {}) {
  execSync(command, { stdio: "inherit", ...options });
}

async function cleanGeneratedOutput() {
  // Prevent stale markdown artifacts from previous pipelines from leaking into nav.
  await rm(GENERATED_DIR, { recursive: true, force: true });
}

async function main() {
  await cleanGeneratedOutput();
  run("npm run docs:typedoc-html");
  run("node scripts/rewrite-api-links-to-typedoc.mjs");
  run("node scripts/rewrite-typedoc-html-media-links.mjs");
  run("node scripts/remove-typedoc-media-markdown.mjs");
  run("node scripts/inject-typedoc-nav.mjs");
  run("node scripts/validate-generated-api-html.mjs");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
