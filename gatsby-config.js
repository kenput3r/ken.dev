require("dotenv").config()
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ken.dev",
    author: "kenput3r",
    title: "Kenneth Lyerly",
    description: "Basic information about Kenneth Lyerly and his contact details."
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.shopify_password,
        storeUrl: process.env.shopify_store_url
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KennethLyerly`,
        short_name: `kenput3r`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f5f9fa`,
        display: `standalone`,
        icon: `src/images/kenneth-lyerly.png`
      },
    },
  ],
};
