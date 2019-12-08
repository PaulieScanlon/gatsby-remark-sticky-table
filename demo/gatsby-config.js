module.exports = {
  siteMetadata: {
    title: `@pauliescanlon/gatsby-remark-sticky-table`,
    description: `gatsby-remark-sticky-table is a plugin that creates sticky header tables from markdown.`,
    siteURL: "https://gatsby-remark-sticky-table.netlify.com",
    siteImage: "remark-sticky-table-og-image.jpg",
    author: "@pauliescanlon",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/layouts/layout.js`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["@pauliescanlon/gatsby-remark-sticky-table"],
      },
    },
  ],
}
