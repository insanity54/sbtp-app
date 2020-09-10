import React from "react"
import { Box, Image } from 'grommet'
import Link from '../Link'

const UserWidget = () => {


  return (
    <Box>
      <Link to="/user/profile">
        <Image src="https://placekitten.com/50/50" style={{ borderRadius: '50%', width: '75%' }} />
      </Link>
    </Box>
  )
}





export default UserWidget
