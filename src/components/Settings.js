import React from "react"
import { Heading, CheckBox, Box, Grid } from 'grommet'
import { StatusGood } from 'grommet-icons'
import { useMutation, gql, makeVar } from '@apollo/client'
import { useDarkTheme } from '../hooks/useUser'
import { getUser } from '../services/auth'

const Settings = () => {


  const UPDATE_USER = gql`
    mutation UpdateUser($id: ID!, $darkTheme: Boolean!) {
      updateUser(
        input: {
          where: {
            id: $id
          }
          data: {
            darkTheme: $darkTheme
          }
        },
      ) {
        user {
          id
          darkTheme
        }
      }
    }
  `

  const [updateUser, { loading, error, called }] = useMutation(UPDATE_USER);
  const { data } = useDarkTheme();
  const isDarkTheme = makeVar(!!data?.user.darkTheme)

  return (
    <>
      <Heading level="2">Settings</Heading>
      <Box>
        <Grid>
          <Heading level="3">Theme</Heading>
          <Box direction="row">
            <Box>
              <CheckBox
                label="Dark Theme"
                checked={isDarkTheme()}
                toggle={true}
                onChange={(evt) => {
                  console.log(evt.target.checked)
                  updateUser({ variables: { id: getUser().id, darkTheme: evt.target.checked }})
                }}
              />
            </Box>
            <Box pad={{left: '15px'}}>
              {loading && <p>Saving...</p>}
              {error && <p>Error! Plz try again</p>}
              {(called && !error && !loading) && <StatusGood color="status-ok"/>}
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  )
}


export default Settings
