const visit = require("unist-util-visit")

const { table } = require("./utils/table")

const VISITOR = "table"

module.exports = ({ markdownAST }, pluginOptions) => {
  const { height, backgroundColor } = pluginOptions

  visit(markdownAST, `${VISITOR}`, node => {
    let { type } = node
    if (type !== `${VISITOR}`) return

    let html = null

    if (type === `${VISITOR}`) {
      html = table(node, height, backgroundColor)
    }

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
