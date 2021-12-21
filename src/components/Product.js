import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Product = ({ product }) => {
  const title = product.title.split(" - ")[0]
  const price = product.priceRangeV2.minVariantPrice.amount
  return (
    <Component>
      <GatsbyImage image={product.featuredImage.gatsbyImageData} alt={product.title} />
      <h3><Link to={product.handle}>{title}</Link><br /><small>from ${price}</small></h3>
    </Component>
  )
}

export default Product

const Component = styled.div`
  padding: 10px;
  max-width: calc(25% - 20px);
  @media (max-width: 767px) {
    max-width: calc(50% - 20px);
  }
  h3 {
    font-weight: normal;
    margin-top: 0;
  }
`