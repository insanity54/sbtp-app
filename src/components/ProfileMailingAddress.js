import React, { useState } from "react"
import { Deliver, Edit } from 'grommet-icons'
import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  FormField,
  Paragraph,
  TextInput,
  Button,
  Stack
} from 'grommet'
import { mailingNameVar } from '../apollo/cache'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

const ProfileMailingAddress = ({ user }) => {
  const [name, setName] = useState(user.mailingName)

  const nameValidator = (fieldValue, value) => {

    console.log(fieldValue)
    console.log(value)
    return true
  }

  return (
    <Box pad="medium">
      <Card width="large" background="background-front">
        <CardHeader pad="medium">
          <Heading level="3">Shipping Address</Heading>
          <Deliver size="large"/>
        </CardHeader>
        <CardBody pad="medium">
          <Heading margin="none" pad="none" level="4">Name</Heading>
          <Paragraph pad="medium">{name}</Paragraph>
          <Box justify="start" direction="row">
            <Box style={{width: '50%'}}>
              <Heading margin="none" pad="none" level="4">Street Address 1</Heading>
              <Paragraph>@TODO</Paragraph>
            </Box>
            <Box>
              <Heading margin="none" pad="none" level="4">Street Address 2</Heading>
              <Paragraph>@TODO</Paragraph>
            </Box>
          </Box>
          <Box justify="between" direction="row">
            <Box style={{ width: '50%' }}>
              <Heading margin="none" pad="none" level="4">City</Heading>
              <Paragraph>@TODO</Paragraph>
            </Box>
            <Box style={{ width: '10%' }}>
              <Heading margin="none" pad="none" level="4">State</Heading>
              <Paragraph>@TODO</Paragraph>
            </Box>
            <Box style={{ width: '30%' }}>
              <Heading margin="none" pad="none" level="4">ZIP</Heading>
              <Paragraph>@TODO</Paragraph>
            </Box>
          </Box>
          <Button default alignSelf="end" icon={<Edit/>} label="Edit" onClick={() => navigate('/user/profile/shipping')}></Button>

        </CardBody>

      </Card>
    </Box>
  )
}



ProfileMailingAddress.propTypes = {
  user: PropTypes.object
}

export default ProfileMailingAddress
