const fs = require("node:fs")
const path = require("node:path")

const projectRoot = path.resolve(__dirname, "..")
const copies = [
  {
    from: path.join(projectRoot, ".next", "static"),
    to: path.join(projectRoot, ".next", "standalone", ".next", "static"),
  },
  {
    from: path.join(projectRoot, "public"),
    to: path.join(projectRoot, ".next", "standalone", "public"),
  },
]

for (const { from, to } of copies) {
  if (!fs.existsSync(from)) {
    continue
  }
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.cpSync(from, to, { recursive: true, force: true })
}
