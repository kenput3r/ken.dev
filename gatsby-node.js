const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pageable = await graphql(`
    query PagesQuery {
      allShopifyProduct {
        products: edges {
          product: node {
            handle
            id
          }
        }
      }
    }
  `)

  pageable.data.allShopifyProduct.products.forEach(
    async ({ product: { handle, id } }) => {
      createPage({
        path: `/swag-store/${handle}`,
        component: path.resolve(`./src/components/ProductPage.js`),
        context: {
          id,
          handle,
        },
      })
    }
  )
}