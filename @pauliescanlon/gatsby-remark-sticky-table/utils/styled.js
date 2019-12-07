const callerId = require("caller-id")
const hyphenate = require("hyphenate-style-name")
const addPx = require("add-px-to-style")

const styled = (baseClass, styles) => {
  const keys = Object.keys(styles)
  if (!keys.length) return ""

  return `class="${`${baseClass}-${hyphenate(
    callerId.getData().functionName
  )}`}" style="${keys
    .map(key => `${hyphenate(key)}: ${addPx(key, styles[key])};`)
    .join(" ")}"`
}

module.exports = {
  styled,
}
