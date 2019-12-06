const {
  stickyTable,
  stickyTableWrapper,
  stickyTableTable,
  stickyTableTr,
  stickyTableThead,
  stickyTableTbody,
} = require("./styles")

describe("styles", () => {
  it("renders correct styles for stickyTable", () => {
    expect(stickyTable().class).toEqual("remark-sticky-table")
    expect(stickyTable().style).toEqual("box-sizing: border-box; width: 100%;")
  })
  it("renders correct styles for stickyTableWrapper", () => {
    expect(stickyTableWrapper().class).toEqual("remark-sticky-table-wrapper")
    expect(stickyTableWrapper().style).toEqual(
      "box-sizing: border-box; position: relative; height: 100%; overflow: auto;"
    )
  })
  it("renders correct styles for stickyTableTable", () => {
    expect(stickyTableTable().class).toEqual("remark-sticky-table-table")
    expect(stickyTableTable().style).toEqual(
      "box-sizing: border-box; display: table; width: 100%; white-space: nowrap;"
    )
  })
  it("renders correct styles for stickyTableTr", () => {
    expect(stickyTableTr().class).toEqual("remark-sticky-table-tr")
    expect(stickyTableTr().style).toEqual(
      "box-sizing: border-box; display: table-row; width: 100%; white-space: nowrap;"
    )
  })
  it("renders correct styles for stickyTableThead", () => {
    expect(stickyTableThead().class).toEqual("remark-sticky-table-thead")
    expect(stickyTableThead().style).toEqual(
      "position: sticky; box-sizing: border-box; display: table-cell; width: auto; min-width: auto; top: 0px; z-index: 2;"
    )
  })
  it("renders correct styles for stickyTableTbody", () => {
    expect(stickyTableTbody().class).toEqual("remark-sticky-table-tbody")
    expect(stickyTableTbody().style).toEqual(
      "position: relative; box-sizing: border-box; display: table-cell; width: auto; min-width: auto;"
    )
  })
})
