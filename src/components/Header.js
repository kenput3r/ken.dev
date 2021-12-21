import * as React from "react"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"

const Header = () => {
  return (
    <Component>
      <div className="row page-width">
        <div className="col name">
          <h1>Kenneth Lyerly</h1>
          <div className="h2"><a href="https://github.com/kenput3r" target="_blank" rel="noreferrer"><FaGithub /> github.com/kenput3r</a></div>
        </div>
      </div>
    </Component>
  )
}

export default Header

const Component = styled.header`
  color: var(--kd-black);
  padding: 1.45rem 0;
  a {
    color: var(--kd-black);
    text-decoration: none;
  }
  .col {
    flex: 1;
    &.contact {
      @media (max-width: 767px) {
        flex: none;
      }
    }
  }
  h1 {
    font-weight: normal;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-bottom: 5px;
    margin-top: 0;
  }
  .h2 {
    margin-top: 0;
    margin-bottom: 0;
    a {
      display: flex;
      align-items: flex-end;
      font-weight: normal;
      svg {
        margin-right: 5px;
      }
    }
  }
`