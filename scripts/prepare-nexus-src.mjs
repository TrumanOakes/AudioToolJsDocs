#!/usr/bin/env node

import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

const sourceDir = resolve(process.env.NEXUS_SRC_DIR || "/tmp/nexus-src");
const sourceGit = resolve(sourceDir, ".git");

if (!existsSync(sourceDir)) {
  console.log(`Cloning audiotool/nexus into ${sourceDir}...`);
  execSync(`git clone --depth 1 https://github.com/audiotool/nexus.git "${sourceDir}"`, {
    stdio: "inherit",
  });
} else if (existsSync(sourceGit)) {
  console.log(`Refreshing existing nexus source at ${sourceDir}...`);
  execSync(`git -C "${sourceDir}" fetch --depth 1 origin main`, { stdio: "inherit" });
  execSync(`git -C "${sourceDir}" checkout --force FETCH_HEAD`, { stdio: "inherit" });
} else {
  throw new Error(
    `NEXUS_SRC_DIR exists but is not a git repo: ${sourceDir}. Remove it or set NEXUS_SRC_DIR.`,
  );
}

console.log("Installing nexus dependencies...");
execSync("npm ci", { cwd: sourceDir, stdio: "inherit" });
