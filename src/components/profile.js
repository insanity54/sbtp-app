import React, { useState } from "react"
import { User, Deliver, Save } from 'grommet-icons'
  // Schedules, User, Deliver } from "grommet-icons";
import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormField,
  Button,
  Paragraph,
  TextInput,
} from 'grommet'
import { getUser } from "../services/auth"
import { mailingNameVar } from '../apollo/cache'
import { string } from 'yup'


const Profile = () => {
  const [name, setName] = useState('default')


  const nameValidator = (fieldValue, value) => {
    console.log(fieldValue)
    console.log(value)
    return true
  }


  return (
    <Box pad="medium">
      <Form
        onSubmit={onSubmit}
        validate="blur"
      >
        <Heading level="2">Profile</Heading>
        <Box pad="medium">
            <Box pad="medium" border={{ color: 'brand', size: 'large' }}>
              {(loading) && 'loading...'}
              <h3>Apollo State</h3>
              <pre>
                {
                  JSON.stringify(client.cache.extract(), null, 4)
                }
              </pre>
            </Box>


          <Card
            height="medium"
            width="large"
            background="background-front"
          >
            <CardHeader pad="medium">
              <Heading level="3">Identity</Heading>
              <User size="large"/>
            </CardHeader>
            <CardBody pad={{horizontal: "medium"}}>
              <Box pad="small" direction="column">
                <Paragraph>{getUser().username}</Paragraph>
                <Paragraph>{getUser().email}</Paragraph>
              </Box>
            </CardBody>
          </Card>
        </Box>

        <Box pad="medium">
          <Card width="large" background="background-front">
            <CardHeader pad={{horizontal: "medium"}}>
              <Heading level="3">Mailing Address</Heading>
              <Deliver size="large"/>
            </CardHeader>
            <CardBody pad="medium">
              <Box>
                <FormField name="name" htmlfor="name" label="Name" validate={nameValidator}>
                  <TextInput
                    id="name"
                    value={name}
                    onChange={(evt) => {
                      setName(evt.target.value)
                    }}
                  />

                </FormField>
                <p>{data?.user.mailingName}</p>
                <p>{name}</p>
              </Box>
            </CardBody>

          </Card>
        </Box>

        <Box direction="row" pad="medium">
          <Button type="submit" primary icon={<Save/>} label="Save" onClick={() => {
            updateName({ variables: { id: getUser().id, mailingName: name }})
          }}/>
        </Box>
        <Box pad={{vertical: "xlarge"}}>
          { /* this box is here to give vertical room to the calendar picker */ }
        </Box>
      </Form>
    </Box>
  )
}




export default Profile
