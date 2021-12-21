import * as React from "react"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ResumePage = () => {
  return (
    <Layout>
      <Seo title="Resume" />
      <Page className="page-width">
        <section id="PageHeader">
          <div className="row">
            <div className="col name">
              <h1>Kenneth Lyerly</h1>
              <h2><a href="https://github.com/kenput3r" target="_blank" rel="noreferrer"><FaGithub /> github.com/kenput3r</a></h2>
            </div>

            <div className="col contact">
              <div className="p"><a href="tel:19493869057">949.386.9057</a></div>
              <div className="p"><a href="mailto:hey@ken.dev">hey@ken.dev</a></div>
              <div className="p">Orange, CA</div>
            </div>
          </div>
          <p>Hardworking leader and engineer specializing in e-commerce and passionate about developing for full-funnel campaigns.</p>
        </section>

        <section id="Skills">
          <h3>SKILLS</h3>
          <ul>
            <li>Vanilla Javascript</li>
            <li>React JS</li>
            <li>Gatsby JS</li>
            <li>REST API</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>Git</li>
            <li>ES6</li>
            <li>Node JS</li>
            <li>GraphQL</li>
            <li>HTML</li>
            <li>Shopify Liquid</li>
            <li>Boostrap</li>
            <li>+ a whole bunch more</li>
          </ul>
        </section>

        <section id="Experience">
          <h3>EXPERIENCE</h3>
          <h4>Engineering Manager (Hands On), Suavecito, Inc., <span>Aug 2019 - Current, Santa Ana, CA</span></h4>
          <ul>
            <li>Developed prototype applications to evaluate stack viability, such as React Native and Gatsby flavored headless Shopify stores.</li>
            <li>Utilized different management tools, including pull requests and code reviews to guide and mentor team members.</li>
            <li>Implemented Oracle Netsuite ERP and integration with RF-Smart WMS and several sales channels including Shopify, Amazon, and Ebay.</li>
            <li>Collaborated with in-house and industry partner marketing teams to design and architect landing pages and campaign-specific website functionality to optimize conversion funnels.</li>
            <li>Oversaw project progress, balancing between short and long-term goals to maximize individual and team performance.</li>
          </ul>

          <h4>Engineer, Suavecito, Inc., <span>Sep 2015 - Aug 2019, Santa Ana, CA</span></h4>
          <ul>
            <li>Developed new and modified existing Shopify themes.</li>
            <li>Developed microservices using Node JS and React JS to extend functionality of Dear WMS and Shopify.</li>
            <li>Developed custom Shopify functionality, such as lens customizations for glasses, custom shipping scripts, pre-ordering, and private B2B instances.</li>
            <li>Extended Wordpress sites by building child themes.</li>
            <li>Modified Existing Volusion themes.</li>
          </ul>

          <h4>Website Administrator, Suavecito, Inc., <span>Sep 2012 - Sep 2015, Santa Ana, CA</span></h4>
          <ul>
            <li>Customized layout and styled pages and blog posts.</li>
            <li>Optimized text content, images, and metadata for search engines.</li>
            <li>Created and managed PPC campaigns on Facebook and Google Ads.</li>
            <li>Defined and enforced consistent site structure for products, collections, pages, and blog posts.</li>
          </ul>
        </section>

        <section id="Education">
          <h3>EDUCATION</h3>
          <div className="row">
            <div className="flex-auto">
              <div className="p">Certificate Of Completion, Full Stack Programming </div>
              <h4>University of California, Irvine Division of Continuing Education <span>- Irvine, CA</span></h4>
              <div>JavaScript Bootcamp</div>
            </div>
            <div className="flex-auto text-right"><span>Dec 2017</span></div>
          </div>
        </section>
      </Page>
    </Layout>
  )
}

export default ResumePage

const Page = styled.div`
  color: var(--kd-black);
  padding-top: 1.45rem;
  #PageHeader {
    .row {
      @media (max-width: 767px) {
        flex-wrap: wrap;
      }
    }
  }
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
  h2 {
    margin-top: 0;
    a {
      display: flex;
      align-items: flex-end;
      font-weight: normal;
      svg {
        margin-right: 5px;
      }
    }
  }
  .p {
    margin-bottom: 5px;
  }
  h3 {
    border-bottom: 3px solid var(--kd-black);
    padding-bottom: 5px;
  }
  h4 {
    margin-bottom: 5px;
  }
  ul {
    @media (max-width: 767px) {
      padding-inline-start: 20px;
    }
  }
  #Skills {
    ul {
      columns: 2;
    }
    li {
      margin-bottom: 5px;
    }
  }
  h4 {
    span {
      font-weight: normal;
      @media (max-width: 767px) {
        display: block;
      }
    }
  }
  #Experience {
    ul {
      margin-block-start: 5px;
    }
    li {
      margin-bottom: 5px;
    }
  }
  #Education {
    margin-bottom: 3rem;
    h4 {
      margin-top: 5px;
    }
  }
`