import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Product from "../components/Product"

const SwagStorePage = ({ data }) => {
  const { allShopifyProduct: { products } } = data
  return (
    <Layout showHeader={true}>
      <Seo title="Swag Store" />
      <Page className="page-width">
        <h2>Swag Store</h2>
        <p>Just a few items for your amusement. Shopify's GraphQL API powers this page with the help of Gatsby's gatsby-source-shopify plugin.</p>
        <div className="row">
          {products.map(({ product }) => <Product key={product.id} product={product} />)}
        </div>
      </Page>
    </Layout>
  )
}

export default SwagStorePage

export const query = graphql`
query Products {
  allShopifyProduct {
    products: edges {
      product: node {
        featuredImage {
          altText
          gatsbyImageData
        }
        handle
        priceRangeV2 {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        title
        id
      }
    }
  }
}
`

const Page = styled.div`
  .row {
    flex-wrap: wrap;
  }
`