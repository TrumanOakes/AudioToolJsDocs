#!/usr/bin/env node

import { execSync } from "node:child_process";

function run(command, options = {}) {
  execSync(command, { stdio: "inherit", ...options });
}

function main() {
  run("npm run docs:typedoc-html");
  run("node scripts/rewrite-api-links-to-typedoc.mjs");
  run("node scripts/inject-typedoc-nav.mjs");
  run("node scripts/validate-generated-api-html.mjs");
}

main();
