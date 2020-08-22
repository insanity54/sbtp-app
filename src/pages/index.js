import React from "react"
import { Box, Heading, Paragraph, Grid, Text } from "grommet"
import Link from '../components/Link'
import { UserSettings, Gift } from 'grommet-icons'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading level="2">Sakura Blossom Trading Post</Heading>
    <Paragraph>Dealing in Precious Memories Trading Cards and other Japanese collectibles.</Paragraph>
    <Grid columns="small" gap="medium" fill="horizontal">
      <Link style={{ textDecoration: 'none' }} to="/rewards">
        <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={() => {}} hoverIndicator>
          <Gift />
          <Text>
            Rewards
          </Text>
        </Box>
      </Link>
      <Link to="/settings">
        <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={() => {}} hoverIndicator>
          <UserSettings />
          <Text>
            Settings
          </Text>
        </Box>
      </Link>
    </Grid>
  </Layout>
)

export default IndexPage
