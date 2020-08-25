import React from "react"
import Img from 'gatsby-image'
import { Heading, Paragraph } from "grommet"
import Link from '../components/Link'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrizePage = ({ data }) => (
  <Layout>
    <SEO title="Prizes" />
    <Heading level="2">Prizes</Heading>
    <Paragraph>Here is the current prize pool.</Paragraph>
    <ul>
      {data.allStrapiProduct.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <Img fixed={document.node.media[0].localFile.childImageSharp.fixed} />
          <p>{document.node.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)


export const prizeQuery = graphql`  
  query PrizeQuery {
    allStrapiProduct {
      edges {
        node {
          id
          title
          description
          media {
            localFile {
              childImageSharp {
                fixed(width: 125, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }`

export default PrizePage
