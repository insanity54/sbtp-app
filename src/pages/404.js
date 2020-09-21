import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>E-mail the webmaster? <a href="mailto:sbtp@warpmail.net">sbtp@warpmail.net</a></p>
  </Layout>
)

export default NotFoundPage
