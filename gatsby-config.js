/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `divestMN`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `content`,
      path: `./src/content`,
    },
    // options: {
    //   name: `pages`,
    //   path: `./src/pages`
    // },
    __key: "pages",
  },
],
  
};