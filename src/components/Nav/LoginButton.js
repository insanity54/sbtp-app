import React from "react"
import { Button, Box } from 'grommet'
import { navigate } from 'gatsby'

const Login = () => (
    <Box>
      <Button primary onClick={doLogin} label="Login" a11yTitle="Login Button"></Button>
    </Box>
)

const doLogin = () => {
  navigate('/user/login')
}

export default Login
