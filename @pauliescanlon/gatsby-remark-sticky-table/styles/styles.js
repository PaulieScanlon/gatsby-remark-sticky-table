const { styled } = require("../utils/styled")

const DEFAULT_OPTION_HEIGHT = 350
const BASE_CLASS = "remark"

const commonStyles = {
  position: "relative",
  boxSizing: "border-box",
}

const stickyTable = height =>
  styled(BASE_CLASS, {
    ...commonStyles,
    width: "100%",
    height: `${height ? height : DEFAULT_OPTION_HEIGHT}px`,
  })

const stickyTableWrapper = () =>
  styled(BASE_CLASS, {
    ...commonStyles,
    width: "100%",
    height: "100%",
    overflow: "auto",
  })

const stickyTableTable = () =>
  styled(BASE_CLASS, {
    ...commonStyles,
    display: "table",
    width: "100%",
    whiteSpace: "nowrap",
  })

const stickyTableTr = () =>
  styled(BASE_CLASS, {
    ...commonStyles,
    display: "table-row",
    width: "100%",
    whiteSpace: "nowrap",
  })

const stickyTableThead = backgroundColor => {
  const getStyles = () => {
    if (!backgroundColor) return
    return {
      backgroundColor: backgroundColor,
    }
  }

  return styled(BASE_CLASS, {
    ...commonStyles,
    position: "sticky",
    display: "table-cell",
    width: "auto",
    minWidth: "auto",
    top: "0px",
    zIndex: 2,
    ...getStyles(),
  })
}

const stickyTableTbody = () =>
  styled(BASE_CLASS, {
    ...commonStyles,
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
