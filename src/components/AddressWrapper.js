import React from 'react'
import AddressEditor from './AddressEditor'
import AddressChooser from './AddressChooser'
import Address from './Address'
import { addressMode, isAddressValid, addressError, enteredAddress, suggestedAddress } from '../apollo/cache'

const AddressWrapper = ({ user }) => {










  return (
    <div>
      {addressMode() === 'display' && <Address user={user} onEdit={() => { addressMode('edit') }} />}
      {addressMode() === 'edit' && <AddressEditor user={user} />}
      {addressMode() === 'choose' && <AddressChooser entered={enteredAddress()} suggested={suggestedAddress()} user={user} />}
    </div>
  )
}


export default AddressWrapper
