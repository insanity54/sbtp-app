import React from "react"
import { User, Deliver, Save } from 'grommet-icons'
  // Schedules, User, Deliver } from "grommet-icons";
import {
  Heading,
  Box,
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Form,
  FormField,
  TextInput,
  Button,
  DateInput,
  Paragraph
} from 'grommet'
import { useQuery, gql } from '@apollo/client'
import { getUser } from "../services/auth"






// const GET_PROFILE = gql`
//   query GetProfile ($id: ID!) {
//     user (id: $id) {
//       id
//       email
//       username
//       birthday
//       specialDay
//       mailingName
//       mailingCompany
//       mailingAddress1
//       mailingAddress2
//       mailingCity
//       mailingState
//       mailingPostalCode
//       mailingCountry
//     }
//   }
// `

const GET_USER = gql`
  query GetUser ($id: ID!) {
    user (id: $id) @client {
      mailingName
    }
  }
`



const Profile = ({ client }) => {
  const [value, setValue] = React.useState('');

  const { data } = useQuery(GET_USER, { variables: { id: getUser().id }});

  // @TODO enforce birthday > 13 y/o
  // const birthday = makeVar(data?.user.birthday || new Date().toISOString());
  // const specialDay = makeVar(data?.user.specialDay || new Date().toISOString());
  // const mailingName = makeVar(data?.user.mailingName)
  // const mailingCompany = makeVar(data?.user.mailingCompany || '')
  // const mailingAddress1 = makeVar(data?.user.mailingAddress1 || '')
  // const mailingAddress2 = makeVar(data?.user.mailingAddress2 || '')
  // const mailingCity = makeVar(data?.user.mailingCity || '')
  // const mailingState = makeVar(data?.user.mailingState || '')
  // const mailingPostalCode = makeVar(data?.user.mailingPostalCode || '')
  // const mailingCountry = makeVar(data?.user.mailingCountry || '')

  // console.log(client)

  return (
    <Box pad="medium">
      <Heading level="2">Profile</Heading>
      <Box pad="medium">
        <p>(profile.js) getUser {getUser().username} ID {getUser().id}</p>

        <Paragraph>

        </Paragraph>
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
            <Form onSubmit={({value}) => {}}>
              <Box pad={{bottom: "medium"}}>
                <FormField name="birthday" htmlfor="birthday-id" label="Birthday">
                  <DateInput format="mm/dd/yyyy"
                    value={value}
                    onChange={(evt) => {
                      setValue(evt.target.value)
                    }}
                  />
                </FormField>
              </Box>
            </Form>
          </CardBody>
          <CardFooter pad={{horizontal: "small"}}>
            <Box pad="small" direction="row">
              {getUser().username}
            </Box>
          </CardFooter>
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
            <FormField name="name" htmlfor="name" label="Name">
              <TextInput
                id="name"
                value={value}
                onChange={evt => {
                  setValue(evt.target.value)
                }}
              />
            </FormField>
          </Box>
          {/**
          <Box>
            <FormField name="company" htmlfor="organization" label="Company">
              <TextInput
                id="organization"
                value={mailingCompany()}
                onChange={evt => mailingCompany(evt.target.value)}
              />
            </FormField>
          </Box>
          <Box>
            <FormField name="addressOne" htmlfor="address-line1" label="Address1">
              <TextInput
                id="address-line1"
                value={mailingAddress1()}
                onChange={evt => mailingAddress1(evt.target.value)}
              />
            </FormField>
          </Box>
          <Box>
            <FormField name="addressTwo" htmlfor="address-line2" label="Address2">
              <TextInput
                id="address-line2"
                value={mailingAddress2()}
                onChange={evt => mailingAddress2(evt.target.value)}
              />
            </FormField>
          </Box>
          <Box>
            <FormField name="city" htmlfor="city" label="City">
              <TextInput
                id="city"
                value={mailingCity()}
                onChange={evt => mailingCity(evt.target.value)}
              />
            </FormField>
          </Box>
          <Box>
            <FormField name="address-level1" htmlfor="address-level1" label="State">
              <TextInput
                id="address-level1"
                value={mailingState()}
                onChange={evt => {
                  console.log(evt.target);
                  mailingState(evt.target.value)
                }}
              />
            </FormField>
          </Box>
          <Box>
            <FormField name="postal-code" htmlfor="postal-code" label="Postal Code">
              <TextInput
                id="postal-code"
                value={mailingPostalCode()}
                onChange={evt => mailingPostalCode(evt.target.value)}
              />
            </FormField>
          </Box>
          <Box>
            <FormField name="country-name" htmlfor="country-name" label="Country">
              <TextInput
                id="country-name"
                value={mailingCountry()}
                onChange={evt => mailingCountry(evt.target.value)}
              />
            </FormField>
          </Box>
        </CardBody>
        <CardFooter
          pad={{horizontal: "medium"}}>
          <Paragraph>SBTP will send your merch and prizes here.</Paragraph>
        </CardFooter>
      </Card>
      </Box>

      <Box pad="medium">
        <Card height="medium" width="large" background="background-front">
          <CardHeader pad="medium">
            <Heading level="3">Special Dates</Heading>
            <Schedules size="large"/>
          </CardHeader>
          <CardBody pad="medium">

            <Form>
              <FormField name="special-day" htmlfor="special-day-id" label="Holiday (ex: Waifu's birthday)">
                <DateInput format="mm/dd/yyyy"
                  value={specialDay()}
                  onChange={evt => specialDay(evt.value) }
                />
              </FormField>
            </Form>
            */ }
          </CardBody>
          <CardFooter
            pad={{horizontal: "medium"}}>
            <Paragraph>Receive a gift on your special day</Paragraph>
          </CardFooter>
        </Card>
      </Box>
      <Box direction="row" pad="medium">
        <Button type="submit" primary icon={<Save/>} label="Save" />
      </Box>
      <Box pad={{vertical: "xlarge"}}>
        { /* this box is here to give vertical room to the calendar picker */ }
      </Box>
    </Box>
  )
}




export default Profile
