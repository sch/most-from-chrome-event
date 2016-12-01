import nodeResolve from "rollup-plugin-node-resolve"

var pkg = require("./package.json")

export default {
  entry: "index.js",
  plugins: [nodeResolve({ jsnext: true })],
  moduleName: "fromChromeEvent",
  targets: [
    { dest: pkg["main"], format: "umd" },
    { dest: pkg["module"], format: "es" }
  ]
}
