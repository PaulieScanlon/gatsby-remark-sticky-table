const visit = require("unist-util-visit")

const { createTable } = require("./utils/create-table")

const VISITOR = "table"

module.exports = ({ markdownAST }, pluginOptions) => {
  const { height, backgroundColor } = pluginOptions

  visit(markdownAST, `${VISITOR}`, node => {
    let html = null

    if (node.type === `${VISITOR}`) {
      html = createTable(node, height, backgroundColor)
    } else {
      return
    }

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
