const toString = require("mdast-util-to-string")

const {
  stickyTable,
  stickyTableWrapper,
  stickyTableTable,
  stickyTableTr,
  stickyTableThead,
  stickyTableTbody,
} = require("./styles")

const createTable = (node, height, backgroundColor) => {
  return `
      <div ${stickyTable(height)}> 
      <div ${stickyTableWrapper()}>
          <div ${stickyTableTable()}>
                ${node.children
                  .map(
                    (row, index) => `<div ${stickyTableTr()}>
                    ${row.children
                      .map(
                        cell =>
                          `<div ${
                            index === 0
                              ? stickyTableThead(backgroundColor)
                              : stickyTableTbody()
                          }>
                          ${toString(cell)}</div>`
                      )
                      .join("")}
                    </div>`
                  )
                  .join("")}
          </div>
      </div>
    </div>
  `
}

module.exports = {
  createTable,
}
