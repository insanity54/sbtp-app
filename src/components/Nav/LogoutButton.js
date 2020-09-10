import React from "react"
import { Button, Box } from 'grommet'
import { navigate } from 'gatsby'
import { logout } from '../../services/auth'

const LogoutButton = () => (
    <Box>
      <Button secondary onClick={doLogout} label="Logout" a11yTitle="Logout Button"></Button>
    </Box>
)

const doLogout = () => {
  logout(() => {
    navigate('/user/login')
  })
}

export default LogoutButton
