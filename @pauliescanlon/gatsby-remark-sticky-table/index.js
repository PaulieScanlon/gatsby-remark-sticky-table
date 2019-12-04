const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

const VISITOR = "table"
const DEFAULT_OPTION_HEIGHT = 250
const BASE_CLASS = "remark-sticky-table"

const {
  stickyTable,
  stickTableWrapper,
  stickTableTable,
  stickyTableTr,
  stickyTableThead,
  stickyTableTbody,
} = require("./css")

module.exports = ({ markdownAST }, pluginOptions) => {
  const { height, backgroundColor } = pluginOptions

  visit(markdownAST, `${VISITOR}`, node => {
    let { type } = node
    if (type !== `${VISITOR}`) return

    let tableChildren = null

    if (type === `${VISITOR}`) {
      tableChildren = node.children.map((row, index) => {
        return `<div class='${BASE_CLASS}-tr' style='${stickyTableTr}'>${row.children
          .map(
            cell =>
              `<div class='${BASE_CLASS}-${
                index === 0 ? "thead" : "tbody"
              }' style='${
                index === 0
                  ? backgroundColor
                    ? `background-color:${backgroundColor}`
                    : ""
                  : ""
              };  ${
                index === 0 ? `${stickyTableThead}` : `${stickyTableTbody}`
              }'>${toString(cell)}</div>`
          )
          .join("")}</div>`
      })
    }

    const _html = `<div class='${BASE_CLASS}' style='${stickyTable} height: ${
      height ? `${height}px` : `${DEFAULT_OPTION_HEIGHT}px`
    };'>
                   <div class='${BASE_CLASS}-wrapper' style='${stickTableWrapper}'>
                    <div class='${BASE_CLASS}-table' style='${stickTableTable}'>${tableChildren.join(
      ""
    )}</div>
                    <div>
      </div>`

    node.type = "html"
    node.children = undefined
    node.value = _html
  })

  return markdownAST
}
