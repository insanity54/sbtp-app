import React from "react"
import {
  Box,
  Heading,
} from 'grommet'
import { useQuery } from '@apollo/client'
import { getUser } from '../services/auth' // @TODO can a gql query replace this?
import GET_USER from '../operations/queries/getUser'
import AddressWrapper from '../components/AddressWrapper'
import ProfileOverview from '../components/ProfileOverview'
import { Router } from "@reach/router";


/**
 * handles the query for the user profile data
 */
const ProfileContainer = () => {
  const { loading, data } = useQuery(GET_USER, { variables: { id: getUser().id }});

  if (loading) return <Box>Loading...</Box>

  return (
    <div>

      <Heading level="2">Profile</Heading>

      <Router>
        <ProfileOverview path="/" user={data?.user} />
        <AddressWrapper path="shipping" user={data?.user} />
      </Router>
    </div>
  )
}

export default ProfileContainer
