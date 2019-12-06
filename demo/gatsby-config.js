module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
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
        // plugins: [
        //   {
        //     resolve: `@pauliescanlon/gatsby-remark-sticky-table`,
        //     options: {
        //       height: 200,
        //       backgroundColor: "#e0f7fa",
        //     },
        //   },
        // ],
      },
    },
  ],
}
