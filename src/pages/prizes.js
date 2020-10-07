import React from "react"
import Img from 'gatsby-image'
import { Heading, Paragraph } from "grommet"
import Link from '../components/Link'
import { useGetPrizes } from '../operations/queries/getPrizes'

import Layout from "../components/layout"
import SEO from "../components/seo"


const PrizePage = () => {
  const { error, loading, data } = useGetPrizes();
  if (loading) return <Paragraph>Loading...</Paragraph>
  return (
    <Layout>
      <SEO title="Prizes" />
      <Heading level="2">Prizes</Heading>
      <Paragraph>Here is the current prize pool.</Paragraph>
      <p>{JSON.stringify(data, 0, 4)}</p>
      <ul>
        {data.prizes.map(prize => (
          <li key={prize.id}>
            <h2>
              <Link to={`/prize/${prize.id}`}>{prize.Title}</Link>
            </h2>
            <p>{prize.description}</p>
          </li>
        ))}
      </ul>

    </Layout>
  )
}


// export const prizeQuery = graphql`
//   query PrizeQuery {
//     allStrapiProduct {
//       edges {
//         node {
//           id
//           title
//           description
//           media {
//             localFile {
//               childImageSharp {
//                 fixed(width: 125, height: 200) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }`

export default PrizePage
