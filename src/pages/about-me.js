import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"


const AboutMePage = () => {
  const tags = [{tag: "developer", weight: 6},{tag: "manager", weight: 3}, {tag: "leader", weight: 5}, {tag: "advertiser", weight: 2}, {tag: "engineer", weight: 6}, {tag: "admin", weight: 1}, {tag: "consultant", weight: 3}, {tag: "ad buyer", weight: 2}, {tag: "project manager", weight: 4}, {tag: "media specialist", weight: 1}, {tag: "mentor", weight: 4}, {tag: "marketer", weight: 2}, {tag: "husband", weight: 6}, {tag: "dog owner", weight: 5}]
  return (
    <Layout showHeader={true}>
      <Seo title="About Me" />
      <Page className="page-width">
        <h2 className="h2">I AM</h2>
        <section id="Tagcloud">
          {tags.map((obj, index) => <span key={`tag-${index}`} data-weight={obj.weight}>#{obj.tag.replace(/\s/g, "_")} </span>)}
        </section>
        <section id="Career">
          <h3 className="h2">CAREER</h3>
          <div className="row">
            <div className="flex-3">
              <p>My career path has been anything but linear. For years I wore multiple hats: engineer, ad buyer, department manager, and ERP admin, to name a few. My experience juggling all of these tasks, sometimes with help, sometimes without, has been exhausting but equally rewarding. I now lead an entire team of in-house developers, designers, and creatives and collaborate with agency partners to collectively build out highly successful full-funnel omnichannel campaigns.</p>
              <p>I'm one of the lucky ones. I genuinely love engineering, whether building a web app or a marketing campaign.</p>
            </div>
            <div className="flex-2">
              <StaticImage src="../images/computer.JPG" layout="fullWidth" placeholder="blurred" alt="Kenneth Lyerly's Computer in 2019" />
            </div>
          </div>
        </section>

        <section id="Podcasts">
          <h3 className="h2">FAVORITE PODCASTS</h3>
          <div className="row">
            <div className="col">
              <a href="https://podcasts.apple.com/us/podcast/syntax-tasty-web-development-treats/id1253186678" target="_blank" rel="noreferrer">
                <StaticImage src="../images/syntax.png" layout="fullWidth" placeholder="blurred" alt="Syntax" />
              </a>
            </div>

            <div className="col">
              <a href="https://podcasts.apple.com/us/podcast/today-in-digital-marketing/id1480295967" target="_blank" rel="noreferrer">
                <StaticImage src="../images/today-in-digital-marketing.jpeg" layout="fullWidth" placeholder="blurred" alt="Today In Digital Marketing" />
              </a>
            </div>

            <div className="col">
              <a href="https://podcasts.apple.com/us/podcast/techmeme-ride-home/id1355212895" target="_blank" rel="noreferrer">
                <StaticImage src="../images/tech-meme-ride-home.jpeg" layout="fullWidth" placeholder="blurred" alt="Tech Meme Ride Home" />
              </a>
            </div>
          </div>
        </section>

        <section id="Not">
          <h3 className="h2">WHAT I'M NOT</h3>
          <p>A decade of polymorphism has taught me that I am not a designer, accountant, cyber security expert, network engineer, or photographer. I do, however, work with and sometimes manage these kinds of specialists.</p>
        </section>
      </Page>
    </Layout>
  )
}

export default AboutMePage

const Page = styled.div`
 color: var(--kd-black);
  .h2 {
    border-bottom: 2px solid var(--kd-black);
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
  [data-weight="1"] {
    font-size: calc(1 * 0.25rem + 0.5rem);
  }
  [data-weight="2"] {
    font-size: calc(2 * 0.25rem + 0.5rem);
  }
  [data-weight="3"] {
    font-size: calc(3 * 0.25rem + 0.5rem);
  }
  [data-weight="4"] {
    font-size: calc(4 * 0.25rem + 0.5rem);
  }
  [data-weight="5"] {
    font-size: calc(5 * 0.25rem + 0.5rem);
  }
  [data-weight="6"] {
    font-size: calc(6 * 0.25rem + 0.5rem);
  }
  #Career {
    .flex-2 {
      padding: 5px;
    }
    @media (max-width: 768px) {
      .row {
        flex-wrap: wrap-reverse;
      }
      .flex-2, .flex-3 {
        flex: none;
        width: 100%;
        padding: 0;
      }
    }
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .col {
    flex: 1;
    padding: 5px;
    .gatsby-image-wrapper {
      border-radius: 10px;
    }
  }
`