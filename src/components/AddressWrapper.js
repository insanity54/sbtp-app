import React, { useState } from 'react'
import AddressChooser from './AddressChooser'
import AddressValidator from './AddressValidator'
import AddressEditor from './AddressEditor'
import Address from './Address'
// import { Trigger as Spinner } from 'grommet-icons'



const AddressWrapper = ({ user }) => {
  const [ isEditMode, setEditMode ] = useState(false)
  const [ isChoiceNeeded, setChoiceNeeded ] = useState(false)
  const [ isValidationMode, setValidationMode ] = useState(false)
  const [ validatedAddress, setValidatedAddress ] = useState({})
  const [ error, setError ] = useState('')

  const toggleEditMode = () => {
    setEditMode(!isEditMode)
  }

  const onSaved = () => {
    setEditMode(false)
    setValidationMode(true)
  }

  const onChoice = () => {
    setChoiceNeeded(false)
  }

  const onValid = (validatedAddress) => {
    setValidationMode(false)
    setChoiceNeeded(true)
    setValidatedAddress(validatedAddress)
  }

  const onInvalid = (error) => {
    setValidationMode(false)
    setError(error)
    setChoiceNeeded(false)
    setEditMode(true)
  }



  // what we need
  //   * valid address

  // get unvalidated address
  // validate the address



  // display -> edit -> save -> choose -> save -> display
  // 0          1               2                 0

  if (isChoiceNeeded) return <AddressChooser entered={user} suggested={validatedAddress} user={user} onChoice={onChoice} />
  if (isEditMode) return <AddressEditor user={user} onCancel={toggleEditMode} onSaved={onSaved} error={error} />
  if (isValidationMode) return <AddressValidator user={user} onValid={onValid} onInvalid={onInvalid} />
  return (
    <div>
      <Address user={user} onEdit={toggleEditMode} />
    </div>
  )
}


export default AddressWrapper
