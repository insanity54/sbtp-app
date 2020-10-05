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
import { useUpdateAddress } from '../operations/mutations/updateAddress'
import { addressMode } from '../apollo/cache'

const AddressChooser = ({ user, entered, suggested }) => {

  const { mutate: updateAddress, loading: mutationLoading, error: mutationError } = useUpdateAddress();
  const submitSuggestedAddress = async (validatedAddress) => {
    await updateAddress({
      variables: {
        id: user?.id,
        name: validatedAddress.name,
        street1: validatedAddress.street1,
        street2: validatedAddress.street2,
        city: validatedAddress.city,
        state: validatedAddress.state,
        postalCode: validatedAddress.postalCode,
        country: validatedAddress.country
      }
    })
    addressMode('display')
  }


  return (
    <Card margin="medium" pad="medium" width="large" background="background-front">
        <CardHeader>
          <Heading level="3">Address Suggestion</Heading>
          <FormLocation size="large"/>
        </CardHeader>
        <CardBody>
        <Box direction="row">
          <Box margin={{right: "3em"}} justify="start" direction="column">
            <Heading level="4">Entered Address</Heading>
            <Paragraph>
              {entered?.name}<br/>
              {entered?.street1}<br/>
              {entered?.street2 && entered?.street2}{entered?.street2 && <br/>}
              {entered?.city} {entered?.state} {entered?.postalCode}<br/>
              {entered?.country}
            </Paragraph>
            <Button secondary margin={{ right: "1em" }} label="Use Entered Address" onClick={() => { addressMode('display') }}></Button>

          </Box>

          <Box justify="start" direction="column">
            <Heading level="4">Suggested Address</Heading>
            <Paragraph>
              {suggested?.name}<br/>
              {suggested?.street1}<br/>
              {suggested?.street2 && suggested?.street2}{suggested?.street2 && <br/>}
              {suggested?.city} {suggested?.state} {suggested?.postalCode}<br/>
              {suggested?.country}
            </Paragraph>
            {mutationLoading ? <Button disabled label="loading..."></Button> : <Button primary label="Use Suggested Address" onClick={() => { submitSuggestedAddress(suggested) } }></Button>}
            {mutationError && <p>{mutationError}</p>}

          </Box>

        </Box>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

AddressChooser.propTypes = {
  user: PropTypes.object.isRequired,
  entered: PropTypes.object.isRequired,
  suggested: PropTypes.object.isRequired,
}

export default AddressChooser
