/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Grommet, Anchor, Box, Text } from "grommet"
import theme from "../theme/theme.json"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          branding
        }
      }
    }
  `)

  return (
    <Grommet
      theme={theme}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header siteBranding={data.site.siteMetadata.branding} />
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
