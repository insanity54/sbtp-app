import React from "react"
import { Deliver, Edit } from 'grommet-icons'
import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Paragraph,
  Button,
} from 'grommet'
import PropTypes from 'prop-types'

const Address = ({ user, onEdit }) => {

  return (
    <Box pad="medium">
      <Card width="large" background="background-front">
        <CardHeader pad="medium">
          <Heading level="3">Shipping Address</Heading>
          <Deliver size="large"/>
        </CardHeader>
        <CardBody pad="medium">
          <Heading margin="none" pad="none" level="4">Name</Heading>
          <Paragraph pad="medium">{user?.name}</Paragraph>
          <Box justify="start" direction="row">
            <Box style={{width: '50%'}}>
              <Heading margin="none" pad="none" level="4">Street Address 1</Heading>
              <Paragraph>{user?.street1}</Paragraph>
            </Box>
            <Box>
              <Heading margin="none" pad="none" level="4">Street Address 2</Heading>
              <Paragraph>{user?.street2}</Paragraph>
            </Box>
          </Box>
          <Box justify="between" direction="row">
            <Box style={{ width: '50%' }}>
              <Heading margin="none" pad="none" level="4">City</Heading>
              <Paragraph>{user?.city}</Paragraph>
            </Box>
            <Box style={{ width: '10%' }}>
              <Heading margin="none" pad="none" level="4">State</Heading>
              <Paragraph>{user?.state}</Paragraph>
            </Box>
            <Box style={{ width: '30%' }}>
              <Heading margin="none" pad="none" level="4">ZIP</Heading>
              <Paragraph>{user?.postalCode}</Paragraph>
            </Box>
            <Box>
              <Heading margin="none" pad="none" level="4">Country</Heading>
              <Paragraph>{user?.country}</Paragraph>
            </Box>
          </Box>
          <Button default alignSelf="end" icon={<Edit/>} label="Edit" onClick={onEdit}></Button>

        </CardBody>
        <CardFooter pad="medium">
          <span>Your prizes and products will be shipped to this address.</span>
        </CardFooter>
      </Card>
    </Box>
  )
}



Address.propTypes = {
  user: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Address
