import React, { useState, useEffect, useContext } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "./Layout"
import Seo from "../components/Seo"
import { CartContext } from "./CartContext"

const ProductPage = ({ data }) => {
  const { product } = data
  const { handleCheckout } = useContext(CartContext)
  const [variants, setVariants] = useState([])
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])

  useEffect(() => {
    const color = product.variants[0].selectedOptions.find(options => options.name === 'Color')
    const variants = product.variants.filter(variant => variant.selectedOptions[0].value === color.value)
    setVariants(variants)
  }, [])
  return (
    <Layout showHeader={true}>
      <Seo title={`Swag Store | ${product.title}`} />
      <Page className="page-width">
        <div className="row">
          <div className="col">
            <GatsbyImage image={product.featuredImage.gatsbyImageData} alt={product.title} />
          </div>

          <div className="col">
            <h2>{product.title}</h2>
            <p>This product is mostly here to show you how cool Shopify's API is, but you can still buy it if you like 😎</p>
            <p>${selectedVariant.price}</p>
            <form id="VariantSelect">
              <label htmlFor="Size">Size</label>
              <select id="Size" name="Size" onChange={event => setSelectedVariant(variants[event.target.value])}>
                {variants.map((variant, index) => <option key={variant.id} value={index}>{variant.selectedOptions[1].value}</option>)}
              </select>
              <button onClick={(event) => handleCheckout(event, selectedVariant)}>BUY NOW</button>
            </form>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default ProductPage

export const query = graphql`
query ProductQuery($id: String) {
  product: shopifyProduct(id: {eq: $id}) {
    featuredImage {
      altText
      gatsbyImageData
    }
    shopifyId
    storefrontId
    title
    variants {
      price
      shopifyId
      storefrontId
      title
      id
      selectedOptions {
        name
        value
      }
    }
  }
}
`

const Page = styled.div`
  .col {
    flex: 1;
  }
  @media (max-width: 767px) {
    .row {
      flex-wrap: wrap;
    }
    .col {
      flex: none;
      width: 100%;
    }
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  select {
    width: calc(50% - 5px);
    margin-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  button {
    width: calc(50% - 5px);
    margin-left: 5px;
    background-color: var(--kd-black);
    border: 0;
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
    :hover {
      cursor: pointer;
    }
  }
`
