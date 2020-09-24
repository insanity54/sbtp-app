import React from 'react'
import {
  Heading,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Paragraph
} from 'grommet'
import { FormLocation } from 'grommet-icons'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import useShippoValidator from '../hooks/useShippoValidator'
// import UPDATE_ADDRESS from '../operations/mutations/updateAddress'

const ProfileAddressValidationChooser = ({ user }) => {
  /** @todo this component shouldnt show up if the provided address is without issue **/

  // // @todo move this into it's own component
  // const [updateAddress, { loading, error, called }] = useMutation(UPDATE_ADDRESS);
  // const submitSuggestedAddress = async () => {
  //   await updateAddress({
  //     variables: {
  //       id: getUser().id,
  //       name: validatedAddress.name,
  //       street1: validatedAddress.street1,
  //       street2: validatedAddresss.street2,
  //       city: validatedAddress.city,
  //       state: validatedAddress.state,
  //       postalCode: validatedAddress.postalCode,
  //       country: validatedAddress.country
  //     }
  //   })
  //   navigate('/user/profile')
  // }

  let { name, street1, street2, city, state, postalCode, country } = user;

  const { loading, error, validatedAddress } = useShippoValidator({
    name,
    street1,
    street2,
    city,
    state,
    postalCode,
    country
  });
  if (loading) return <p>Validating Address...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <Card pad="medium" width="large" background="background-front">
        <CardHeader>
          <Heading level="3">Address Validation</Heading>
          <FormLocation size="large"/>
        </CardHeader>
        <CardBody>
        <Box direction="row">
          <Box margin={{right: "3em"}} justify="start" direction="column">
            <Heading level="4">Entered Address</Heading>
            <Paragraph>
              {user?.name}<br/>
              {user?.street1}<br/>
              {user?.street2 && user?.street2}{user?.street2 && <br/>}
              {user?.city} {user?.state} {user?.postalCode}<br/>
              {user?.country}
            </Paragraph>
            <Button secondary margin={{ right: "1em" }} label="Use Entered Address" onClick={() => navigate('/user/profile')}></Button>

          </Box>

          <Box justify="start" direction="column">
            <Heading level="4">Suggested Address</Heading>
            <Paragraph>
              {validatedAddress?.name}<br/>
              {validatedAddress?.street1}<br/>
              {validatedAddress?.street2 && validatedAddress?.street2}{validatedAddress?.street2 && <br/>}
              {validatedAddress?.city} {validatedAddress?.state} {validatedAddress?.postalCode}<br/>
              {validatedAddress?.country}
            </Paragraph>
            <Button primary label="Use Suggested Address" onClick={() => { /**saveSuggestedAddress*/ }}></Button>

          </Box>

        </Box>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

ProfileAddressValidationChooser.propTypes = {
  user: PropTypes.object
}

export default ProfileAddressValidationChooser
