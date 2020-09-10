import React from "react"
import MainMenu from '../components/MainMenu'
import Welcome from '../components/Welcome'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <MainMenu />
  </Layout>
)

export default IndexPage
