const visit = require("unist-util-visit")
const { createTable } = require("./src/create-table")

const VISITOR = "table"

module.exports = ({ markdownAST }, pluginOptions) => {
  const { height, backgroundColor } = pluginOptions

  visit(markdownAST, `${VISITOR}`, node => {
    if (!node.type.indexOf(`${VISITOR}`) === -1) {
      return
    }

    const html = createTable(node, height, backgroundColor)

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
