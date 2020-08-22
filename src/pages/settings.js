import React from "react"
import { Heading, RadioButtonGroup, Box, Grid } from 'grommet'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SettingsPage = ({ data }) => (
  <Layout>
    <SEO title="Settings" />
    <Heading level="2">Settings</Heading>
    <Box>
      <Grid>
        <Heading level="3">Theme</Heading>
        <RadioButtonGroup
          name="theme"
          options={['Light', 'Dark']}
        />
      </Grid>
    </Box>
  </Layout>
)



export default SettingsPage
