const fs = require("node:fs")
const path = require("node:path")

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf-8"))

const nextInstalledPath = path.join(process.cwd(), "node_modules", "next", "package.json")
if (!fs.existsSync(nextInstalledPath)) {
  console.error("Installed next package was not found in node_modules")
  process.exit(1)
}

const cleanNextVersion = readJson(nextInstalledPath).version
const swcPackages = [
  "@next/swc-win32-x64-msvc",
  "@next/swc-win32-arm64-msvc",
  "@next/swc-linux-x64-gnu",
  "@next/swc-linux-x64-musl",
  "@next/swc-darwin-x64",
  "@next/swc-darwin-arm64",
]

let foundSwcVersion = null

for (const swcName of swcPackages) {
  const swcPkgPath = path.join(process.cwd(), "node_modules", swcName, "package.json")
  if (fs.existsSync(swcPkgPath)) {
    foundSwcVersion = readJson(swcPkgPath).version
    break
  }
}

if (!foundSwcVersion) {
  console.warn("No platform @next/swc package found. Skipping version check.")
  process.exit(0)
}

if (cleanNextVersion !== foundSwcVersion) {
  console.error(
    `Version mismatch detected: next=${cleanNextVersion} vs @next/swc=${foundSwcVersion}. Align both to the same patch version.`
  )
  process.exit(1)
}

console.log(`next and @next/swc are aligned at ${cleanNextVersion}`)
