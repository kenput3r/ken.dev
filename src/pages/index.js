import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <Layout showHeader={true}>
      <Seo title="Contact" />
      <Page className="page-width">
        <Hero />
        <h2>Let's Connect</h2>
        <div className="row">
          <div className="col details">
            <div className="row">
              <div className="label">Text me:</div>
              <div className="value"><a href="sms:19493869057">949.386.9057</a></div>
            </div>

            <div className="row">
              <div className="label">Email me:</div>
              <div className="value"><a href="mailto:hey@ken.dev">hey@ken.dev</a></div>
            </div>

            <div className="row">
              <div className="label">DM me:</div>
              <div className="value">@kenput3r</div>
            </div>
          </div>

          <div className="col form">
            <form id="Contact" name="Contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="Contact" />
              <input type="text" id="FullName" name="FullName" placeholder="Full Name" aria-label="Full Name" />
              <input type="email" id="Email" name="Email" placeholder="Email" aria-label="Email Address" />
              <input type="tel" id="Phone" name="Phone" placeholder="Phone" aria-label="Phone Number" />
              <textarea id="Message" name="Message" placeholder="Message" aria-label="Message" />
              <input type="submit" value="SEND MESSAGE" aria-label="Submit" />
            </form>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default IndexPage

const Page = styled.div`
  a {
    color: var(--kd-black);
    text-decoration: none;
  }
  .row {
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  .details {
    flex: 2;
    .row {
      div {
        flex: 1;
        font-size: 1rem;
        margin-bottom: 15px;
      }
    }
  }

  .label {
    font-weight: bold;
  }

  .form {
    flex: 3;
    margin-bottom: 1.45rem;
    input, textarea {
      background-color: var(--kd-grey);
      border: 0;
      box-sizing: border-box;
      margin-bottom: 15px;
      min-height: 30px;
    }
    @media (max-width: 767px) {
      flex: none;
      max-width: 100%;
    }
  }

  #FullName {
    width: 100%;
  }

  #Email {
    margin-right: 15px;
    width: calc(50% - 7.5px);
  }

  #Phone {
    width: calc(50% - 7.5px);
  }

  #Message {
    width: 100%;
  }

  input[type="submit"] {
    background-color: var(--kd-black);
    border: 0;
    color: #fff;
    display: block;
    margin-left: auto;
    padding: 5px 10px;
    :hover {
      cursor: pointer;
    }
  }
`