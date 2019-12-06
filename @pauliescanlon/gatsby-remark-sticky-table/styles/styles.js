const { styled } = require("../utils/styled")

const stickyTable = () => styled({ boxSizing: "border-box", width: "100%" })

const stickyTableWrapper = () =>
  styled({
    boxSizing: "border-box",
    position: "relative",
    height: "100%",
    overflow: "auto",
  })

const stickyTableTable = () =>
  styled({
    boxSizing: "border-box",
    display: "table",
    width: "100%",
    whiteSpace: "nowrap",
  })

const stickyTableTr = () =>
  styled({
    boxSizing: "border-box",
    display: "table-row",
    width: "100%",
    whiteSpace: "nowrap",
  })

const stickyTableThead = () =>
  styled({
    position: "sticky",
    boxSizing: "border-box",
    display: "table-cell",
    width: "auto",
    minWidth: "auto",
    top: "0px",
    zIndex: 2,
  })

const stickyTableTbody = () =>
  styled({
    position: "relative",
    boxSizing: "border-box",
    display: "table-cell",
    width: "auto",
    minWidth: "auto",
  })

module.exports = {
  stickyTable,
  stickyTableWrapper,
  stickyTableTable,
  stickyTableTr,
  stickyTableThead,
  stickyTableTbody,
}
