const { styled } = require("./styled")

const BASE_CLASS = "remark"

const stickyTable = height => {
  if (!height) return styled(BASE_CLASS, {})

  return styled(BASE_CLASS, {
    height,
  })
}

const stickyTableWrapper = () =>
  styled(BASE_CLASS, {
    width: "100%",
    height: "100%",
    overflow: "auto",
  })

const stickyTableTable = () => styled(BASE_CLASS, {})

const stickyTableTr = () => styled(BASE_CLASS, {})

const stickyTableThead = () => styled(BASE_CLASS, {})

const stickyTableTh = backgroundColor => {
  const getStyles = () => {
    if (!backgroundColor) return
    return {
      backgroundColor: backgroundColor,
    }
  }

  return styled(BASE_CLASS, {
    position: "sticky",
    display: "table-cell",
    width: "auto",
    minWidth: "auto",
    whiteSpace: "nowrap",
    top: "0px",
    zIndex: 2,
    ...getStyles(),
  })
}

const stickyTableTbody = () => styled(BASE_CLASS, {})

const stickyTableTd = () => [styled(BASE_CLASS, {})]

module.exports = {
  stickyTable,
  stickyTableWrapper,
  stickyTableTable,
  stickyTableTr,
  stickyTableThead,
  stickyTableTh,
  stickyTableTbody,
  stickyTableTd,
}
