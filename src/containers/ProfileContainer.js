import React from "react"
import {
  Box,
  Heading,
} from 'grommet'
import { useQuery, useMutation } from '@apollo/client'
import { getUser } from '../services/auth' // @TODO can a gql query replace this?
import UPDATE_NAME from '../operations/mutations/updateName'
import GET_NAME from '../operations/queries/getName'
import ProfileMailingAddress from '../components/ProfileMailingAddress'
import ProfileEditMailingAddress from '../components/ProfileEditMailingAddress'
import ProfileIdentity from '../components/ProfileIdentity'
import ProfileSpecialDates from '../components/ProfileSpecialDates'
import ProfileOverview from '../components/ProfileOverview'
import { Router } from "@reach/router";


/**
 * handles the query for the user profile data
 */
const ProfileContainer = () => {
  const { loading, data, client } = useQuery(GET_NAME, { variables: { id: getUser().id }});

  const [updateName] = useMutation(UPDATE_NAME, {
    update(cache, { data: { updateName } }) {
      cache.modify({
        fields: {
          mailingName(mailingName = 'default name') {
            return mailingName
          }
        }
      })
    }
  })


  if (loading) return <Box>Loading...</Box>

  return (
    <div>

      <Heading level="2">Profile</Heading>
      <Box>
        <h3>Apollo State</h3>
        <pre>
          {
            JSON.stringify(client.cache.extract(), null, 4)
          }
        </pre>
      </Box>
      <Router>
        <ProfileOverview path="/" user={data?.user} />
        <ProfileEditMailingAddress path="shipping" user={data?.user} />
      </Router>
    </div>
  )
}

export default ProfileContainer
