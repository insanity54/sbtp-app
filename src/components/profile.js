import React from "react"
import { Heading, Box, Card, CardFooter, CardHeader, CardBody } from 'grommet'
import { getUser } from "../services/auth"

const Profile = ({data}) => (
  <Box>
    <Heading level="2">Profile</Heading>
    <Card  height="small" width="small" background="light-1">
        <CardHeader pad="medium">{getUser().name}</CardHeader>
        <CardBody pad="medium">{getUser().email}</CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
        </CardFooter>
    </Card>
  </Box>
)





export default Profile
