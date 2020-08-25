import React from "react"
import { Button, Box } from 'grommet'
import { navigate } from 'gatsby'

const LogoutButton = () => (
    <Box>
      <Button secondary onClick={doLogout} label="Logout" a11yTitle="Logout Button"></Button>
    </Box>
)

const doLogout = () => {
  navigate('/user/login')
}

export default LogoutButton
