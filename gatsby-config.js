/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {}
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: "Cheese Burger",
    author: "qchen0126",
    description: "Welcome to my blog ! I'll share here a lot of things: my pieces of thinking, useful plugins that I created for using some tools, etc.",
    siteUrl: "https://qchen0126.github.io/",
  }
}
