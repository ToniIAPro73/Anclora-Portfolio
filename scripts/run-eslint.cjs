const path = require("node:path");
const { spawnSync } = require("node:child_process");

const projectRoot = path.resolve(__dirname, "..");
const isWindows = process.platform === "win32";
const eslintBin = path.join(
  projectRoot,
  "node_modules",
  ".bin",
  isWindows ? "eslint.cmd" : "eslint"
);
const args = process.argv.slice(2);

const result = spawnSync(eslintBin, args.length ? args : ["."], {
  cwd: projectRoot,
  stdio: "inherit",
  shell: isWindows,
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
