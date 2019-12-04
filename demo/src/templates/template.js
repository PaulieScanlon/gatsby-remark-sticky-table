import React, { Fragment } from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { markdownRemark } = data
  return (
    <Fragment>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
