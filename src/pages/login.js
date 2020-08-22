import React, { useState } from "react"
import {Heading, Form, FormField, TextInput, Button, Box} from 'grommet'
import { FormLock, View } from "grommet-icons";


import Layout from "../components/layout"
import SEO from "../components/seo"

const LoginPage = ({data}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [reveal, setReveal] = useState(false);
  return (
    <Layout>

    <SEO title="Login"/>
    <Heading level="2">Login</Heading>

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
          <Button type="submit" primary label="Submit"/>
        </Box>
      </Form>
    </Box>

  </Layout>)
}




export default LoginPage
