import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = () => {
  return (
    <Component>
      <nav className="page-width">
        <Link to="/">Contact</Link>
        <Link to="/resume">CV</Link>
        <Link to="/swag-store">Swag Store</Link>
        <Link to="/about-me">About Me</Link>
      </nav>
    </Component>
  )
}

export default Navigation

const Component = styled.div`
  background-color: var(--kd-grey);
  border-bottom: 1px solid var(--kd-grey);
  a {
    color: var(--kd-black);
    display: inline-block;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 25px 15px 0;
    &[aria-current="page"] {
      text-decoration: underline;
    }
    @media (max-width: 767px) {
      font-size: 1rem;
      padding-right: 15px;
    }
  }
`