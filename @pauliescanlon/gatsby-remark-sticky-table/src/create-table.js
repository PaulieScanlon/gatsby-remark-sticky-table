const toString = require("mdast-util-to-string")

const {
  stickyTable,
  stickyTableWrapper,
  stickyTableTable,
  stickyTableTr,
  stickyTableThead,
  stickyTableTh,
  stickyTableTbody,
  stickyTableTd,
} = require("./styles")

const createTable = (node, height, backgroundColor) => {
  return `
      <div ${stickyTable(height)}> 
      <div ${stickyTableWrapper()}>
          <table ${stickyTableTable()}>
      
            
               ${node.children
                 .map((row, index) => {
                   // console.log("row: ", row)
                   return index === 0
                     ? `<thead ${stickyTableThead()}>
                     <tr ${stickyTableTr()}>
                     ${row.children
                       .map(
                         head =>
                           `<th ${stickyTableTh(backgroundColor)}>${toString(
                             head
                           )}</th>`
                       )
                       .join("")}
                        </tr> 
                        </thead>`
                     : `<tbody ${stickyTableTbody()}>
                     <tr ${stickyTableTr()}>
                          ${row.children
                            .map(
                              body =>
                                `<td ${stickyTableTd()}>${toString(body)}</td>`
                            )
                            .join("")}
                         </tr>
                         </tbody>`
                 })
                 .join("")}
               
        
          </table>
      </div>
    </div>
  `
}

module.exports = {
  createTable,
}
