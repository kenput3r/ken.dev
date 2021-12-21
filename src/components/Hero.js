import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <Component>
      <div className="row">
        <div className="col">
          <div className="image-container">
            <StaticImage src="../images/kenneth-lyerly.jpg" width={200} height={200} layout="fixed" placeholder="blurred" alt="Kenneth Lyerly" />
          </div>
        </div>

        <div className="col">
          <div className="h1">Hi, <br />I'm Ken 👋🏻</div>
          <div className="sub-heading">I currently live in Orange, CA <br />and work at Suavecito, Inc.</div>
        </div>
      </div>
    </Component>
  )
}

export default Hero

const Component = styled.div`
  color: var(--kd-black);
  padding: 1.45rem 0;

  .row {
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }

  .col {
    :nth-of-type(2) {
      padding-left: 1.45rem;
    }
    @media (max-width: 767px) {
      flex: none;
      :nth-of-type(2) {
        max-width: 100%;
        padding-left: 0;
      }
    }
  }

  .h1 {
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .sub-heading {
    font-size: 2rem;
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
    @media (max-width: 320px) {
      font-size: 1.3rem;
    }
  }

  .image-container {
    background-color: #fff;
    border: 1px dashed var(--kd-black);
    padding: 5px;
    @media (max-width: 767px) {
      margin-bottom: 1.45rem;
    }
  }
`