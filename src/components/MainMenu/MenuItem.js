import React from "react"
import { Box, Text } from "grommet"
import Link from '../Link'
import PropTypes from 'prop-types'

const MenuItem = ({ label, icon, to }) => (
  <Link style={{ textDecoration: 'none' }} to={to}>
    <Box align="center" justify="center" background={{"color":"background-front"}} pad="large" round="xsmall" onClick={() => {}} hoverIndicator>
      {icon}
      <Text>
        {label}
      </Text>
    </Box>
  </Link>
)

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired
}

export default MenuItem
