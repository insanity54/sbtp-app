import React, { useState } from "react"
import { Heading, Form, FormField, TextInput, Button, Box, Grid } from 'grommet'
import { FormLock, View } from "grommet-icons";
import { handleLogin } from "../services/auth"
import ThirdPartyLogins from './ThirdPartyLogins'

const Login = ({data}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [reveal, setReveal] = useState(false);
  
  return (
    <Box>
    <Heading level="2">Login</Heading>
    <Grid align="stretch">
      <ThirdPartyLogins/>
      <Box>OR</Box>
      <Box
        width="medium"
        >
        <Form onSubmit={({value}) => {}}>
          <FormField name="E-Mail" htmlfor="email-id" label="E-Mail">
            <TextInput value={email} onChange={evt => setEmail(evt.target.value)} id="email-id" name="email"/>
          </FormField>
          <FormField name="Password" htmlfor="password-id" label="Password">
            <Box
              direction="row"
              align="center"
              >
              <TextInput plain type={reveal ? "text" : "password"} id="password-id" name="password" value={password} onChange={evt => setPassword(evt.target.value)}/>
              <Button
                icon={reveal ? <FormLock size="medium" /> : <View size="medium" />}
                onClick={() => setReveal(!reveal)}
                />
            </Box>
          </FormField>
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" onClick={handleLogin}/>
          </Box>
        </Form>
      </Box>
    </Grid>
    </Box>
  )
}




export default Login
