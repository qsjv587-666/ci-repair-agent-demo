import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../src", import.meta.url);
const failures = [];

for (const file of listJsFiles(root.pathname)) {
  const source = readFileSync(file, "utf8");
  const matches = source.matchAll(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/g);
  for (const match of matches) {
    const variable = match[1];
    const count = source.match(new RegExp(`\\\\b${variable}\\\\b`, "g"))?.length ?? 0;
    if (count <= 1) {
      failures.push(`${file.replace(process.cwd() + "/", "")}: '${variable}' is assigned a value but never used  no-unused-vars`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("lint passed");

function listJsFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      files.push(...listJsFiles(path));
    } else if (path.endsWith(".js")) {
      files.push(path);
    }
  }
  return files;
}
