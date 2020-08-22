import React from "react"
import { Box } from 'grommet'
import LoginButton from './LoginButton'
import { Location } from '@reach/router'
// import UserIcon from './UserIcon'

const UserWidget = () => {
  const isLoggedIn = () => {
    // @TODO Implement
    return false;
  }
  return (
    <Box>
      <Location>
      {({ location }) => {
        if (location.pathname === '/login') return
        return (isLoggedIn()) ? <p>UserIcon</p> : <LoginButton/>
      }}
      </Location>
    </Box>
  )
}




export default UserWidget
