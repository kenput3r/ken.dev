import * as React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <Component className="page-width">
      <footer>
        <a href="https://github.com/kenput3r" title="Kenneth Lyerly on GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kenput3r/" title="Kenneth Lyerly on LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <span>© {new Date().getFullYear()} Kenneth Lyerly</span>
      </footer>
    </Component>
  )
}

export default Footer

const Component = styled.div`
  padding-top: 1.45rem;
  padding-bottom: 1.45rem;
  a {
    color: var(--kd-black);
    display: inline-block;
    margin-right: 10px;
  }
  span {
    display: inline-block;
  }
`