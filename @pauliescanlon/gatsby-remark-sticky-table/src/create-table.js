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

{
  /* <table>
  <thead>
    <th></th>
    <th></th>
    <th></th>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table> */
}

// ${node.children
//   .map(
//     (row, index) => `<tr ${stickyTableTr()}>
//     ${row.children
//       .map(
//         cell =>
//           `<div ${
//             index === 0
//               ? stickyTableThead(backgroundColor)
//               : stickyTableTbody()
//           }>
//           ${toString(cell)}</div>`
//       )
//       .join("")}
//     </tr>`
//   )
//   .join("")}

// ${row.children
//   .map(cell => {
//     if (index === 0) {
//       return `<thead ${stickyTableThead(backgroundColor)}>
//              ${toString(cell)}
//              </thead>`
//     }
//     return `<tbody ${stickyTableTbody()}>
//             ${toString(cell)}
//             </tbody>`
//   })
//   .join("")}
