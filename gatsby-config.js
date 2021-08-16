require("dotenv").config();
module.exports = {
  siteMetadata: {
    siteUrl: "https://wonderful-bohr-522582.netlify.app",
    sitTitleDefault: "Our Clothing Co.",
    hrefLang: "en",
    siteDescription:
      "Ecommerce demo using Gatsby, Shopify, SCSS, and Bootstrap.",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-sass",
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
  ],
};
