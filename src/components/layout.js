import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getUser } from '../services/auth'
import { gql, useQuery } from '@apollo/client'
import Header from "./header"
import "./layout.css"
import { Grommet, Box } from "grommet"
import theme from "../theme/theme.json"


const GET_THEME = gql`
  query DarkThemeQuery($id: ID!) {
    user(id: $id) {
      id
      darkTheme
    }
  }
`
const GET_SITE_METADATA = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        branding
      }
    }
  }
`

const Layout = ({ children }) => {

  const { loading, error, data: userData } = useQuery(GET_THEME, { variables: { id: getUser().id }});
  const staticData = useStaticQuery(GET_SITE_METADATA);


  return (
    <Grommet
      theme={theme}
      themeMode={!!userData?.user.darkTheme ? 'dark' : 'light'}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header siteBranding={staticData.site.siteMetadata.branding} />
        {(loading) && 'Loading...'}
        {(error) && `Error! ${error.message}`}

      <Box as="main" pad="medium" flex overflow="auto" background="background-back">
        {children}
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
