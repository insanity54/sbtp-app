import React from "react"
import { User } from 'grommet-icons'

import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  Paragraph,
} from 'grommet'
import { getUser } from "../services/auth"

const ProfileIdentity = () => {

  return (
    <Box pad="medium">
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
  )
}

export default ProfileIdentity
