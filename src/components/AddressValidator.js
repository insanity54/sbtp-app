import React from 'react'
import PropTypes from 'prop-types'
import useShippoValidator from '../hooks/useShippoValidator'

const AddressValidator = ({ user, onValid, onInvalid }) => {

  const { loading, error, validatedAddress } = useShippoValidator(user)

  if (loading) return <p>Loading...</p>
  if (error) {
    onInvalid(error)
    return (<p>{error}</p>)
  }
  return (
    <div>
      <p>Validated address:</p>
      {JSON.stringify(validatedAddress, null, 4)}
    </div>
  )
}

AddressValidator.propTypes = {
  user: PropTypes.object.isRequired,
  onValid: PropTypes.func.isRequired,
  onInvalid: PropTypes.func.isRequired
}

export default AddressValidator
