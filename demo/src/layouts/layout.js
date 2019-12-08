import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query defaultQuery {
          site {
            siteMetadata {
              title
              description
              siteURL
              siteImage
              author
            }
          }
        }
      `}
      render={data => {
        const lang = "eng"

        const {
          title,
          description,
          siteImage,
          siteURL,
          author,
        } = data.site.siteMetadata

        return (
          <Fragment>
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${title}`}
              meta={[
                {
                  name: `description`,
                  content: description,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:description`,
                  content: description,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  property: `og:image`,
                  content: `${siteURL}/images/${siteImage}`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: author,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: description,
                },
              ]}
            />
            <main>{children}</main>
          </Fragment>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
