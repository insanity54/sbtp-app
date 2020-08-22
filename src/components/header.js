import { useStaticQuery, graphql } from "gatsby"
import Link from "./Link"
import PropTypes from "prop-types"
import React from "react"
import { Header as GrommetHeader, Heading, Box } from "grommet"
import LogoImage from "./logoImage"
import UserWidget from './UserWidget/UserWidget'
import "./font.css"

const Header = ({ siteBranding, data }) => (
  <GrommetHeader background="brand" justify="start">
    <Heading margin="xxsmall">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: 'white'
          }}
          >
          <Box direction="row">
            <Box pad="xsmall" width="50px">
              <LogoImage />
            </Box>
            {siteBranding}
          </Box>
        </Link>
    </Heading>
    <UserWidget />
  </GrommetHeader>
)

Header.propTypes = {
  siteBranding: PropTypes.string,
}

Header.defaultProps = {
  siteBranding: ``,
}

export default Header
