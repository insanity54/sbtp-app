import React from "react"
import Img from 'gatsby-image'
import { Heading, RadioButtonGroup, Box } from 'grommet'
import Link from '../components/Link'

import Layout from "../components/layout"
import SEO from "../components/seo"

const RewardsPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <Heading level="2">Rewards</Heading>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
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


export const pageQuery = graphql`  
  query IndexQuery {
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

export default RewardsPage
