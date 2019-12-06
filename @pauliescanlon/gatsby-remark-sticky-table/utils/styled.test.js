const { styled } = require("./styled")

describe("styled", () => {
  it("returns correct name and styles", () => {
    const table = () => styled({ boxSizing: "border-box", width: "100%" })

    expect(table().class).toEqual("remark-table")
    expect(table().style).toEqual("box-sizing: border-box; width: 100%;")
  })
  it("returns an empty string if there's no object keys", () => {
    const table = () => styled({})
    expect(table()).toEqual("")
  })
})
