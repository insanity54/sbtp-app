import React from 'react'
import Link from '../Link'
import Image from 'gatsby-image'
import { Box } from 'grommet'


const UserIcon = ({ data }) => (
    <Box>
      <Link to="/myUserData">
        <Image fluid={data.placeholderImage.childImageSharp.fixed} />
      </Link>
    </Box>
)

export default UserIcon
