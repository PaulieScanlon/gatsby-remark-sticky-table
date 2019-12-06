const toString = require("mdast-util-to-string")

const {
  stickyTable,
  stickyTableWrapper,
  stickyTableTable,
  stickyTableTr,
  stickyTableThead,
  stickyTableTbody,
} = require("../styles/styles")

const DEFAULT_OPTION_HEIGHT = 250

const getClass = index => {
  if (index === 0) {
    return stickyTableThead().class
  }
  return stickyTableTbody().class
}

const getBackgroundColor = backgroundColor => {
  if (backgroundColor) {
    return `background-color:${backgroundColor}`
  }
  return ""
}

const getStyle = (index, backgroundColor) => {
  if (index === 0) {
    return `${getBackgroundColor(backgroundColor)} ${stickyTableThead().style}`
  }

  return stickyTableTbody().style
}

const table = (node, height, backgroundColor) => {
  const html = `<div class='${stickyTable().class}' style='${
    stickyTable().style
  } height: ${height ? `${height}px` : `${DEFAULT_OPTION_HEIGHT}px`};'>
                 <div class='${stickyTableWrapper().class}' style='${
    stickyTableWrapper().style
  }'>
                  <div class='${stickyTableTable().class}' style='${
    stickyTableTable().style
  }'>
                        ${node.children
                          .map((row, index) => {
                            return `<div class='${
                              stickyTableTr().class
                            }' style='${
                              stickyTableTr().style
                            }'>${row.children
                              .map(
                                cell =>
                                  `<div class='${getClass(
                                    index
                                  )}' style='${getStyle(
                                    index,
                                    backgroundColor
                                  )}'>${toString(cell)}</div>`
                              )
                              .join("")}</div>`
                          })
                          .join("")}</div>
                  <div>
                </div>`

  return html
}

module.exports = {
  table,
}
