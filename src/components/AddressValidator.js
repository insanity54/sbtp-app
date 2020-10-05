import React from 'react'
import PropTypes from 'prop-types'
import useShippoValidator from '../hooks/useShippoValidator'

const AddressValidator = ({ user }) => {

  const { loading, error, validatedAddress } = useShippoValidator(user)

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return (<p></p>)
  } else {
    return (
      <div>
        <p>Validated address:</p>
        {JSON.stringify(validatedAddress, null, 4)}
      </div>
    )
  }
}

AddressValidator.propTypes = {
  user: PropTypes.object.isRequired
}

export default AddressValidator
