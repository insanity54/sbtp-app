import React from "react"
import { Heading, Paragraph } from "grommet"
import MainMenu from '../components/MainMenu'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading level="2">Sakura Blossom Trading Post</Heading>
    <Paragraph>Dealing in Precious Memories Trading Cards and other Japanese collectibles.</Paragraph>
    <MainMenu />
  </Layout>
)

export default IndexPage
